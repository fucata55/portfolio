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

const ProjectSection = props => (
    <section id="projectSection">
            <h3 role="heading"><Img resolutions={props.images.projectsIcon.childImageSharp.resolutions} alt="Projects icon" />Projects</h3>
            <div className="main-container">
                <div className="project" id="gantt">
                <BgImage resolutions={props.images.gantt.childImageSharp.resolutions} />
                    <div className="text-container">
                        <h4>Gantt Project Management</h4>
                        <p role="text">Gantt is a single-page project management software built to expedite the visual representation of a project plan.</p>
                        <p role="text">Skills and tools implemented:
                            <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" role="link">
                                <Img resolutions={props.images.htmlIcon.childImageSharp.resolutions} alt="HTML icon" />HTML
                            </a>,
                            <a href="https://www.w3schools.com/css/" target="_blank" role="link">
                                <Img resolutions={props.images.cssIcon.childImageSharp.resolutions} alt="CSS icon" />CSS
                            </a>,
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" role="link">
                                <Img resolutions={props.images.jsIcon.childImageSharp.resolutions} alt="JavaScript icon" />JavaScript
                            </a>,
                            <a href="https://jquery.com/" target="_blank" role="link">
                                <Img resolutions={props.images.jQueryIcon.childImageSharp.resolutions} alt="jQuery icon" />jQuery
                            </a>,
                            <a href="https://hackernoon.com/what-is-ui-ux-design-1f01e9dbbf02" target="_blank" role="link">UI/UX design</a>,
                            <a href="https://reactjs.org/" target="_blank" role="link">
                                <Img resolutions={props.images.reactIcon.childImageSharp.resolutions} alt="React JS icon" />ReactJS
                            </a>,
                            <a href="https://nodejs.org/en/about/" target="_blank" role="link">
                                <Img resolutions={props.images.nodeIcon.childImageSharp.resolutions} alt="Node JS icon" />NodeJS
                            </a>,
                            <a href="https://expressjs.com/" target="_blank" role="link">ExpressJS</a>,
                            <a href="https://www.mongodb.com/" target="_blank" role="link">
                                <Img resolutions={props.images.mongoDBIcon.childImageSharp.resolutions} alt="MongoDB icon" />MongoDB
                            </a>,
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/REST" target="_blank" role="link">REST API</a>,
                            <a href="https://mlab.com/" target="_blank" role="link">mLab</a>, and
                            <a href="https://www.w3schools.com/html/html_responsive.asp" target="_blank" role="link">responsive web design</a>
                        </p>

                        <div>
                            <a className="live" href="https://fucata55.github.io/gantt-project-management-full-stack-capstone-react/build" target="_blank" role="link">Live</a> |
                            <a className="code" href="https://github.com/fucata55/gantt-project-management-full-stack-capstone-react" target="_blank" role="link">Code</a>
                        </div>
                    </div>
                </div>

                <div className="project" id="ppf">
                <BgImage resolutions={props.images.ppf.childImageSharp.resolutions} />
                    <div className="text-container">
                        <h4>Pro Players Foundation</h4>
                        <p role="text">Pro Players Foundation is a corporate website to introduce its activities, collect donations, and more</p>
                        <p role="text">Skills and tools implemented:
                            <a href="https://wordpress.org/" target="_blank" role="link">
                                <Img resolutions={props.images.wordPressIcon.childImageSharp.resolutions} alt="WordPress icon" />WordPress
                            </a> and
                            <a href="https://hackernoon.com/what-is-ui-ux-design-1f01e9dbbf02" target="_blank" role="link">UI/UX design</a>
                        </p>
                        <div>
                            <a className="live" href="http://proplayersfoundation.net/" target="_blank" role="link">Live</a>
                        </div>
                    </div>
                </div>
            

                <div className="project" id="ataNote">
                    <BgImage resolutions={props.images.ataNote.childImageSharp.resolutions} />
                    <div className="text-container">
                        <h4>ataNote</h4>
                        <p role="text">ataNote is a responsive notebook single-page app that allows the users to make quick changes.</p>
                        <p role="text">Skills and tools implemented:
                            <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" role="link">
                                <Img resolutions={props.images.htmlIcon.childImageSharp.resolutions} alt="HTML icon" />HTML
                            </a>,
                            <a href="https://www.w3schools.com/css/" target="_blank" role="link">
                                <Img resolutions={props.images.cssIcon.childImageSharp.resolutions} alt="CSS icon" />CSS
                            </a>,
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" role="link">
                                <Img resolutions={props.images.jsIcon.childImageSharp.resolutions} alt="JavaScript icon" />JavaScript
                            </a>,
                            <a href="https://jquery.com/" target="_blank" role="link">
                                <Img resolutions={props.images.jQueryIcon.childImageSharp.resolutions} alt="jQuery icon" />jQuery
                            </a>,
                            <a href="https://hackernoon.com/what-is-ui-ux-design-1f01e9dbbf02" target="_blank" role="link">UI/UX design</a>,
                            <a href="https://nodejs.org/en/about/" target="_blank" role="link">
                                <Img resolutions={props.images.nodeIcon.childImageSharp.resolutions} alt="Node JS icon" />NodeJS
                            </a>,
                            <a href="https://expressjs.com/" target="_blank" role="link">ExpressJS</a>,
                            <a href="https://www.mongodb.com/" target="_blank" role="link">
                                <Img resolutions={props.images.mongoDBIcon.childImageSharp.resolutions} alt="MongoDB icon" />MongoDB
                            </a>,
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/REST" target="_blank" role="link">REST API</a>,
                            <a href="https://mlab.com/" target="_blank" role="link">mLab</a>, and
                            <a href="https://www.w3schools.com/html/html_responsive.asp" target="_blank" role="link">responsive web design</a>
                        </p>
                        <div>
                            <a className="Live" href="https://atanote-node-capstone.herokuapp.com/" target="_blank" role="link">Live</a> |
                            <a className="code" href="https://github.com/fucata55/ataNote-node-capstone" target="_blank" role="link">Code</a>
                        </div>
                    </div>
                </div>

                <div className="project" id="exploRestaurant">
                    <BgImage resolutions={props.images.exploRestaurant.childImageSharp.resolutions} />
                    <div className="text-container">
                        <h4>ExploRestaurant</h4>
                        <p role="text">ExploRestaurant is a seamless API-driven single-page app that satisfies users' craving
                            for restaurant discovery.
                        </p>
                        <p role="text">Skills and tools implemented:
                            <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" role="link">
                                <Img resolutions={props.images.htmlIcon.childImageSharp.resolutions} alt="HTML icon" />HTML
                            </a>,
                            <a href="https://www.w3schools.com/css/" target="_blank" role="link">
                                <Img resolutions={props.images.cssIcon.childImageSharp.resolutions} alt="CSS icon" />CSS
                            </a>,
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" role="link">
                                <Img resolutions={props.images.jsIcon.childImageSharp.resolutions} alt="JavaScript icon" />JavaScript
                            </a>,
                            <a href="https://jquery.com/" target="_blank" role="link">
                                <Img resolutions={props.images.jQueryIcon.childImageSharp.resolutions} alt="jQuery icon" />jQuery
                            </a>,
                            <a href="https://developers.google.com/youtube/" target="_blank" role="link">
                                <Img resolutions={props.images.youTubeIcon.childImageSharp.resolutions} alt="YouTube icon" />Youtube API
                            </a>,
                            <a href="https://developers.zomato.com/api" target="_blank" role="link">Zomato API</a>,
                            <a href="https://hackernoon.com/what-is-ui-ux-design-1f01e9dbbf02" target="_blank" role="link">UI/UX design</a>,
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/REST" target="_blank" role="link">REST API</a>,
                            <a href="https://www.w3schools.com/html/html_responsive.asp" target="_blank" role="link">responsive web design</a>
                        </p>

                        <div>
                            <a className="live" href="https://fucata55.github.io/explorestaurant-api-capstone/" target="_blank" role="link">Live</a> |
                            <a className="code" href="https://github.com/fucata55/explorestaurant-api-capstone" target="_blank" role="link">Code</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
)

export default ProjectSection