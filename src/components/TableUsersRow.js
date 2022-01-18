import React from 'react';
import { Link } from 'react-router-dom';

const TableUsersRow = ({ user, style, nro_registro, setDataToEdit, deleteData }) => {
    let { nombres, apellidos, nro_doc, email, rol } = user || {};

    return (
        <tr className={style}>
            <th scope="row">{nro_registro}</th>
            <td>{nombres} {apellidos}</td>
            <td>{nro_doc}</td>
            <td>{email}</td>
            <td>{rol}</td>
            <td align="center">
                <Link to="/admin/manage-users/edit">
                    <button className="btn btn-primary" onClick={() => setDataToEdit(user)}><i className="bi bi-pencil-fill"></i></button>
                </Link>
                &nbsp;
                <button className="btn btn-danger" onClick={() => deleteData(nro_doc)}><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    );
};

export default TableUsersRow;
