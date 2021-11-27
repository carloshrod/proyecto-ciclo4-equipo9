import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <main>
    <div className="container" >

    <div className="" style={{marginTop: '70px'}}>
        <h1 className="text-center font-weight-bold">Plataforma de Gestión Catastral</h1>
      </div>{/* <!-- End Page Title --> */}

      <div className="mx-auto" style={{width: '360px', marginTop: '30px', marginBottom: '30px'}}>
            <img src="img/logo-escudo-cauca.png" alt=""/>
      </div>
  
      <section className="section mt-5 mb-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <Link to="/login">
                <h5 className="card-title text-center">Iniciar Sesión</h5>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <Link to="/register">
                <h5 className="card-title text-center">¿No tienes una cuenta? Registrate aquí!!!</h5>
              </Link>                
            </div>
          </div>
        </div>
      </section>
    {/* <!-- End #main --> */}


    </div>
    {/* <!-- End #main --> */}
  </main>

    
  );
}

export default App;
