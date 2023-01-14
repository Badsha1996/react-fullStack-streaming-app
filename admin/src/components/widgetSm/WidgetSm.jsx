import "./widgetSm.scss";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState} from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([])

  useEffect(()=>{
    const getNewUser = async ()=>{
      try {
        const res =await axios.get("/users?new=true",{
          headers: {
              token: "king eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTY5NzVjOTY2MTM4MDQ1NDgyYTYyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzYyNjQ5OSwiZXhwIjoxNjczODg1Njk5fQ.v3Q2ds1UTLIlgheiylAdd61prbPI7D0RssKWXggsuy0"
          }
      })
      setNewUser(res.data)
      } catch (error) {
        console.log(error)
      }
      
    }
    getNewUser()
  },[])
  console.log(newUser)
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map(user=>(
          <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-2.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">{user.email}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
