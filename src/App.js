import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SystemOutPage from "./components/pages/SystemOutPage";
import AdminUserIntPage from "./components/pages/AdminUserIntPage";
import UserExtPage from "./components/pages/UserExtPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Fuera del Sistema */}
        <Route exact path="/" element={<SystemOutPage page="landingPage" />} />
        <Route path="/login" element={<SystemOutPage page="login" />} />
        <Route path="/register" element={<SystemOutPage page="register" />} />
        <Route path="/forgot-password" element={<SystemOutPage page="forgotPassword" />} />
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
        {/* <Route path="/home-admin/manage-predio/fecha-pago-descuentos" element={<AdminUserIntPage tipo="admin" page="fechaPagoDcto" />} />  Definir Fechas de Pago / Dctos - Admin */}
        <Route path="/home-admin/manage-predio/ejecutar-algoritmos" element={<AdminUserIntPage tipo="admin" page="algoritmos" />} /> {/* Ejecutar Algoritmos - Admin */}
        {/* Fin - Administrador */}

        {/* Usuario Interno */}
        <Route path="/home-user-int" element={<AdminUserIntPage page="home" />} />  {/* Home - Usuario Interno */}
        <Route path="/home-user-int/my-profile" element={<AdminUserIntPage page="myProfile" />} />  {/* Mi Perfil - Usuario Interno */}
        <Route path="/home-user-int/create-predio" element={<AdminUserIntPage page="createPredio" />} />  {/* Crear Predio - Usaurio Interno */}
        <Route path="/home-user-int/manage-predio" element={<AdminUserIntPage page="managePredio" />} />  {/* Gestionar Predios - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/edit" element={<AdminUserIntPage page="editPredio" />} />  {/* Editar Predio - Usuario Interno */}
        {/* <Route path="/home-user-int/manage-predio/fecha-pago-descuentos" element={<AdminUserIntPage page="fechaPagoDcto" />} />  Definir Fechas de Pago / Dctos - Usuario Interno */}
        <Route path="/home-user-int/manage-predio/ejecutar-algoritmos" element={<AdminUserIntPage page="algoritmos" />} />  {/* Ejecutar Algoritmos - Usuario Interno */}
        {/* Fin - Usuario Interno */}

        {/* Usuario Externo */}
        <Route path="/home-user-ext" element={<UserExtPage page="home" />} />
        <Route path="/home-user-ext/my-profile" element={<UserExtPage page="myProfile" />} />
        <Route path="/home-user-ext/pagar" element={<UserExtPage page="pagar" />} />
        <Route path="/home-user-ext/asociar-predios" element={<UserExtPage page="asociarPredios" />} />
        <Route path="/home-user-ext/convenio" element={<UserExtPage page="convenio" />} />
        {/* Fin - Usuario Externo */}
      </Routes>
    </Router>
  );
}

export default App;
