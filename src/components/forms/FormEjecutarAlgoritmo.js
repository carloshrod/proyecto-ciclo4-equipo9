import React from "react";
import { Link } from "react-router-dom";


export default function FormEjecutarAlgoritmo() {
    return (
        <>
            <section className="section min-vh-100 mt-3">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <br></br>
                                </div>
                                <div class="container col-sm-6 bg-white border">
                                    <h1>Generar Cobros Anuales</h1>
                                    <p>This container has a border and some extra padding and margins.</p>
                                    <Link to=""className="btn btn-success">Generar</Link>
                                </div>
                                <div>
                                    <br></br>
                                </div>
                                <div class="container col-sm-6 bg-white border">
                                    <h1>Generar Multas</h1>
                                    <p>This container has a border and some extra padding and margins.</p>
                                    <Link to="" className="btn btn-success"> Generar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}