import axios from "axios"
import { loginStart, loginSuccess, loginFailure, logout} from "./AuthAction"
const dotenv = require("dotenv")
dotenv.config()

// login
export const login = async (user, dispatch) =>{
    dispatch(loginStart())
    try {
        const res =  await axios.post(process.env.REACT_APP_API + "/auth/login",user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        console.log(process.REACT_APP_API.env )
        dispatch(loginFailure())
    }
}

export const logOut = async (dispatch) =>{
    dispatch(logout())
}