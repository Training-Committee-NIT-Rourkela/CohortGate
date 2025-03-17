import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header or Main Content */}
      <div className="flex-grow text-center">
        <p className="text-4xl font-bold py-8">
          Training Committee - NIT, Rourkela
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;