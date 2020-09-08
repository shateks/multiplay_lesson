import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaHome } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div id="header-title">
      <h1 style={{ margin: 0 }}>{siteTitle}</h1>
    </div>
    <div id="home-button">
      <Link className="header-link" to="/">
        <FaHome id="home-icon" />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
