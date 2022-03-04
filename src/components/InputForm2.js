import { useEffect, useState } from "react";

const InputForm2 = ({ id, name, type, logo, errorMessage, label, onChange, reset, ...inputProps }) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const handleBlur = (e) => {
        setFocused(true);
    };

    const handleShow = (e) => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        setFocused(false);
    }, [reset])

    return (
        <>
            <div className="mb-3 justify-content-center d-flex align-items-center">
                <label htmlFor={id} className="col-4 form-label ms-5">{label}</label>
                <div className="input-group has-validation mt-2 mb-2 me-5">
                    {logo && <span className="input-group-text" id="inputGroupPrepend">
                        <i className={logo}></i>
                    </span>
                    }
                    <input
                        {...inputProps}
                        id={id}
                        name={name}
                        type={showPassword ? "text" : type}
                        className="form-control"
                        onChange={onChange}
                        onBlur={handleBlur}
                        focused={focused.toString()}
                    />
                    {type === "password" &&
                        <button className="btn-show-pass input-group-text" type="button" onMouseOver={handleShow} onMouseOut={handleShow}>
                            <i className="bi bi-eye-fill"></i>
                        </button>
                    }
                    <span className="errorMsg col-12">{errorMessage}</span>
                </div>
            </div>

        </>
    );
};

export default InputForm2;
