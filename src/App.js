import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import HomeAdmin from "./components/pages/HomeAdmin";
import ManageUsers from "./components/pages/ManageUsers";
import HomeUserExt from "./components/pages/HomeUserExt";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/home_admin" element={<HomeAdmin/>} />
        <Route path="/home_admin/manage_users" element={<ManageUsers/>} />
        <Route path="/home_user_ext" element={<HomeUserExt/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
