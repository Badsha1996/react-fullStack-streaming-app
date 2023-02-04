import {Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined} from "@mui/icons-material";
import "./listItem.scss"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Loading from "../loading/Loading";
const ListItem = ({index, item}) => {
    const [movie, setMovie] = useState({}) // empty-obj
    
    const getMovies = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_API + "/movies/find/" + item, {
                headers: {
                    token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            setMovie(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getMovies()
    }, [item])
    
    return (

        <div className="ListItem">
            {!movie?(<>
            <Loading/>
            </>):(
                <>
                {movie.img?(<img src={movie.img } alt="anime"/>):(<><Loading/></>)}

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
                    movie.desc===undefined?"":movie.desc.slice(0,70) + "..."
                } </div>
                <div className="genre">
                    {
                    movie.genre
                } </div>
            </div>
                </>
            )}
            
        </div>
    )
}

export default ListItem
