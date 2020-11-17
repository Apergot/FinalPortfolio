import React from 'react'
import AboutImage from '../../assets/about.jpeg'

export default function AboutSection() {
    return (
        <section className="about section " id="about">
                <h2 className="section-title">About me</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={AboutImage} alt="" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">Alejandro Perdomo González</h2>
                        <p className="about__text">
                            Hi there, I'm Alejandro - I'm currently working on my end of degree project and learning everything 
                            I can about software developement. For now, I am mainly focused on everything related to web and mobile
                            development. Here are some things I'm good at:
                        </p>
                        <ul>
                            <li><b>Problem solving:</b> I've learnt to tackle a problem of any size and break it down into manageable steps.</li>
                            <li><b>Systems thinking:</b> I'm good at thinking abstractly and putting together systems with many moving parts.</li>
                            <li><b>Teamwork:</b> I can explain things clearly, communicate problems quickly, and have an in-depth understanding of agile methodologies.</li>
                        </ul>
                    </div>                                   
                </div>
        </section>
    )
}
