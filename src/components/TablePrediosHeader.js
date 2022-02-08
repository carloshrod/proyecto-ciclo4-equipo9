import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

function TablePrediosHeader({ headers, onSorting }) {

    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc";
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    };

    return (
        <thead>
            <ReactTooltip id="toolTipSort" place="top" type="dark" effect="solid">
                Ordenar<i className="bi bi-arrow-down-up" />
            </ReactTooltip>
            <tr>
                {headers.map(({ name, field, sortable }) => (
                    <th
                        data-tip data-for={(name === "Código" || name === "Nombre Propietario" || name === "Dirección" || name === "Barrio" ? "toolTipSort" : "")}
                        className={name === "Código" || name === "Nombre Propietario" || name === "Dirección" || name === "Barrio" ? "pointer" : ""}
                        key={name}
                        onClick={() => sortable ? onSortingChange(field) : null}
                    >
                        {name}
                        {sortingField && sortingField === field && (
                            sortingOrder === "asc"
                                ? <i className="bi bi-caret-down-fill" />
                                : <i className="bi bi-caret-up-fill" />
                        )
                        }
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TablePrediosHeader;
