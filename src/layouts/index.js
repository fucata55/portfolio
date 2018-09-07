import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectSection from '../components/ProjectSection'
import SkillSection from '../components/SkillSection'
import "./reset.css"
import './index.css'
import favicon from "../images/icons/Stephen-icon.png"

const Layout = ({data}) => (
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
    <Header images={data}/>
    <main>
      <HeroSection images={data} />
      <AboutSection images={data} />
      <ProjectSection />
      <SkillSection />
    </main>
    <Footer />
  </div>
)

export default Layout

export const query = graphql`
query images {
  stephenIcon: file(name: { eq: "Stephen-icon" }) {
    ...sharpImages
	}
  accountIcon: file(name: { eq: "account-icon" }) {
    ...sharpImages
	}
  projectsIcon: file(name: { eq: "projects-icon" }) {
    ...sharpImages
	}
  skillsIcon: file(name: { eq: "skills-icon" }) {
    ...sharpImages
	}
  githubIcon: file(name: { eq: "GitHub-icon" }) {
    ...sharpImages
	}
  linkedInIcon: file(name: { eq: "LinkedIn-icon" }) {
    ...sharpImages
	}
  gmailIcon: file(name: { eq: "Gmail-icon" }) {
    ...sharpImages
	}
  twitterIcon: file(name: { eq: "Twitter-icon" }) {
    ...sharpImages
	}
  hero: file(name: { eq: "hero-image" }) {
    ...sharpImages
	}
  heroBg: file(name: { eq: "hero-background" }) {
    ...sharpImages
	}
  StephenPhoto: file(name: { eq: "Stephen-photo-light-square" }) {
    ...sharpImages
	}
  kotlinIcon: file(name: { eq: "Kotlin-icon" }) {
    ...sharpImages
	}
  tornadoFXIcon: file(name: { eq: "TornadoFX-icon" }) {
    ...sharpImages
	}
  jsIcon: file(name: { eq: "JS-icon" }) {
    ...sharpImages
	}
  cssIcon: file(name: { eq: "CSS-icon" }) {
    ...sharpImages
	}
  mongoDBIcon: file(name: { eq: "MongoDB-icon" }) {
    ...sharpImages
	}
  reactIcon: file(name: { eq: "React-icon" }) {
    ...sharpImages
	}
  nodeIcon: file(name: { eq: "nodeJS-icon" }) {
    ...sharpImages
	}
}
fragment sharpImages on File {
  childImageSharp {
      resolutions {
        ...GatsbyImageSharpResolutions
      }
    }
}
`
