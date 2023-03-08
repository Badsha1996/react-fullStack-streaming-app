import {InfoOutlined, PlayArrow} from "@mui/icons-material";
import "./hero.scss"
import axios from "axios"
import {Link} from "react-router-dom"
import {useQuery} from "@tanstack/react-query";
import Loading from "../loading/Loading";

const Hero = ({type, setGenre}) => {
    const getRandomContent = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_API + `/movies/random?type=${type}`, {
                headers: {
                    token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            
            return res.data[0] 
        } catch (error) {
            console.log(error)
        }
    }
    const {status:randomStatus, error:randomError, data:randomMovie} = useQuery({
        queryKey: ["randomMovie"], 
        queryFn: getRandomContent})
   
    if(randomStatus==="loading") return <><Loading/></>
    if(randomError==="error") return <><h1>Error</h1></>
    
    return (
        <div className="Hero">
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
                    randomMovie.img
                }
                className="hero-img"
                alt="background pic"
                loading="eager"/>
            <div className="info">
                <img src={
                        randomMovie.imgTitle
                    }
                    alt=""
                    loading="eager"/>
                <span className="desc">
                    {
                    randomMovie.desc.slice(0, 200)
                } </span>
                {
                randomMovie._id === undefined  === undefined ? <h3>Loading...</h3> : <>
                    <div className="buttons">
                        <Link to="/watch"
                            state={
                                {movie: randomMovie}
                        }>
                            <button className="play">
                                <PlayArrow/>
                                <span className="play-text">Play</span>
                            </button>
                        </Link>
                        <Link to="/info"
                            state={
                                {movie: randomMovie}
                        }>
                            <button className="more">
                                <InfoOutlined/>
                                <span>Info</span>
                            </button>
                        </Link>
                    </div>


                </>
            } </div>
        </div>
    )
}

export default Hero
