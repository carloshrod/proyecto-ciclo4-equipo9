import HeaderAdmin from "../HeaderAdmin";
import ContainerAdmin from "../ContainerAdmin";
import FormCrearPredio  from "../forms/FormCrearPredio";
import FooterAdmin from "../FooterAdmin";
import { SidebarAdmin, SidebarUserInt } from "./HomeAdmin";

export default function CreatePredio({tipo}){
    return(
        <>
        <HeaderAdmin/>
        {tipo ==="admin" ? SidebarAdmin : SidebarUserInt}
        <ContainerAdmin titulo="Crear Predio" subtitulo="Crear Predio">
            <FormCrearPredio/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}