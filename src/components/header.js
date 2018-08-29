import React from 'react'
import stephenIcon from "../../public/static/images/icons/Stephen-icon.png"
import accountIcon from "../../public/static/images/icons/account-icon.png"
import projectsIcon from "../../public/static/images/icons/projects-icon.png"
import skillsIcon from "../../public/static/images/icons/skills-icon.png"

const Header = () => (
  <header role="banner">
    <nav role="navigation">
      <li className="nav-item" id="heroSectionLink">
        <img src={stephenIcon} alt="Stephen's icon" />
        Stephen
      </li>
      <li className="nav-item" id="aboutSectionLink">
        <img src={accountIcon} alt="About icon" />
        About
      </li>
      <li className="nav-item" id="projectSectionLink">
        <img src={projectsIcon} alt="Projects icon" />
        Projects
      </li>
      <li className="nav-item" id="skillSectionLink">
        <img src={skillsIcon} alt="Skills icon" />
        Skills
      </li>
    </nav>
  </header>
)

export default Header
