import "../styles/LuxuryExperiences.css";

import resort1 from "../assets/images/resorts/resort1.jpg";
import resort2 from "../assets/images/resorts/resort2.jpg";
import resort3 from "../assets/images/resorts/resort3.jpg";
import resort4 from "../assets/images/resorts/resort4.jpg";

const experiences = [
    {
        image: resort1,
        number: "01",
        category: "PRIVATE VILLA",
        title: "Tropical Escape",
        location: "BALI, INDONESIA",
        description:
            "Relax in a private luxury villa surrounded by tropical nature and peaceful views.",
    },
    {
        image: resort2,
        number: "02",
        category: "LUXURY RESORT",
        title: "Ocean Retreat",
        location: "MALDIVES",
        description:
            "Experience crystal-clear waters, private beaches and unforgettable island moments.",
    },
    {
        image: resort3,
        number: "03",
        category: "MOUNTAIN RESORT",
        title: "Alpine Serenity",
        location: "SWITZERLAND",
        description:
            "Escape to the mountains with breathtaking views, elegant stays and pure relaxation.",
    },
    {
        image: resort4,
        number: "04",
        category: "EXCLUSIVE ESCAPE",
        title: "Dream Getaway",
        location: "EXPLORE THE WORLD",
        description:
            "Discover extraordinary places, beautiful stays and experiences made for unforgettable journeys.",
    },
];

export default function LuxuryExperiences() {
    return (
        <section className="luxury-experiences" id="experiences">

            <div className="luxury-top">

                <div>
                    <p className="luxury-label">
                        HANDPICKED FOR YOU
                    </p>

                    <h2>
                        Luxury <span>Experiences</span>
                    </h2>

                    <p className="luxury-description">
                        Discover unforgettable stays and extraordinary
                        experiences designed for your perfect escape.
                    </p>
                </div>

                <button className="view-all-btn">
                    View All Experiences
                    <span>→</span>
                </button>

            </div>


            <div className="luxury-grid">

                {experiences.map((experience) => (

                    <article
                        className="luxury-card"
                        key={experience.number}
                    >

                        <div className="luxury-image">

                            <img
                                src={experience.image}
                                alt={experience.title}
                            />

                            <span className="experience-number">
                                {experience.number}
                            </span>

                        </div>


                        <div className="luxury-content">

                            <p className="experience-category">
                                {experience.category}
                            </p>

                            <h3>
                                {experience.title}
                            </h3>

                            <p className="experience-location">
                                {experience.location}
                            </p>

                            <p className="experience-description">
                                {experience.description}
                            </p>

                            <button className="discover-btn">
                                Discover Experience
                                <span>→</span>
                            </button>

                        </div>

                    </article>

                ))}

            </div>

        </section>
    );
}