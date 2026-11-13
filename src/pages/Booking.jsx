import { useState } from "react";
import "../styles/BookingSection.css";

export default function BookingSection() {
    const [destination, setDestination] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [travelers, setTravelers] = useState("2");

    const [searched, setSearched] = useState(false);
    const [searching, setSearching] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();

        if (!destination) {
            alert("Please select a destination.");
            return;
        }

        if (!checkIn || !checkOut) {
            alert("Please select both travel dates.");
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
        }, 700);
    };

    const handleBookNow = () => {
        alert(
            `Booking request started for ${destination}.\n\n` +
            `Check-in: ${checkIn}\n` +
            `Check-out: ${checkOut}\n` +
            `Travelers: ${travelers}`
        );
    };

    const handleNewSearch = () => {
        setSearched(false);
    };

    return (
        <section
            className="booking-section"
            id="booking"
        >

            {/* =================================
                HEADER
            ================================= */}

            <div className="booking-header">

                <span className="booking-label">
                    PLAN YOUR JOURNEY
                </span>

                <h2>
                    Where do you want
                    <span> to go?</span>
                </h2>

                <p>
                    Find your perfect escape and start
                    your next unforgettable journey.
                </p>

            </div>


            {/* =================================
                SEARCH FORM
                SHOW ONLY BEFORE SEARCH
            ================================= */}

            {!searched && (
                <form
                    className="booking-box"
                    onSubmit={handleSearch}
                >

                    {/* DESTINATION */}

                    <div className="booking-field">

                        <div className="booking-icon">
                            📍
                        </div>

                        <div className="field-content">

                            <label htmlFor="booking-destination">
                                DESTINATION
                            </label>

                            <select
                                id="booking-destination"
                                name="destination"
                                value={destination}
                                onChange={(e) =>
                                    setDestination(
                                        e.target.value
                                    )
                                }
                            >
                                <option value="">
                                    Where do you want to go?
                                </option>

                                <option value="Bali, Indonesia">
                                    Bali, Indonesia
                                </option>

                                <option value="Maldives">
                                    Maldives
                                </option>

                                <option value="Dubai">
                                    Dubai
                                </option>

                                <option value="Paris, France">
                                    Paris, France
                                </option>

                                <option value="Santorini, Greece">
                                    Santorini, Greece
                                </option>

                                <option value="Norway">
                                    Norway
                                </option>

                                <option value="Japan">
                                    Japan
                                </option>

                                <option value="Switzerland">
                                    Switzerland
                                </option>
                            </select>

                        </div>

                    </div>


                    <div className="booking-divider"></div>


                    {/* CHECK IN */}

                    <div className="booking-field">

                        <div className="booking-icon">
                            📅
                        </div>

                        <div className="field-content">

                            <label htmlFor="booking-checkin">
                                CHECK-IN
                            </label>

                            <input
                                id="booking-checkin"
                                name="checkIn"
                                type="date"
                                value={checkIn}
                                onChange={(e) =>
                                    setCheckIn(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                    </div>


                    <div className="booking-divider"></div>


                    {/* CHECK OUT */}

                    <div className="booking-field">

                        <div className="booking-icon">
                            📅
                        </div>

                        <div className="field-content">

                            <label htmlFor="booking-checkout">
                                CHECK-OUT
                            </label>

                            <input
                                id="booking-checkout"
                                name="checkOut"
                                type="date"
                                value={checkOut}
                                onChange={(e) =>
                                    setCheckOut(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                    </div>


                    <div className="booking-divider"></div>


                    {/* TRAVELERS */}

                    <div className="booking-field">

                        <div className="booking-icon">
                            👥
                        </div>

                        <div className="field-content">

                            <label htmlFor="booking-travelers">
                                TRAVELERS
                            </label>

                            <select
                                id="booking-travelers"
                                name="travelers"
                                value={travelers}
                                onChange={(e) =>
                                    setTravelers(
                                        e.target.value
                                    )
                                }
                            >
                                <option value="1">
                                    1 Traveler
                                </option>

                                <option value="2">
                                    2 Travelers
                                </option>

                                <option value="3">
                                    3 Travelers
                                </option>

                                <option value="4">
                                    4 Travelers
                                </option>

                                <option value="5+">
                                    5+ Travelers
                                </option>
                            </select>

                        </div>

                    </div>


                    {/* SEARCH */}

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
                                Search
                                <span>→</span>
                            </>
                        )}
                    </button>

                </form>
            )}


            {/* =================================
                SEARCH RESULT
            ================================= */}

            {searched && (
                <div className="booking-result">

                    <div className="result-image">
                        <div className="result-image-overlay"></div>

                        <span>
                            LUXURY ESCAPE
                        </span>
                    </div>


                    <div className="result-content">

                        <div className="result-top">

                            <div>
                                <small>
                                    YOUR DESTINATION
                                </small>

                                <h3>
                                    {destination}
                                </h3>
                            </div>

                            <div className="result-price">

                                <small>
                                    FROM
                                </small>

                                <strong>
                                    $899
                                </strong>

                                <span>
                                    / person
                                </span>

                            </div>

                        </div>


                        <div className="result-details">

                            <div>
                                <span>📅</span>

                                <div>
                                    <small>
                                        CHECK-IN
                                    </small>

                                    <strong>
                                        {checkIn}
                                    </strong>
                                </div>
                            </div>


                            <div>
                                <span>📅</span>

                                <div>
                                    <small>
                                        CHECK-OUT
                                    </small>

                                    <strong>
                                        {checkOut}
                                    </strong>
                                </div>
                            </div>


                            <div>
                                <span>👥</span>

                                <div>
                                    <small>
                                        TRAVELERS
                                    </small>

                                    <strong>
                                        {travelers}
                                    </strong>
                                </div>
                            </div>

                        </div>


                        <div className="result-bottom">

                            <p>
                                ✦ Luxury accommodation
                                &nbsp; • &nbsp;
                                ✦ Private experiences
                                &nbsp; • &nbsp;
                                ✦ Flexible booking
                            </p>


                            <div className="result-actions">

                                <button
                                    type="button"
                                    className="result-book-btn"
                                    onClick={handleBookNow}
                                >
                                    Book Now
                                    <span>→</span>
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


            {/* =================================
                FEATURES
            ================================= */}

            {!searched && (
                <div className="booking-bottom">

                    <span>
                        ✦ HANDPICKED DESTINATIONS
                    </span>

                    <span>
                        ✦ LUXURY EXPERIENCES
                    </span>

                    <span>
                        ✦ UNFORGETTABLE JOURNEYS
                    </span>

                </div>
            )}

        </section>
    );
}