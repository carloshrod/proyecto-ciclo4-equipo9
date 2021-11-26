import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
    <div className="container" >

    <div className="" style={{marginTop: '61px'}}>
        <h1>Plataforma de Gestión Catastral</h1>
      </div>{/* <!-- End Page Title --> */}

      <div className="mx-auto" style={{width: '360px', marginTop: '30px', marginBottom: '30px'}}>
            <img src="img/logo-escudo-cauca.png" />
      </div>
  
      <section className="section">
        <div className="row">
          <div className="col-lg-6">
  
            <div className="card">
              <a href="">
                <h5 className="card-title text-center">Iniciar Sesión</h5>
              </a>
            </div>
  
          </div>
  
          <div className="col-lg-6">
  
            <div className="card">
              <a href="">
                <h5 className="card-title text-center">¿No tienes una cuenta? Registrate aquí!!!</h5>
              </a>
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
