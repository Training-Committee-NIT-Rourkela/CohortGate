import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Footer from  "./components/Footer/Footer.jsx";
function RootLayout() {
  return (
    <>
      <NavBar />
      {/* Padding */}
      <div className="flex-grow pt-16"></div> 
      <Outlet />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to Our Website</h1>
        <p className="text-center text-gray-600 mb-8">
          We are glad to have you here. Explore our services and get in touch with us.
        </p>
        </div>
      
      <Footer />
      
    </>
    
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "form", element: <Form /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
