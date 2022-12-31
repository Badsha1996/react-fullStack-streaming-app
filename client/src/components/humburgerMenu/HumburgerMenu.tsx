import { useState } from "react"
import "./humburgerMenu.scss"




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
          {
            listItems.map((item, index) => {
              return (
                <li className="list--items" key={index}>
                  <a href="#" className="list--items__link" onClick={handleClick}>
                    {item}
                  </a>
                </li>
              )
            })
          }

        </ul>

      </nav>
    </div>
  )
}

export default HumburgerMenu