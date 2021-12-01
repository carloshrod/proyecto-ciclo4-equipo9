import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import HomeAdmin from "./components/pages/HomeAdmin";
import ManageUsers from "./components/pages/ManageUsers";
import EditUser from "./components/pages/EditUser";
import HomeUserInt from "./components/pages/HomeUserInt";
import CreatePredio from "./components/pages/CreatePredio";
import ManagePredio from "./components/pages/ManagePredio";
import EditPredio from "./components/pages/EditPredio";
import FechaPagoDcto from "./components/pages/FechaPagoDcto";
import HomeUserExt from "./components/pages/HomeUserExt";
import AsociarPredios from "./components/pages/AsociarPredios";
import PagarImpuestos from "./components/pages/PagarImpuestos";
import Convenio from "./components/pages/Convenio";
import EjecutarAlgoritmo from "./components/pages/EjecutarAlgoritmo";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/home-admin" element={<HomeAdmin/>} />
        <Route path="/home-admin/manage-users" element={<ManageUsers/>} />
        <Route path="/home-admin/manage-users/edit" element={<EditUser/>} />
        <Route path="/home-user-int" element={<HomeUserInt/>} />
        <Route path="/home-admin/create-predio" element={<CreatePredio/>} />
        <Route path="/home-admin/manage-predio" element={<ManagePredio/>} />
        <Route path="/home-admin/manage-predio/edit" element={<EditPredio/>} />
        <Route path="/home-admin/manage-predio/fecha-pago-descuentos" element={<FechaPagoDcto/>} />
        <Route path="/home-admin/manage-predio/Ejecutar-Algoritmos" element={<EjecutarAlgoritmo/>} />
        <Route path="/home-user-ext" element={<HomeUserExt/>} />
        <Route path="/home-user-ext/asociar-predios" element={<AsociarPredios/>} />
        <Route path="/home-user-ext/convenio" element={<Convenio/>} />
        <Route path="/home-user-ext/pagar" element={<PagarImpuestos/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
