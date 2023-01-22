import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import { useState, useContext } from "react"
import HumburgerMenu from "../humburgerMenu/HumburgerMenu"
import { AuthContext } from "../../authContext/AuthContext"
import { logOut } from "../../authContext/apiCalls"



const Navbar = () => {
  const [scrolledStatus, setScrollStatus] = useState(false)
  const {user, dispatch}= useContext(AuthContext)

 
  window.onscroll = () => {
    setScrollStatus(window.scrollY === 0 ? false : true)
    return ()=> (window.onscroll = null );
  }

  return (
    <div className={scrolledStatus ? "Navbar activeScroll" : "Navbar"}>
        <div className="container">
            <div className="container__left">
              <HumburgerMenu/>
               <img src={logo} alt="logo" className="container__left--logo" />   
            </div>

            <div className="container__right">
                <Search className="icon"/>
                <span>WEEB</span>
                <Notifications className="icon"/>
                <img src={user.profilePic} alt="profile pic" />

                <div className="profile">
                     <ArrowDropDown className="icon"/>
                     <div className="options">
                        <span>settings</span>
                        <span onClick={()=>logOut(dispatch)}>logout</span>
                     </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Navbar