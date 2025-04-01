import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Footer from "./components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: "60vh", padding: "20px" }}>
        <Outlet />
      </main>
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
