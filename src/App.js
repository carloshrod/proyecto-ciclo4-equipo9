import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import AdminUserIntPage from "./components/pages/AdminUserIntPage";
import HomeUserExt from "./components/pages/HomeUserExt";
import MyProfile from "./components/pages/MyProfile";
import AsociarPredios from "./components/pages/AsociarPredios";
import PagarImpuestos from "./components/pages/PagarImpuestos";
import Convenio from "./components/pages/Convenio";

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
        <Route path="/home-admin" element={<AdminUserIntPage tipo="admin" page="home" />} />  {/* Home - Admin */}
        <Route path="/home-admin/my-profile" element={<AdminUserIntPage tipo="admin" page="myProfile" />} />  {/* Mi Perfil - Admin */}
        <Route path="/home-admin/create-user" element={<AdminUserIntPage tipo="admin" page="createUser" />} />  {/* Crear Usuario - Admin */}
        <Route path="/home-admin/manage-users" element={<AdminUserIntPage tipo="admin" page="manageUsers" />} />  {/* Gestionar Usuarios - Admin */}
        <Route path="/home-admin/manage-users/edit" element={<AdminUserIntPage tipo="admin" page="editUser" />} />  {/* Editar Usuariop - Admin */}
        <Route path="/home-admin/create-predio" element={<AdminUserIntPage tipo="admin" page="createPredio" />} />  {/* Crear Predio - Admin */}
        <Route path="/home-admin/manage-predio" element={<AdminUserIntPage tipo="admin" page="managePredio" />} />  {/* Gestionar Predios - Admin */}
        <Route path="/home-admin/manage-predio/edit" element={<AdminUserIntPage tipo="admin" page="editPredio" />} />  {/* Editar Predio - Admin */}
        <Route path="/home-admin/manage-predio/fecha-pago-descuentos" element={<AdminUserIntPage tipo="admin" page="fechaPagoDcto" />} />  {/* Definir Fechas de Pago / Dctos - Admin */}
        <Route path="/home-admin/manage-predio/ejecutar-algoritmos" element={<AdminUserIntPage tipo="admin" page="algoritmos" />} /> {/* Ejecutar Algoritmos - Admin */}
        {/* Fin - Administrador */}

        {/* Usuario Interno */}
        <Route path="/home-user-int" element={<AdminUserIntPage page="home" />} />  {/* Home - Usuario Interno */}
        <Route path="/home-user-int/my-profile" element={<AdminUserIntPage page="myProfile" />} />  {/* Mi Perfil - Usuario Interno */}
        <Route path="/home-user-int/create-predio" element={<AdminUserIntPage page="createPredio" />} />  {/* Crear Predio - Usaurio Interno */}
        <Route path="/home-user-int/manage-predio" element={<AdminUserIntPage page="managePredio" />} />  {/* Gestionar Predios - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/edit" element={<AdminUserIntPage page="editPredio" />} />  {/* Editar Predio - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/fecha-pago-descuentos" element={<AdminUserIntPage page="fechaPagoDcto" />} />  {/* Definir Fechas de Pago / Dctos - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/ejecutar-algoritmos" element={<AdminUserIntPage page="algoritmos" />} />  {/* Ejecutar Algoritmos - Usuario Interno */}
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
