import "./news.scss"
import TrailerButton from "../trailer-button/TrailerButton";
import { AcUnit, LiveTv, People } from "@material-ui/icons";


const News = ({animeData}:{animeData : any}) => { 
  return (
    <>
    <span className="anime-title"><b>Anime this season</b> </span>
    <div className="News">
        
        {
            animeData ?(
                animeData.map((anime : any,index : number, play : boolean=false) =>{
                    
                    return (
                        <div className="container" key={index}>
                            
{/*                                 
                                <People className="people-icon"/>{anime.members}
                                 <LiveTv className="tv-icon"/>{(anime.studios.length >= 1) ? anime.studios.name : ""}
                                <AcUnit className="season-icon"/>{anime.season} */}
                            
                            <span>
                                <div className="play-icon" >
                                  <TrailerButton animeURL = {anime.trailer.embed_url}/>
                                </div>
                            </span>
                            <div className="container__card">
                                <img src={anime.images.jpg.large_image_url} alt="anime-poster" />
                            </div>
                            {/* <span className="anime-genre">{anime.genres[0].name}</span> */}
                            <p className="ani-title">{anime.title.slice(0,50)}</p>
                        </div>
                    )
                })
            ):"No Anime for this season"
        }
        
    </div>
    </>
    
  )
}

export default News