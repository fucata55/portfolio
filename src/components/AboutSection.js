import React from 'react'
import Img from "gatsby-image"
import StephenPhotoWide from '../images/Stephen-photo-light-wide.png'


const AboutSection = props => (
    <section id="aboutSection">
        <h3 role="heading"><Img resolutions={props.images.accountIcon.childImageSharp.resolutions} alt="About icon" role="img" />About Stephen</h3>

        <div className="main-container">

            <div id="photoContainer">
                <picture>
                    <source className="large-image" media="(max-width: 1000px)" srcset={StephenPhotoWide} />
                    <Img className="large-image" id="defaultPhoto" resolutions={props.images.StephenPhoto.childImageSharp.resolutions} alt="Stephen's picture" role="img" />
                </picture>
            </div>

            <div id="aboutSoftwareContainer"className="text-container">
                <p role="text">Stephen is a software engineer seeking a full-time development position. His skill set includes
                    <a href="https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank" role="link">Clean Architecture</a>
                    front-end production level coding employing Agile software development using 
                    <a href="https://kotlinlang.org/" target="_blank" role="link">
                        <Img resolutions={props.images.kotlinIcon.childImageSharp.resolutions} alt="Kotlin icon" /> Kotlin
                    </a>
                        and 
                    <a href="https://tornadofx.io/" target="_blank" role="link">
                        <Img resolutions={props.images.tornadoFXIcon.childImageSharp.resolutions} alt="TornadoFX icon" /> TornadoFX
                    </a>.
                </p>
            </div>

            <div id="aboutBusinessContainer" className="text-container">
                <p role="text">Additional business education provides a unique perspective on software's role in
                    areas of productivity, marketing, and interpersonal relationships.</p>
            </div>

            <div id="aboutOtherContainer" className="text-container">
                <p role="text">Also experienced in coding
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" role="link">
                        <Img resolutions={props.images.jsIcon.childImageSharp.resolutions} alt="JavaScript icon" />JavaScript
                    </a>,
                    <a href="https://www.w3schools.com/css/" target="_blank" role="link">
                        <Img resolutions={props.images.cssIcon.childImageSharp.resolutions} alt="CSS icon" />CSS
                    </a>,
                    <a href="https://www.mongodb.com/" target="_blank" role="link">
                        <Img resolutions={props.images.mongoDBIcon.childImageSharp.resolutions} alt="MongoDB icon" />MongoDB
                    </a>,
                    <a href="https://reactjs.org/" target="_blank" role="link">
                        <Img resolutions={props.images.reactIcon.childImageSharp.resolutions} alt="ReactJS icon" />ReactJS
                    </a>, and
                    <a href="https://nodejs.org/en/about/" target="_blank" role="link">
                        <Img resolutions={props.images.nodeIcon.childImageSharp.resolutions} alt="NodeJS icon" />NodeJS
                    </a>. He also enjoys making a difference in his community through volunteering at charitable organizations.
                </p>
            </div>
        </div>
    </section>
)

export default AboutSection