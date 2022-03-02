import React, { useState } from 'react';

const initialForm = {
    datos: "",
};


function SearchForm({ handleSearch, text }) {

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

        if (!form.datos) {
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
            <div className="card col-12 col-md-10 col-lg-8 col-xl-6 m-auto mt-3 mb-4 d-flex align-items-center">
                <div className="card-body">
                    <div className="search-bar mb-3">
                        <h5 className="card-title">Buscar Predios</h5>
                        <form onSubmit={handleSubmit} className="search-form d-flex align-items-center">
                            <label htmlFor="idDatos">{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className="col-6 form-control w-50" type="text" name="datos" id="idDatos" onChange={handleChange} value={form.datos} />
                            <input className="btn btn-primary ms-4" type="submit" value="Buscar" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchForm;
