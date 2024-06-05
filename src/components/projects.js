import React, { Component } from 'react'
import "../css/projects.css"
import IMG1 from '../project-picture/project1.png';
import IMG2 from '../project-picture/project1.png';
import IMG3 from '../project-picture/project1.png';
import { symbol } from '../content';
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Personal Blog Website uses Jekyll (is a static site generator) and is hosted on Github.',
        github: 'https://github.com/NguyenVu1310/NguyenVu1310.github.io',
        demo: 'https://nguyenvu1310.github.io/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'My Personal Portfolio Website uses React and is deployed on Netlify.',
        github: 'https://github.com/NguyenVu1310/netlify-personal-site',
        demo: 'https://nguyenvu-personal-site.netlify.app/',
    },
    {
        id: 3,
        image: IMG3,
        title: 'A Todo-List application simple developed based on React and deployed on Netlify.',
        github: 'https://github.com/NguyenVu1310/todoList-react',
        demo: 'https://nguyenvu-todo-list.netlify.app/',
    },
   
]
export default class Projects extends Component {
    render() {
        return (
            <div class="project-content" id="project">
                <div class="content-proj">
                    <div class="sudsection-header-proj">
                        <span>#Projects</span>
                    </div>
                    <div class="projects-cards">

                        {

                            data.map(({ id, image, title, github, demo }) => {
                                return (
                                    <div class="terminal-page" id={id}>
                                        <div class="options">
                                            <div class="option-menu">
                                                <div class="opt">
                                                    <div class="red-opt">

                                                    </div>
                                                </div>
                                                <div class="opt">
                                                    <div class="yellow-opt">

                                                    </div>
                                                </div>
                                                <div class="opt">
                                                    <div class="green-opt">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="terminal-cont">
                                            <div className="portfolio__item-image">
                                                <img src={image} alt={title} />
                                            </div>
                                            <div class="proj-title">
                                                <div class="code-symbol">{symbol.echo}{symbol.openCurlBraces}</div>
                                                <div class="code-text">{title}</div>
                                                <div class="code-symbol">{symbol.closedCurlBraces}</div>
                                            </div>
                                            <div className="portfolio__item-cta">
                                                <a href={github} className='btn-proj' target='_blank' rel="noreferrer" >Github</a>
                                                <a href={demo} className='btn-proj btn-primary' target='_blank' rel="noreferrer" >Live Demo</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
}