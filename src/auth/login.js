import { helpHttp } from '../helpers/helpHttp';
import { toast } from 'react-toastify';

let api = helpHttp();
let url = process.env.REACT_APP_API_URL;

export const login = (user) => {
    let endpoint = url + process.env.REACT_APP_API_LOGIN;
    let options = {
        body: user,
        headers: { "content-type": "application/json" },
    };

    api.post(endpoint, options).then((res) => {
        if (!res.estado) {
            toast.error("No hay conexión con la base de datos!!!", { autoClose: 10000, theme: "colored" })
        }
        if (res.estado === "ok") {
            localStorage.setItem("token", res.token);
            window.location.href = res.url;
        } else {
            toast.error(res.msg)
        }
    })
}
