import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

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
                    <ReactTooltip id="toolTipEdit" place="top" type="dark" effect="solid">
                        Editar predio
                    </ReactTooltip>
                    <button data-tip data-for="toolTipEdit" type="button" className="btn btn-primary" onClick={() => setDataToEdit(predio)}>
                        <i className="bi bi-pencil-fill"/>
                    </button>
                </Link>
                &nbsp;
                <Link to="#">
                    <ReactTooltip id="toolTipDelete" place="top" type="dark" effect="solid">
                        Eliminar predio
                    </ReactTooltip>
                    <button data-tip data-for="toolTipDelete" type="button" className="btn btn-danger" onClick={() => deleteData(codigo)}>
                        <i className="bi bi-trash"/>
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default TablePrediosRow;
