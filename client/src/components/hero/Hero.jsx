import {InfoOutlined, PlayArrow} from "@material-ui/icons"
import "./hero.scss"
import Text from "../../assets/Text.png"
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const Hero = ({type, setGenre}) => {
    const [content, setContent] = useState({img: "", imgTitle: "", desc: ""});
    const [time, setTime] = useState(Date.now());
    const getRandomContent = async () => {
        try {
            const res = await axios.get(`/movies/random?type=${type}`, {
                headers: {
                    token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            setContent(res.data[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getRandomContent()
        // const interval = setInterval(() => {
        //     getRandomContent()
        //     setTime(Date.now()), 5000
        // });
        return () => {
            // clearInterval(interval);
        };
    }, [type])
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
                content.desc
            } </span>
            <div className="buttons">
                
                    <button className="play">

                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
        )
        }
        
        export default Hero
