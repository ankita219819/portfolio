import React, { Component } from 'react'
import "../css/introduction.css"
import { meta, logotext } from "../content"
import Links from './links';
export default class Introduction extends Component {
    render() {
        return (
            <div class="introduction-content" id="about">
                <div class="big-screen about-card">
                    <div class="cnt profile-pic">
                        <div class="photo" >
                            <img class="profile-pic" src='images/mohit-profile-pic.jpeg' width="200" height="200">
                            </img>
                        </div>
                    </div>
                    <div class="cnt name-position">
                        <div class="cnt-name">{logotext}</div>
                        <div class="cnt-position"> Lead Devops Engineer</div>
                    </div>
                    <div class="cnt about-links">
                        <Links></Links>
                    </div>
                    <div class="cv-contact">
                        <div class="btns download-cv">
                            <button class="download">
                                Download CV
                            </button>
                        </div>
                        <div class="btns contact-me">
                            contact me
                        </div>
                    </div>
                </div>

                <div class="mobile-view about-card">
                    <div class="cnt profile-pic">
                        <div class="photo" >
                            <img class="profile-picture" src='images/mohit-profile-pic.jpeg' width="200" height="200">
                            </img>
                        </div>
                    </div>
                    <div class="name-contact-link">
                        <div class="cnt name-position">
                            <div class="cnt-name">{logotext}</div>
                            <div class="cnt-position"> Lead Devops Engineer</div>
                        </div>
                        <div class="cnt about-links">
                            <Links></Links>
                        </div>
                    </div>
                    <div class="cv-contact">
                        <div class="btns download-cv">
                            <button class="download">
                                <img src='images/download.png'>
                                </img>
                            </button>
                        </div>
                        <div class="btns contact-me">
                            <img src='images/chat.png' alt='contact-me'>
                            </img>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <div class="sudsection-header-about">
                        <span>#about-me</span>
                    </div>
                    <div class="content-header">
                        <div> Hi, I'm a <span class="highlight">{meta.current_profile}</span> </div>
                        <div class="download-btn">    <button class="Btn">
                            <svg class="svgIcon" viewBox="0 0 384 512" height="0.5em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
                            <span class="icon2"></span>
                            <span class="tooltip">Download csv</span>
                        </button>
                        </div>
                    </div>
                    <div class="content-subheader">
                        <div class="typewriter monospace no-caret">
                            {meta.summary}
                        </div>
                        <p class="line-1 typing anim-typewriter"> {/*I'm currently working as
                        {meta.working_as.map((skill, index) => (
                            index === meta.working_as.length - 1 ? (
                                " and " + skill
                            ) : (
                                ", " + skill
                            )

                        ))}
                    */}
                        </p>
                    </div>
                    <div class="about__cards">
                        <article class="about__card">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="about__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z">
                                </path>
                            </svg>
                            <h5>Level</h5>
                            <small>Lead</small>
                        </article>
                        <article class="about__card">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="about__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="15" cy="15" r="3"></circle>
                                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
                                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
                                <line x1="6" y1="9" x2="18" y2="9"></line><line x1="6" y1="12" x2="9" y2="12"></line><line x1="6" y1="15" x2="8" y2="15"></line>
                            </svg>
                            <h5>Certificate</h5>
                            <small>+20 Certificate</small>
                        </article>
                        <article class="about__card">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="about__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70996 3H14.5L15.01 3.5V7H14V5.98999H7.68994L6.82996 6.84998L6.47998 7H1.98999V7.48999V11.49V13H7V14H1.51001L1.01001 13.5V6.5V2.5L1.51001 2H6.51001L6.85999 2.15002L7.70996 3ZM7.48999 5H13.99L14 4.01001H7.5L7.14001 3.85999L6.29004 3.01001H2V6.01001H6.28003L7.14001 5.15002L7.48999 5Z"></path>
                                <rect x="8" y="8" width="1" height="6"></rect><rect x="10" y="8" width="1" height="6"></rect><rect x="12.0041" y="8.35193" width="1" height="6" transform="rotate(-20 12.0041 8.35193)"></rect>
                            </svg>
                            <h5>Projects</h5>
                            <small>+4 Completed</small>
                        </article>
                    </div>
                </div>

            </div>
        )
    }
}