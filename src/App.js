import React from 'react';
import { useMsal } from '@azure/msal-react';
import TareasTable from './components/TareasTable';
import './App.css';

function App() {
  const { instance, accounts } = useMsal();

  const isAuthenticated = accounts.length > 0;

  const handleLogin = () => {
    instance.loginPopup({
      scopes: ["https://udistritaleduco.sharepoint.com/.default"], // Scope-SharePoint
    }).catch(e => {
      console.error(e);
      alert("Error en el login");
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().catch(e => {
      console.error(e);
      alert("Error al cerrar sesión");
    });
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Lista de Tareas</h1>

      {!isAuthenticated ? (
        <>
          <p>Por favor, inicia sesión para acceder a las tareas.</p>
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </>
      ) : (
        <>
          <button onClick={handleLogout} style={{ marginBottom: "10px" }}>Cerrar Sesión</button>
          <TareasTable />
        </>
      )}
    </div>
  );
}

export default App;