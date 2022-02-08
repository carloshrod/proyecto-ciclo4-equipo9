import React, { useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import TableUsersHeader from './TableUsersHeader';
import TableUsersRow from './TableUsersRow';

export const initialForm = {
    select: 10
}

function TableUsers({ users, setUserToEdit, deleteUser, error, success }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";
    const [pageNumber, setPageNumber] = useState(0);
    const [usersPerPage, setUsersPerPage] = useState(initialForm);
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const firstItemShowedPerPage = pageNumber * usersPerPage.select;
    const lastItemShowedPerPage = firstItemShowedPerPage + usersPerPage.select;

    const headers = [
        { name: "#", field: "index", sortable: false },
        { name: "Nombre", field: "nombres", sortable: true },
        { name: "Nro. Documento", field: "nro_doc", sortable: false },
        { name: "Email", field: "email", sortable: true },
        { name: "Rol", field: "rol", sortable: false },
    ];

    const handleInputChange = (event) => {
        setUsersPerPage({
            [event.target.name]: parseInt(event.target.value)
        })
    }

    const selectRef = useRef();

    const handleFilter = (e) => {
        setSearchParams({ filter: e.target.value })
    }

    // Mostrar usuarios:
    const displayUsers = users.slice(firstItemShowedPerPage, lastItemShowedPerPage).map((user, index) => {
        return (
            <TableUsersRow
                key={user._id}
                nro_registro={index + 1 + firstItemShowedPerPage}
                user={user}
                setDataToEdit={setUserToEdit}
                deleteData={deleteUser}
            />
        )
    });

    // Ordenar usuarios:
    if (sorting.field) {
        const reversed = sorting.order === "asc" ? 1 : -1;
        users = users.sort((a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field]))
    };

    // Filtrar usuarios:
    const filterUsers = users.filter((user) => {
        return (user.nombres + " " + user.apellidos).toLowerCase().includes(filter.toLowerCase()) ||
            user.nro_doc.toString().includes(filter.toLowerCase()) || user.email.includes(filter.toLowerCase()) ||
            (user.rol + " ").includes(filter.toLowerCase())
    })

    // Mostrar usuarios filtrados:
    const displayFilteredUsers = filterUsers.slice(firstItemShowedPerPage, lastItemShowedPerPage).map((user, index) => {
        return (
            <TableUsersRow
                key={user._id}
                nro_registro={index + 1 + firstItemShowedPerPage}
                user={user}
                setDataToEdit={setUserToEdit}
                deleteData={deleteUser}
            />
        )
    });

    const pageCount = () => {
        if (!filter) return Math.ceil(users.length / usersPerPage.select);
        return Math.ceil(filterUsers.length / usersPerPage.select);
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const range = () => {
        if (!filter) return users.length;
        return filterUsers.length
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
                                <h5 className="card-title">Usuarios Registrados</h5>

                                <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                                    {/* <!-- Table with stripped rows --> */}

                                    <div className="dataTable-top">
                                        <div className="dataTable-dropdown">
                                            <label>
                                                <select name="select" ref={selectRef} className="dataTable-selector text-center" value={usersPerPage.select} onChange={handleInputChange}>
                                                    <option value="10">10</option>
                                                    <option value="20">20</option>
                                                    <option value="30">30</option>
                                                    <option value="40">40</option>
                                                    <option value={users.length}>Todos</option>
                                                </select> Usuarios por página</label>
                                        </div>

                                        <div className="dataTable-search">
                                            <ReactTooltip id="toolTipFilter" place="left" type="dark" effect="solid">
                                                Para filtrar por <em>rol</em> ingrese el valor seguido de un espacio
                                            </ReactTooltip>
                                            <input data-tip data-for="toolTipFilter" value={filter} onChange={handleFilter} className="dataTable-input" placeholder="Filtrar..." type="text" />
                                        </div>
                                    </div>

                                    <div className="dataTable-top">
                                        <div className="me-3">
                                            {range()} Usuarios
                                        </div>
                                    </div>

                                    <div className="dataTable-container">
                                        <table className="table datatable table-hover text-center">
                                            <TableUsersHeader headers={headers} onSorting={(field, order) => setSorting({ field, order })} />
                                            <tbody>
                                                {users.length > 0 ?
                                                    <>{!filter ? displayUsers : displayFilteredUsers}</>
                                                    : (
                                                        <tr>
                                                            <td colSpan={6}><h2 className="text-center">¡No hay información!</h2></td>
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
                                                lastItemShowedPerPage} de {range()} usuarios
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

export default TableUsers;
