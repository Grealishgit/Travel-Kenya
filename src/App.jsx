import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Destination from './components/Destination';
import Layout from './components/Layout';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
};

export default App;
