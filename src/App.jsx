import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';

const router = createBrowserRouter([
  { path: '/', element: <LoginPage /> }
  // { path: '/registry/client', element: <ClientRegistryPage /> },
  // { path: '/registry/establishment', element: <EstablishmentRegistryPage /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
