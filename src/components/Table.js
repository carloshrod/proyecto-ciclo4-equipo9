import React from 'react';

function Table() {
    return (
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
                                <a href="#" className="dataTable-sorter">Name</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "37.7239%;"}}>
                                <a href="#" className="dataTable-sorter">Position</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "9.27292%;"}}>
                                <a href="#" className="dataTable-sorter">Age</a>
                            </th>
                            <th scope="col" data-sortable="" style={{width: "19.2835%;"}}>
                                <a href="#" className="dataTable-sorter">Start Date</a>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Brandon Jacob</td>
                            <td>Designer</td>
                            <td>28</td>
                            <td>2016-05-25</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>Bridie Kessler</td>
                            <td>Developer</td>
                            <td>35</td>
                            <td>2014-12-05</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>Ashleigh Langosh</td>
                            <td>Finance</td>
                            <td>45</td>
                            <td>2011-08-12</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>Angus Grady</td>
                            <td>HR</td>
                            <td>34</td>
                            <td>2012-06-11</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>Raheem Lehner</td>
                            <td>Dynamic Division Officer</td>
                            <td>47</td>
                            <td>2011-04-19</td>
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

export default Table;
