import React from 'react';
import Message from './Message';
import PredioInfo from './PredioInfo';

function PredioDetails({ search, predio }) {
    console.log(predio);
    if (!predio) return null;

    return (
        <>

            <>
                {predio ? (
                    <PredioInfo predio={predio} />
                ) : (
                    <Message
                        msg={`Error: no existe el predio '<em>${search.codigo}</em>'`}
                        bgColor="#dc3545"
                    />
                )}
            </>
        </>
    )
}

export default PredioDetails;
