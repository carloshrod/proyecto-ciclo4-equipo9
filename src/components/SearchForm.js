import React, { useState } from 'react';

const initialForm = {
    codigo: "",
};


function SearchForm({ handleSearch }) {

    const [form, setForm] = useState(initialForm);
    //const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.codigo) {
            alert("Datos Incompletos");
            //setIsDisabled(true);
            return;
        }

        handleSearch(form);
        setForm(initialForm);
        //setIsDisabled(false);
    };

    return (
        <>
            <div className="card col-8 m-auto mt-4 mb-4">
                <div className="card-body">
                    <div className="search-bar mb-3">
                        <h5 className="card-title">Buscar Predios</h5>
                        <form onSubmit={handleSubmit} className="search-form d-flex align-items-center">
                            <label htmlFor="idCodigo">Ingrese el código del predio:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className="form-control w-50" type="text" name="codigo" id="idCodigo" onChange={handleChange} value={form.codigo} />
                            <input className="btn btn-primary m-2" type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchForm;
