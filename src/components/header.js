import { Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React from "react"
import { FaHome } from "react-icons/fa"
import Languageswitch from "./languageswitch"

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
    <div id="intl-button">
      <Languageswitch />
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
