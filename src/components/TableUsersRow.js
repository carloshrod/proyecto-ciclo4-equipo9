import React from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

const TableUsersRow = ({ user, nro_registro, setDataToEdit, deleteData }) => {
    let { nombres, apellidos, nro_doc, email, rol } = user || {};

    const token = localStorage.getItem("token");
    const payload = jwtDecode(token);

    const handleEdit = (e) => {
        if (payload.rol === 1) {
            setDataToEdit(user);
        } else {
            toast.error("No estás autorizado para realizar esta acción!!!!!!")
        }
    }

    const handleDelete = (e) => {
        if (payload.rol === 1) {
            deleteData(nro_doc);
        } else {
            toast.error("No estás autorizado para realizar esta acción!!!!!!")
        }
    }

    return (
        <tr>
            <th className="align-middle">{nro_registro}</th>
            <td className="align-middle">{nombres} {apellidos}</td>
            <td className="align-middle">{nro_doc}</td>
            <td className="align-middle d-none d-sm-table-cell">{email}</td>
            <td className="align-middle d-none d-sm-table-cell">{rol}</td>
            <td className="align-middle">
                <Link to={payload.rol !== 1 ? "#" : "/admin/manage-users/edit"}>
                    <ReactTooltip id="toolTipEdit" place="top" type="dark" effect="solid">
                        Editar usuario
                    </ReactTooltip>
                    <button
                        data-tip data-for="toolTipEdit"
                        type="button"
                        className="btn my-btn-edit m-1"
                        disabled={payload.rol !== 1 ? true : false}
                        onClick={handleEdit}>
                        <i className="bi bi-pencil-fill" />
                    </button>
                </Link>
                <Link to="#">
                    <ReactTooltip id="toolTipDelete" place="top" type="dark" effect="solid">
                        Eliminar usuario
                    </ReactTooltip>
                    <button
                        data-tip data-for="toolTipDelete"
                        type="button"
                        className="btn my-btn-delete"
                        disabled={payload.rol !== 1 ? true : false}
                        onClick={handleDelete}>
                        <i className="bi bi-trash" />
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default TableUsersRow;
