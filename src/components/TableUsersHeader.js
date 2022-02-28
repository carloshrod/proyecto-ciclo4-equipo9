import React, { useState } from 'react';

function TableUsersHeader({ headers, onSorting }) {
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
                {headers.map(({ name, field, sortable }) => (
                    <th
                        data-tip data-for={(name === "Nombre" || name === "Email" ? "toolTipSort" : name === "Rol"  ? "toolTipInfo" : "")}
                        className={name === "Nombre" || name === "Email" || name === "Rol" ? "pointer" : ""}
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

export default TableUsersHeader;
