const reducer = (state = {name: '', age: 0}, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return { ...state, user: action.user }
        }
        case "REMOVE_USER": {
            return { user: null }
        }
        default: {
            return state;
        }
    }
}
export default reducer;