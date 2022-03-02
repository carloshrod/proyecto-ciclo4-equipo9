import React from 'react';
import Button from './Button';
import PredioInfo from './PredioInfo';

function PagoDetails({ predio }) {
    if (!predio) return null;

    return (
        <>
            <PredioInfo predio={predio} />
            <Button msg={`El pago correspondiente al predio con código <span class="text-danger">${predio.codigo}</span>, por un valor de <span class="text-danger">$${predio.valor_predial}</span> fue procesado exitosamente!!!`}>
                Pagar ${predio.valor_predial}
            </Button>
        </>
    )
}

export default PagoDetails;
