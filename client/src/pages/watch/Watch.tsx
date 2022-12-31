import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import Footer from "../../components/footer/Footer"
import { useLocation } from "react-router-dom"


const Watch = () => {
  const location = useLocation()
  const movie = location.state?.movie;
  return (
    <div className="Watch">
      <div className="back">
        <ArrowBackOutlined />
        AllAnime
      </div>
      <div className="video-container">
        <iframe
          className="video"
          src={movie ? movie.video : "No video availabe"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded "
        />

        {/* <video className="video" controls autoPlay>
          <source src={movie ? movie.video : "No video availabe"} type="video/mp4" />
        </video> */}
      </div>
      <div className="info-container">
        <div className="container">
          <div className="main">
            <div className="col1"><img src="https://wallpapercave.com/wp/wp6779441.jpg" className="model" alt="box-img"></img></div>
            <div className="col2">
              <h2 className="name">anime</h2>
              <h4 className="name"> shonen</h4><br />
              <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis modi nesciunt officia, sequi veniam, nostrum deserunt autem illo nemo odio delectus consequuntur aspernatur aperiam sint impedit dolorem velit, tempore asperiores.</p>
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