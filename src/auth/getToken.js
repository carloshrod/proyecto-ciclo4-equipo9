import jwtDecode from "jwt-decode";

export function getToken() {
    const token = localStorage.getItem("token");
    if (token) {
        const payload = jwtDecode(token);
        return {token, payload};
    }
}