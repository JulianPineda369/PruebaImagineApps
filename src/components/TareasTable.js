import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMsal, useAccount } from '@azure/msal-react';

const SITE_URL = "https://udistritaleduco.sharepoint.com/sites/Prueba_Imagine_Apps";
const SHAREPOINT_SCOPE = "https://udistritaleduco.sharepoint.com/.default";
const LIST_ITEMS_ENDPOINT = ${SITE_URL}/_api/web/lists/getbytitle('Tareas')/items;

function TareasTable() {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAccessToken = async () => {
    try {
      const response = await instance.acquireTokenSilent({
        scopes: [SHAREPOINT_SCOPE],
        account: account,
      });
      return response.accessToken;
    } catch {
      const response = await instance.acquireTokenPopup({
        scopes: [SHAREPOINT_SCOPE],
        account: account,
      });
      return response.accessToken;
    }
  };

  const cargarTareas = async () => {
    if (!account) return;
    try {
      const token = await getAccessToken();
      const response = await axios.get(LIST_ITEMS_ENDPOINT, {
        headers: {
          Authorization: Bearer ${token},
          Accept: "application/json;odata=verbose",
        },
      });
      setTareas(response.data.d.results);
    } catch (error) {
      console.error("Error al cargar tareas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarTareas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  if (loading) return <div>Cargando...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Estado</th>
          <th>Fecha de Creación</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea) => (
          <tr key={tarea.Id}>
            <td>{tarea.Title}</td>
            <td>{tarea.Estado}</td>
            <td>{tarea.FechaDeCreacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TareasTable;