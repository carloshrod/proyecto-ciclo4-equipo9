import React from 'react';

function Container({ titulo, className, children }) {
    return (
        <>
            <div className={className} >
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
