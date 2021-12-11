import React from "react";
import "./CompStyles.css";

const Loader = () => {
    return (
        <div className="lds-ring m-auto">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
