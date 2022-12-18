import { YouTube } from "@material-ui/icons";
import "./news.scss"


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
                        
                            <span>
                                <div className="play-icon" >
                                
                                  <YouTube className="icon" />
                                </div>

                            </span>
                            <div className="container__card">
                                <img src={anime.images.jpg.large_image_url} alt="anime-poster" />
                            </div>
                            <p>{anime.title.slice(0,50)}</p>
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