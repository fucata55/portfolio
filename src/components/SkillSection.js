import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'
import Figure from "./Figure"

const BgImage = styled(Img)`
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`

const SkillSection = props => {
    let bg = props.images.skillBg.childImageSharp.sizes
    let image = name => props.images[name].childImageSharp.resolutions
    return (
    <section id="skillSection">
        <h3 role="heading"><Img resolutions={image("skillsIcon")} alt="Skills icon" />Skills and Tools</h3>
        <div className="main-container">
            <Figure bg={bg} link="https://www.w3schools.com/html/html_intro.asp" img={image("htmlLogo")} caption="HTML" />
            <Figure bg={bg} link="https://www.w3schools.com/css/" img={image("cssLogo")} caption="CSS" />
            <Figure bg={bg} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" img={image("jsLogo")} caption="JavaScript" />
            <Figure bg={bg} link="https://jquery.com/" img={image("jQueryLogo")} caption="jQuery" />
            <Figure bg={bg} link="https://reactjs.org/" img={image("reactLogo")} caption="React JS" />
            <Figure bg={bg} link="https://nodejs.org/en/about/" img={image("nodeLogo")} caption="Node JS" />
            <Figure bg={bg} link="https://www.mongodb.com/" img={image("mongoDbLogo")} caption="MongoDb" />
            <Figure bg={bg} link="https://kotlinlang.org/" img={image("kotlinLogo")} caption="Kotlin" />
            <Figure bg={bg} link="https://www.jetbrains.com/idea/" img={image("intelliJLogo")} caption="intelliJ" />
            <Figure bg={bg} link="https://tornadofx.io/" img={image("tornadoFXLogo")} caption="Tornado FX" />
            <Figure bg={bg} link="https://github.com/fucata55" img={image("gitHubLogo")} caption="GitHub" />
        </div>
    </section>
)}

export default SkillSection