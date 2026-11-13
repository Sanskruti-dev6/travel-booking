import "../styles/DestinationCard.css";

export default function DestinationCard() {
    return (
        <section
            className="destinations-section"
            id="destinations"
        >
            <div className="destinations-header">
                <span>EXPLORE THE WORLD</span>

                <h2>
                    Popular
                    <em> Destinations.</em>
                </h2>

                <p>
                    Discover beautiful places and unforgettable
                    journeys around the world.
                </p>
            </div>

            <div className="destinations-grid">

                <div className="destination-card">
                    <div className="destination-placeholder">
                        MALDIVES
                    </div>

                    <h3>Maldives</h3>

                    <p>
                        Luxury islands and turquoise waters.
                    </p>

                    <button type="button">
                        Explore →
                    </button>
                </div>


                <div className="destination-card">
                    <div className="destination-placeholder">
                        DUBAI
                    </div>

                    <h3>Dubai</h3>

                    <p>
                        Luxury stays and unforgettable experiences.
                    </p>

                    <button type="button">
                        Explore →
                    </button>
                </div>


                <div className="destination-card">
                    <div className="destination-placeholder">
                        PARIS
                    </div>

                    <h3>Paris</h3>

                    <p>
                        Romance, culture and timeless beauty.
                    </p>

                    <button type="button">
                        Explore →
                    </button>
                </div>


                <div className="destination-card">
                    <div className="destination-placeholder">
                        SWITZERLAND
                    </div>

                    <h3>Switzerland</h3>

                    <p>
                        Alpine landscapes and peaceful escapes.
                    </p>

                    <button type="button">
                        Explore →
                    </button>
                </div>

            </div>
        </section>
    );
}