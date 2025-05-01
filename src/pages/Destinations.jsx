import React from 'react';
import image1 from '../assets/frog.jpg'
import image2 from '../assets/frog1.jpg'

const destinations = [
    {
        name: 'Maasai Mara',
        description: 'Witness the Great Migration and amazing wildlife safaris.',
        image: image1,
    },
    {
        name: 'Diani Beach',
        description: 'Relax on white sandy beaches with crystal-clear waters.',
        image: image2,
    },
    {
        name: 'Mount Kenya',
        description: 'Climb the second highest mountain in Africa.',
        image: image2,
    },
];

const Destinations = () => {
    return (
        <section
            id="destinations"
            className="py-16 text-center bg-gray-50 dark:bg-gradient-to-t dark:from-gray-900 dark:via-gray-800 dark:to-gray-600 "
        >

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 dark:text-white">
                Top <span className='text-teal-500 underline'>Destinations</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
                {destinations.map((place) => (
                    <div
                        key={place.name}
                        className="bg-[#f5f2ff] dark:bg-gray-800 shadow-lg dark:shadow-white shadow-black rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img
                            src={place.image}
                            alt={place.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{place.name}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{place.description}</p>
                            <button className='px-6 py-1.5 mt-4 bg-teal-500 hover:bg-teal-600 cursor-pointer text-white font-semibold rounded-lg'>View More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destinations;
