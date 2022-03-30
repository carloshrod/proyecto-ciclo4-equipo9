import { getToken } from '../auth/getToken';
import { helpHttp } from '../helpers/helpHttp';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const useCrudPredios = (prediosDb, setPrediosDb, usersDb, setUsersDb, historial, setHistorial) => {
    let api = helpHttp();
    let url = process.env.REACT_APP_API_URL;
    const token = getToken()

    // ********** Crear Predio **********
    const createPredio = (predio) => {
        predio.estado = 1;
        let vrPredio = predio.valor_predio.replace(/[$.]/g, '');
        let vrPredial = vrPredio * 0.01;
        predio.valor_predial = Math.round(vrPredial);
        let endpoint = url + process.env.REACT_APP_API_GUARDAR_P;
        let options = {
            body: predio,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };
        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                if (res.data1) {
                    setPrediosDb([...prediosDb, res.data1]);
                    toast.success(res.msg);
                    let newData = usersDb.map((e) => (e._id === res.data2._id ? res.data2 : e));
                    setUsersDb(newData);
                    setHistorial([...historial, res.data3]);
                } else {
                    toast.error(res.msg);
                }
            } else {
                toast.error(res.msg);
            }
        });
    };

    // ********** Editar Predio **********
    const updatePredio = (predio) => {
        let vrPredio = predio.valor_predio.replace(/[$.]/g, '');
        let vrPredial = vrPredio * 0.01;
        predio.valor_predial = Math.round(vrPredial);
        let endpoint = url + process.env.REACT_APP_API_EDITAR_P;
        let options = {
            body: predio,
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
        };
        api.post(endpoint, options).then((res) => {
            if (!res.estado) {
                toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
            }
            if (!res.err) {
                let newData = prediosDb.map((e) => (e._id === predio._id ? predio : e));
                setPrediosDb(newData);
                let newUsersData = usersDb.map((e) => (e._id === res.data1._id ? res.data1 : e));
                setUsersDb(newUsersData);
                setHistorial([...historial, res.data2]);
                if (res.estado === "ok") {
                    toast.success(res.msg)
                } else {
                    toast.error(res.msg)
                }
            } else {
                toast.error(res.msg);
            }
        });
    };

    // ********** Eliminar Predio **********
    const deletePredio = (codigo) => {
        Swal.fire({
            html: `¿Estás seguro que quieres eliminar el predio con código <b>${codigo}</b>?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0b295e',
            cancelButtonColor: '#be0d1f',
            confirmButtonText: 'Sí, aceptar',
            cancelButtonText: 'Cancelar'
        }).then(res => {
            if (res.isConfirmed) {
                let endpoint = url + process.env.REACT_APP_API_ELIMINAR_P + codigo;
                let options = {
                    headers: {
                        "content-type": "application/json",
                        "authorization": `Bearer ${token}`
                    },
                };
                api.post(endpoint, options).then((res) => {
                    if (!res.estado) {
                        toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
                    }
                    if (!res.err) {
                        let newData = prediosDb.filter((el) => el.codigo !== codigo);
                        setPrediosDb(newData);
                        toast.success(res.msg);
                        let newUsersData = usersDb.map((e) => (e._id === res.data1._id ? res.data1 : e));
                        setUsersDb(newUsersData);
                        setHistorial([...historial, res.data2]);
                    } else {
                        toast.error(res.msg);
                    }
                });
            }
        });
    };

    return {
        createPredio,
        updatePredio,
        deletePredio
    }
}