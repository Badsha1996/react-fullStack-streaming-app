import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./hero.scss"
import Text from "../../assets/Text.png"
import { useEffect, useState } from "react"
import axios from "axios"

const Hero = ({type, setGenre}) => {
    const [content, setContent] = useState({
        img : "",
        imgTitle : "",
        desc : ""
    });

    const getRandomContent = async ()=>{
        try {
            const res =  await axios.get(`/movies/random?type=${type}` , 
            {
                headers: {
                    token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
                }
              }
            )
            setContent(res.data[0])
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getRandomContent()
    }, [type])
  return (
    <div className="Hero">
        {
            type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={e=>setGenre(e.target.value)}>
                        <option>Genres</option>
                        <option value="adventure">Adventure</option>
                        <option value="action">Action</option>
                        <option value="shonen">Shonen</option>
                        <option value="drama">Drama</option>
                        <option value="romance">Romance</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="comedy">comedy</option>
                    </select>
                    
                </div>
            )
        }
        <img src={content.img} className="hero-img" alt="background pic" />
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className="desc">
                {content.desc}
            </span>
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