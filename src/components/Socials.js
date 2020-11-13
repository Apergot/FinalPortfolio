import React from 'react'
import { FaTwitter, FaFacebook, FaGithub  } from 'react-icons/fa'
import '../styles/socials.css';

function Socials() {
    return (
        <div className="container">
            <FaTwitter/>
            <FaFacebook />
            <FaGithub />
        </div>
    )
}

export default Socials;