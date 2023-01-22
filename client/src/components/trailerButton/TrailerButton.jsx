import { CloseOutlined, YouTube } from "@material-ui/icons"
import { useState } from "react"
import "./trailerButton.scss"





const TrailerButton = ({ animeURL }) => {
    const [isClicked, setIsClicked] = useState(false)
    const handlePlay = () => {
        setIsClicked(true)
    }
    const handleClose = () => {
        setIsClicked(false)
    }

    return (
        <div className="TrailerButton">
            <YouTube className="icon" onClick={handlePlay} />
            {
                isClicked && (
                    <>
                        <div className="video-responsive">
                            <CloseOutlined onClick={handleClose} className="close-icon" />
                            <iframe
                                width="360"
                                height="360"
                                src={animeURL}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default TrailerButton