import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <ul className="header-list-items">
        <li>
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        <li className="jon-heading home">
          <Link to="/jobs" className="link-item">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={onClickLogout}>
            <button
              type="button"
              className="logout-button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
