import React from 'react';
import { Link } from 'react-router-dom';

const TablePrediosRow = ({ predio, setDataToEdit, deleteData }) => {
    let { id, codigo, nom_prop, doc_prop, direccion, barrio } = predio || {};

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{codigo}</td>
            <td>{nom_prop}</td>
            <td>{doc_prop}</td>
            <td>{direccion}</td>
            <td>{barrio}</td>
            <td align="center">
                <Link to="/home-admin/manage-predio/edit">
                    <button className="btn btn-primary" onClick={() => setDataToEdit(predio)}><i className="bi bi-pencil-fill"></i></button>
                </Link>
                &nbsp;
                <button className="btn btn-danger" onClick={() => deleteData(id)}><i className="bi bi-trash"></i></button>
                &nbsp;
                <Link to="/home-admin/manage-predio/fecha-pago-descuentos">
                    <i className="bi bi-calendar-check"></i>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/home-admin/manage-predio/ejecutar-algoritmos">
                    <i className="bi bi-cpu"></i>
                </Link>            </td>
        </tr>
    );
};

export default TablePrediosRow;
