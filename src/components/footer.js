import React from 'react'
import Img from "gatsby-image"

const Footer = props => (
    <footer role="complementary">
        <div>
            <a className="contact-link" href="https://github.com/fucata55" target="_blank" role="link">
                <Img resolutions={props.images.githubIcon.childImageSharp.resolutions} alt="Link to Stephen's GitHub" role="img" />
            </a>
            <a className="contact-link" href="https://www.linkedin.com/in/stephen-liong-75252775/" target="_blank" role="link">
                <Img resolutions={props.images.linkedInIcon.childImageSharp.resolutions} alt="Link to  Stephen's LinkedIn" role="img" />
            </a>
            <a className="contact-link" href="mailto:sliong325@gmail.com" target="_blank" role="link">
                <Img resolutions={props.images.gmailIcon.childImageSharp.resolutions} alt="Link to Stephen's Gmail" role="img" />
            </a>
            <a className="contact-link" href="https://twitter.com/sfucata" target="_blank" role="link">
                <Img resolutions={props.images.twitterIcon.childImageSharp.resolutions} alt="Link to Stephen's Tweeter" role="img" />
            </a>
        </div>
        <p>Photography by <a href="https://annajoyblog.wordpress.com/" target="_blank">Anna Sandmeier</a></p>
        <p>WaterColour splatter <a href="https://www.freepik.com/free-vector/watercolour-splatter-in-rainbow-colours_1215454.html">designed by Freepik</a></p>
    </footer>
)

export default Footer