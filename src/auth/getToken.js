export function getToken() {
    try {
        const token = localStorage.getItem("token");
        return token    
    } catch (error) {
        console.log(error)
    }
}