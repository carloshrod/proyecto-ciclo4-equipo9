import { useEffect, useState } from "react";
import MaskedInput from 'react-text-mask'

const InputForm = ({ id, name, logo, errorMessage, label, onChange, reset, mask, ...inputProps }) => {
    const [focused, setFocused] = useState(false);

    const handleBlur = (e) => {
        setFocused(true);
    };

    useEffect(() => {
        setFocused(false);
    }, [reset])

    return (
        <>
            <div className={`${(id === 7 && name === "direccion") ? "col-11" : "col-5"} m-auto mt-2 mb-2`}>
                <label htmlFor={id} className="form-label">{label}</label>
                {name === "tipo_doc"
                    ?
                    <>
                        <select
                            {...inputProps}
                            id={id}
                            name={name}
                            className="form-select"
                            onChange={onChange}
                            onBlur={handleBlur}
                            focused={focused.toString()}
                        >
                            <option defaultValue>Seleccionar</option>
                            <option value="1">CC</option>
                            <option value="2">CE</option>
                            <option value="3">Pasaporte</option>
                        </select>
                        <span className="errorMsg">{errorMessage}</span>
                    </>
                    :
                    !mask
                        ?
                        <>
                            <div className={logo && "input-group has-validation"}>
                                {logo && <span className="input-group-text" id="inputGroupPrepend">
                                    <i className={logo}></i>
                                </span>
                                }
                                <input
                                    {...inputProps}
                                    id={id}
                                    name={name}
                                    className="form-control"
                                    onChange={onChange}
                                    onBlur={handleBlur}
                                    focused={focused.toString()}
                                />
                                <span className="errorMsg col-12">{errorMessage}</span>
                            </div>
                        </>
                        :
                        <>
                            <div className={logo && "input-group has-validation"}>
                                {logo && <span className="input-group-text" id="inputGroupPrepend">
                                    <i className={logo}></i>
                                </span>
                                }
                                <MaskedInput
                                    mask={mask}
                                    guide={false}
                                    {...inputProps}
                                    id={id}
                                    name={name}
                                    className="form-control"
                                    onChange={onChange}
                                    onBlur={handleBlur}
                                    focused={focused.toString()}
                                />
                                <span className="errorMsg col-12">{errorMessage}</span>
                            </div>
                        </>
                }
            </div>
        </>
    );
};

export default InputForm;
