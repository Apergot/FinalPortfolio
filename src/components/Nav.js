import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import Socials from './Socials';

export default function Nav() {

    useEffect(() => {
        const burguer = document.querySelector('.burguer');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burguer.addEventListener('click', () => {

            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
                }
            });

            burguer.classList.toggle('toggle');
        });
    })

    return (
        <nav>
            <div className="logo">
                <h4>Alejandro</h4>
            </div>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Other</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">OtherOne</NavLink>
                    </li>
                </ul>
            <div className="burguer">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
