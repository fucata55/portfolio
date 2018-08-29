import React from 'react'
import githubIcon from '../../public/static/images/icons/GitHub-icon.png'
import linkedInIcon from '../../public/static/images/icons/LinkedIn-icon.png'
import gmailIcon from '../../public/static/images/icons/Gmail-icon.png'
import twitterIcon from '../../public/static/images/icons/Twitter-icon.png'
import hero from '../../public/static/images/hero-image.png'

const HeroSection =() => (
    <section id='heroSection'>
        <div className="main-container">

            <div id="heroImageContainer">
                <img className="large-image" id="heroImage" src={hero} alt="Stephen Liong logo" />
                <h1 role="heading">Software Engineer</h1>
            </div>

            <div className="contact-links-container">
                <a className="contact-link gitHub-icon" href="https://github.com/fucata55" target="_blank" role="link">
                    <img src={githubIcon} alt="Link to Stephen's GitHub" role="img" />
                </a>
                <a className="contact-link linkedIn-icon" href="https://www.linkedin.com/in/stephen-liong-75252775/" target="_blank" role="link">
                    <img src={linkedInIcon} alt="Link to Stephen's LinkedIn" role="img" />
                </a>
                <a className="contact-link gmail-icon" href="mailto:sliong325@gmail.com" target="_blank" role="link">
                    <img src={gmailIcon} alt="Link to Stephen's Gmail" role="img" />
                </a>
                <a className="contact-link twitter-icon" href="https://twitter.com/sfucata" target="_blank" role="link">
                    <img src={twitterIcon} alt="Link to Stephen's Tweeter" role="img" />
                </a>

            </div>
        </div>
    </section>
)

export default HeroSection