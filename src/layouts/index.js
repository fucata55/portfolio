import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import "./reset.css"
import './index.css'
import favicon from "../../public/static/images/icons/Stephen-icon.png"

const Layout = ({children, data}) => (
  <div>
    <Helmet
      title= "Stephen Liong's Portfolio"
      meta={[
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ]}
      link={[
        {rel: "shortcut icon", type: "image/png", href: `${favicon}`}
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
