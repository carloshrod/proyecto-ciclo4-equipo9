import React from 'react';
import Swal from 'sweetalert2';

function Button({ msg, children }) {

    const successMsg = () => {
        Swal.fire({
            html: `<b>${msg}</b>`,
            icon: 'success',
            showCloseButton: true,
            showConfirmButton: false,
            timer: 10000,
            timerProgressBar: true,
        })
    }
    
    return (
        <>
            <form className="search-form d-flex align-items-center">
                <div className="m-auto">
                    {/* <input className="btn btn-success m-4" type="button" value={value} OnClick={action} /> */}
                    <button type="button" className="btn btn-primary m-3" onClick={successMsg}>
                        {children}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Button;
