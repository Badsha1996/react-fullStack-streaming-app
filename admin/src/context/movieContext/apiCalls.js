import axios from "axios"
import {
    getMovieFailure,
    getMovieStart,
    getMovieSuccess,
    deleteMovieFailure,
    deleteMovieSuccess,
    deleteMovieStart,
    createMovieFailure,
    createMovieStart,
    createMovieSuccess,
    updateMovieStart,
    updateMovieFailure,
    updateMovieSuccess
} from "./MovieAction"
const dotenv = require("dotenv")
dotenv.config()
export const getMovies = async (dispatch) => {
    dispatch(getMovieStart())
    try {
        const res = await axios.get(process.env.REACT_APP_API + "/movies", {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getMovieSuccess(res.data))
    } catch (error) {
        dispatch(getMovieFailure())
    }
}

// create
export const createMovies = async (movie,dispatch) => {
    dispatch(createMovieStart())
    console.log("created")
    
    try {
        const res = await axios.post(process.env.REACT_APP_API + "/movies",movie, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createMovieSuccess(res.data))
    } catch (error) {
        dispatch(createMovieFailure())
    }
}

// create
export const updateMovies = async (movie,dispatch) => {
    dispatch(updateMovieStart())
    console.log("updated")
    try {
        const res = await axios.put(process.env.REACT_APP_API + "/movies/" + movie._id ,movie, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(updateMovieSuccess(res.data))
    } catch (error) {
        dispatch(updateMovieFailure())
    }
}

// delete 
export const deleteMovies = async (id,dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete(process.env.REACT_APP_API + "/movies/" + id, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure())
    }
}
