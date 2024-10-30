// hooks/useSession.js
import { useContext } from 'react';
import { SessionContext } from '../context/SessionProvider';

const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession debe ser usado dentro de un SessionProvider");
  }
  return context;
};

export default useSession;