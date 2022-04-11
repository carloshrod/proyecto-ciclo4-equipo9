import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./MyStyles.css";
import SystemOutPage from "./pages/SystemOutPage";
import AdminPage from "./pages/AdminPage";
import UserExtPage from "./pages/UserExtPage";
import Error404 from "./components/Error404";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Fuera del Sistema */}
          <Route exact path="/" element={<SystemOutPage page="landingPage" />} />
          <Route path="/login" element={<SystemOutPage page="login" />} />
          <Route path="/register" element={<SystemOutPage page="register" />} />
          <Route path="/reset-password" element={<SystemOutPage page="resetPassword" />} />
          <Route path="/reset-password/:token" element={<SystemOutPage page="newPassword" />} />
          {/* Fin - Fuera del Sistema */}

          {/* Administrador */}
          <Route path="/admin/dashboard" element={<AdminPage tipo="admin" page="home" />} />  {/* Home - Admin */}
          <Route path="/admin/my-profile" element={<AdminPage tipo="admin" page="myProfile" />} />  {/* Mi Perfil - Admin */}
          <Route path="/admin/create-user" element={<AdminPage tipo="admin" page="createUser" />} />  {/* Crear Usuario - Admin */}
          <Route path="/admin/manage-users" element={<AdminPage tipo="admin" page="manageUsers" />} />  {/* Gestionar Usuarios - Admin */}
          <Route path="/admin/manage-users/edit" element={<AdminPage tipo="admin" page="editUser" />} />  {/* Editar Usuariop - Admin */}
          <Route path="/admin/create-predio" element={<AdminPage tipo="admin" page="createPredio" />} />  {/* Crear Predio - Admin */}
          <Route path="/admin/manage-predios" element={<AdminPage tipo="admin" page="managePredio" />} />  {/* Gestionar Predios - Admin */}
          <Route path="/admin/manage-predios/edit" element={<AdminPage tipo="admin" page="editPredio" />} />  {/* Editar Predio - Admin */}
          <Route path="/admin/manage-predio/ejecutar-algoritmos" element={<AdminPage tipo="admin" page="algoritmos" />} /> {/* Ejecutar Algoritmos - Admin */}
          {/* Fin - Administrador */}

          {/* Usuario Interno */}
          <Route path="/user-int/dashboard" element={<AdminPage page="home" />} />  {/* Home - Usuario Interno */}
          <Route path="/user-int/my-profile" element={<AdminPage page="myProfile" />} />  {/* Mi Perfil - Usuario Interno */}
          <Route path="/user-int/manage-users" element={<AdminPage page="manageUsers" />} />  {/* Gestionar Usuarios - Usuario Interno */}
          <Route path="/user-int/create-predio" element={<AdminPage page="createPredio" />} />  {/* Crear Predio - Usuario Interno */}
          <Route path="/user-int/manage-predios" element={<AdminPage page="managePredio" />} />  {/* Gestionar Predios - Usuario Interno */}
          <Route path="/user-int/manage-predios/edit" element={<AdminPage page="editPredio" />} />  {/* Editar Predio - Usuario Interno */}
          <Route path="/user-int/manage-predio/ejecutar-algoritmos" element={<AdminPage page="algoritmos" />} />  {/* Ejecutar Algoritmos - Usuario Interno */}
          {/* Fin - Usuario Interno */}

          {/* Usuario Externo */}
          <Route path="/user-ext-home" element={<UserExtPage page="home" />} />
          <Route path="/user-ext/my-profile" element={<UserExtPage page="myProfile" />} />
          <Route path="/user-ext/pagar" element={<UserExtPage page="pagar" />} />
          <Route path="/user-ext/asociar-predios" element={<UserExtPage page="asociarPredios" />} />
          <Route path="/user-ext/convenio" element={<UserExtPage page="convenio" />} />
          {/* Fin - Usuario Externo */}

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <ToastContainer position="top-center" newestOnTop/>
    </>
  );
}

export default App;
