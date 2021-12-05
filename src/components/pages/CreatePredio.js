import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import ContainerAdmin from "../ContainerAdmin";
import FormCrearPredio  from "../forms/FormCrearPredio";
import FooterAdmin from "../FooterAdmin";

export default function CreatePredio(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <ContainerAdmin titulo="Crear Predio" subtitulo="Crear Predio">
            <FormCrearPredio/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}