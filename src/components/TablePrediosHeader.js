import React, { useState } from 'react';

function TablePrediosHeader({ onSorting }) {

    const headers = [
        { name: "#", field: "index", sortable: false },
        { name: "Código", field: "codigo", sortable: true, className: "pointer" },
        { name: "Nombre Propietario", field: "nom_prop", sortable: true, className: "pointer" },
        { name: "Doc. Propietario", field: "doc_prop", sortable: false, className: "d-none d-sm-table-cell" },
        { name: "Dirección", field: "direccion-predio", sortable: true, className: "d-none d-sm-table-cell pointer" },
    ];

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
            <tr>
                {headers.map(({ name, field, sortable, className }) => (
                    <th
                        data-tip data-for={(name === "Código" || name === "Nombre Propietario" || name === "Dirección" ? "toolTipSort" : "")}
                        className={className}
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
