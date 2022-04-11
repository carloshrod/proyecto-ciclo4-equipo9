export const getLoggedUser = (usersDb, payload) => {
    try {
        const displayUsers = usersDb.filter((user) => user.nro_doc === payload.nro_doc).map((user) => {
            return user
        })
        if (displayUsers.length > 0) {
            return displayUsers[0]
        } else {
            return false
        }    
    } catch (error) {
        return false
    }
}
