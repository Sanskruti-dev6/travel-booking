import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Booking from "./pages/Booking";
import Wishlist from "./pages/Wishlist";
import Plans from "./pages/Plans";

function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/destinations"
                element={<Destination />}
            />

            <Route
                path="/booking"
                element={<Booking />}
            />

            <Route
                path="/wishlist"
                element={<Wishlist />}
            />

            <Route
                path="/plans"
                element={<Plans />}
            />

        </Routes>
    );
}

export default App;