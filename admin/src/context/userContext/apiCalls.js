import axios from "axios"

import { deleteUserFailure, deleteUserStart, deleteUserSuccess, getUserFailure, getUserStart, getUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./UserAction"
const dotenv = require("dotenv")
dotenv.config()
// FETCH USER
export const getUser = async (dispatch) => {
    dispatch(getUserStart())
    try {
        const res = await axios.get(process.env.REACT_APP_API + "/users", {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getUserSuccess(res.data))
        
    } catch (error) {
        dispatch(getUserFailure())
    }
}



// update
export const updateUser = async (user,dispatch) => {
    dispatch(updateUserStart())
    
    try {
        const res = await axios.put(process.env.REACT_APP_API + "/users/" + user._id ,user, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(updateUserSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        dispatch(updateUserFailure())
    }
}

// delete 
export const deleteUser = async (id,dispatch) => {
    dispatch(deleteUserStart())
    try {
        await axios.delete(process.env.REACT_APP_API + "/users/" + id, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteUserSuccess(id))
    } catch (error) {
        dispatch(deleteUserFailure())
    }
}
