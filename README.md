# PruebaImagineApps - Sharepoint y REACT
Este proyecto consiste en una aplicación web desarrollada con React. Su objetivo es simular la gestión de una lista de tareas y está estructurada para integrarse con SharePoint Online mediante la API REST y autenticación con MSAL. De antemano, pido disculpas, pues mi usuario de Azure no fue posible autenticarlo para el paso 3 satisfactoriamente.

---

## Instalación y uso

1. Por favor descargue el siguiente repositorio:
https://github.com/JulianPineda369/PruebaImagineApps.git
cd PruebaImagineApps
2. Instale las dependencias:
npm install
3. Ejecute la aplicación:
npm start

La aplicación se ejecutará A MODO DE PRUEBA en [http://localhost:3000](http://localhost:3000).

---

## Evidencias (Parte 2)

- El código fuente está disponible en este repositorio, con todos los componentes necesarios.
- Se anexan enlistadas en orden las capturas de pantalla para evidenciar el proceso paso a paso en el Github.

---

## Integración con SharePoint (Parte 3)

### Conexión e integración técnica

- El componente principal (src/components/TareasTable.js) implementa la estructura necesaria para consumir la API REST de SharePoint con autenticación.
- La obtención de tareas y la actualización de su estado requieren autenticación mediante MSAL y la obtención de un token válido con el scope https://udistritaleduco.sharepoint.com/.default.
- Las llamadas a la API usan endpoints como:
https://udistritaleduco.sharepoint.com/sites/Prueba_Imagine_Apps/_api/web/lists/getbytitle('Tareas')/items
- Los métodos de autenticación y conexión están preparados en el código pero pueden estar inactivos o no funcionar por falta de permisos administrativos para registrar aplicaciones en Azure AD.

### Documentación sobre autenticación

La autenticación está planificada usando @azure/msal-react y @azure/msal-browser. El proceso base es:

1. Inicio de sesión del usuario mediante MSAL.
2. Solicitud de token de acceso para SharePoint Online.
3. Uso del token en las cabeceras HTTP de las peticiones a la API REST de SharePoint y actualización dinámica de la UI.

Actualmente, la variable Cliente necesaria para la autenticación se deja comentada, dado que no es posible registrar aplicaciones ni obtener credenciales adecuadas por restricciones institucionales.

---
## NOTA:
No se pudo completar la integración real con SharePoint Online debido a restricciones administrativas fuera del alcance del desarrollador (falta de permisos en Azure AD para registrar aplicaciones y obtener un Client ID válido).  
El código fuente se entrega preparado para habilitar esta funcionalidad una vez se disponga de dichos permisos.

---

## Autor

Julian Pineda

---
