import React from 'react';
import { Link } from "react-router-dom";
import TableUsersRow from './TableUsersRow';

function TableUsers({ users, setUserToEdit, deleteUser }) {

    let style = "none";

    return (
        <>
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
                                            <label><select className="dataTable-selector">
                                                <option defaultValue="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                                <option value="25">25</option>
                                            </select> entries per page</label>
                                        </div><div className="dataTable-search"><input className="dataTable-input" placeholder="Search..." type="text" /></div>
                                    </div>

                                    <div className="dataTable-container">
                                        <table className="table datatable">
                                            <thead>
                                                <tr>
                                                    <th scope="col" data-sortable="" >
                                                        <Link to="" className="dataTable-sorter">#</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="" >
                                                        <Link to="" className="dataTable-sorter">Nombre</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="" >
                                                        <Link to="" className="dataTable-sorter">Nro. Documento</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="" >
                                                        <Link to="" className="dataTable-sorter">Email</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="" >
                                                        <Link to="" className="dataTable-sorter">Rol</Link>
                                                    </th>
                                                    <th scope="col" data-sortable="" >
                                                        <Link to="" className=""></Link>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.length > 0 ?
                                                    users.map((user, index) => {                                                
                                                        // console.log(user)
                                                        return (
                                                            <TableUsersRow
                                                                style={index === 0 ? style : ""}
                                                                key={user._id}
                                                                nro_registro={index}
                                                                user={user}
                                                                setDataToEdit={setUserToEdit}
                                                                deleteData={deleteUser}
                                                            />
                                                        )
                                                    }) : (
                                                        <tr>
                                                            <td colSpan={6}><h2 className="text-center">No hay información</h2></td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        {/* <!-- End Table with stripped rows --> */}
                                    </div>
                                    <div className="dataTable-bottom">
                                        <div className="dataTable-info">Showing 1 to 10 of 10 entries</div>
                                        <nav className="dataTable-pagination">
                                            <ul className="dataTable-pagination-list"></ul>
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
