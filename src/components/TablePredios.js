import React, { useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import TablePrediosRow from "./TablePrediosRow";

export const initialForm = {
    select: 10
}

function TablePredios({ predios, setPredioToEdit, deletePredio, linkTo, error, success }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";
    const [pageNumber, setPageNumber] = useState(0);
    const [prediosPerPage, setPrediosPerPage] = useState(initialForm);

    const firstItemShowedPerPage = pageNumber * prediosPerPage.select;
    const lastItemShowedPerPage = firstItemShowedPerPage + prediosPerPage.select;

    const handleInputChange = (event) => {
        setPrediosPerPage({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    const selectRef = useRef();

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value })
    }

    const displayPredios = predios.slice(firstItemShowedPerPage, lastItemShowedPerPage).map((predio, index) => {
        return (
            <TablePrediosRow
                key={predio._id}
                nro_registro={index + 1 + firstItemShowedPerPage}
                predio={predio}
                setDataToEdit={setPredioToEdit}
                deleteData={deletePredio}
                linkTo={linkTo}
            />
        )
    })

    const filterPredios = predios.filter((predio) => {
        const Predio = predio.codigo.toLowerCase() + predio.nom_prop.toLowerCase() + predio.doc_prop.toString() + predio.direccion.toLowerCase() + predio.barrio.toLowerCase();
        return Predio.includes(filter.toLowerCase());
    });

    const displayFilteredPredios = filterPredios.slice(firstItemShowedPerPage, lastItemShowedPerPage).map((predio, index) => {
        return (
            <TablePrediosRow
                key={predio._id}
                nro_registro={index + 1 + firstItemShowedPerPage}
                predio={predio}
                setDataToEdit={setPredioToEdit}
                deleteData={deletePredio}
                linkTo={linkTo}
            />
        )
    });

    const pageCount = () => {
        if (!filter) return Math.ceil(predios.length / prediosPerPage.select);
        return Math.ceil(filterPredios.length / prediosPerPage.select);
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const range = () => {
        if (!filter) return predios.length;
        return filterPredios.length
    }

    return (
        <>
            {error}
            {success}
            <section className="section min-vh-100">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Predios Registrados</h5>

                                <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                    {/* <!-- Table with stripped rows --> */}
                                    <div className="dataTable-top">
                                        <div className="dataTable-dropdown">
                                            <label>
                                                <select name="select" ref={selectRef} className="dataTable-selector text-center" value={prediosPerPage.select} onChange={handleInputChange}>
                                                    <option value="10">10</option>
                                                    <option value="20">20</option>
                                                    <option value="30">30</option>
                                                    <option value="40">40</option>
                                                    <option value={predios.length}>Todos</option>
                                                </select> Predios por página</label>
                                        </div>
                                        <div className="dataTable-search">
                                            <input value={filter} onChange={handleFilter} className="dataTable-input" placeholder="Filtrar..." type="text" />
                                        </div>
                                    </div>

                                    <div className="dataTable-container mt-2">
                                        <table className="table datatable table-hover text-center">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Codigo</th>
                                                    <th scope="col">Nombre Propietario</th>
                                                    <th scope="col">C.C Propietario</th>
                                                    <th scope="col">Direccion</th>
                                                    <th scope="col">Barrio</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {predios.length > 0 ?
                                                    <>{!filter ? displayPredios : displayFilteredPredios}</>
                                                    : (
                                                        <tr>
                                                            <td colSpan={7}><h2 className="text-center">No hay información</h2></td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        {/* <!-- End Table with stripped rows --> */}
                                    </div>
                                    <div className="dataTable-bottom">
                                        <div className="dataTable-info">
                                            Mostrando {firstItemShowedPerPage + 1} a {pageNumber + 1 === pageCount() ?
                                                range()
                                                :
                                                lastItemShowedPerPage} de {range()} predios
                                        </div>
                                        <nav className="dataTable-pagination">
                                            <ul className="dataTable-pagination-list">
                                                <ReactPaginate
                                                    breakLabel="..."
                                                    previousLabel={<i className="bi bi-caret-left-fill" />}
                                                    nextLabel={<i className="bi bi-caret-right-fill" />}
                                                    marginPagesDisplayed={0}
                                                    pageRangeDisplayed={5}
                                                    pageCount={pageCount()}
                                                    onPageChange={changePage}
                                                    activeClassName="active"
                                                />
                                            </ul>
                                        </nav>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TablePredios;
