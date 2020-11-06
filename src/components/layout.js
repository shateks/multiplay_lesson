import React from "react"
import PropTypes from "prop-types"
import { useIntl } from "react-intl"
import Header from "./header"

const Layout = ({ children }) => {
  const intl = useIntl()

  return (
    <div id="app-wrapper">
      <Header siteTitle={intl.formatMessage({ id: "title" })} />
      <div id="main-wrapper">
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
