const updateUser = (user) => {
return {
    type: 'ADD_USER',
    user,
}
}

const removeUser = () => {
    return{
        type: 'RMOVE_USER',
    }
}

export {
    updateUser,
    removeUser
}