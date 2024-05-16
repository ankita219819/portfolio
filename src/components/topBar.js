import React, { Component, useState } from 'react';
import "../css/topBar.css";
import { logotext, topBarManu } from "../content";

const TopBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };
    return (
        <div class="top-bar">
            <div class="logo">
                {/*<img src='images/mohitio-logo-transparent.png' alt='mohit.io'  width="100" ></img>*/}
                <img src='images/mohitio-logo-white-transparent.png' alt='mohit.io' width="150"></img>
                {/*<img src='images/my-logo.png' alt='mohit.io'  width="100" height="100"></img>*/}
            </div>
            <div class="link-logo">
               
            </div>
            {/*<ul class="justify-end sm:justify-evenly md:justify-evenly lg:justify-end xl:justify-end ...">

                {
                    topBarManu.map((menu, index) => (
                        <li key={index} class="menu-item">
                            <a href="#0" class="tob-bar">{menu}</a>
                        </li>
                    ))}
                </ul>*/}
            <div class="more-menu">
            </div>
        </div>
    )
}
export default TopBar;