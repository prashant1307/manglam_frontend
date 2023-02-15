import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS } from "./Auth.types"
import axios from "axios";
export const login=(data)=>async(dispatch)=>{
    dispatch({type:AUTH_LOGIN_LOADING});
    try {
        let res=await axios.post("http://localhost:8080/user/login",data)
       
        dispatch({type:AUTH_LOGIN_SUCCESS,token:res.data.token})
        return res;
    } catch (e) {
        console.log(e);
        dispatch({type:AUTH_LOGIN_ERROR})
        return false;
    }
}