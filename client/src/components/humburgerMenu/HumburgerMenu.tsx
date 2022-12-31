import { useState } from "react"
import "./humburgerMenu.scss"




const HumburgerMenu = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="Humburger" onClick={handleClick}>
      <label htmlFor="nav-menu-button" className="MenuLabel">
        <span className={!click ? "MenuLabel--icon" : "MenuLabel--icon clicked"}>&nbsp;</span>
      </label>

      <div className={!click ? "navBackground" : "navBackground clicked"}>&nbsp;</div>

      <nav className={!click ? "navigation" : "navigation clicked"}>
        <ul className="list">
          <li className="list--items">
            <a href="#" className="list--items__link" onClick={handleClick}>
              MAL
            </a>
          </li>

          <li className="list--items">
          <a href="#" className="list--items__link" onClick={handleClick}>
              MAL
            </a>
          </li>

          <li className="list--items">
          <a href="#" className="list--items__link" onClick={handleClick}>
              MAL
            </a>
          </li>

          <li className="list--items">
          <a href="#" className="list--items__link" onClick={handleClick}>
              MAL
            </a>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default HumburgerMenu