import React from 'react';
import Button from './Button';
import Message from './Message';
import Modal from './Modal';
import PredioInfo from './PredioInfo';

function PredioDetails({ search, predio }) {
    if (!predio) return null;

    return (
        <>

            <>
                {predio ? (
                    <>
                        <PredioInfo predio={predio} />
                        <Button>
                            Asociar predio
                        </Button>
                        <Modal>
                            El predio fue asociado exitosamente a su cuenta!!!
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

export default PredioDetails;
