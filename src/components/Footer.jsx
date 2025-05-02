import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="dark:bg-gray-800 bg-[#f5f2ff] text-white py-10">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {/* Brand & Tagline */}
                <div>
                    <h2 className="text-2xl font-bold text-teal-400">Travel Kenya</h2>
                    <p className="mt-2 text-gray-400">
                        Explore the beauty, culture, and adventure Kenya has to offer.
                    </p>
                </div>

                <div className='md:justify-between justify-around flex'>
                    <div>
                        <h3 className="text-lg text-teal-500 dark:text-white font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#home" className="hover:text-teal-500">Home</a></li>
                        <li><a href="#destinations" className="hover:text-teal-500">Destinations</a></li>
                        <li><a href="#things" className="hover:text-teal-500">Things to Do</a></li>
                        <li><a href="#contact" className="hover:text-teal-500">Contact</a></li>
                    </ul>
                    </div>
                    {/* Social Icons */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-teal-500">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                        <a href="#" aria-label="Facebook" className="hover:text-teal-400 text-teal-500">
                            <Facebook size={24} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-teal-400 text-teal-500">
                            <Twitter size={24} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-teal-400 text-teal-500">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
                </div>
                {/* Quick Links */}



            </div>

            <div className="mt-10 border-t border-teal-500 pt-4 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Travel Kenya. All rights reserved.Developed by <span className='text-teal-500'>HunterDev!</span> 
            </div>
        </footer>
    );
};

export default Footer;
