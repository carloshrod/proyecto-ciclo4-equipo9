import jwtDecode from "jwt-decode";

export function getPayload() {
    const token = localStorage.getItem("token");
    if (token) {
        const payload = jwtDecode(token);
        return payload;
    }
}