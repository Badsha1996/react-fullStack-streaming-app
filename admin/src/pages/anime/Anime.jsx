import { Link, useLocation } from "react-router-dom";
import "./anime.scss";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovies } from "../../context/movieContext/apiCalls";



export default function Anime() {
    const location = useLocation();
    const movies = location.movie;
    const [movie, setMovie] = useState(movies);
    const {dispatch} = useContext(MovieContext);
    
    
    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({
            ...movie,
            [e.target.name]: value
        })
    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        console.log(movie)
        updateMovies(movie,dispatch) 
        window.location.href = '/'
    }
    
  return (
    <div className="anime">
      <div className="animeTitleContainer">
        <h1 className="animeTitle">Edit Anime</h1>
        <Link to="/newanime">
          <button className="animeAddButton">Create</button>
        </Link>
      </div>
      <div className="animeTop">
          
          <div className="animeTopRight">
              <div className="animeInfoTop">
                  <img src={movies.img} alt="" className="animeInfoImg" />
                  <span className="animeName">{movies.title}</span>
              </div>
              <div className="animeInfoBottom">
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">ID: </span>
                      <span className="animeInfoValue">{movies._id}</span>
                  </div>
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">Genre</span>
                      <span className="animeInfoValue">{movies.genre}</span>
                  </div>
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">Year</span>
                      <span className="animeInfoValue">{movies.year}</span>
                  </div>
                  <div className="animeInfoItem">
                      <span className="animeInfoKey">Age limit</span>
                      <span className="animeInfoValue">{movies.Agelimit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="animeBottom">
          <form className="animeForm">
              <div className="animeFormLeft">
                  <label>Anime Title</label>
                  <input type="text" placeholder={movie.title} name="title"
                        onChange={handleChange}/>
                  <label>Year</label>
                  <input type="number" placeholder={movie.year} name="year"
                        onChange={handleChange}/>
                  <label>Genre</label>
                  <input type="text" placeholder={movie.genre} name="genre"
                        onChange={handleChange}/>
                  <label>Age Limit</label>
                  <input type="number" placeholder={movie.Agelimit} name="Agelimit"
                        onChange={handleChange}/>
                <label>Description</label>
                  <input type="text" placeholder={movie.desc} name="desc"
                        onChange={handleChange}/>
                           
              </div>
              <div className="animeFormRight">
                  <div className="animeUpload">
                      <img src={movie.img} alt="" className="animeUploadImg" />
                      <label htmlFor="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  
                  <button className="animeButton" onClick={handleUpdate}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
