import React, { useEffect, useState } from 'react'
import PagoDetails from './PagoDetails';
import SearchForm from './SearchForm';
import Loader from '../shared/Loader';
import Message from '../shared/Message';
import { helpHttp } from '../../helpers/helpHttp';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

function PagarImpuestos() {
    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [msgError, setMsgError] = useState();

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
            console.log(predioRes)
            if (data) {
                setError(null);
                if (Object.keys(data).length > 0) {
                    if (data.doc_prop === payload.nro_doc) {
                        setPredio(data)
                    } else {
                        toast.error(<p>El predio <b><em>{datos}</em></b> no está asociado a su cuenta!!!</p>, { position: "bottom-center" })
                    }
                } else {
                    toast.error(<p>No se encontraron resultados para el predio <b><em>{datos}</em></b></p>, { position: "bottom-center" })
                }
            } else {
                setError(true);
                setMsgError("Error, no hay conexión con la base de datos!!!");
            }
            setLoading(false);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <>
            <section className="row">
                {error && <Message msg={msgError} bgColor="#dc3545" />}
                <SearchForm title="Buscar mis predios" text="Código del predio:" handleSearch={handleSearch} />
                {loading && <Loader />}
                <PagoDetails search={search} predio={predio} />
            </section>
        </>
    )
}

export default PagarImpuestos;
