import React from 'react';
import Message from './Message';
import PredioInfo from './PredioInfo';

function PredioDetails({ search, predio }) {

    if (!predio) return null;

    return (
        <>

            <>
                {predio.predios ? (
                    <PredioInfo predio={predio.predios[0]} />
                ) : (
                    <Message
                        msg={`Error: no existe el predio '<em>${search.predio}</em>'`}
                        bgColor="#dc3545"
                    />
                )}
            </>
        </>
    )
}

export default PredioDetails;
