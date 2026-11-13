
import "../styles/Hero.css";

export default function Hero() {
    const handleExplore = () => {
        document
            .getElementById("destinations")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };

    return (
        <section className="premium-hero" id="home">

            <div className="premium-hero-inner">

                {/* LEFT CONTENT */}
                <div className="premium-copy">

                    <span className="eyebrow">
                        ✦ &nbsp; LUXURY TRAVEL · CURATED EXPERIENCES
                    </span>

                    <h1>
                        Your next
                        <br />
                        <em>beautiful</em>
                        <br />
                        journey.
                    </h1>

                    <p className="hero-description">
                        Discover extraordinary destinations,
                        beautifully designed stays and unforgettable
                        experiences made for curious travelers.
                    </p>

                    <div className="hero-actions">

                        <button
                            type="button"
                            onClick={handleExplore}
                        >
                            Explore Destinations
                            <span>→</span>
                        </button>

                        <a href="#destinations">
                            View Collection
                        </a>

                    </div>


                    {/* STATS */}
                    <div className="hero-stats">

                        <div className="hero-stat">
                            <strong>250+</strong>
                            <span>Luxury Stays</span>
                        </div>

                        <div className="hero-stat">
                            <strong>50+</strong>
                            <span>Destinations</span>
                        </div>

                        <div className="hero-stat">
                            <strong>4.9</strong>
                            <span>Guest Rating</span>
                        </div>

                    </div>

                </div>


                {/* RIGHT IMAGE */}
                <div className="premium-visual">

                    <div className="hero-main-image">

                        
                        <img
                            src="/airplane.jpg"
                            alt="Airplane flying above the Himalayas"
                        />
                


                        <div className="image-shade"></div>

                        <div className="image-location">

                            <span>✦</span>

                            <div>
                                <small>FEATURED ESCAPE</small>
                                <strong>Himachal, India</strong>
                            </div>

                        </div>

                    </div>


                    {/* FLOATING CARD */}
                    <div className="floating-card">

                        <div className="floating-top">

                            <span>01</span>

                            <b>★★★★★</b>

                        </div>

                        <h3>
                            Himalayan
                            <br />
                            Escape
                        </h3>

                        <p>
                            Mountain views · Nature · Adventure
                        </p>

                    </div>


                    {/* ROUND BADGE */}
                    <div className="travel-badge">

                        <span>TRAVEL</span>

                        <b>✦</b>

                        <span>EXPLORE</span>

                    </div>

                </div>

            </div>


            {/* BOTTOM LINE */}
            <div className="hero-bottom">

                <span>
                    <i></i>
                    TRAVEL BEYOND ORDINARY
                </span>

                <span>
                    SCROLL TO EXPLORE ↓
                </span>

            </div>

        </section>
    );
}
