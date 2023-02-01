import { ArrowBackOutlined} from "@mui/icons-material";
import "./watch.scss"
import Footer from "../../components/footer/Footer"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Watch = () => {
  const location = useLocation()
  const movie = location.state?.movie;

  
  return (
    <div className="Watch">
        <video className="video" controls autoPlay>
          <source src={movie ? movie.video : "No video availabe"} type="video/mp4" />
        </video>
        <NavLink  end to="/">
      <div className="back" >
        <ArrowBackOutlined />
        AllAnime
      </div>
      </NavLink>
      <div className="info-container">
        <div className="container">
          <div className="main">
            <div className="col1"><img src={movie.img} className="model" alt="box-img"></img></div>
            <div className="col2">
              <h2 className="name">{movie.title}</h2>
              <h4 className="name">{movie.genre}</h4><br />
              <p className="info">{movie.desc}</p>
              <div />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Watch