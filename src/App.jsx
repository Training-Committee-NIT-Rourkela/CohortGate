import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">Training Committee - NIT, Rourkela</main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
