// context/SessionProvider.js
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de sesión
const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para iniciar sesión
  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (response.ok) {
        setSession(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error en la autenticación");
    } finally {
      setLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{ session, login, logout, loading, error }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook para acceder al contexto
export const useSession = () => {
  return useContext(SessionContext);
};