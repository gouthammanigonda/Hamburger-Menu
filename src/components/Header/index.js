// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo-image"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button className="popup-btn" testid="hamburgerIconButton">
          <GiHamburgerMenu className="iconsize" />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <div className="btn-container">
            <button
              testid="closeButton"
              onClick={() => close()}
              className="popup-btn"
            >
              <IoMdClose className="icon" />
            </button>
          </div>

          <ul className="link-container">
            <Link to="/" className="link">
              <li className="pop-sub">
                <AiFillHome className="icon" />
                <h1 className="pop-heading">Home</h1>
              </li>
            </Link>

            <Link to="/about" className="link">
              <li className="pop-sub">
                <BsInfoCircleFill className="icon" />
                <h1 className="pop-heading">About</h1>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
