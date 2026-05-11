import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SearchResults from "../pages/SearchResults";
import SeatSelection from "../pages/SeatSelection";
import PassengerDetails from "../pages/PassengerDetails";
import Checkout from "../pages/Checkout";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";


export default function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}

      <Route path="/" element={<Home />} />

      <Route
        path="/search-results"
        element={<SearchResults />}
      />

      <Route
        path="/seat-selection"
        element={<SeatSelection />}
      />

      <Route
        path="/passenger-details"
        element={<PassengerDetails />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* ADMIN */}

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

    </Routes>
  );
}