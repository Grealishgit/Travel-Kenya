import React from 'react';
import Hero from '../components/Hero';
import Destinations from './Destinations';
import ThingsToDo from './ThingsToDo';
import Blog from './Blog';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <section className="">
            <Hero />
            <Destinations />
            <ThingsToDo />
            <Blog />
            <Testimonials />
            <ContactUs />
            <Footer />
        </section>
    );
};

export default HomePage;
