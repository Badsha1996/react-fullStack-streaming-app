import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@material-ui/icons"
import "./listItem.scss"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
const ListItem = ({index, item}) => {
    const [movie, setMovie] = useState({}) // empty-obj
    

    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                    }
                })
                setMovie(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getMovies()
    }, [item])

    return (

        <div className="ListItem">
            <img src={
                    movie.img
                }
                alt="anime"/>
            <div className="itemInfo">
                <div className="icons">
                    <Link to="/watch"
                        state={
                            {movie: movie}
                    }>
                        <PlayArrow className="icon"/></Link>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownOutlined className="icon"/>
                </div>
                <div className="itemInfoDetail">
                    <span>{
                        movie.duration
                    }</span>
                    <span className="limit">
                        {
                        movie.Agelimit
                    }</span>
                    <span>{
                        movie.year
                    }</span>
                </div>
                <div className="desc">
                    {
                    movie.desc
                } </div>
                <div className="genre">
                    {
                    movie.genre
                } </div>
            </div>
        </div>
    )
}

export default ListItem
