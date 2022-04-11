import { getToken } from '../auth/getToken';
import { helpHttp } from '../helpers/helpHttp';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { logout } from '../auth/logout';

export const useCrudUsers = (usersDb, setUsersDb) => {
    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL;
    const token = getToken()

    // ********** Crear Usuario **********
    const createUser = async (user) => {
        let endpoint = url + process.env.REACT_APP_API_GUARDAR;
        let options = {
            headers: {
                "authorization": `Bearer ${token}`
            },
        };
        await axios.post(endpoint, user, options).then((res) => {
            if (!res.data.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                if (res.data) {
                    setUsersDb([...usersDb, res.data.user]);
                    toast.success(res.data.msg)
                } else {
                    toast.error(res.data.msg)
                }
            } else {
                toast.error(res.data.msg)
            }
        });
    };

    // Registro de usuarios externos:
    const registerUser = (user) => {
        user.rol = 3; // Rol 3 -> Usuario Externo
        user.estado = 1;
        let endpoint = url + process.env.REACT_APP_API_REGISTRO;
        let options = {
            body: user,
            headers: { "content-type": "application/json" },
        };

        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (res.data) {
                toast.success(res.msg);
                setTimeout(() => {
                    window.location.href = process.env.REACT_APP_URL_LOGIN
                }, 3000);
            } else {
                toast.error(res.msg);
            }
        })
    };

    // ********** Editar Usuario **********
    const updateUser = async (formData) => {
        let endpoint = url + process.env.REACT_APP_API_EDITAR;
        let options = {
            headers: {
                "authorization": `Bearer ${token}`
            }
        };
        await axios.post(endpoint, formData, options).then((res) => {
            if (!res.data.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                if (res.data.estado === "ok") {
                    let newData = usersDb.map((e) => (e._id === res.data.user._id ? res.data.user : e));
                    setUsersDb(newData);
                    toast.success(res.data.msg)
                } else {
                    toast.error(res.data.msg)
                }
            } else {
                toast.error(res.data.msg)
            }
        });
    };

    // ********** Eliminar Usuario **********
    const deleteUser = (nro_doc) => {
        Swal.fire({
            html: `¿Estás seguro que quieres eliminar el usuario con número de documento <b>${nro_doc}</b>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0b295e',
            cancelButtonColor: '#be0d1f',
            confirmButtonText: 'Sí, aceptar',
            cancelButtonText: 'Cancelar'
        }).then(res => {
            if (res.isConfirmed) {
                let endpoint = url + process.env.REACT_APP_API_ELIMINAR + nro_doc;
                let options = {
                    headers: {
                        "content-type": "application/json",
                        "authorization": `Bearer ${token}`
                    },
                };
                api.del(endpoint, options).then((res) => {
                    if (!res.estado) {
                        toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
                    }
                    if (!res.err) {
                        if (res.estado === "ok") {
                            let newData = usersDb.filter((el) => el.nro_doc !== nro_doc);
                            setUsersDb(newData);
                            toast.success(res.msg)
                        } else {
                            toast.error(res.msg)
                        }
                    } else {
                        toast.error(res.msg)
                    }
                });
            }
        })
    };

    const changePassword = (user) => {
        let endpoint = url + process.env.REACT_APP_API_CAMBIAR_PASSWORD;
        let options = {
            body: user,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        };
        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                if (res.estado === "ok") {
                    toast.success(res.msg, {autoClose: 3000})
                    setTimeout(() => {
                        logout();
                    }, 3000);
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg)
            }
        });
    };

    // Recuperar contraseña:
    const resetPassword = (user) => {
        let endpoint = url + process.env.REACT_APP_API_RESET_PASSWORD;
        let options = {
            body: user,
            headers: { "content-type": "application/json" },
        }

        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.error) {
                if (res.estado === "ok") {
                    toast.info(res.msg)
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg)
            }
        })
    }

    // Restablecer contraseña:
    const newPassword = (user, token) => {
        user.sentToken = token;
        let endpoint = url + process.env.REACT_APP_API_NEW_PASSWORD;
        let options = {
            body: user,
            headers: { "content-type": "application/json" },
        }

        api.post(endpoint, options).then((res) => {
            if (!res.error) {
                if (res.estado === "ok") {
                    toast.success(res.msg, {autoClose: 3000})
                    setTimeout(() => {
                        window.location.href = process.env.REACT_APP_URL_LOGIN
                    }, 3000);
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg)
            }
        })
    }

    return {
        createUser,
        registerUser,
        updateUser,
        deleteUser,
        changePassword,
        resetPassword,
        newPassword
    }
}