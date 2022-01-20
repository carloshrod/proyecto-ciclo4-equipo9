import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import './CompStyles.css';
import Loader from './Loader';
import PagoDetails from './PagoDetails';
import SearchForm from './SearchForm';

function BodyPagarImpuestos() {

    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState(null);
    const [loading, setLoading] = useState(false);

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (search === null) return;

        const fetchData = async () => {
            

            const {datos} = search;

            let predioUrl = `${url}/predios/consultarP/${datos}`;

            setLoading(true);

            const [predioRes] = await Promise.all([
                helpHttp().get(predioUrl),
            ]);

            const {data} = predioRes

            setPredio(data)
            setLoading(false);
        };

        fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleSearch = (data) => {
        console.log(data);
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
