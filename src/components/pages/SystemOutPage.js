import React, { useEffect, useState } from 'react';
import HeaderSystemOut from "../HeaderSystemOut";
import Container from '../Container';
import FormLogin from '../forms/FormLogin'
import FormRegister from '../forms/FormRegister';
import FormForgotPassword from '../forms/FormForgotPassword'
import Footer from "../Footer";
import BodyLandingPage from "../BodyLandingPage";
import { helpHttp } from '../../helpers/helpHttp';

function SystemOutPage({ page }) {

  const [usersDb, setUsersDb] = useState([])
  const [userToEdit, setUserToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:8080";

  useEffect(() => {
    setLoading(true);
        api.get(`${url}/users/listar`)
        .then((res) => {
            if (!res.err) {
                setUsersDb(res.data);
                setError(null);
            } else {
                setUsersDb(null);
                setError(res);
            }
            setLoading(false);
        });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const createUser = (user) => {
    user.nro_registro = usersDb.length + 1;
    user.rol = 2; // Rol 1 -> Usuario Interno

    let endpoint = `${url}/users/guardar/`;

    let options = {
      body: user,
      headers: { "content-type": "application/json" },
    };

    api.post(endpoint, options).then((res) => {
      if (!res.err) {
        setUsersDb([...usersDb, res.data]);
      } else {
        setError(res);
      }
    });
  };

  return (
    <>
      <HeaderSystemOut />

      {page === "landingPage" &&
        <Container titulo="Plataforma de Gestión Catastral">
          <BodyLandingPage />  {/* Children */}
        </Container>}

      {page === "login" &&
        <Container>
          <FormLogin />  {/* Children */}
        </Container>}

      {page === "register" &&
        <Container>
          <FormRegister
            createUser={createUser}
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
          />  {/* Children */}
        </Container>}

      {page === "forgotPassword" &&
        <Container>
          <FormForgotPassword />  {/* Children */}
        </Container>}

      <Footer />
    </>
  );
}

export default SystemOutPage;
