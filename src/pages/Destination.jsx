import { motion } from "framer-motion";
import "../styles/Destination.css";

import video1 from "../assets/video/video1.mp4";

const destinations = [
    {
        id: "01",
        name: "Maldives",
        country: "Indian Ocean",
        price: "$799",
        description: "Private islands and turquoise waters.",
    },
    {
        id: "02",
        name: "Dubai",
        country: "United Arab Emirates",
        price: "$699",
        description: "Luxury stays and iconic skylines.",
    },
    {
        id: "03",
        name: "Paris",
        country: "France",
        price: "$899",
        description: "Romance, culture and timeless beauty.",
    },
    {
        id: "04",
        name: "Switzerland",
        country: "Europe",
        price: "$999",
        description: "Alpine landscapes and peaceful escapes.",
    },
    {
        id: "05",
        name: "Bali",
        country: "Indonesia",
        price: "$749",
        description: "Tropical beauty and private villas.",
    },
];

export default function Destination() {

    const handleExplore = (name) => {
        const booking =
            document.getElementById("booking");

        if (booking) {
            booking.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        window.dispatchEvent(
            new CustomEvent(
                "selectDestination",
                {
                    detail: name,
                }
            )
        );
    };

    return (
        <section
            className="destinations-section"
            id="destinations"
        >

            {/* =================================
                HEADER
            ================================= */}

            <motion.div
                className="destinations-header"
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.7,
                }}
            >
                <span>
                    EXPLORE THE WORLD
                </span>

                <h2>
                    Popular
                    <em> Destinations.</em>
                </h2>

                <p>
                    Discover beautiful places,
                    unforgettable journeys and
                    experiences worth remembering.
                </p>
            </motion.div>


            {/* =================================
                BIG VIDEO
            ================================= */}

            <motion.div
                className="destination-feature-video"
                initial={{
                    opacity: 0,
                    scale: 0.97,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.8,
                }}
            >

                <video
                    src={video1}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                />

                <div className="destination-feature-overlay"></div>

                <div className="destination-feature-content">

                    <span>
                        FEATURED ESCAPE
                    </span>

                    <h3>
                        Discover
                        <em> Paradise.</em>
                    </h3>

                    <p>
                        Your next unforgettable journey
                        starts here.
                    </p>

                </div>

            </motion.div>


            {/* =================================
                FIVE CARDS
            ================================= */}

            <div className="destination-cards">

                {destinations.map(
                    (destination, index) => (
                        <motion.article
                            key={destination.id}
                            className="destination-box"
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.5,
                                delay:
                                    index * 0.08,
                            }}
                        >

                            <div className="destination-box-top">

                                <span className="destination-box-number">
                                    {
                                        destination.id
                                    }
                                </span>

                                <span className="destination-box-country">
                                    {
                                        destination.country
                                    }
                                </span>

                            </div>


                            <div className="destination-box-body">

                                <h3>
                                    {
                                        destination.name
                                    }
                                </h3>

                                <p>
                                    {
                                        destination.description
                                    }
                                </p>

                            </div>


                            <div className="destination-box-bottom">

                                <strong>
                                    {
                                        destination.price
                                    }
                                </strong>

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleExplore(
                                            destination.name
                                        )
                                    }
                                >
                                    Explore
                                    <span>
                                        →
                                    </span>
                                </button>

                            </div>

                        </motion.article>
                    )
                )}

            </div>

        </section>
    );
}