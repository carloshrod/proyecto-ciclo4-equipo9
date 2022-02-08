import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const initialForm = {
    estado: null,
    codigo: "",
    nom_prop: "",
    doc_prop: "",
    area_c: "",
    area_t: "",
    valor_predio: "",
    direccion: "",
    barrio: "",
    fecha_pago: "",
    fecha_pago2: "",
    fecha_pago3: "",
};

function FormPredio({ createPredio, updatePredio, predioToEdit, setPredioToEdit, titulo, btn_text, error, success}) {

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

        if (!form.codigo || !form.nom_prop || !form.doc_prop || !form.area_c || !form.area_t | !form.valor_predio || !form.direccion || !form.barrio || !form.fecha_pago || !form.fecha_pago2 || !form.fecha_pago3) {
            toast.error("Datos incompletos");
            return;
        };

        if (form.estado === null) {
            createPredio(form);
            handleReset();
        } else {
            updatePredio(form);
        }
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setPredioToEdit(null);
    };

    return (
        <>
            <section className="section min-vh-100">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{titulo}</h5>

                                <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>

                                    <div className="col-6">
                                        <label htmlFor="yourCodigo" className="form-label">Código</label>
                                        <input type="text" name="codigo" className="form-control" id="yourCodigo" onChange={handleChange} value={form.codigo} required />
                                        <div className="invalid-feedback">Por favor, ingresa un número de documento del propietario!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourNom_prop" className="form-label">Nombre del Propietario</label>
                                        <input type="text" name="nom_prop" className="form-control" id="yourNom_prop" onChange={handleChange} value={form.nom_prop} required />
                                        <div className="invalid-feedback">Por favor, ingresa nombre del propetario!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourDoc_prop" className="form-label">Nro. Documento del Propietario</label>
                                        <input type="number" name="doc_prop" className="form-control" id="yourDoc_prop" onChange={handleChange} value={form.doc_prop} required />
                                        <div className="invalid-feedback">Por favor, ingresa un número de documento del propietario!</div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourArea_c" className="form-label">Área Construida</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-building"></i></span>
                                            <input type="number" name="area_c" className="form-control" id="yourArea_c" onChange={handleChange} value={form.area_c} required />
                                            <div className="invalid-feedback">Por favor, ingresa área construida del predio!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourArea_t" className="form-label">Área Total</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-building"></i></span>
                                            <input type="number" name="area_t" className="form-control" id="yourArea_t" onChange={handleChange} value={form.area_t} required />
                                            <div className="invalid-feedback">Por favor, ingresa área total del predio!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="idValor_predio" className="form-label">Valor del Predio</label>
                                        <div className="input-group has-validation">
                                            <input type="number" name="valor_predio" className="form-control" id="idValor_predio" onChange={handleChange} value={form.valor_predio} required />
                                            <div className="invalid-feedback">Por favor, ingresa área total del predio!</div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="yourDireccion" className="form-label">Dirección</label>
                                        <div className="input-group has-validation">
                                            <input type="text" name="direccion" className="form-control" id="yourDireccion" onChange={handleChange} value={form.direccion} required />
                                            <div className="invalid-feedback">Por favor, ingresa dirección del predio!</div>
                                        </div>
                                    </div>

                                    <div className="col-6 mb-3">
                                        <label htmlFor="yourBarrio" className="form-label">Barrio</label>
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

                                    <div className="col-3 col-md-2 col-lg-2 m-auto mt-3">
                                        <button className="btn btn-primary rounded-pill w-100" type="submit">{btn_text}</button>
                                    </div>

                                    {error}
                                    {success}

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