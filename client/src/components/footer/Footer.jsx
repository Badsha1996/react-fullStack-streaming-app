import { Copyright,Facebook, Instagram, Twitter, YouTube} from "@mui/icons-material";
import "./footer.scss"

const Footer = () => {
  return (
   <div className="Footer">
    <hr />
    <div className="Footer__container">
        <div className="icons">
            
            <Twitter className="icon"/>
            <Facebook className="icon"/>
            <Instagram className="icon"/>
            <YouTube className="icon"/>
        </div>
        
        <div className="middle">
            <span>watch anime as heart content</span>
            <div className="middle__box">
                <span>Animation</span>
                <span>TvSeries</span>
            </div>
        </div>

        <div className="copyright">
            <div className="copyright__icon">
                <Copyright/> 
                <span>Copyright <b>2022-2030</b></span>
            </div>
            
            <small>
                <span>All Rights Reserved. Created By </span><b>Badsha Laskar</b>
            </small>
        </div>
        
    </div>
   </div>
  )
}

export default Footer