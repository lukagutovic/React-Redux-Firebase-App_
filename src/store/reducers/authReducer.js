const initState = {}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
        return {
            ...state,
            authError: 'Login failed'
        }
        case 'LOGIN_SUCCESS':
            console.log('Login success');
    
    return {
        ...state,
        authError: null
    }
    case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state;
    default: 
    return state;
    case 'SIGNUP_SUCCESS':
        console.log('signup success');
        return{
            ...state,  //state sa tri tacke poziva state, ali ne overrideuje trenutno stanje
            authError: null
        }
        case 'SIGNUP_ERROR':
            console.log('signup_error');
            return {
                ...state,
                authError: action.err.message //err iz authAction pozvan preko action
            }

}
}
export default authReducer;