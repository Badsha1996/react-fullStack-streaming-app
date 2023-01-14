import axios from "axios"
import {
    getMovieFailure,
    getMovieStart,
    getMovieSuccess,
    deleteMovieFailure,
    deleteMovieSuccess,
    deleteMovieStart
} from "./MovieAction"

export const getMovies = async (dispatch) => {
    dispatch(getMovieStart())
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(getMovieSuccess(res.data))
    } catch (error) {
        dispatch(getMovieFailure())
    }
}

export const deleteMovies = async (id,dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure())
    }
}
