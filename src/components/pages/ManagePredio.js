import React from "react";
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import ContainerAdmin from "../ContainerAdmin";
import TablePredio from "../TablePredio";
import FooterAdmin from "../FooterAdmin";

export default function ManagePredio(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Gestionar Predios" subtitulo="Gestionar Predios">
            <TablePredio/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}