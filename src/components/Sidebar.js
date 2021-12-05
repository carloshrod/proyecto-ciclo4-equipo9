import React from 'react';

function Sidebar({ item1, item2, item3, item4, item5, item6 }) {

    return (
        <>
            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        {item1}
                    </li>
                    <li className="nav-item">
                        {item2}
                    </li>
                    <li className="nav-item">
                        {item3}
                    </li>
                    <li className="nav-item">
                        {item4}
                    </li>
                    <li className="nav-item">
                        {item5}
                    </li>
                    <li className="nav-item">
                        {item6}
                    </li>
                </ul>

            </aside>
            {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Sidebar;

