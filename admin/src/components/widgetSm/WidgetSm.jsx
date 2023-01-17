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
              token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
          }
      })
      setNewUser(res.data)
      } catch (error) {
        console.log(error)
      }
      
    }
    getNewUser()
  },[])
 
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.map((user,i)=>(
          <li className="widgetSmListItem" key={i}>
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
