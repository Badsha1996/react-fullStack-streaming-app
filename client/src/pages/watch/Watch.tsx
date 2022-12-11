import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
const Watch = () => {
  return (
    <div className="Watch">
        <div className="back">
            <ArrowBackOutlined/>
            AllAnime
        </div>
        <video className="video" controls autoPlay>
            <source src="https://joy.videvo.net/videvo_files/video/premium/partners0263/large_watermarked/BB_c79a7a37-d1b6-47c8-b78a-426f3ee95eac_preview.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}

export default Watch