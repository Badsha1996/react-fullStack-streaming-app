import { useState, useContext } from "react"
import "./humburgerMenu.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logOut } from "~/authContext/apiCalls";



const HumburgerMenu = () => {
  const [click, setClick] = useState(false);
  const {dispatch} = useContext(AuthContext)
  const handleClick = () => {
    setClick(!click)
  }
  const handleLogout = () =>{
    logOut(dispatch)
  }
  
  return (

    <div className="Humburger" >
      <label htmlFor="nav-menu-button" className="MenuLabel" onClick={handleClick}>
        <span className={!click ? "MenuLabel--icon" : "MenuLabel--icon clicked"}>&nbsp;</span>
      </label>

      <div className={!click ? "navBackground" : "navBackground clicked"}>&nbsp;</div>

      <nav className={!click ? "navigation" : "navigation clicked"}>
        <ul className="list">
          <li className="list--items">
            <Link className="list--items__link" onClick={handleClick} to={"/"}>
              Home
            </Link>
          </li>
        
          <li className="list--items">
            <Link className="list--items__link" onClick={handleClick} to={"/movies"}>
              Movies
            </Link>
          </li>

          <li className="list--items">
            <Link className="list--items__link" onClick={handleClick} to={"/series"}>
              Series
            </Link>
          </li>

          <li className="list--items">
            <Link className="list--items__link" onClick={handleClick} to={"/setting"}>
              Setting
            </Link>
          </li>

          <li className="list--items logout" >
            <Link className="list--items__link logout-link" onClick={handleLogout} to={"/login"}>
              Logout
            </Link>
          </li>


        </ul>

      </nav>
    </div>
  )
}

export default HumburgerMenu