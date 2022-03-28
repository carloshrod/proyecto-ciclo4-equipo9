import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { helpHttp } from '../helpers/helpHttp';
import './CompStyles.css';
import Loader from './Loader';
import PagoDetails from './PagoDetails';
import SearchForm from './SearchForm';
import jwtDecode from 'jwt-decode';

function BodyPagarImpuestos() {
    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            const { datos } = search;
            let predioUrl = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_CONSULTAR_UNO + datos;
            setLoading(true);
            const [predioRes] = await Promise.all([
                helpHttp().get(predioUrl),
            ]);
            const { data } = predioRes
            if (data) {
                if (data.doc_prop === payload.nro_doc) {
                    setPredio(data)
                    setLoading(false);
                } else {
                    toast.error(<p>El predio <b><em>{datos}</em></b> no está asociado a su cuenta!!!</p>, { position: "bottom-center" })
                    setLoading(false);
                }
            } else {
                toast.error(<p>No se encontraron resultados para el código <b><em>{datos}</em></b></p>, { position: "bottom-center" })
                setLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <>
            <section className="section profile row">
                {loading && <Loader />}
                <SearchForm handleSearch={handleSearch} text="Ingrese el código del predio:" />
                <PagoDetails search={search} predio={predio} />
            </section>
        </>
    )
}

export default BodyPagarImpuestos;
