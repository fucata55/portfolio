import React from 'react';

export default function NavItem(props) {
    return (
        <li class="nav-item" id={props.id}>
            <img src={props.src} alt={props.alt} />
            {props.text}
        </li>
    )
}