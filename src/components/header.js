import React from 'react'
import Img from "gatsby-image";

const Header = props => (
    <header role="banner">
        <nav role="navigation">
          <li className="nav-item" id="heroSectionLink">
            <Img resolutions={props.images.stephenIcon.childImageSharp.resolutions} alt="Stephen's icon" />
            Stephen
          </li>
          <li className="nav-item" id="aboutSectionLink">
            <Img resolutions={props.images.accountIcon.childImageSharp.resolutions} alt="About icon" />
            About
          </li>
          <li className="nav-item" id="projectSectionLink">
            <Img resolutions={props.images.projectsIcon.childImageSharp.resolutions} alt="Projects icon" />
            Projects
          </li>
          <li className="nav-item" id="skillSectionLink">
            <Img resolutions={props.images.skillsIcon.childImageSharp.resolutions} alt="Skills icon" />
            Skills
          </li>
        </nav>
      </header>
)

export default Header
