import "./sidebar.scss";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  MailOutline,
  WorkOutline,
  Report,
  PlayCircleFilledOutlined,
  AddAPhoto,
} from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logOut } from "../../context/authContext/apiCalls";

export default function Sidebar() {
  const {dispatch} = useContext(AuthContext)
  const handleLogout =(e)=> {
    e.preventDefault();
    logOut(dispatch)
    window.location.href = '/login'
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircleFilledOutlined className="sidebarIcon" />
                Animes
              </li>
            </Link>
            <Link to="/newanime" className="link">
              <li className="sidebarListItem">
                <AddAPhoto  className="sidebarIcon" />
                Add New Anime
              </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
          
            <li className="sidebarListItem" onClick={handleLogout}>
              <Report className="sidebarIcon"/>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
