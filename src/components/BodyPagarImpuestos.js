import React from 'react'
import './CompStyles.css'; 
import Footer from './Footer';
function BodyPagarImpuestos() {
    return (
        <>
        <div id="container-100vh" className="container" >

            <div className="" style={{marginTop: '50px'}}>
                <h1 className="text-center font-weight-bold">Pago de impuestos</h1>
            </div>
            <section className="section mt-5 mb-4">
                <div className="row">
                    <table class="table table-light">
                        <thead>
                            <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre del propietario</th>
                            <th scope="col">Cédula</th>
                            <th scope="col">Dirección del predio</th>
                            <th scope="col">Total</th>
                            <th scope="col">Pago</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Sebastian Vargas</td>
                            <td>123456789</td>
                            <td>Calle falsa 123</td>
                            <td>$5.000.000</td>
                            <td>Boton</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>$85.000.000</td>
                            <td>Boton</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>$150.000.000</td>
                            <td>Boton</td>
                            </tr>
                            
                        </tbody>
                        </table>
                </div>
            
            </section>
            
        </div>
        
        </>
        
    )
}

export default BodyPagarImpuestos;
