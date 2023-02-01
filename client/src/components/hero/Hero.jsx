import {InfoOutlined, PlayArrow} from "@mui/icons-material";
import "./hero.scss"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const Hero = ({type, setGenre}) => {
    const [content, setContent] = useState({img: "", imgTitle: "", desc: ""});
    const [time, setTime] = useState(Date.now());
    const [movie,setMovie] = useState({})
    const getMovies = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_API + "/movies/find/" + content._id, {
                headers: {
                    token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            setMovie(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    const getRandomContent = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_API + `/movies/random?type=${type}`, {
                headers: {
                    token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            setContent(res.data[0])
            content._id && getMovies() 
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getRandomContent()
        const interval = setInterval(() => setTime(Date.now()), 5000);
        return () => {
            clearInterval(interval);
        };
    }, [type,time])
    
    return (<div className="Hero">
        {
        type && (
            <div className="category">
                <span>{
                    type === "movie" ? "Movies" : "Series"
                }</span>
                <select name="genre" id="genre"
                    onChange={
                        e => setGenre(e.target.value)
                }>
                    <option>Genres</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Action">Action</option>
                    <option value="Shonen">Shonen</option>
                    <option value="Drama">Drama</option>
                    <option value="Romance">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Sci-fi">Sci-Fi</option>
                    <option value="Comedy">comedy</option>
                </select>

            </div>
        )
    }
        <img src={
                content.img
            }
            className="hero-img"
            alt="background pic"/>
        <div className="info">
            <img src={
                    content.imgTitle
                }
                alt=""/>
            <span className="desc">
                {
                content.desc.slice(0,200)
            } </span>
            <div className="buttons">
                    <Link to="/watch"
                        state={
                            {movie: movie}
                    }>
                        <button className="play">
                        <PlayArrow/>
                        <span className="play-text">Play</span>
                        </button>
                    </Link>
                    <Link to="/info"
                        state={
                            {movie: movie}
                    }>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        )
        }
        
        export default Hero
