import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'

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

const SkillSection = props => (
    <section id="skillSection">
        <h3 role="heading"><Img resolutions={props.images.skillsIcon.childImageSharp.resolutions} alt="Skills icon" />Skills and Tools</h3>

        <div className="main-container">
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" role="link">
                    <Img resolutions={props.images.htmlLogo.childImageSharp.resolutions} alt="link to HTML description" role="img" />
                    <figcaption>HTML</figcaption>
                </a>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://www.w3schools.com/css/" target="_blank" role="link">
                    <Img resolutions={props.images.cssLogo.childImageSharp.resolutions} alt="link to CSS description" role="img" />
                </a>
                <figcaption>CSS</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" role="link">
                    <Img resolutions={props.images.jsLogo.childImageSharp.resolutions} alt="link to JavaScript description" role="img" />
                </a>
                <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://jquery.com/" target="_blank" role="link">
                    <Img resolutions={props.images.jQueryLogo.childImageSharp.resolutions} alt="link to jQuery description" role="img" />
                </a>
                <figcaption>jQuery</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://reactjs.org/" target="_blank" role="link">
                    <Img resolutions={props.images.reactLogo.childImageSharp.resolutions} alt="link to React JS description" role="img" />
                </a>
                <figcaption>ReactJS</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://nodejs.org/en/about/" target="_blank" role="link">
                    <Img resolutions={props.images.nodeLogo.childImageSharp.resolutions} alt="link to Node JS description" role="img" />
                </a>
                <figcaption>NodeJS</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://www.mongodb.com/" target="_blank" role="link">
                    <Img resolutions={props.images.mongoDbLogo.childImageSharp.resolutions} alt="link to MongoDB description" role="img" />
                </a>
                <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://kotlinlang.org/" target="_blank" role="link">
                    <Img resolutions={props.images.kotlinLogo.childImageSharp.resolutions} alt="link to Kotlin description" role="img" />
                </a>
                <figcaption>Kotlin</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://www.jetbrains.com/idea/" target="_blank" role="link">
                    <Img resolutions={props.images.intelliJLogo.childImageSharp.resolutions} alt="link to IntelliJ description" role="img" />
                </a>
                <figcaption>IntelliJ IDEA</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://tornadofx.io/" target="_blank" role="link">
                    <Img resolutions={props.images.tornadoFXLogo.childImageSharp.resolutions} alt="link to TornadoFX description" role="img" />
                </a>
                <figcaption>TornadoFX</figcaption>
            </figure>
            <figure>
                <BgImage resolutions={props.images.skillBg.childImageSharp.resolutions} />
                <a href="https://github.com/fucata55" target="_blank" role="link">
                    <Img resolutions={props.images.gitHubLogo.childImageSharp.resolutions} alt="link to GitHub description" role="img" />
                </a>
                <figcaption>GitHub</figcaption>
            </figure>
        </div>
    </section>
)

export default SkillSection