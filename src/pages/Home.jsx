import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingSection from "../components/BookingSection";
import FeaturedDestination from "../components/FeaturedDestination";
import Destination from "./Destination";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="home">

            <Navbar />

            <Hero />
            <BookingSection />

            <FeaturedDestination />

            <Destination />

            <WhyChoose />

            <Testimonials />

            <Footer />

        </main>
    );
}