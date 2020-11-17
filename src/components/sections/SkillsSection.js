import React from 'react'

import WebDevelopment from '../../assets/skills/web.svg'
import AppDevelopment from '../../assets/skills/apps.svg'
import BackEndTechnologies from '../../assets/skills/backend.svg'
import FrontEndTechnologies from '../../assets/skills/frontend.svg'
import DevopsTechnologies from '../../assets/skills/devops.svg'
import DesignAndMockups from '../../assets/skills/design.svg'

const SkillsSection = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">My skills</h2>

            <div className="flex-grid">
                <div className="skill">
                    <img src={WebDevelopment} className="svgicon" alt=""/>
                    <div className="info">
                        <p className="skill__title">Web development</p>
                        <div className="badges__container">
                            <div className="badge">HTML</div>
                            <div className="badge">CSS</div>
                            <div className="badge">Javascript</div>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <img src={AppDevelopment} className="svgicon" alt=""/>
                    <div className="info">
                        <p className="skill__title">Mobile development</p>
                        <div className="badges__container">
                            <div className="badge">Flutter</div>
                            <div className="badge">React Native</div>
                            <div className="badge">Ionic</div>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <img src={BackEndTechnologies} className="svgicon" alt=""/>
                    <div className="info">
                        <p className="skill__title">Back-End technologies</p>
                        <div className="badges__container">
                            <div className="badge">Spring Boot</div>
                            <div className="badge">NodeJS</div>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <img src={FrontEndTechnologies} className="svgicon" alt=""/>
                    <div className="info">
                        <p className="skill__title">Front-End technologies</p>
                        <div className="badges__container">
                            <div className="badge">React</div>
                            <div className="badge">Vue</div>
                            <div className="badge">Angular</div>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <img src={DevopsTechnologies} className="svgicon" alt=""/>
                    <div className="info">
                        <p className="skill__title">DevOps services</p>
                        <div className="badges__container">
                            <div className="badge">AWS</div>
                            <div className="badge">Docker</div>
                        </div>
                    </div>
                </div>
                <div className="skill">
                    <img src={DesignAndMockups} className="svgicon" alt=""/>
                    <div className="info">
                        <p className="skill__title">Design & Mockups</p>
                        <div className="badges__container">
                            <div className="badge">Adobe XD</div>
                            <div className="badge">InVision</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;