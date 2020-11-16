import React from 'react'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Alejandro Perdomo</p>
            <div className="footer__social">
                <a href="https://es.linkedin.com/in/alejandro-perdomo-gonzalez" className="footer__icon"><FaLinkedin className='bx bxl-linkedin'/></a>
                <a href="https://twitter.com/apergot" className="footer__icon"><FaTwitter className='bx bxl-behance'/></a>
                <a href="https://github.com/Apergot" className="footer__icon"><FaGithub className='bx bxl-github'/></a>
            </div>
            <p>&#169; 2020 copyright all right reserved</p>
        </footer>
    )
}
