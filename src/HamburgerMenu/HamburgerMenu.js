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
                        {/* <div className="link">About me</div> */}
                        <Link to="/aboutme">About me</Link>
                        <div className="link">Contact</div>
                        <div className="link">link</div>
                    </>
                )}
            </div>
        </>
    )
};