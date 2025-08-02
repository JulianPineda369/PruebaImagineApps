import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { PublicClientApplication } from '@azure/msal-browser';
// import { MsalProvider } from '@azure/msal-react';

/*
const msalConfig = {
  auth: {
    clientId: "Cliente", // NOTA: No tengo permisos para registrar Apps en Azure AD fuera del correo de mi empresa :(
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
    */}
    <App />
  </React.StrictMode>
);