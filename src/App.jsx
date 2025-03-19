import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <main className="flex-grow">Training Committee - NIT, Rourkela</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
