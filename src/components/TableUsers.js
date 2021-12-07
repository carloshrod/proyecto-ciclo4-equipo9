import React from 'react';
import { Link } from "react-router-dom";

function TableUsers(props) {
    const { data } = props;

    return (
        <>
        <section className="section min-vh-100">
            <div className="row">
                <div className="col-lg-12">

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Datatables</h5>                    

                    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    {/* <!-- Table with stripped rows --> */}
                    <div className="dataTable-top">
                        <div className="dataTable-dropdown">
                            <label><select className="dataTable-selector">
                                <option value="5" selected="true">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                </select> entries per page</label>
                        </div><div className="dataTable-search"><input className="dataTable-input" placeholder="Search..." type="text"/></div>
                    </div>

                    <div className="dataTable-container">
                    <table className="table datatable">
                        <thead>
                        <tr>
                            <th scope="col" data-sortable="" style={{width: "5.6902%;"}}>
                                <Link to="" className="dataTable-sorter">#</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "28.0295%;"}}>
                                <Link to="" className="dataTable-sorter">Nombre</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "37.7239%;"}}>
                                <Link to="" className="dataTable-sorter">Nro. Documento</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "9.27292%;"}}>
                                <Link to="" className="dataTable-sorter">Email</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <Link to="" className="dataTable-sorter">Teléfono</Link>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "5.6902%;"}}>
                                <Link to="" className=""></Link>
                            </th>                        
                        </tr>
                        </thead>
                        <tbody>
                            {data.map(user => {
                                return (
                                    <tr>
                                    <th scope="row">{user.id}</th>
                                        <td>{user.nombre}</td>
                                        <td>{user.nro_doc}</td>
                                        <td>{user.email}</td>
                                        <td>{user.telefono}</td>
                                        <td align="center">
                                            <Link to="/home-admin/manage-users/edit">
                                                <i className="bi bi-pencil-fill"></i> 
                                            </Link>                                                             
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <Link to="/delete">
                                                <i className="bi bi-trash-fill"></i> 
                                            </Link>
                                        </td>
                                    </tr>        
                                )
                            })}
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
