import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"


const Watch = () => {
  return (
    <div className="Watch">
      <div className="video-container">
        <div className="back">
          <ArrowBackOutlined />
          AllAnime
        </div>
        <video className="video" controls autoPlay>
          <source src="https://joy.videvo.net/videvo_files/video/premium/partners0263/large_watermarked/BB_c79a7a37-d1b6-47c8-b78a-426f3ee95eac_preview.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="info-container">
        <div className="container">
          <div className="main">
            <div className="col1"><img src="https://wallpapercave.com/wp/wp6779441.jpg" className="model" alt="can't load image"></img></div>
            <div className="col2">
              <h2 className="name">anime</h2>
              <h4 className="name"> shonen</h4><br />
              <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis modi nesciunt officia, sequi veniam, nostrum deserunt autem illo nemo odio delectus consequuntur aspernatur aperiam sint impedit dolorem velit, tempore asperiores.</p>
              <div />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Watch