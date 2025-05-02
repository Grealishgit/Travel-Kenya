import React from 'react';
import user1 from '../assets/users/user (1).jpg'
import user2 from '../assets/users/user (2).jpg'
import user3 from '../assets/users/user (3).jpg'
const testimonials = [
    {
        name: 'Jane Mwende',
        role: 'Nairobi, Kenya',
        quote: 'Travel Kenya made my safari trip unforgettable. The service was excellent and the experience was beyond my expectations!',
        avatar: user1,
    },
    {
        name: 'James Otieno',
        role: 'Kisumu, Kenya',
        quote: 'From the beaches in Diani to hiking Mount Kenya, everything was well organized. Highly recommend!',
        avatar: user2,
    },
    {
        name: 'Lucy Wanjiku',
        role: 'Mombasa, Kenya',
        quote: 'An incredible way to discover Kenya. The blog and tips helped us plan the perfect family vacation!',
        avatar: user3,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-12">
                What <span className='text-teal-500'>Travelers</span>  Say
            </h2>

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-teal-500 dark:text-teal-500">{t.name}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 italic">“{t.quote}”</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
