import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'

const BgImage = styled(Img)`
  top: 0;
  left: 0;
  width: 200px;
  z-index: -1;

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`

const Figure = props => (
    <figure>
        <BgImage sizes={props.bg} outerWrapperClassName="skill-bg" />
        <a href={props.link} target="_blank" role="link">
            <Img resolutions={props.img} alt={`link to ${props.caption} description`} role="img" />
            <figcaption>{props.caption}</figcaption>
        </a>
    </figure>
)

export default Figure