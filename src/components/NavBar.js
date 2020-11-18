import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import ToggleMode from './ToggleMode';

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const burguer = document.querySelector('.burguer');

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            burguer.classList.toggle('toggle');
            nav.classList.toggle('show')
        })
    }
}

const linkAction = () => {
  const burguer = document.querySelector('.burguer');
  const navMenu = document.getElementById('nav-menu');
  burguer.classList.toggle('toggle');
  navMenu.classList.remove('show');
}

class nav2 extends Component {

    componentDidMount(){
        showMenu('nav-toggle','nav-menu');
        const navLink = document.querySelectorAll('.nav__link');
        navLink.forEach(n => n.addEventListener('click', () => {
            console.log('Me estas pulsando bro');
            linkAction();
        })); 
    }

    render() {
        return (
            <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="/" className="nav__logo">Alejandro Perdomo</a>
                </div>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <NavLink exact activeClassName="active" className="nav__link" to="/">Home</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink activeClassName="active" className="nav__link" to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar__icons">
                    <ToggleMode />
                    <div className="burguer nav__toggle" id="nav-toggle">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
        </header>
        )
    }
}

export default nav2;