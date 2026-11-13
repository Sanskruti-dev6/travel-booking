import { useRef, useState } from "react";
import "../styles/HorizontalGallery.css";

import italy from "../assets/images/gallery/italy.jpg";
import swiss from "../assets/images/gallery/swiss.jpg";
import bali from "../assets/images/gallery/bali.jpg";
import norway from "../assets/images/gallery/norway.jpg";
import japan from "../assets/images/gallery/japan.jpg";
import dubai from "../assets/images/gallery/dubai.jpg";
import maldives from "../assets/images/gallery/maldives.jpg";
import paris from "../assets/images/gallery/paris.jpg";
import santorini from "../assets/images/gallery/santorini.jpg";
import iceland from "../assets/images/gallery/iceland.jpg";
import newzealand from "../assets/images/gallery/newzealand.jpg";
import singapore from "../assets/images/gallery/singapore.jpg";

const places = [
    {
        title: "Japan",
        subtitle: "Mount Fuji",
        image: japan,
    },
    {
        title: "Italy",
        subtitle: "Amalfi Coast",
        image: italy,
    },
    {
        title: "Switzerland",
        subtitle: "Swiss Alps",
        image: swiss,
    },
    {
        title: "Bali",
        subtitle: "Island Paradise",
        image: bali,
    },
    {
        title: "Norway",
        subtitle: "Northern Fjords",
        image: norway,
    },
    {
        title: "Dubai",
        subtitle: "Burj Khalifa",
        image: dubai,
    },
    {
        title: "Maldives",
        subtitle: "Water Villas",
        image: maldives,
    },
    {
        title: "Paris",
        subtitle: "Eiffel Tower",
        image: paris,
    },
    {
        title: "Santorini",
        subtitle: "Blue Domes",
        image: santorini,
    },
    {
        title: "Iceland",
        subtitle: "Blue Lagoon",
        image: iceland,
    },
    {
        title: "New Zealand",
        subtitle: "Milford Sound",
        image: newzealand,
    },
    {
        title: "Singapore",
        subtitle: "Marina Bay Sands",
        image: singapore,
    },
];

export default function HorizontalGallery() {
    const galleryRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);

    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    // ==============================
    // MOUSE DRAG START
    // ==============================

    const handleMouseDown = (e) => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        setIsDragging(true);

        startX.current = e.pageX;
        startScrollLeft.current = gallery.scrollLeft;
    };

    // ==============================
    // MOUSE DRAG MOVE
    // ==============================

    const handleMouseMove = (e) => {
        const gallery = galleryRef.current;

        if (!gallery || !isDragging) return;

        e.preventDefault();

        const distance = e.pageX - startX.current;

        gallery.scrollLeft =
            startScrollLeft.current - distance;
    };

    // ==============================
    // MOUSE DRAG END
    // ==============================

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // ==============================
    // TOUCH START
    // ==============================

    const handleTouchStart = (e) => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        startX.current =
            e.touches[0].pageX;

        startScrollLeft.current =
            gallery.scrollLeft;
    };

    // ==============================
    // TOUCH SWIPE
    // ==============================

    const handleTouchMove = (e) => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        const distance =
            e.touches[0].pageX -
            startX.current;

        gallery.scrollLeft =
            startScrollLeft.current - distance;
    };

    return (
        <section className="gallery-section">

            {/* BACKGROUND TEXT */}

            <div className="gallery-bg-text">
                EXPLORE
            </div>


            {/* HEADING */}

            <div className="gallery-heading">

                <div className="heading-small">
                    DISCOVER THE WORLD
                </div>

                <h2>
                    Your next
                    <span> escape.</span>
                </h2>

                <p>
                    Journey through the world's most
                    extraordinary destinations.
                </p>

            </div>


            {/* HORIZONTAL GALLERY */}

            <div
                ref={galleryRef}
                className={`gallery-track ${isDragging
                        ? "is-dragging"
                        : ""
                    }`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >

                {places.map((place, index) => (

                    <article
                        className="gallery-card"
                        key={place.title}
                    >

                        {/* IMAGE */}

                        <img
                            src={place.image}
                            alt={place.title}
                            loading={
                                index === 0
                                    ? "eager"
                                    : "lazy"
                            }
                            draggable="false"
                        />


                        {/* NUMBER */}

                        <div className="card-number">
                            {String(index + 1).padStart(2, "0")}
                        </div>


                        {/* GRADIENT */}

                        <div className="card-gradient"></div>


                        {/* CONTENT */}

                        <div className="gallery-overlay">

                            <span className="gallery-subtitle">
                                {place.subtitle}
                            </span>

                            <h3>
                                {place.title}
                            </h3>

                            <button
                                type="button"
                                className="explore-button"
                            >
                                Explore
                                <span>→</span>
                            </button>

                        </div>

                    </article>

                ))}

            </div>


            {/* SCROLL INDICATOR */}

            <div className="gallery-scroll">

                <span>
                    DRAG OR SWIPE TO EXPLORE
                </span>

                <div className="scroll-line">
                    <div></div>
                </div>

            </div>

        </section>
    );
}