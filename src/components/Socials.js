import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub  } from 'react-icons/fa'
import '../styles/socials.css';

function Socials() {
    return (
        <div className="socials">
            <FaTwitter/>
            <FaLinkedin />
            <FaGithub />
        </div>
    )
}

export default Socials;