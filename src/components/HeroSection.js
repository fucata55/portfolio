import React from 'react'
import Img from "gatsby-image"

const HeroSection = props => (
    <section id='heroSection'>
        <div className="main-container">

            <div id="heroImageContainer">
                <Img className="large-image" id="heroImage" resolutions={props.images.hero.childImageSharp.resolutions} alt="Stephen Liong logo" />
                <h1 role="heading">Software Engineer</h1>
            </div>

            <div className="contact-links-container">
                <a className="contact-link gitHub-icon" href="https://github.com/fucata55" target="_blank" role="link">
                    <Img resolutions={props.images.githubIcon.childImageSharp.resolutions} alt="Link to Stephen's GitHub" role="img" />
                </a>
                <a className="contact-link linkedIn-icon" href="https://www.linkedin.com/in/stephen-liong-75252775/" target="_blank" role="link">
                    <Img resolutions={props.images.linkedInIcon.childImageSharp.resolutions} alt="Link to Stephen's LinkedIn" role="img" />
                </a>
                <a className="contact-link gmail-icon" href="mailto:sliong325@gmail.com" target="_blank" role="link">
                    <Img resolutions={props.images.gmailIcon.childImageSharp.resolutions} alt="Link to Stephen's Gmail" role="img" />
                </a>
                <a className="contact-link twitter-icon" href="https://twitter.com/sfucata" target="_blank" role="link">
                    <Img resolutions={props.images.twitterIcon.childImageSharp.resolutions} alt="Link to Stephen's Tweeter" role="img" />
                </a>
            </div>
        </div>
    </section>
)

export default HeroSection