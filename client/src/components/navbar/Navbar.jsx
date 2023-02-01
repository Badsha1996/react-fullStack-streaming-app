import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss"
import logo from "../../assets/logo.png"
import { useState, useContext } from "react"
import HumburgerMenu from "../humburgerMenu/HumburgerMenu"
import { AuthContext } from "../../authContext/AuthContext"
import { logOut } from "../../authContext/apiCalls"
import {Link } from "react-router-dom"


const Navbar = () => {
  const [scrolledStatus, setScrollStatus] = useState(false)
  const {user, dispatch}= useContext(AuthContext)

  window.onscroll = () => {
    setScrollStatus(window.scrollY === 0 ? false : true)
    return ()=> (window.onscroll = null );
  }
  const handleLogout = () =>{
    logOut(dispatch)

  }
 
  return (
    <div className={scrolledStatus ? "Navbar activeScroll" : "Navbar"}>
        <div className="container">
            <div className="container__left">
              <HumburgerMenu/>
               <img src={logo} alt="logo" className="container__left--logo" />   
            </div>
{user && (


            <div className="container__right">
                <Search className="icon"/>
                <span>{user.username}</span>
                <Notifications className="icon"/>
                <img src={user.profilePic} alt="profile pic" />

                <div className="profile">
                     <ArrowDropDown className="icon"/>
                     <div className="options">
                      <span><Link to={"/setting"}>settings</Link></span>
                      
                        
                        <hr />
                        <span onClick={handleLogout}><Link to={"/login"}>logout</Link> </span>
                     </div>
                </div>
               
            </div>
            )}
        </div>
    </div>
  )
}

export default Navbar