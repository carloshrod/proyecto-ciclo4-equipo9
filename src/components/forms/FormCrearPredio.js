import React from "react";

export default function FormCrearPredio(){
    return(
    <>
      <section className="section ">
        <div className="row">
            <div className="col-lg-12">

              <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center pb-0 fs-4">Crea Predio</h5>
                  

                  <form className="row g-3 needs-validation" novalidate>
                    <div className="form-floating col-6">
                        <input className="form-control" id="codigo" type="text" placeholder="Codigo" data-sb-validations="required" />
                        <label for="codigo">Codigo</label>
                        <div className="invalid-feedback" data-sb-feedback="codigo:required">Codigo is required.</div>
                    </div>

                    <div className="form-floating col-6">
                        <input className="form-control" id="nombrePropietario" type="text" placeholder="Nombre Propietario" data-sb-validations="required" />
                        <label for="nombrePropietario">Nombre Propietario</label>
                        <div className="invalid-feedback" data-sb-feedback="nombrePropietario:required">Nombre Propietario is required.</div>
                    </div>

                    <div className="form-floating col-6">
                        <select className="form-select" id="tipoDeDocumento" aria-label="Tipo de Documento">
                            <option value="C.C">C.C</option>
                            <option value="C.E">C.E</option>
                        </select>
                        <label for="tipoDeDocumento">Tipo de Documento</label>
                    </div>

                    <div className="form-floating col-6">
                        <input className="form-control" id="numeroDeDocumento" type="text" placeholder="Numero de Documento" data-sb-validations="required" />
                        <label for="numeroDeDocumento">Numero de Documento</label>
                        <div className="invalid-feedback" data-sb-feedback="numeroDeDocumento:required">Numero de Documento is required.</div>
                    </div>

                    <div className="form-floating">
                        <input className="form-control" id="areaConstruida" type="text" placeholder="Area Construida" data-sb-validations="required" />
                        <label for="areaConstruida">Area Construida</label>
                        <div className="invalid-feedback" data-sb-feedback="areaConstruida:required">Area Construida is required.</div>
                    </div>

                    <div className="form-floating">
                        <input className="form-control" id="areaTotal" type="text" placeholder="Area Total" data-sb-validations="required" />
                        <label for="areaTotal">Area Total</label>
                        <div className="invalid-feedback" data-sb-feedback="areaTotal:required">Area Total is required.</div>
                    </div>

                    <div className="form-floating">
                        <input className="form-control" id="direccion" type="text" placeholder="Direccion" data-sb-validations="required" />
                        <label for="direccion">Direccion</label>
                        <div className="invalid-feedback" data-sb-feedback="direccion:required">Direccion is required.</div>
                    </div>

                    <div className="form-floating mb-3">
                        <input className="form-control" id="barrio" type="text" placeholder="Barrio" data-sb-validations="required" />
                        <label for="barrio">Barrio</label>
                        <div className="invalid-feedback" data-sb-feedback="barrio:required">Barrio is required.</div>
                    </div>

                    <div className="col-4 m-auto mt-3">
                      <button className="btn btn-primary w-100" type="submit">Crear Predio</button>
                    </div>
                    
                  </form>

              </div>
              </div>
            </div>
          
        </div>
      </section>{/* <!-- End #main --> */}
  </>
   
    )
}