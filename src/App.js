import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import HomeAdmin from "./components/pages/HomeAdmin";
import CreateUser from "./components/pages/CreateUser";
import MyProfileAdmin from "./components/pages/MyProfileAdmin";
import ManageUsers from "./components/pages/ManageUsers";
import EditUser from "./components/pages/EditUser";
import CreatePredio from "./components/pages/CreatePredio";
import ManagePredio from "./components/pages/ManagePredio";
import EditPredio from "./components/pages/EditPredio";
import FechaPagoDcto from "./components/pages/FechaPagoDcto";
import HomeUserExt from "./components/pages/HomeUserExt";
import MyProfile from "./components/pages/MyProfile";
import AsociarPredios from "./components/pages/AsociarPredios";
import PagarImpuestos from "./components/pages/PagarImpuestos";
import Convenio from "./components/pages/Convenio";
import EjecutarAlgoritmo from "./components/pages/EjecutarAlgoritmo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Fuera del Sistema */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Fin - Fuera del Sistema */}

        {/* Administrador */}
        <Route path="/home-admin" element={<HomeAdmin tipo="admin" />} />  {/* Home - Admin */}
        <Route path="/home-admin/my-profile" element={<MyProfileAdmin tipo="admin" />} />  {/* Mi Perfil - Admin */}
        <Route path="/home-admin/create-user" element={<CreateUser />} />  {/* Crear Usuario - Admin */}
        <Route path="/home-admin/manage-users" element={<ManageUsers />} />  {/* Gestionar Usuarios - Admin */}
        <Route path="/home-admin/manage-users/edit" element={<EditUser />} />  {/* Editar Usuariop - Admin */}
        <Route path="/home-admin/create-predio" element={<CreatePredio tipo="admin" />} />  {/* Crear Predio - Admin */}
        <Route path="/home-admin/manage-predio" element={<ManagePredio tipo="admin" />} />  {/* Gestionar Predios - Admin */}
        <Route path="/home-admin/manage-predio/edit" element={<EditPredio tipo="admin" />} />  {/* Editar Predio - Admin */}
        <Route path="/home-admin/manage-predio/fecha-pago-descuentos" element={<FechaPagoDcto tipo="admin" />} />  {/* Definir Fechas de Pago / Dctos - Admin */}
        <Route path="/home-admin/manage-predio/ejecutar-algoritmos" element={<EjecutarAlgoritmo tipo="admin" />} /> {/* Ejecutar Algoritmos - Admin */}
        {/* Fin - Administrador */}

        {/* Usuario Interno */}
        <Route path="/home-user-int" element={<HomeAdmin />} />  {/* Home - Usuario Interno */}
        <Route path="/home-user-int/my-profile" element={<MyProfileAdmin />} />  {/* Mi Perfil - Usuario Interno */}
        <Route path="/home-user-int/create-predio" element={<CreatePredio />} />  {/* Crear Predio - Usaurio Interno */}
        <Route path="/home-user-int/manage-predio" element={<ManagePredio />} />  {/* Gestionar Predios - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/edit" element={<EditPredio />} />  {/* Editar Predio - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/fecha-pago-descuentos" element={<FechaPagoDcto />} />  {/* Definir Fechas de Pago / Dctos - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/ejecutar-algoritmos" element={<EjecutarAlgoritmo />} />  {/* Ejecutar Algoritmos - Usuario Interno */}
        {/* Fin - Usuario Interno */}

        {/* Usuario Externo */}
        <Route path="/home-user-ext" element={<HomeUserExt />} />
        <Route path="/home-user-ext/profile" element={<MyProfile />} />
        <Route path="/home-user-ext/asociar-predios" element={<AsociarPredios />} />
        <Route path="/home-user-ext/convenio" element={<Convenio />} />
        <Route path="/home-user-ext/pagar" element={<PagarImpuestos />} />
        {/* Fin - Usuario Externo */}
      </Routes>
    </Router>
  );
}

export default App;
