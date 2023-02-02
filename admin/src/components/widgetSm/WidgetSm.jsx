import "./widgetSm.scss";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState} from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([])

  useEffect(()=>{
    const cancleToken = axios.CancelToken.source();
    const getNewUser = async ()=>{
      try {
        const res =await axios.get(process.env.REACT_APP_API + "/users?new=true",{
          headers: {
              token: "king " + JSON.parse(localStorage.getItem("user")).accessToken
          },CancleToken:cancleToken.token
      })
      setNewUser(res.data)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("cancled")
        }else{
          // error 
        }
      }
      
    }
    getNewUser()
    return () => {cancleToken.cancel()}
  },[])
 
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">All Joined Members</span>
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
