import React, { useState } from 'react';
import { Menu, Moon, ShoppingBag, Sun, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('Home')
    const navLinks = ['Home', 'Destinations', 'Things to Do', 'Contact'];

    return (
        <header className="bg-[#f5f2ff] dark:bg-gray-800 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3  flex justify-between items-center">
                <h1 className="text-2xl cursor-pointer font-bold text-teal-600 dark:text-teal-500">
                    Travel Kenya
                </h1>

                {/* Desktop Links */}
                <nav className="hidden md:flex gap-6 text-gray-700 dark:text-white">
                    {navLinks.map((link) => {
                        const slug = link.replace(/ /g, '').toLowerCase();
                        const isActive = active === link;

                        return (
                            <a
                                key={link}
                                href={`#${slug}`}
                                onClick={() => setActive(link)}
                                className={`relative font-bold px-1 transition-colors duration-300 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'hover:text-teal-600 dark:hover:text-teal-400'}`}
                            >
                                {link}
                                <span
                                    className={`absolute left-0 -bottom-0 h-0.5 bg-teal-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </a>
                        );
                    })}
                </nav>

                <div className='flex flex-row items-center gap-3'>
                    {theme === 'dark' ? (
                        <Sun onClick={toggleTheme} className="hidden cursor-pointer md:inline-block p-1 w-7 h-7  text-teal-500 rounded-full hover:text-teal-700" />

                    ) : (

                        <Moon onClick={toggleTheme} className="hidden cursor-pointer md:inline-block p-1 w-7 h-7  text-teal-500 rounded-full hover:text-teal-700" />
                    )
                    }
                    <ShoppingBag className="hidden cursor-pointer md:inline-block text-teal-500 p-1 w-7 h-7  rounded-full hover:text-teal-700" />
                </div>
                {/* Mobile menu toggle */}
                <div className="flex md:hidden items-center gap-3">
                    {
                        theme === 'dark' ? (
                            <Sun onClick={toggleTheme} className="block cursor-pointer md:hidden p-1 w-7 h-7 bg-teal-600 text-white rounded-full hover:bg-teal-700" />

                        ) : (
                            <Moon onClick={toggleTheme} className="block cursor-pointer md:md:hidden p-1 w-7 h-7 bg-teal-600 text-white rounded-full hover:bg-teal-700" />
                        )
                    }
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 md:hidden block dark:text-gray-200">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg right-6 absolute h-60 pl-4 flex flex-col w-50 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.replace(/ /g, '').toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 text-xl font-semibold dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-400"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
