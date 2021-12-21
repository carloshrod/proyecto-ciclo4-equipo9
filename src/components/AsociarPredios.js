import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import './CompStyles.css';
import Loader from './Loader';
import PredioDetails from './PredioDetails';
import SearchForm from './SearchForm';

function AsociarPredios() {

    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState(null);
    const [loading, setLoading] = useState(false);

    const url = "http://localhost:8080"

    useEffect(() => {
        if (search === null) return;

        const fetchData = async () => {
            

            const {codigo} = search;

            let predioUrl = `${url}/predios/consultar/${codigo}`;

            setLoading(true);

            const [predioRes] = await Promise.all([
                helpHttp().get(predioUrl),
            ]);

            const {data} = predioRes

            setPredio(data)
            setLoading(false);
        };

        fetchData();

    }, [search]);

    const handleSearch = (data) => {
        console.log(data);
        setSearch(data);
    };


    return (
        <>
            <section className="section profile row">

            {loading && <Loader />}

                <SearchForm handleSearch={handleSearch} />

                <PredioDetails search={search} predio={predio}/>

            </section>
        </>

    )
}

export default AsociarPredios;
