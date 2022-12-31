import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./hero.scss"
import Text from "../../assets/Text.png"

const Hero = ({type}:{type:string}) => {
  return (
    <div className="Hero">
        {
            type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
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
        <img src="https://wallpapercave.com/wp/wp6779441.jpg" className="hero-img" alt="background pic" />
        <div className="info">
            <img src={Text} alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus debitis, obcaecati provident quam consectetur in reprehenderit laborum cupiditate laboriosam omnis, vel vitae quod eveniet voluptate sint et aliquid! Quia?
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