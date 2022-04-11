import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../shared/Loader';
import Message from '../shared/Message';
import PredioDetails from './PredioDetails';
import SearchForm from './SearchForm';

function AsociarPredios() {
    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [msgError, setMsgError] = useState();

    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            const { datos } = search;
            let predioUrl = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_CONSULTAR + datos;
            setLoading(true);
            const [predioRes] = await Promise.all([
                helpHttp().get(predioUrl),
            ]);
            const { data } = predioRes;
            if (data) {
                setError(null)
                if (data.length > 0) {
                    setPredio(data);
                } else {
                    toast.error(<p>No se encontraron resultados para el documento <b><em>{datos}</em></b>.</p>, { position: "bottom-center" });
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

    const displayPredios = predio.map((p) => {
        return (
            <PredioDetails
                search={search}
                predio={p}
                key={p._id}
            />
        );
    })

    return (
        <>
            <section className="row">
                {error && <Message msg={msgError} bgColor="#dc3545" />}
                <SearchForm title="Buscar predios" text="Documento del propietario:" handleSearch={handleSearch} />
                {loading && <Loader />}
                {displayPredios}
            </section>
        </>
    )
}

export default AsociarPredios;
