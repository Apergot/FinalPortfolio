import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi'

//mport ToggleMode from './ToggleMode';

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

class nav2 extends Component {

    componentDidMount(){
        showMenu('nav-toggle','nav-menu');
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
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/about">Other</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/about">OtherOne</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <HiMenuAlt3 className='bx bx-menu' />
                </div>
            </nav>
        </header>
        )
    }
}

export default nav2;