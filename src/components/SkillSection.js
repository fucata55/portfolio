import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'
import Figure from "./Figure"

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh; // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`

const SkillSection = props => {
    let bg = props.images.skillBg.childImageSharp.resolutions
    return (
    <section id="skillSection">
        <h3 role="heading"><Img resolutions={props.images.skillsIcon.childImageSharp.resolutions} alt="Skills icon" />Skills and Tools</h3>
        <div className="main-container">
            <Figure bg={bg} link="https://www.w3schools.com/html/html_intro.asp" img={props.images.htmlLogo.childImageSharp.resolutions} caption="HTML" />
            <Figure bg={bg} link="https://www.w3schools.com/css/" img={props.images.cssLogo.childImageSharp.resolutions} caption="CSS" />
            <Figure bg={bg} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" img={props.images.jsLogo.childImageSharp.resolutions} caption="JavaScript" />
            <Figure bg={bg} link="https://jquery.com/" img={props.images.jQueryLogo.childImageSharp.resolutions} caption="jQuery" />
            <Figure bg={bg} link="https://reactjs.org/" img={props.images.reactLogo.childImageSharp.resolutions} caption="React JS" />
            <Figure bg={bg} link="https://nodejs.org/en/about/" img={props.images.nodeLogo.childImageSharp.resolutions} caption="Node JS" />
            <Figure bg={bg} link="https://www.mongodb.com/" img={props.images.mongoDbLogo.childImageSharp.resolutions} caption="MongoDb" />
            <Figure bg={bg} link="https://kotlinlang.org/" img={props.images.kotlinLogo.childImageSharp.resolutions} caption="Kotlin" />
            <Figure bg={bg} link="https://www.jetbrains.com/idea/" img={props.images.intelliJLogo.childImageSharp.resolutions} caption="intelliJ" />
            <Figure bg={bg} link="https://tornadofx.io/" img={props.images.tornadoFXLogo.childImageSharp.resolutions} caption="Tornado FX" />
            <Figure bg={bg} link="https://github.com/fucata55" img={props.images.gitHubLogo.childImageSharp.resolutions} caption="GitHub" />
        </div>
    </section>
)}

export default SkillSection