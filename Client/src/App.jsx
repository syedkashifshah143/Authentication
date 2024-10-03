import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/Login/RegisterForm";
import LoginForm from "./components/Login/LoginForm";
import ProfileDisplay from "./components/Login/ProfileDisplay";
import Home from "./components/Home/Home";
import Product from "./components/Home/Product";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import Navbar from "./components/Login/ProfileDisplay";
import AdminDashboard from "./components/Admin Dashboard/AdminDashboard"; 

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/userprofile" element={<ProfileDisplay />} />
        <Route path="/admin/*" element={<AdminDashboard />} /> {/* Nested routes */}
      </Routes>
    </>
  );
};

export default App;
