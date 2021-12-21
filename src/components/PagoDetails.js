import React from 'react';
import Button from './Button';
import Message from './Message';
import Modal from './Modal';
import PredioInfo from './PredioInfo';

function PagoDetails({ search, predio }) {
    if (!predio) return null;

    return (
        <>

            <>
                {predio ? (
                    <>
                        <PredioInfo predio={predio} />
                        <Button>
                            Pagar ${predio.valor_predial}
                        </Button>
                        <Modal>
                            Su pago fue procesado exitosamente!!!
                        </Modal>
                    </>
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

export default PagoDetails;
