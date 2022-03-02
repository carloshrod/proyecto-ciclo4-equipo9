import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { helpHttp } from '../helpers/helpHttp';
import './CompStyles.css';
import Loader from './Loader';
import PredioDetails from './PredioDetails';
import SearchForm from './SearchForm';

const Msg = ({ datos }) => (
    <div>
        <p>No se encontraron resultados para el documento <b><em>{datos}</em></b>.</p>
    </div>
)

function AsociarPredios() {
    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            const { datos } = search;
            let predioUrl = process.env.REACT_APP_API_URL+process.env.REACT_APP_API_CONSULTAR+datos;
            setLoading(true);
            const [predioRes] = await Promise.all([
                helpHttp().get(predioUrl),
            ]);
            const { data } = predioRes;
            if (data) {
                if (data.length > 0) {
                    setPredio(data);
                    setLoading(false);    
                } else {
                    toast.error(<Msg datos={datos} />, {position: "bottom-center"});
                    setLoading(false);
                }
            } else {
                toast.error(<Msg datos={datos} />, {position: "bottom-center"});
                setLoading(false);
            }
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
            <section className="section profile row">
                {loading && <Loader />}
                <SearchForm handleSearch={handleSearch} text="Documento del propietario" />
                {displayPredios}
            </section>
        </>
    )
}

export default AsociarPredios;
