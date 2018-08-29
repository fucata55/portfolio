import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import SkillSection from '../components/SkillSection'
import "./reset.css"
import './index.css'
import favicon from "../../public/static/images/icons/Stephen-icon.png"

const Layout = () => (
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
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillSection />
    </main>
  </div>
)

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
