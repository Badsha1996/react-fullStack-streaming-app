import {
    CalendarToday,
    CalendarTodayTwoTone,
    MailOutline,
    PermIdentity,
    Publish
} from "@material-ui/icons";
import {Link, useHistory, useLocation} from "react-router-dom";
import "./user.scss";
import {UserContext} from "../../context/userContext/UserContext";
import {useContext} from "react";
import {useState} from "react";
import {updateUser} from "../../context/userContext/apiCalls";

export default function User() {
    const location = useLocation();
    const users = location.user;
    const [user, setUser] = useState(users);
    const {dispatch} = useContext(UserContext);
    const history = useHistory()
    const handleChange = (e) => {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser(user, dispatch)
        history.push('/users')
    }
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newuser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={
                                user.profilePic || "https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-2.jpg"
                            }
                            alt=""
                            className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">
                                {
                                user.username
                            }</span>
                            <span className="userShowUserTitle">
                                {
                                user.isAdmin ? "Admin User" : "All Anime user"
                            }</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">
                                {
                                user.email
                            }</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">Created At:
                                <b>{
                                    user.createdAt.slice(0, 10)
                                }</b>
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayTwoTone className="userShowIcon"/>
                            <span className="userShowInfoTitle">Last Updated:
                                <b>{
                                    user.updatedAt.slice(0, 10)
                                }</b>
                            </span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">
                                {
                                user.email
                            }</span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text"
                                    placeholder={
                                        user.username
                                    }
                                    name="username"
                                    className="userUpdateInput"
                                    onChange={handleChange}/>
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"
                                    placeholder={
                                        user.email
                                    }
                                    name="email"
                                    className="userUpdateInput"
                                    onChange={handleChange}/>
                            </div>

                            <div className="userUpdateItem">
                                <label>Admin Status</label>
                                <select name="isAdmin" id="isAdmin" className="userUpdateInput"
                                    onChange={handleChange}>
                                    <option>Admin</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>


                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg"
                                    src={
                                        user.profilePic || "https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-2.jpg"
                                    }
                                    alt=""/>
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>

                            </div>
                            <button className="userUpdateButton"
                                onClick={handleUpdate}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
