import "../styles/Plans.css";

const plans = [
    {
        number: "01",
        title: "Weekend Escape",
        subtitle: "Perfect for a quick getaway",
        price: "₹14,999",
        duration: "3 Days / 2 Nights",
        features: [
            "Luxury Hotel Stay",
            "Daily Breakfast",
            "Airport Transfer",
            "Sightseeing",
        ],
    },
    {
        number: "02",
        title: "Luxury Explorer",
        subtitle: "For unforgettable experiences",
        price: "₹29,999",
        duration: "5 Days / 4 Nights",
        popular: true,
        features: [
            "5★ Luxury Resort",
            "Daily Breakfast & Dinner",
            "Private Transfers",
            "Guided Experiences",
            "Airport Pickup & Drop",
        ],
    },
    {
        number: "03",
        title: "Premium World Tour",
        subtitle: "The ultimate luxury journey",
        price: "₹49,999",
        duration: "7 Days / 6 Nights",
        features: [
            "Premium 5★ Hotels",
            "All Meals Included",
            "Private Transport",
            "Luxury Experiences",
            "24/7 Travel Support",
        ],
    },
];

export default function Plans() {
    const handleBook = (plan) => {
        alert(`${plan} selected. Booking feature coming next.`);
    };

    return (
        <main className="plans-page">

            <section className="plans-hero">

                <span className="plans-label">
                    TRAVELGO COLLECTION
                </span>

                <h1>
                    Choose your <em>escape.</em>
                </h1>

                <p>
                    Carefully designed travel plans for unforgettable
                    journeys, beautiful stays and premium experiences.
                </p>

            </section>


            <section className="plans-section">

                <div className="plans-grid">

                    {plans.map((plan) => (

                        <article
                            className={`plan-card ${plan.popular ? "popular" : ""
                                }`}
                            key={plan.number}
                        >

                            {plan.popular && (
                                <div className="popular-badge">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="plan-top">

                                <span className="plan-number">
                                    {plan.number}
                                </span>

                                <span className="plan-duration">
                                    {plan.duration}
                                </span>

                            </div>

                            <h2>{plan.title}</h2>

                            <p className="plan-subtitle">
                                {plan.subtitle}
                            </p>

                            <div className="plan-price">
                                <small>FROM</small>
                                <strong>{plan.price}</strong>
                            </div>

                            <div className="plan-line"></div>

                            <ul>
                                {plan.features.map((feature) => (
                                    <li key={feature}>
                                        <span>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                onClick={() =>
                                    handleBook(plan.title)
                                }
                            >
                                Book This Plan
                                <span>→</span>
                            </button>

                        </article>

                    ))}

                </div>

            </section>

        </main>
    );
}