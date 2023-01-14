import { useState } from "react"
import "./humburgerMenu.scss"
import { Link } from "react-router-dom";



const HumburgerMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  const listItems = ["About", "Home", "MyAnimeList", "profile", "Latest"]
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
            <Link className="list--items__link" onClick={handleClick} to={"/"}>
              About
            </Link>
          </li>

          <li className="list--items">
            <Link className="list--items__link" onClick={handleClick} to={"/"}>
              AniList
            </Link>
          </li>

          <li className="list--items">
            <Link className="list--items__link" onClick={handleClick} to={"/"}>
              New and Popular
            </Link>
          </li>


        </ul>

      </nav>
    </div>
  )
}

export default HumburgerMenu