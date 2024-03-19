import React from "react";
import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";

function Navbar() {
    return (
        <div className="Navbar">
            {/* here we first need the logo then the sections and the search bar */}

            {/* Logo */}
            <div className="logo">
                <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdYofbBx8uk9mWWUC8og1sEm7LBzRgrRK0YScqKMXatJF6bjd7"
                    alt="logo image"
                />
                <span className="logo-text">E-COMM</span>
            </div>

            {/* Contains the sections and the search bar */}
            <div className="navbar-functional-components">
                <ul className="sections">
                    <li>Home</li>
                    <li>Electronics</li>
                    <li>Books</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Clothing</li>
                    <li>Games</li>
                    <li>Furniture</li>
                    <li>Travel</li>
                    <li>Botanical</li>
                    <div className="search-box">
                        <CiSearch className="search-logo"/>
                        <input type="text" placeholder="Search Something" />
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
