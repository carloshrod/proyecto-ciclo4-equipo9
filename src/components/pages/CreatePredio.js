import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import FormCrearPredio  from "../FormCrearPredio";
import FooterAdmin from "../FooterAdmin";

export default function CreatePredio(){
    return(
        <>
        <HeaderAdmin/>
        <Sidebar/>
        <main id="main" className="main">
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