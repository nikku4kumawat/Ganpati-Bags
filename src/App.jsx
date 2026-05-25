import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutCompany from "./components/About/AboutCompany";
import Testimonial from "./components/About/Testimonial";
import Products from "./pages/Products";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
        {/* About Dropdown Pages */}
      <Route path="/about/company" element={<AboutCompany />} />

      <Route path="/about/testimonial" element={<Testimonial />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;