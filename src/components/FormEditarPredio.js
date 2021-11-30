export function FormEditarPredio(){
    return(
        <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container pt-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-8 d-flex flex-column align-items-center justify-content-center">

              <div class="card mb-3">

                <div class="card-body">

                <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Gestionar Predio</h5>
                    <p class="text-center small">Codigo: ####</p>
                  </div>


                  <form class="row g-3 needs-validation" novalidate>
                    
                    <div class="form-floating col-6">
                        <input class="form-control" id="nombrePropietario" type="text" placeholder="Nombre Propietario" data-sb-validations="required" />
                        <label for="nombrePropietario">Nombre Propietario</label>
                        <div class="invalid-feedback" data-sb-feedback="nombrePropietario:required">Nombre Propietario is required.</div>
                    </div>

                    <div class="form-floating col-6">
                        <select class="form-select" id="tipoDeDocumento" aria-label="Tipo de Documento">
                            <option value="C.C">C.C</option>
                            <option value="C.E">C.E</option>
                        </select>
                        <label for="tipoDeDocumento">Tipo de Documento</label>
                    </div>

                    <div class="form-floating col-6">
                        <input class="form-control" id="numeroDeDocumento" type="text" placeholder="Numero de Documento" data-sb-validations="required" />
                        <label for="numeroDeDocumento">Numero de Documento</label>
                        <div class="invalid-feedback" data-sb-feedback="numeroDeDocumento:required">Numero de Documento is required.</div>
                    </div>

                    <div class="form-floating mb-3">
                        <input class="form-control" id="areaConstruida" type="text" placeholder="Area Construida" data-sb-validations="required" />
                        <label for="areaConstruida">Area Construida</label>
                        <div class="invalid-feedback" data-sb-feedback="areaConstruida:required">Area Construida is required.</div>
                    </div>

                    <div class="form-floating mb-3">
                        <input class="form-control" id="areaTotal" type="text" placeholder="Area Total" data-sb-validations="required" />
                        <label for="areaTotal">Area Total</label>
                        <div class="invalid-feedback" data-sb-feedback="areaTotal:required">Area Total is required.</div>
                    </div>

                    <div class="form-floating mb-3">
                        <input class="form-control" id="direccion" type="text" placeholder="Direccion" data-sb-validations="required" />
                        <label for="direccion">Direccion</label>
                        <div class="invalid-feedback" data-sb-feedback="direccion:required">Direccion is required.</div>
                    </div>

                    <div class="form-floating mb-3">
                        <input class="form-control" id="barrio" type="text" placeholder="Barrio" data-sb-validations="required" />
                        <label for="barrio">Barrio</label>
                        <div class="invalid-feedback" data-sb-feedback="barrio:required">Barrio is required.</div>
                    </div>

                    <div class="col-4 m-auto mt-3">
                      <button class="btn btn-primary w-100" type="submit">Crear Predio</button>
                    </div>
                    
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
    {/* <!-- End #main --> */}
  </main>
    )
}