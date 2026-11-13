
import { useEffect, useState } from "react";
import "../styles/BookingSection.css";

const destinationPrices = {
    "Bali, Indonesia": 18000,
    Maldives: 25000,
    Dubai: 15000,
    "Paris, France": 22000,
    "Santorini, Greece": 24000,
    Norway: 28000,
    Japan: 20000,
    Switzerland: 26000,
};

const formatPrice = (amount) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);

export default function BookingSection() {
    const [destination, setDestination] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [travelers, setTravelers] = useState("2");
    const [searched, setSearched] = useState(false);
    const [searching, setSearching] = useState(false);
    const [booking, setBooking] = useState(null);

    // Destination card मधून आलेली निवड
    useEffect(() => {
        const handleDestinationSelect = (event) => {
            setDestination(event.detail);
            setSearched(false);
            setBooking(null);

            document.getElementById("booking")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        window.addEventListener("selectDestination", handleDestinationSelect);

        return () => {
            window.removeEventListener("selectDestination", handleDestinationSelect);
        };
    }, []);

    const today = new Date().toLocaleDateString("en-CA");

    const nights =
        checkIn && checkOut
            ? Math.round(
                (new Date(checkOut + "T00:00:00") -
                    new Date(checkIn + "T00:00:00")) /
                86400000
            )
            : 0;

    const pricePerPerson = destinationPrices[destination] || 0;
    const travelerCount = travelers === "5+" ? 5 : Number(travelers);
    const totalPrice = pricePerPerson * travelerCount * nights;

    const handleSearch = (e) => {
        e.preventDefault();

        if (!destination || !checkIn || !checkOut) {
            alert("Please select destination and both travel dates.");
            return;
        }

        if (checkIn < today) {
            alert("Please select a future check-in date.");
            return;
        }

        if (checkOut <= checkIn) {
            alert("Check-out date must be after check-in date.");
            return;
        }

        setSearching(true);

        setTimeout(() => {
            setSearching(false);
            setSearched(true);
        }, 500);
    };

    const handleBookNow = () => {
        const bookingDetails = {
            id: "TG" + Date.now(),
            destination,
            checkIn,
            checkOut,
            travelers,
            nights,
            pricePerPerson,
            totalPrice,
            bookedAt: new Date().toISOString(),
        };

        try {
            const previousBookings = JSON.parse(
                localStorage.getItem("travelBookings") || "[]"
            );

            localStorage.setItem(
                "travelBookings",
                JSON.stringify([...previousBookings, bookingDetails])
            );

            setBooking(bookingDetails);
        } catch (error) {
            alert("Unable to save booking. Please try again.");
        }
    };

    const handleNewSearch = () => {
        setDestination("");
        setCheckIn("");
        setCheckOut("");
        setTravelers("2");
        setSearched(false);
        setBooking(null);
    };

    return (
        <section className="booking-section" id="booking">
            <div className="booking-header">
                <span className="booking-label">PLAN YOUR JOURNEY</span>

                <h2>
                    Where do you want
                    <span> to go?</span>
                </h2>

                <p>
                    Find your perfect escape and start
                    your next unforgettable journey.
                </p>
            </div>

            {!searched && (
                <form className="booking-box" onSubmit={handleSearch}>
                    <div className="booking-field">
                        <div className="booking-icon">📍</div>

                        <div className="field-content">
                            <label htmlFor="booking-destination">
                                DESTINATION
                            </label>

                            <select
                                id="booking-destination"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                required
                            >
                                <option value="">Where do you want to go?</option>

                                {Object.keys(destinationPrices).map((place) => (
                                    <option key={place} value={place}>
                                        {place}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="booking-divider"></div>

                    <div className="booking-field">
                        <div className="booking-icon">📅</div>

                        <div className="field-content">
                            <label htmlFor="booking-checkin">CHECK-IN</label>

                            <input
                                id="booking-checkin"
                                type="date"
                                min={today}
                                value={checkIn}
                                onChange={(e) => {
                                    setCheckIn(e.target.value);
                                    if (checkOut && e.target.value >= checkOut) {
                                        setCheckOut("");
                                    }
                                }}
                                required
                            />
                        </div>
                    </div>

                    <div className="booking-divider"></div>

                    <div className="booking-field">
                        <div className="booking-icon">📅</div>

                        <div className="field-content">
                            <label htmlFor="booking-checkout">CHECK-OUT</label>

                            <input
                                id="booking-checkout"
                                type="date"
                                min={checkIn || today}
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="booking-divider"></div>

                    <div className="booking-field">
                        <div className="booking-icon">👥</div>

                        <div className="field-content">
                            <label htmlFor="booking-travelers">TRAVELERS</label>

                            <select
                                id="booking-travelers"
                                value={travelers}
                                onChange={(e) => setTravelers(e.target.value)}
                            >
                                <option value="1">1 Traveler</option>
                                <option value="2">2 Travelers</option>
                                <option value="3">3 Travelers</option>
                                <option value="4">4 Travelers</option>
                                <option value="5+">5+ Travelers</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="booking-search-btn"
                        disabled={searching}
                    >
                        {searching ? (
                            <>
                                <span className="booking-spinner"></span>
                                Searching...
                            </>
                        ) : (
                            <>
                                Search <span>→</span>
                            </>
                        )}
                    </button>
                </form>
            )}

            {searched && !booking && (
                <div className="booking-result">
                    <div className="result-image">
                        <div className="result-image-overlay"></div>
                        <span>LUXURY ESCAPE</span>
                    </div>

                    <div className="result-content">
                        <div className="result-top">
                            <div>
                                <small>YOUR DESTINATION</small>
                                <h3>{destination}</h3>
                            </div>

                            <div className="result-price">
                                <small>PRICE</small>
                                <strong>{formatPrice(pricePerPerson)}</strong>
                                <span>/ person / night</span>
                            </div>
                        </div>

                        <div className="result-details">
                            <div>
                                <span>📅</span>
                                <div>
                                    <small>CHECK-IN</small>
                                    <strong>{checkIn}</strong>
                                </div>
                            </div>

                            <div>
                                <span>📅</span>
                                <div>
                                    <small>CHECK-OUT</small>
                                    <strong>{checkOut}</strong>
                                </div>
                            </div>

                            <div>
                                <span>👥</span>
                                <div>
                                    <small>TRAVELERS</small>
                                    <strong>{travelers}</strong>
                                </div>
                            </div>

                            <div>
                                <span>🌙</span>
                                <div>
                                    <small>STAY</small>
                                    <strong>{nights} Nights</strong>
                                </div>
                            </div>
                        </div>

                        <div className="result-bottom">
                            <div>
                                <p>
                                    ✦ Luxury accommodation &nbsp; • &nbsp;
                                    ✦ Private experiences
                                </p>

                                <h3>{formatPrice(totalPrice)}</h3>
                                <small>Estimated total price</small>
                            </div>

                            <div className="result-actions">
                                <button
                                    type="button"
                                    className="result-book-btn"
                                    onClick={handleBookNow}
                                >
                                    Book Now <span>→</span>
                                </button>

                                <button
                                    type="button"
                                    className="result-new-btn"
                                    onClick={handleNewSearch}
                                >
                                    New Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {booking && (
                <div className="booking-result">
                    <div className="result-content">
                        <div className="result-top">
                            <div>
                                <small>BOOKING CONFIRMED</small>
                                <h3>Your journey starts here!</h3>
                                <p>Your demo booking has been saved successfully.</p>
                            </div>

                            <div className="result-icon">✓</div>
                        </div>

                        <div className="result-details">
                            <div>
                                <small>BOOKING ID</small>
                                <strong>{booking.id}</strong>
                            </div>

                            <div>
                                <small>DESTINATION</small>
                                <strong>{booking.destination}</strong>
                            </div>

                            <div>
                                <small>TRAVELERS</small>
                                <strong>{booking.travelers}</strong>
                            </div>

                            <div>
                                <small>TOTAL AMOUNT</small>
                                <strong>{formatPrice(booking.totalPrice)}</strong>
                            </div>
                        </div>

                        <div className="result-actions">
                            <button
                                type="button"
                                className="result-new-btn"
                                onClick={handleNewSearch}
                            >
                                Plan Another Trip
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {!searched && (
                <div className="booking-bottom">
                    <span>✦ HANDPICKED DESTINATIONS</span>
                    <span>✦ LUXURY EXPERIENCES</span>
                    <span>✦ UNFORGETTABLE JOURNEYS</span>
                </div>
            )}
        </section>
    );
}
