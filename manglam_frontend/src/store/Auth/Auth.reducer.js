import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS } from "./Auth.types"

let initState={
    loading:false,
    error:false,
    isAuth:false,
    token:''
}
export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case AUTH_LOGIN_LOADING:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case AUTH_LOGIN_ERROR:{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        case AUTH_LOGIN_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token:action.token
            }
        }
        default:{
            return state;
        }
    }
}