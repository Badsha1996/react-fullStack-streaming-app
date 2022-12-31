import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import logo from "../../assets/logo.png"
import { useState } from "react"
import HumburgerMenu from "../humburgerMenu/HumburgerMenu"



const Navbar = () => {
  const [scrolledStatus, setScrollStatus] = useState(false)
  
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
                <img src="https://wallpapercave.com/wp/wp6779441.jpg" alt="profile pic" />

                <div className="profile">
                     <ArrowDropDown className="icon"/>
                     <div className="options">
                        <span>settings</span>
                        <span>logout</span>
                     </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Navbar