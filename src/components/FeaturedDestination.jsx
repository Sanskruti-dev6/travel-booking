import { motion } from "framer-motion";
import "../styles/FeaturedDestination.css";

import bali from "../assets/images/gallery/bali.jpg";

export default function FeaturedDestination() {
    const scrollToBooking = () => {
        document
            .getElementById("booking")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section className="featured-destination">

            <div className="featured-image">

                <img
                    src={bali}
                    alt="Bali luxury destination"
                />

                <div className="featured-image-overlay"></div>

                <div className="featured-number">
                    01
                </div>

                <div className="featured-location">
                    <span>●</span>
                    Bali, Indonesia
                </div>

            </div>

            <motion.div
                className="featured-content"

                initial={{
                    opacity: 0,
                    x: 80,
                }}

                whileInView={{
                    opacity: 1,
                    x: 0,
                }}

                viewport={{
                    once: true,
                    amount: 0.3,
                }}

                transition={{
                    duration: 0.9,
                }}
            >

                <span className="featured-label">
                    FEATURED DESTINATION
                </span>

                <h2>
                    Discover
                    <span> Bali.</span>
                </h2>

                <p className="featured-description">
                    Escape to a world of tropical beauty,
                    private villas and unforgettable
                    experiences. Discover the perfect
                    balance between nature, luxury and
                    adventure.
                </p>

                <div className="featured-info">

                    <div className="featured-info-item">
                        <strong>12</strong>
                        <span>Experiences</span>
                    </div>

                    <div className="featured-info-item">
                        <strong>24°C</strong>
                        <span>Average Weather</span>
                    </div>

                    <div className="featured-info-item">
                        <strong>5★</strong>
                        <span>Luxury Rating</span>
                    </div>

                </div>

                <div className="featured-price">
                    <span>From</span>
                    <strong>$899</strong>
                    <small>/ person</small>
                </div>

                <div className="featured-actions">

                    <button
                        type="button"
                        className="featured-button"
                        onClick={scrollToBooking}
                    >
                        Explore Destination
                        <span>→</span>
                    </button>

                </div>

            </motion.div>

        </section>
    );
}