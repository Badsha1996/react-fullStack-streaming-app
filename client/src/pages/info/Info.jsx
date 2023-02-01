import Navbar from "~/components/navbar/Navbar"
import "./info.scss"
import { useLocation, Link } from "react-router-dom";
const Info = () => {
    const location = useLocation()
    const movie = location.state?.movie;
    const title = movie.title.replaceAll(" ","+")
    console.log(title)
    fetch(`https://animechan.vercel.app/api/random/anime?title=${title}`)
          .then((response) => response.json())
          .then((quote) => console.log(quote));
  return (
    <>
        <div className="info-main-page">
            <Navbar/>
            <main>
            <div className="landing-page">
                <img src={movie.img} alt="" />
            <div className="landing-text-inner">
            <h1>{movie.title}</h1>
            <div className="bottom-info">
            <h4>{movie.year}</h4>
            <h4>{movie.genre}</h4>
            <h4>{movie.Agelimit}+</h4>
            <h4>{movie.duration}</h4>

            </div>
            <h3 className= "sub-title">"{movie.desc}"</h3>
            
            <Link to={"/watch"} state={{movie:movie}}>
              <a className='btn' href="">Watch Now</a>
            </Link>
            </div>
            </div>

            </main>
        </div>
    </>
  )
}

export default Info