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

const HeroSection = props => (
    <section id='heroSection'>
    <BgImage resolutions={props.images.heroBg.childImageSharp.resolutions} />
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