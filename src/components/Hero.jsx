import React from 'react';
import image from '../assets/travel1.jpg'

const Hero = () => {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden">

            <img
                src={image}
                alt="Kenya Landscape"
                className="absolute inset-0 w-full h-full object-cover brightness-75"
            />

            {/* Overlay content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 text-white">
                <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
                    Explore the Beauty of Kenya
                </h2>
                <p className="mt-4 text-lg md:text-2xl font-medium drop-shadow">
                    Discover breathtaking destinations, rich culture, and thrilling adventures.
                </p>
                <a
                    href="#destinations"
                    className="mt-8 inline-block px-7 py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded transition"
                >
                    Discover Now
                </a>
            </div>

            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-black opacity-30 dark:opacity-40"></div>
        </section>
    );
};

export default Hero;
