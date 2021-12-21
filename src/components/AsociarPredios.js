import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import Button from './Button';
import './CompStyles.css';
import Loader from './Loader';
import PredioDetails from './PredioDetails';
import SearchForm from './SearchForm';

function AsociarPredios() {

    const [search, setSearch] = useState(null);
    const [predio, setPredio] = useState([]);
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

            const {data} = predioRes;

            setPredio(data);
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

                {predio.map((p)=> {
                    return(
                        <PredioDetails search={search} predio={p} key={p._id}/>
                    );
                })}

            </section>
        </>
    )
}

export default AsociarPredios;
