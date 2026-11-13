import { motion } from "framer-motion";
import "../styles/WhyChoose.css";

import {
    FaPlaneDeparture,
    FaHotel,
    FaGlobeAsia,
    FaHeadset,
} from "react-icons/fa";

const features = [
    {
        number: "01",
        icon: FaPlaneDeparture,
        title: "Easy Planning",
        text: "Plan your complete journey with simple and stress-free travel booking.",
    },
    {
        number: "02",
        icon: FaHotel,
        title: "Luxury Stays",
        text: "Enjoy carefully selected hotels, resorts and private stays.",
    },
    {
        number: "03",
        icon: FaGlobeAsia,
        title: "Handpicked Places",
        text: "Discover beautiful destinations and unforgettable experiences.",
    },
    {
        number: "04",
        icon: FaHeadset,
        title: "Travel Support",
        text: "Get reliable assistance whenever you need it during your journey.",
    },
];

export default function WhyChoose() {
    return (
        <section
            className="why-choose"
            id="why-us"
        >

            <motion.div
                className="why-header"

                initial={{
                    opacity: 0,
                    y: 30,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                viewport={{
                    once: true,
                    amount: 0.3,
                }}

                transition={{
                    duration: 0.7,
                }}
            >
                <span className="why-label">
                    WHY TRAVELGO
                </span>

                <h2>
                    Travel better.
                    <em> Live more.</em>
                </h2>

                <p>
                    Everything you need for a beautiful,
                    comfortable and unforgettable journey.
                </p>
            </motion.div>


            <div className="why-grid">

                {features.map((feature, index) => {

                    const Icon = feature.icon;

                    return (
                        <motion.article
                            key={feature.number}
                            className="why-card"

                            initial={{
                                opacity: 0,
                                y: 30,
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
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                        >

                            <span className="why-number">
                                {feature.number}
                            </span>

                            <div className="why-icon">
                                <Icon />
                            </div>

                            <h3>
                                {feature.title}
                            </h3>

                            <p>
                                {feature.text}
                            </p>

                        </motion.article>
                    );
                })}

            </div>

        </section>
    );
}