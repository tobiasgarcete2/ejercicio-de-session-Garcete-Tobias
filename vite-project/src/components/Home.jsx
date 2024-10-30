// components/Home.js
import React from 'react';
import useSession from '../hooks/UseSession';

const Home = () => {
  const { session, logout } = useSession();

  return (
    <div>
      <h1>Bienvenido, {session?.name}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default Home;