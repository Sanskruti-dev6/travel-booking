
import { useState } from "react";
import {
    FaQuoteLeft,
    FaStar,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa";

import "../styles/Testimonials.css";

const testimonials = [
    {
        quote:
            "TravelGo made our Bali trip absolutely effortless. Every detail was beautifully planned and the experience was unforgettable.",
        name: "Sarah Mitchell",
        location: "London, UK",
        initial: "S",
        trip: "Bali, Indonesia",
    },
    {
        quote:
            "From the hotel to every little travel detail, everything felt premium and perfectly organised. We loved every moment.",
        name: "Emma Wilson",
        location: "Manchester, UK",
        initial: "E",
        trip: "Himachal, India",
    },
    {
        quote:
            "TravelGo helped us discover places we would never have found on our own. Beautiful stays, simple booking and great support.",
        name: "Daniel Carter",
        location: "Sydney, Australia",
        initial: "D",
        trip: "Maldives",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const testimonial = testimonials[current];

    const nextTestimonial = () => {
        setCurrent(
            (prev) => (prev + 1) % testimonials.length
        );
    };

    const previousTestimonial = () => {
        setCurrent(
            (prev) =>
                (prev - 1 + testimonials.length) %
                testimonials.length
        );
    };

    return (
        <section
            className="testimonials-section"
            id="testimonials"
        >
            <div className="testimonials-container">

                {/* HEADER */}
                <div className="testimonials-header">

                    <span className="testimonials-kicker">
                        TRAVEL STORIES
                    </span>

                    <h2>
                        What our travelers
                        <em> say.</em>
                    </h2>

                    <p>
                        Real experiences from travelers who
                        explored the world with TravelGo.
                    </p>

                </div>


                {/* TESTIMONIAL CARD */}
                <div className="testimonial-card">

                    <div className="quote-icon">
                        <FaQuoteLeft />
                    </div>


                    <div className="testimonial-stars">

                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar key={star} />
                        ))}

                    </div>


                    <blockquote>
                        “{testimonial.quote}”
                    </blockquote>


                    <div className="testimonial-trip">
                        <span>TRAVELLED TO</span>
                        <strong>{testimonial.trip}</strong>
                    </div>


                    <div className="testimonial-person">

                        <div className="person-avatar">
                            {testimonial.initial}
                        </div>

                        <div>
                            <h3>{testimonial.name}</h3>
                            <p>{testimonial.location}</p>
                        </div>

                    </div>

                </div>


                {/* CONTROLS */}
                <div className="testimonial-controls">

                    <button
                        type="button"
                        className="testimonial-arrow"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <FaArrowLeft />
                    </button>


                    <div className="testimonial-counter">

                        <strong>
                            {String(current + 1).padStart(2, "0")}
                        </strong>

                        <span>/</span>

                        <span>
                            {String(testimonials.length).padStart(
                                2,
                                "0"
                            )}
                        </span>

                    </div>


                    <button
                        type="button"
                        className="testimonial-arrow"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <FaArrowRight />
                    </button>

                </div>

            </div>
        </section>
    );
}

