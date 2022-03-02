import React from 'react';
import Button from './Button';
import PredioInfo from './PredioInfo';

function PredioDetails({ predio }) {
    if (!predio) return null;

    return (
        <>
            <PredioInfo predio={predio} />
            <Button msg={`El predio con código <span class="text-danger">${predio.codigo}</span> fue asociado a su cuenta exitosamente!!!`}>
                Asociar predio
            </Button>
        </>
    )
}

export default PredioDetails;
