import React from 'react'
import heroImage from '../../assets/profile.svg';
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

export default function HomeSection() {
    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">Hi,<br></br>I'm <span className="home__title-color">Alejandro</span><br></br> Software <br className="divider"></br> Engineer</h1>
                <a href="#contact" className="button">Contact</a>
            </div>

            <div className="home__social">
                <a href="https://es.linkedin.com/in/alejandro-perdomo-gonzalez" className="home__social-icon"><FaLinkedin className='bx bxl-linkedin'/></a>
                <a href="https://twitter.com/apergot" className="home__social-icon"><FaTwitter className='bx bxl-behance'/></a>
                <a href="https://github.com/Apergot" className="home__social-icon"><FaGithub className='bx bxl-github'/></a>
            </div>
            <div className="home__img">    
                <img src={heroImage} alt="" />
            </div>
        </section>
    )
}
