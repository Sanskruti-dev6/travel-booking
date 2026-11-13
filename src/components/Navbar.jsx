import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import {
    FaSearch,
    FaUser,
    FaBars,
    FaTimes,
} from "react-icons/fa";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">

            {/* LOGO */}
            <Link
                to="/"
                className="navbar-logo"
                onClick={closeMenu}
            >
                <span className="logo-main">
                    Travel
                </span>

                <span className="logo-go">
                    Go
                </span>

                <span className="logo-plane">
                    ✈
                </span>
            </Link>


            {/* NAVIGATION */}
            <nav
                className={
                    menuOpen
                        ? "navbar-links active"
                        : "navbar-links"
                }
            >

                <Link
                    to="/"
                    onClick={closeMenu}
                >
                    Home
                </Link>


                <Link
                    to="/destinations"
                    onClick={closeMenu}
                >
                    Destinations
                </Link>


                {/* PLANS */}
                <Link
                    to="/plans"
                    onClick={closeMenu}
                >
                    Plans
                </Link>


                <a
                    href="#booking"
                    onClick={closeMenu}
                >
                    Experiences
                </a>


                <a
                    href="#about"
                    onClick={closeMenu}
                >
                    About Us
                </a>

            </nav>


            {/* RIGHT SIDE */}
            <div className="navbar-right">

                {/* SEARCH */}
                <a
                    href="#booking"
                    className="navbar-icon"
                    aria-label="Search"
                >
                    <FaSearch />
                </a>


                {/* USER */}
                <button
                    type="button"
                    className="navbar-icon"
                    aria-label="Account"
                    onClick={() =>
                        alert(
                            "Sign in feature coming next."
                        )
                    }
                >
                    <FaUser />
                </button>


                {/* BOOK NOW */}
                <Link
                    to="/booking"
                    className="navbar-book"
                >
                    Book Now
                </Link>


                {/* MOBILE MENU */}
                <button
                    type="button"
                    className="navbar-menu"
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                    aria-label="Menu"
                >
                    {menuOpen ? (
                        <FaTimes />
                    ) : (
                        <FaBars />
                    )}
                </button>

            </div>

        </header>
    );
}