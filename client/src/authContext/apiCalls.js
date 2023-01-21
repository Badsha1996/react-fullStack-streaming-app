import axios from "axios"
import { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure} from "./AuthAction"


// login
export const login = async (user, dispatch) =>{
    dispatch(loginStart())
    try {
        const res =  await axios.post("auth/login",user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}

export const logOut = async (dispatch) =>{
    dispatch(logout())
}