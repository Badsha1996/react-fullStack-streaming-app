import axios from "axios"
import { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure} from "./AuthAction"

// register
export const register = async (user, dispatch) =>{
    dispatch(registerStart())
    try {
        const res =  await axios.post("auth/register",user)
        res.data.isAdmin && dispatch(registerSuccess(res.data))
    } catch (error) {
        dispatch(registerFailure())
    }
}

// login
export const login = async (user, dispatch) =>{
    dispatch(loginStart())
    try {
        const res =  await axios.post("auth/login",user)
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logOut = async (dispatch) =>{
    dispatch(logout())
}