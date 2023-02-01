import "./newAnime.scss"
import TrailerButton from "../trailerButton/TrailerButton";
import { AcUnit, ArrowBackIosNewOutlined, ArrowForwardIosOutlined, LiveTv, People } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";


const NewAnime = ({ animeData }) => {

    const [pageContent,setPageContent] = useState(6)
    const [start, setStart] = useState(-1)
    const [end , setEnd] = useState(5)
    useEffect(()=>{

    },[end])
    return (
        <>
            <div className="anime-title"><b>Anime this season {new Date().getFullYear()}</b> </div>
            <div className="News">

                {
                    animeData ? (
                        animeData.map((anime, index, play = false) => {
                            
                            if(start < index && index<=end){
                                
                                return (
                                    <div className="container" key={index}>
                                        <div className="genre">
                                            {anime.genres[0].name}
                                        </div>
                                        <div className="bottom-title">
                                            {anime.title.slice(0,15) }
                                        </div>
                                        <div className="top-icons">
                                            <div className="top-info">
                                                <People className="people-icon" />
                                                <p className="top-text">{anime.members}</p>
                                            </div>

                                            <div className="top-info">
                                                <LiveTv className="tv-icon" />
                                                <p className="top-text">{(anime.studios.length >= 1) ? anime.studios[0].name : "unknown"}</p>
                                            </div>

                                            <div className="top-info">
                                                <AcUnit className="season-icon" />
                                                <p className="top-text">{anime.season ? anime.season : "unknown"}</p>
                                            </div>

                                        </div>


                                    
                                        <div className="play-icon" >
                                            <TrailerButton animeURL={anime.trailer.embed_url ? anime.trailer.embed_url : "https://www.youtube.com/embed/GU6ncikl11Y?list=PLyMr20OvWEVXMMjUjPgC5XYnFR_nl8G8X"} />
                                        </div>
                                    
                                        <div className="container__card">
                                            <img src={anime.images.jpg.image_url} className="anime-poster" alt="anime-poster" />
                                        </div>

                                    
                                </div>
                                
                                )
                                
                            }
                            else{
                                
                            }
                            
                        })
                    ) : "No Anime for this season"
                }
            
            </div>
            {
                start>-1?(<button className="btn-move" onClick={()=>{
                    setEnd(start)
                    setStart(start - 6)
                    
                }}><ArrowBackIosNewOutlined/></button>):(<button disabled className="btn-move"><ArrowBackIosNewOutlined/></button>)
            }
            {
                end<animeData.length?(
                    <button className="btn-move" onClick={()=>{  
                                    setStart(end)
                                    setEnd(end+6)                       
                    }}><ArrowForwardIosOutlined/></button>
                ):(
                    <button className="btn-move" disabled><ArrowForwardIosOutlined/></button>
                )
            }
            
            
        </>

    )
}

export default NewAnime;