import React from 'react';
import './Navbar.scss'
import data from '../../common/data'
import GetStarted from '../GetStartes/GetStarted';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="main-nav">
                    <div className="logo">
                        <h2>LOGO</h2>
                    </div>
                    <div className="navlinks">
                        {data.navLinks.map((link, index) => (
                            <a key={index} href='/'>{link}</a>
                        ))}
                    </div>
                    <div className="get-started">
                        <GetStarted />
                    </div>
                </div>
            </div>            
        </nav>
    )
}
