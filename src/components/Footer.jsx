
import { useState } from "react";
import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaArrowRight,
} from "react-icons/fa";

import "../styles/Footer.css";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            alert("Please enter your email address.");
            return;
        }

        alert(`Thank you! ${ email } has been subscribed.`);
        setEmail("");
    };

    return (
        <footer className="footer" id="about">

            <div className="footer-container">

                {/* BRAND */}
                <div className="footer-brand">

                    <a href="#home" className="footer-logo">
                        <span>Travel</span>
                        <em>Go</em>
                        <small>✈</small>
                    </a>

                    <p>
                        Beautiful journeys, unforgettable places and
                        experiences designed around you.
                    </p>

                    <div className="footer-socials">

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>

                    </div>

                </div>


                {/* EXPLORE */}
                <div className="footer-column">

                    <h3>Explore</h3>

                    <a href="#home">Home</a>
                    <a href="#destinations">Destinations</a>
                    <a href="#booking">Book a Trip</a>
                    <a href="#testimonials">Travel Stories</a>

                </div>


                {/* COMPANY */}
                <div className="footer-column">

                    <h3>Company</h3>

                    <a href="#why-us">Why TravelGo</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>

                </div>


                {/* NEWSLETTER */}
                <div
                    className="footer-newsletter"
                    id="contact"
                >

                    <h3>
                        Stay inspired.
                    </h3>

                    <p>
                        Get travel inspiration, new destinations
                        and special offers straight to your inbox.
                    </p>

                    <form
                        className="newsletter-form"
                        onSubmit={handleSubscribe}
                    >

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Your email address"
                        />

                        <button
                            type="submit"
                            aria-label="Subscribe"
                        >
                            <FaArrowRight />
                        </button>

                    </form>

                </div>

            </div>


            {/* BOTTOM */}
            <div className="footer-bottom">

                <span>
                    © 2026 TravelGo. All rights reserved.
                </span>

                <span>
                    Made for unforgettable journeys.
                </span>

            </div>

        </footer>
    );
}

