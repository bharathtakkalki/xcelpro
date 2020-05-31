const initialState = {
    user:'',
    accessToken:'',
    uuid:'',
}


const reducer = (state = initialState ,action) => {
    switch (action.type) {
        case 'UPDATE_ACCESS_TOKEN':
            return{
                ...state,
                accessToken:action.accessToken
            }
        case 'UPDATE_UUID':
            return{
                ...state,
                uuid:action.uuid
            }
        case 'UPDATE_USER':
            return{
                ...state,
                user:action.user
            }

        default:
            break;
    }
    return state;
}


export default reducer;