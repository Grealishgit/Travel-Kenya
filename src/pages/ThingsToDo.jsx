import React from 'react';
import { Mountain, TreePalm, Binoculars } from 'lucide-react'; // Or use your preferred icons

const activities = [
    {
        title: 'Wildlife Safari',
        description: 'Explore Kenya’s national parks and see the Big Five.',
        icon: <Binoculars size={40} className="text-green-600 dark:text-green-400" />,
    },
    {
        title: 'Beach Relaxation',
        description: 'Unwind on the white sands of Diani or Watamu.',
        icon: <TreePalm size={40} className="text-green-600 dark:text-green-400" />,
    },
    {
        title: 'Mountain Hiking',
        description: 'Hike through Mount Kenya or the Aberdares.',
        icon: <Mountain size={40} className="text-green-600 dark:text-green-400" />,
    },
];

const ThingsToDo = () => {
    return (
        <section id="thingstodo" className="py-16 bg-white dark:bg-gray-900 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 dark:text-white">
                Things
                to Do in <span className='text-teal-500 underline'>Kenya</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                {activities.map((activity) => (
                    <div
                        key={activity.title}
                        className="bg-[#f5f2ff] dark:bg-gray-800 p-6 rounded-lg dark:shadow-white shadow-black shadow-lg hover:shadow-lg transition duration-300"
                    >
                        <div className="flex justify-center mb-4">
                            {activity.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {activity.title}
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{activity.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ThingsToDo;
