export const getUsersRequest = () => {
    return{
        type: "GETUSERSREQUEST"
    }
}

export const getUsersSuccess = ({users}) => {
    return{
        type: "GETUSERSSUCCESS",
        payload: {
            users
        }
    }
}

export const getUsersError = ({error}) => {
    return{
        type: "GETUSERSERROR",
        payload: {error}
    }
}

const initialState = {
    users: [],
    loading: false,
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETUSERSREQUEST":
            return {
                ...state,
                loading: true
            }
        case "GETUSERSSUCCESS":
            console.log(action.payload.users)
            return {
                ...state,
                users: action.payload.users.data,
                loading: false
            }
        case "GETUSERSERROR":
            return {
                ...state,
                errror: action.payload.error,
                loading: false
            }
        default: 
        return state;
    }
}

export default userReducer;