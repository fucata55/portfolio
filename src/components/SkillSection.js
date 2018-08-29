import React from 'react'

const SkillSection = () => (
    <section id="skillSection">
        <h3 role="heading"><img src="images/icons/skills-icon.png" alt="Skills icon" />Skills and Tools</h3>

        <div className="main-container">
            <figure>
                <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" role="link">
                    <img src="./images/HTML-logo.png" alt="link to HTML description" role="img" />
                    <figcaption>HTML</figcaption>
                </a>
            </figure>
            <figure>
                <a href="https://www.w3schools.com/css/" target="_blank" role="link">
                    <img src="./images/CSS-logo.png" alt="link to CSS description" role="img" />
                </a>
                <figcaption>CSS</figcaption>
            </figure>
            <figure>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" role="link">
                    <img src="./images/JS-logo.png" alt="link to JavaScript description" role="img" />
                </a>
                <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
                <a href="https://jquery.com/" target="_blank" role="link">
                    <img src="./images/JQuery-logo.png" alt="link to jQuery description" role="img" />
                </a>
                <figcaption>jQuery</figcaption>
            </figure>
            <figure>
                <a href="https://reactjs.org/" target="_blank" role="link">
                    <img src="./images/React-logo.png" alt="link to React JS description" role="img" />
                </a>
                <figcaption>ReactJS</figcaption>
            </figure>
            <figure>
                <a href="https://nodejs.org/en/about/" target="_blank" role="link">
                    <img src="./images/NodeJS-logo.png" alt="link to Node JS description" role="img" />
                </a>
                <figcaption>NodeJS</figcaption>
            </figure>
            <figure>
                <a href="https://www.mongodb.com/" target="_blank" role="link">
                    <img src="./images/MongoDB-logo.png" alt="link to MongoDB description" role="img" />
                </a>
                <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
                <a href="https://kotlinlang.org/" target="_blank" role="link">
                    <img src="./images/Kotlin-logo.png" alt="link to Kotlin description" role="img" />
                </a>
                <figcaption>Kotlin</figcaption>
            </figure>
            <figure>
                <a href="https://www.jetbrains.com/idea/" target="_blank" role="link">
                    <img src="./images/IntelliJ-logo.png" alt="link to IntelliJ description" role="img" />
                </a>
                <figcaption>IntelliJ IDEA</figcaption>
            </figure>
            <figure>
                <a href="https://tornadofx.io/" target="_blank" role="link">
                    <img src="./images/TornadoFX-logo.png" alt="link to TornadoFX description" role="img" />
                </a>
                <figcaption>TornadoFX</figcaption>
            </figure>
            <figure>
                <a href="https://github.com/fucata55" target="_blank" role="link">
                    <img src="./images/GitHub-logo.png" alt="link to GitHub description" role="img" />
                </a>
                <figcaption>GitHub</figcaption>
            </figure>
        </div>
    </section>
)

export default SkillSection