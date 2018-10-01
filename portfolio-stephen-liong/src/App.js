import React, { Component } from 'react'
import NavItem from './components/NavItem'
import stephenIcon from './images/icons/Stephen-icon.png'
import aboutIcon from './images/icons/account-icon.png'
import projectIcon from './images/icons/projects-icon.png'
import skillsIcon from './images/icons/skills-icon.png'

class App extends Component {
  render() {
    return (
      <body>
        <header role="banner">
          <nav>
            <NavItem id="heroSectionLink" src={stephenIcon} text="Stephen" alt="Stephen's Icon" />
            <NavItem id="aboutSectionLink" src={aboutIcon} text="About" alt="About Icon" />
            <NavItem id="projectSectionLink" src={projectIcon} text="Projects" alt="Projects Icon" />
            <NavItem id="skillSectionLink" src={skillsIcon} text="Skills" alt="Skills Icon" />
          </nav>
        </header>
      </body>
    );
  }
}

export default App;
