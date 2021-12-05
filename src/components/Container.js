import React from 'react';

function Container({ titulo, children }) {
    return (
        <>
            <div className="container container-center center-v min-vh-100" >
                <div className="container">
                    <div>
                        <h1 className="text-center font-weight-bold">{titulo}</h1>
                        <div>{children}</div>
                    </div>{/* <!-- End Page Title --> */}
                </div>
            </div>
        </>
    )
}

export default Container;
