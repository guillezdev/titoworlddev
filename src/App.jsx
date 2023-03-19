import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import ClientRegistryPage from './pages/ClientRegistryPage/ClientRegistryPage';
import EstablishmentRegistryPage from './pages/EstablishmentRegistryPage/EstablishmentRegistryPage';

const router = createBrowserRouter([
  { path: '/', element: <LoginPage /> },
  { path: 'registry/client', element: <ClientRegistryPage /> },
  { path: '/registry/establishment', element: <EstablishmentRegistryPage /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
