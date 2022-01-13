import React from 'react';

function Button({ children }) {
    return (
        <>
            <form className="search-form d-flex align-items-center">
                <div className="m-auto">
                    {/* <input className="btn btn-success m-4" type="button" value={value} OnClick={action} /> */}
                    <button type="button" className="btn btn-primary m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        {children}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Button;
