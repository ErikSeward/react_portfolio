import React from 'react';
import logo from "../logo.svg";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src= {logo} alt="label" className="logo"/> ERIK SEWARD
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
    </div>
  </nav>
    )
}

export default Navbar
