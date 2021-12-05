import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import SidebarItem from "../SidebarItem";
import ContainerAdmin from "../ContainerAdmin";
import FormCrearPredio  from "../forms/FormCrearPredio";
import FooterAdmin from "../FooterAdmin";

export default function CreatePredio(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar
            item1={<SidebarItem linkTo="/home-admin" icono="bi bi-grid" titulo="Dashboard" />}
            item2={<SidebarItem linkTo="/home-admin/my-profile" icono="bi bi-person-circle" titulo="Mi Perfil" />}
            item3={<SidebarItem linkTo="/home-admin/create-user" icono="bi bi-person-plus-fill" titulo="Crear Usuario" />}
            item4={<SidebarItem linkTo="/home-admin/manage-users" icono="bi bi-pencil-fill" titulo="Gestionar Usuarios" />}
            item5={<SidebarItem linkTo="/home-admin/create-predio" icono="bi bi-plus-circle-fill" titulo="Crear Predio" />}
            item6={<SidebarItem linkTo="/home-admin/manage-predio" icono="bi bi-pencil-fill" titulo="Gestionar Predios" />} 
        />
        <ContainerAdmin titulo="Crear Predio" subtitulo="Crear Predio">
            <FormCrearPredio/> {/* Children */}
        </ContainerAdmin>
        <FooterAdmin/>
        </>
    )
}