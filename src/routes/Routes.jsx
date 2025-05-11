import { Routes, Route } from 'react-router-dom';
import IniciarSesion from '../pages/IniciarSesion';
import Registro from '../pages/Registro';
import PaginaPrincipal from '../pages/PaginaPrincipal';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicio" element={<IniciarSesion />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/pagina-principal" element={<PaginaPrincipal />} />
     
    </Routes>
  );
}

export default AppRoutes;
