import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const initialForm = {
  newPassword: "",
  renewPassword: ""
}

function FormNewPassword({ newPassword }) {
  const [form, setForm] = useState(initialForm)
  const { token } = useParams()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.newPassword || !form.renewPassword) {
      toast.error("Datos incompletos!!!");
      return;
    };

    if (form.newPassword !== form.renewPassword) {
      toast.error("Las contraseñas no coinciden!!!");
      return;
    }

    newPassword(form, token);
  }

  return (
    <>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center">

              <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 card mb-3 form-1">

                <div className="card-body">

                  <div className="col-10 pt-4 pb-2 m-auto">
                    <h5 className="card-title text-center pb-0 fs-4">¿Olvidaste tu contraseña?</h5>
                    <p className="text-center small">Por favor, ingresa una nueva contraseña</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3 justify-content-center d-flex align-items-center">
                      <label htmlFor="newPassword" className="col-4 col-form-label">Nueva contraseña: </label>
                      <div className="col-6">
                        <input name="newPassword" type="password" className="form-control" id="newPassword" onChange={handleChange} value={form.newPassword} />
                      </div>
                    </div>

                    <div className="mb-3 justify-content-center d-flex align-items-center">
                      <label htmlFor="renewPassword" className="col-4 col-form-label">Reingresar nueva contraseña: </label>
                      <div className="col-6">
                        <input name="renewPassword" type="password" className="form-control" id="renewPassword" onChange={handleChange} value={form.renewPassword} />
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary rounded-pill">Restablecer Contraseña</button>
                    </div>
                  </form>{/* <!-- End Change Password Form --> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormNewPassword;
