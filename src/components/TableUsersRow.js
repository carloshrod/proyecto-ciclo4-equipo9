import React from 'react';
import { Link } from 'react-router-dom';

const TableUsersRow = ({ user, setDataToEdit, deleteData }) => {
    let { id, nombre, nro_doc, email, telefono } = user || {};

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{nombre}</td>
            <td>{nro_doc}</td>
            <td>{email}</td>
            <td>{telefono}</td>
            <td align="center">
                <Link to="/home-admin/manage-users/edit">
                    <button className="btn btn-primary" onClick={() => setDataToEdit(user)}><i className="bi bi-pencil-fill"></i></button>
                </Link>
                &nbsp;
                <button className="btn btn-danger" onClick={() => deleteData(id)}><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    );
};

export default TableUsersRow;
