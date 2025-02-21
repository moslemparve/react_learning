import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import EditUser from './components/EditUser';
import ProductsPage from './pages/ProductsPage';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/edit/user/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;