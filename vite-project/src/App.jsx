// App.js
import React from 'react';
import { SessionProvider, useSession } from './context/SessionProvider';
import Login from '../src/components/Login'; // Asegúrate de que la ruta es correcta
import Home from './components/Home'; // Asegúrate de que la ruta es correcta

const App = () => {
  const { session } = useSession();

  return (
    <SessionProvider>
      {session ? <Home /> : <Login />}
    </SessionProvider>
  );
};

export default App;
