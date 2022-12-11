import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
const ListItem = () => {
  return (
    <div className="ListItem" >
      <img src="https://www.cnet.com/a/img/resize/0fce65d01d29f4a2722b65737954488681c4c058/hub/2021/05/03/bd37964d-fe5c-4574-9df3-1986e0bf5050/demon-slayer-mugen-train-1239731.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="anime" />
    <div className="itemInfo">
      <div className="icons">
        <PlayArrow className="icon"/>
        <Add className="icon"/>
        <ThumbUpAltOutlined className="icon"/>
        <ThumbDownOutlined className="icon"/>
      </div>
      <div className="itemInfoDetail">
        <span>2 hours 3 minutes</span>
        <span className="limit">18+</span>
        <span>2019</span>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quod officia, molestias laudantium similique totam quibusdam.
      </div>
      <div className="genre">
        Shonen
      </div>
    </div>
    </div>
    
  )
}

export default ListItem