import "./news.scss"
import TrailerButton from "../trailer-button/TrailerButton";
import { AcUnit, LiveTv, People } from "@material-ui/icons";


const News = ({ animeData }: { animeData: any }) => {
    return (
        <>
            <span className="anime-title"><b>Anime this season</b> </span>
            <div className="News">

                {
                    animeData ? (
                        animeData.map((anime: any, index: number, play: boolean = false) => {

                            return (
                                <div className="container" key={index}>
                                    <div className="genre">
                                        {anime.genres[0].name}
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


                                    <span>
                                        <div className="play-icon" >
                                            <TrailerButton animeURL={anime.trailer.embed_url ? anime.trailer.embed_url : "https://www.youtube.com/embed/GU6ncikl11Y?list=PLyMr20OvWEVXMMjUjPgC5XYnFR_nl8G8X"} />
                                        </div>
                                    </span>
                                    <div className="container__card">
                                        <img src={anime.images.jpg.image_url} className="anime-poster" alt="anime-poster" />
                                    </div>

                                    <p className="ani-title">{anime.title.slice(0, 50)}</p>
                                </div>
                            )
                        })
                    ) : "No Anime for this season"
                }

            </div>
        </>

    )
}

export default News