import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const TableUsersRow = ({ user, nro_registro, setDataToEdit, deleteData, userRol }) => {
    let { nombres, apellidos, nro_doc, email, rol } = user || {};

    return (
        <tr>
            <th scope="row">{nro_registro}</th>
            <td>{nombres} {apellidos}</td>
            <td>{nro_doc}</td>
            <td>{email}</td>
            <td>{rol}</td>
            <td align="center">
                <Link to={userRol !== 1 ? "#" : "/admin/manage-users/edit"}>
                    <ReactTooltip id="toolTipEdit" place="top" type="dark" effect="solid">
                        Editar usuario
                    </ReactTooltip>
                    <button
                        data-tip data-for="toolTipEdit"
                        type="button" className="btn btn-primary"
                        disabled={userRol !== 1 ? true : false}
                        onClick={() => setDataToEdit(user)}>
                        <i className="bi bi-pencil-fill" />
                    </button>
                </Link>
                &nbsp;
                <Link to="#">
                    <ReactTooltip id="toolTipDelete" place="top" type="dark" effect="solid">
                        Eliminar usuario
                    </ReactTooltip>
                    <button
                        data-tip data-for="toolTipDelete"
                        type="button"
                        className="btn btn-danger"
                        disabled={userRol === 2 ? true : false}
                        onClick={() => deleteData(nro_doc)}>
                        <i className="bi bi-trash" />
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default TableUsersRow;
