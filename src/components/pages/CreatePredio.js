import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import FormCrearPredio  from "../forms/FormCrearPredio";
import FooterAdmin from "../FooterAdmin";

export default function CreatePredio(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
            {/* <AdminTitle/> */}
            <div className="pagetitle">
                <h1>Crear Predios</h1>
                <nav>
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home-admin">Home</a></li>
                    <li className="breadcrumb-item active">Crear Predios</li>
                    </ol>
                </nav>
            </div>
            <section className="section dashboard">
                <div className="row">
                <FormCrearPredio/>
                </div>
            </section>
        </main>{/* <!-- End #main --> */}
        <FooterAdmin/>
        </>
    )
}