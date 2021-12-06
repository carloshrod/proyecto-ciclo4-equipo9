import React from "react";
import HeaderAdmin from "../HeaderAdmin";
import ContainerAdmin from "../ContainerAdmin";
import TablePredio from "../TablePredio";
import TablePredioUserInt from "../TablePredioUserInt";
import FooterAdmin from "../FooterAdmin";
import { SidebarAdmin, SidebarUserInt } from "./HomeAdmin";

export default function ManagePredio({ tipo }) {
    return (
        <>
            <HeaderAdmin />
            {tipo === "admin" ? SidebarAdmin : SidebarUserInt}
            <ContainerAdmin titulo="Gestionar Predios" subtitulo="Gestionar Predios">
                {tipo === "admin" ? <TablePredio/> : <TablePredioUserInt/>} {/* Children */}
            </ContainerAdmin>
            <FooterAdmin />
        </>
    )
}