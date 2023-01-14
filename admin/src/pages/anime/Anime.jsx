import { Link, useLocation } from "react-router-dom";
import "./anime.scss";
import { Publish } from "@material-ui/icons";

export default function Anime() {
    const location = useLocation();
    const movie = location.movie;
  return (
    <div className="anime">
      <div className="animeTitleContainer">
        <h1 className="animeTitle">Anime</h1>
        <Link to="/newanime">
          <button className="animeAddButton">Create</button>
        </Link>
      </div>
      <div className="animeTop">
          
          <div className="animeTopRight">
              <div className="animeInfoTop">
                  <img src={movie.img} alt="" className="animeInfoImg" />
                  <span className="animeName">{movie.title}</span>
              </div>
              <div className="animeInfoBottom">
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">id: </span>
                      <span className="animeInfoValue">{movie._id}</span>
                  </div>
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">Genre</span>
                      <span className="animeInfoValue">{movie.genre}</span>
                  </div>
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">Year</span>
                      <span className="animeInfoValue">{movie.year}</span>
                  </div>
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">Age limit</span>
                      <span className="animeInfoValue">{movie.Agelimit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="animeBottom">
          <form className="animeForm">
              <div className="animeFormLeft">
                  <label>Anime Title</label>
                  <input type="text" placeholder={movie.title} />
                  <label>Year</label>
                  <input type="number" placeholder={movie.year} />
                  <label>Genre</label>
                  <input type="text" placeholder={movie.genre} />
                  <label>Age Limit</label>
                  <input type="number" placeholder={movie.Agelimit} />
                  <label>Trailer</label>
                  <input type="file" placeholder={movie.trailer} />
                  <label>Video</label>
                  <input type="file" placeholder={movie.video} />
                  
              </div>
              <div className="animeFormRight">
                  <div className="animeUpload">
                      <img src={movie.img} alt="" className="animeUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="animeButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
