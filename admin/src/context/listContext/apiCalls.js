import axios from "axios"
import {
    getListsFailure,
    getListsStart,
    getListsSuccess,
    deleteListStart,
    deleteListSuccess,
    deleteListFailure,
    createListStart,
    createListSuccess,
    createListFailure,
    updateListFailure,
    updateListStart,
    updateListSuccess
} from "./ListAction"
const dotenv = require("dotenv")
dotenv.config()
export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const res = await axios.get(process.env.REACT_APP_API + "/lists", {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFailure())
    }
}

// create
export const createList = async (list,dispatch) => {
    dispatch(createListStart())
    try {
        const res = await axios.post(process.env.REACT_APP_API + "/lists",list, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createListSuccess(res.data))
    } catch (error) {
        dispatch(createListFailure())
    }
}

// update
export const updateList = async (list,dispatch) => {
    dispatch(updateListStart())
    try {
        const res = await axios.put(process.env.REACT_APP_API + "/lists/" + list._id ,list, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(updateListSuccess(res.data))
    } catch (error) {
        dispatch(updateListFailure())
    }
}

// delete 
export const deleteList = async (id,dispatch) => {
    dispatch(deleteListStart())
    try {
        await axios.delete(process.env.REACT_APP_API + "/lists/" + id, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFailure())
    }
}
