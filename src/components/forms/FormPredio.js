import React, { useEffect, useState } from "react";

export const initialForm = {
    id: null,
    codigo: "",
    nom_prop: "",
    doc_prop: "",
    area_c: "",
    area_t: "",
    direccion: "",
    barrio: "",
};

function FormCreatePredio({ createPredio, updatePredio, predioToEdit, setPredioToEdit, titulo, btn_text }) {

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (predioToEdit) {
            setForm(predioToEdit);
        } else {
            setForm(initialForm);
        }
    }, [predioToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.codigo || !form.nom_prop || !form.doc_prop || !form.direccion || !form.barrio) {
            alert("Datos incompletos");
            return;
        };

        if (form.id === null) {
            createPredio(form);
        } else {
            updatePredio(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setPredioToEdit(null);
    };

    return (
        <>
            <section className="section min-vh-100 mt-3">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{titulo}</h5>

                                <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Código</label>
                                        <input type="text" name="codigo" className="form-control" id="yourCodigo" onChange={handleChange} value={form.codigo} required />
                                        <div className="invalid-feedback">Por favor, ingresa un número de documento del propietario!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Nombre del Propietario</label>
                                        <input type="text" name="nom_prop" className="form-control" id="yourNom_prop" onChange={handleChange} value={form.nom_prop} required />
                                        <div className="invalid-feedback">Por favor, ingresa nombre del propetario!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Nro. Documento del Propietario</label>
                                        <input type="number" name="doc_prop" className="form-control" id="yourDoc_prop" onChange={handleChange} value={form.doc_prop} required />
                                        <div className="invalid-feedback">Por favor, ingresa un número de documento del propietario!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourUsername" className="form-label">Área Construida</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-building"></i></span>
                                            <input type="number" name="area_c" className="form-control" id="yourArea_c" onChange={handleChange} value={form.area_c} required />
                                            <div className="invalid-feedback">Por favor, ingresa área construida del predio!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourUsername" className="form-label">Área Total</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-building"></i></span>
                                            <input type="number" name="area_t" className="form-control" id="yourArea_t" onChange={handleChange} value={form.area_t} required />
                                            <div className="invalid-feedback">Por favor, ingresa área total del predio!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Dirección</label>
                                        <div className="input-group has-validation">
                                            <input type="text" name="direccion" className="form-control" id="yourDireccion" onChange={handleChange} value={form.direccion} required />
                                            <div className="invalid-feedback">Por favor, ingresa dirección del predio!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Barrio</label>
                                        <div className="input-group has-validation">
                                            <input type="text" name="barrio" className="form-control" id="yourBarrio" onChange={handleChange} value={form.barrio} required />
                                            <div className="invalid-feedback">Por favor, ingresa dirección del predio!</div>
                                        </div>
                                    </div>

                                    {/* <div className="col-6">
                                        <label htmlFor="yourName" className="form-label">Teléfono</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-telephone-fill"></i></span>
                                            <input type="tel" name="telefono" className="form-control" id="yourTelefono" onChange={handleChange} value={form.telefono} required />
                                            <div className="invalid-feedback">Por favor, ingresa número de teléfono del propietario!</div>
                                        </div>
                                    </div> */}

                                    <div className="col-4 m-auto mt-3">
                                        <button className="btn btn-primary rounded-pill w-100" type="submit">{btn_text}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormCreatePredio;