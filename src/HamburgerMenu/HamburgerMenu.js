import './HamburgerMenu.css';
// kolla vad detta gör eller heter
import React, { useState } from 'react';

export function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false)

    console.log(isOpen)
    console.log(!isOpen)

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