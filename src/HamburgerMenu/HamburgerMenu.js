import './HamburgerMenu.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutMe } from '../AboutMe/AboutMe';

export function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className="hamburgerMenuBtn" onClick={toggleMenu}>
                {isOpen ? "x" : "="}
            </button>
            <div className="hamburgerMenuContainer">
                {isOpen && (
                    <>
                        <Link className='link' to="/aboutme">About me</Link>
                        <Link className='link' to="/contact">Contact</Link>
                        <Link className='link' to="/projects">Projects</Link>
                    </>
                )}
            </div>
        </>
    )
};