import React from "react";

export default function TablePredio(){
    return(
        <>
        <section className="section">
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
                                <option value="5">5</option>
                                <option value="10" selected="true">10</option>
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
                                <a href="#" className="dataTable-sorter">#</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "28.0295%;"}}>
                                <a href="#" className="dataTable-sorter">Codigo</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "37.7239%;"}}>
                                <a href="#" className="dataTable-sorter">Nombre Propietario</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "9.27292%;"}}>
                                <a href="#" className="dataTable-sorter">C.C Propietario</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <a href="#" className="dataTable-sorter">Direccion</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <a href="#" className="dataTable-sorter">Total</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <a href="#" className="dataTable-sorter">Opciones</a>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>101010</td>
                            <td>Brandon</td>
                            <td>12345</td>
                            <td>Calle 70</td>
                            <td>$ 150000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>202071</td>
                            <td>Andres</td>
                            <td>53843</td>
                            <td>Calle 40 carrera 52</td>
                            <td>$ 95000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>20184</td>
                            <td>Mario</td>
                            <td>9896</td>
                            <td>Calle 80</td>
                            <td>$ 450000</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>404010</td>
                            <td>Julio</td>
                            <td>129845</td>
                            <td>Calle 5 carrera 70</td>
                            <td>$ 650000</td>
                        </tr>
                        
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