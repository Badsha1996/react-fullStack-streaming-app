import "./sidebar.scss";
import {
    LineStyle,
    PermIdentity,
    WorkOutline,
    List,
    Report,
    PlayCircleFilledOutlined,
    AddAPhoto,
    AddCommentSharp,
    VerifiedUser
} from "@material-ui/icons";
import {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/authContext/AuthContext";
import {logOut} from "../../context/authContext/apiCalls";


export default function Sidebar() {
    const {dispatch} = useContext(AuthContext)
    const history = useHistory()
    const handleLogout = (e) => {
        e.preventDefault();
        logOut(dispatch)
        history.push("/login")
    }
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <Link to="/newuser" className="link">
                            <li className="sidebarListItem">
                                <VerifiedUser className="sidebarIcon"/>
                                Create New User
                            </li>
                        </Link>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon"/>
                                Users
                            </li>
                        </Link>
                        <Link to="/animes" className="link">
                            <li className="sidebarListItem">
                                <PlayCircleFilledOutlined className="sidebarIcon"/>
                                Animes
                            </li>
                        </Link>
                        <Link to="/newanime" className="link">
                            <li className="sidebarListItem">
                                <AddAPhoto className="sidebarIcon"/>
                                Add New Anime
                            </li>
                        </Link>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Lists</h3>
                    <ul className="sidebarList">

                        <Link to="/lists" className="link">
                            <li className="sidebarListItem">
                                <List className="sidebarIcon"/>
                                Lists
                            </li>
                        </Link>
                        <Link to="/newlist" className="link">
                            <li className="sidebarListItem">
                                <AddCommentSharp className="sidebarIcon"/>
                                Add New List
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage
                        </li>

                        <li className="sidebarListItem logout"
                            onClick={handleLogout}>
                            <Report className="sidebarIcon"/>
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
