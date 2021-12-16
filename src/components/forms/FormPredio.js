import React, { useEffect, useState } from "react";

export const initialForm = {
    _id: null,
    codigo: "",
    nom_prop: "",
    doc_prop: "",
    area_c: "",
    area_t: "",
    direccion: "",
    barrio: "",
    fecha_pago: "",
    fecha_pago2: "",
    fecha_pago3: "",
};

function FormPredio({ createPredio, updatePredio, predioToEdit, setPredioToEdit, titulo, btn_text }) {

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

        if (form._id === null) {
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
                                        <input type="string" name="codigo" className="form-control" id="yourCodigo" onChange={handleChange} value={form.codigo} required />
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

                                    <div className="col-6 mb-3">
                                        <label htmlFor="yourName" className="form-label">Barrio</label>
                                        <div className="input-group has-validation">
                                            <input type="text" name="barrio" className="form-control" id="yourBarrio" onChange={handleChange} value={form.barrio} required />
                                            <div className="invalid-feedback">Por favor, ingresa dirección del predio!</div>
                                        </div>
                                    </div>

                                    <hr className="divider"/>

                                    <h5 className="card-title mt-0">Fecha de Pago / Descuentos</h5>

                                    <div className="col-6 mt-3 mb-3">
                                        <label htmlFor="idFecha_pago" className="form-label">Fecha de pago máxima:</label>
                                    </div>

                                    <div className="col-6 mt-3 mb-3">
                                        <input type="date" name="fecha_pago" className="form-control" id="idFecha_pago" onChange={handleChange} value={form.fecha_pago} required />
                                    </div>

                                    <div className="col-6 mt-3 mb-3">
                                        <label htmlFor="IdFecha_pago2" className="form-label">Fecha de pago máxima para tener descuento del 40%:</label>
                                    </div>

                                    <div className="col-6 mt-3 mb-3">
                                        <div className="input-group has-validation">
                                            <input type="date" name="fecha_pago2" className="form-control" id="IdFecha_pago2" onChange={handleChange} value={form.fecha_pago2} required />
                                        </div>
                                    </div>

                                    <div className="col-6 mt-3 mb-3">
                                        <label htmlFor="IdFecha_pago3" className="form-label">Fecha de pago máxima para tener descuento del 20%:</label>
                                    </div>

                                    <div className="col-6 mt-3 mb-3">
                                        <div className="input-group has-validation">
                                            <input type="date" name="fecha_pago3" className="form-control" id="IdFecha_pago3" onChange={handleChange} value={form.fecha_pago3} required />
                                        </div>
                                    </div>

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

export default FormPredio;