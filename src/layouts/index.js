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
      <ProjectSection images={data} />
      <SkillSection images={data}/>
    </main>
    <Footer images={data} />
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
  gantt: file(name: { eq: "Gantt-project" }) {
    ...sharpImages
	}
  ppf: file(name: { eq: "ProPlayersFoundation-project" }) {
    ...sharpImages
	}
  ataNote: file(name: { eq: "ataNote-project" }) {
    ...sharpImages
	}
  exploRestaurant: file(name: { eq: "ExploRestaurant-project" }) {
    ...sharpImages
  }
  htmlIcon: file(name: { eq: "HTML-icon" }) {
    ...sharpImages
	}
  jQueryIcon: file(name: { eq: "JQuery-icon" }) {
    ...sharpImages
	}
  wordPressIcon: file(name: { eq: "WordPress-icon" }) {
    ...sharpImages
	}
  youTubeIcon: file(name: { eq: "YouTube-icon" }) {
    ...sharpImages
	}
  htmlLogo: file(name: { eq: "HTML-logo" }) {
    ...sharpImages
	}
  cssLogo: file(name: { eq: "CSS-logo" }) {
    ...sharpImages
	}
  jsLogo: file(name: { eq: "JS-logo" }) {
    ...sharpImages
	}
  jQueryLogo: file(name: { eq: "JQuery-logo" }) {
    ...sharpImages
	}
  reactLogo: file(name: { eq: "React-logo" }) {
    ...sharpImages
	}
  nodeLogo: file(name: { eq: "NodeJS-logo" }) {
    ...sharpImages
	}
  mongoDbLogo: file(name: { eq: "MongoDB-logo" }) {
    ...sharpImages
	}
  intelliJLogo: file(name: { eq: "IntelliJ-logo" }) {
    ...sharpImages
	}
  kotlinLogo: file(name: { eq: "Kotlin-logo" }) {
    ...sharpImages
	}
  tornadoFXLogo: file(name: { eq: "TornadoFX-logo" }) {
    ...sharpImages
	}
  gitHubLogo: file(name: { eq: "GitHub-logo" }) {
    ...sharpImages
	}
  skillBg: file(name: { eq: "skills-background" }) {
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
