import React from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

const TableUsersRow = ({ user, nro_registro, setDataToEdit, deleteData }) => {
    let { nombres, apellidos, nro_doc, email, rol } = user || {};

    const tokenIsOk = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = jwtDecode(token);
            return payload.rol;
        }
    }

    const userRol = tokenIsOk();

    const handleEdit = (e) => {
        if (userRol === 1) {
            setDataToEdit(user);
        } else {
            toast.error("No estás autorizado para realizar esta acción!!!!!!")
        }
    }

    const handleDelete = (e) => {
        if (userRol === 1) {
            deleteData(nro_doc);
        } else {
            toast.error("No estás autorizado para realizar esta acción!!!!!!")
        }
    }

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
                        type="button"
                        className="btn btn-primary"
                        disabled={userRol !== 1 ? true : false}
                        onClick={handleEdit}>
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
                        disabled={userRol !== 1 ? true : false}
                        onClick={handleDelete}>
                        <i className="bi bi-trash" />
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default TableUsersRow;
