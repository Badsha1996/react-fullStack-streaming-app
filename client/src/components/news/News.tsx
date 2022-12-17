import { YouTube } from "@material-ui/icons";
import { useEffect, useState } from "react"
import "./news.scss"

const API_URL = `https://api.jikan.moe/v4/seasons/upcoming`;

const News = () => {
    const [animeData, setAnimeData] = useState([])
    const getAnimes = async(_url: any) =>{
        try {
            const res  =  await fetch(_url);
            const data =  await res.json();
            console.log(data.data);
            setAnimeData(data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAnimes(API_URL)
    },[])  
    
  return (
    <>
    <span className="anime-title"><b>Anime this season</b> </span>
    <div className="News">
        
        {
            animeData ?(
                animeData.map((anime : any,index : number) =>{
                    return (
                        <>
                        <div className="container" key={index}>
                        
                            <span>
                                <div className="play-icon">
                                  <YouTube className="icon"/>
                                </div>

                            </span>
                            <div className="container__card">
                                <img src={anime.images.jpg.large_image_url} alt="anime-poster" />
                            </div>
                            <p>{anime.title.slice(0,50)}</p>
                        </div>
                        
                        </>
                        
                    )
                })
            ):"No Anime for this season"
        }
        
    </div>
    </>
    
  )
}

export default News