import './HamburgerMenu.css';
import React, { useState } from 'react';

export function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className="hamburgerMenuBtn" onClick={toggleMenu}>
                {isOpen ? "X" : "☰"}
            </button>
            {isOpen && (
                <>
                    <div className="link">link</div>
                    <div className="link">link</div>
                    <div className="link">link</div>
                </>
            )}
        </>
    )
};