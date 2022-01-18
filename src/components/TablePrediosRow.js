import React from 'react';
import { Link } from 'react-router-dom';

const TablePrediosRow = ({ predio, nro_registro, setDataToEdit, deleteData, linkTo }) => {
    let { codigo, nom_prop, doc_prop, direccion, barrio } = predio || {};

    return (
        <tr>
            <th scope="row">{nro_registro}</th>
            <td>{codigo}</td>
            <td>{nom_prop}</td>
            <td>{doc_prop}</td>
            <td>{direccion}</td>
            <td>{barrio}</td>
            <td align="center">
                <Link to={linkTo}>
                    <button className="btn btn-primary" onClick={() => setDataToEdit(predio)}><i className="bi bi-pencil-fill"></i></button>
                </Link>
                &nbsp;
                <button className="btn btn-danger" onClick={() => deleteData(codigo)}><i className="bi bi-trash"></i></button>
                &nbsp;
            </td>
        </tr>
    );
};

export default TablePrediosRow;
