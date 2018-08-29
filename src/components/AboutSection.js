import React from 'react'
import StephenPhoto from '../../public/static/images/Stephen-photo-light-square.png'
import StephenPhotoWide from '../../public/static/images/Stephen-photo-light-wide.png'
import aboutIcon from '../../public/static/images/icons/account-icon.png'
import kotlinIcon from '../../public/static/images/icons/Kotlin-icon.png'
import tornadoFXIcon from '../../public/static/images/icons/TornadoFX-icon.png'
import jsIcon from '../../public/static/images/icons/JS-icon.png'
import cssIcon from '../../public/static/images/icons/CSS-icon.png'
import mongoDBIcon from '../../public/static/images/icons/MongoDB-icon.png'
import reactIcon from '../../public/static/images/icons/react-icon.png'
import nodeIcon from '../../public/static/images/icons/nodeJS-icon.png'


const AboutSection = () => (
    <section id="aboutSection">
        <h3 role="heading"><img src={aboutIcon} alt="About icon" />About Stephen</h3>

        <div className="main-container">

            <div id="photoContainer">
                <picture>
                    <source className="large-image" media="(max-width: 1000px)" srcset={StephenPhotoWide} />
                    <img className="large-image" id="defaultPhoto" src={StephenPhoto} alt="Stephen's picture" role="img" />
                </picture>
            </div>

            <div id="aboutSoftwareContainer"className="text-container">
                <p role="text">Stephen is a software engineer seeking a full-time development position. His skill set includes
                    <a href="https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html" target="_blank" role="link">Clean Architecture</a>
                    front-end production level coding employing Agile software development using 
                    <a href="https://kotlinlang.org/" target="_blank" role="link">
                        <img src={kotlinIcon} alt="Kotlin icon" /> Kotlin
                    </a>
                        and 
                    <a href="https://tornadofx.io/" target="_blank" role="link">
                        <img src={tornadoFXIcon} alt="TornadoFX icon" /> TornadoFX
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
                        <img src={jsIcon} alt="JavaScript icon" />JavaScript
                    </a>,
                    <a href="https://www.w3schools.com/css/" target="_blank" role="link">
                        <img src={cssIcon} alt="CSS icon" />CSS
                    </a>,
                    <a href="https://www.mongodb.com/" target="_blank" role="link">
                        <img src={mongoDBIcon} alt="MongoDB icon" />MongoDB
                    </a>,
                    <a href="https://reactjs.org/" target="_blank" role="link">
                        <img src={reactIcon} alt="ReactJS icon" />ReactJS
                    </a>, and
                    <a href="https://nodejs.org/en/about/" target="_blank" role="link">
                        <img src={nodeIcon} alt="NodeJS icon" />NodeJS
                    </a>. He also enjoys making a difference in his community through volunteering at charitable organizations.
                </p>
            </div>
        </div>
    </section>
)

export default AboutSection