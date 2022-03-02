import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { helpHttp } from '../helpers/helpHttp';
import './CompStyles.css';
import Loader from './Loader';
import PagoDetails from './PagoDetails';
import SearchForm from './SearchForm';

const Msg = ({ datos }) => (
    <div>
        <p>No se encontraron resultados para el código <b><em>{datos}</em></b>.</p>
    </div>
)

function BodyPagarImpuestos() {
    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            const {datos} = search;
            let predioUrl = process.env.REACT_APP_API_URL+process.env.REACT_APP_API_CONSULTAR_UNO+datos;
            setLoading(true);
            const [predioRes] = await Promise.all([
                helpHttp().get(predioUrl),
            ]);
            const {data} = predioRes
            if (data) {
                setPredio(data)
                setLoading(false);    
            } else {
                toast.error(<Msg datos={datos}/>, {position: "bottom-center"})
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
                <PagoDetails search={search} predio={predio}/>
            </section>
        </>
    )
}

export default BodyPagarImpuestos;
