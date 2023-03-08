import "./animatedCard.scss"

const AnimatedCard = ({ animeData }) => {
    const randInt = (Math.floor(Math.random() * ((animeData.length - 4) - 0 + 1) + 0))
    return (
    <>
    <div className="card-header">Anime you may like</div>
    <div className="Animated-card">
            <div className="anime-card">
                {
                    animeData ? (
                        animeData.slice(randInt, randInt + 3).map((anime, index) => {
                            return (
                                <div className="cardBox" key={index}>
                                    <div className="card">
                                        <img src={anime.images.jpg.image_url} loading="eager" alt="card" className="card-img" />

                                        <div className="content">
                                            <h3 className="h3">#{anime.popularity}</h3>
                                            <p className="p">{anime.synopsis}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : "no data"
                }


            </div>
        </div>
    </>
        
    )
}

export default AnimatedCard