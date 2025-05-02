import React, { useState } from 'react';
import sky1 from '../assets/images/image (1).jpg';
import in1 from '../assets/images/image (2).jpg';
import in2 from '../assets/images/image (7).jpg';
import in3 from '../assets/images/image (6).jpg';

const Destination = () => {
    const [showImage, setShowImage] = useState('image1');
    const [showModal, setShowModal] = useState(null);

    const images = {
        image1: sky1,
        image2: in1,
        image3: in2,
        image4: in3
    };

    const captions = {
        image1: "Scenic Adventures",
        image2: "Luxury Stays",
        image3: "Cultural Wonders",
        image4: "Unforgettable Journeys"
    };


    const openModal = (imgKey) => setShowModal(imgKey);
    const closeModal = () => setShowModal(null);

    return (
        <div className="flex items-start justify-center mt-4 dark:bg-gray-900 bg-white w-full p-4 md:p-8 relative">

            {/* Popup Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-transparent bg-opacity-30"
                    onClick={closeModal}
                >
                    <div className="relative w-11/12 md:w-3/4 max-w-4xl">
                        <img src={images[showModal]} alt="Popup View" className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain cursor-pointer" />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full  bg-white dark:bg-gray-600 rounded-md shadow-gray-600 dark:shadow-white shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-8">

                {/* Left Side - About the Home */}
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">About this Destination</h3>

                    <div className="w-full h-auto rounded-md border mb-6 p-4 border-teal-500">
                        <p className="text-gray-700 dark:text-white font-medium leading-relaxed">
                            Welcome to your dream getaway! This stunning destination offers a blend of luxurious accommodations,
                            vibrant culture, and breathtaking landscapes. Whether you're seeking relaxation, adventure, or cultural
                            immersion, this location has it all, with top-tier amenities and exceptional service.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-3 text-gray-700 font-medium mb-6">
                        <p className='dark:text-white text-gray-700'>🗺️ Guided Tour Packages</p>
                        <p className='dark:text-white text-gray-700'>🏨 Luxury Accommodation</p>
                        <p className='dark:text-white text-gray-700'>🚗 Private Airport Transfers</p>
                        <p className='dark:text-white text-gray-700'>🍽️ Local Culinary Experiences</p>
                        <p className='dark:text-white text-gray-700'>🎒 Adventure Activities</p>
                        <p className='dark:text-white text-gray-700'>🌅 Scenic Nature Views</p>
                    </div>


                    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <p className="text-xl font-semibold text-teal-500">Exclusive Getaway @ Ksh. 4,000</p>
                        <button className="px-6 py-2 cursor-pointer bg-teal-500 text-white font-semibold rounded-md  transition duration-300">
                            ADD TO WISHLIST
                        </button>
                    </div>
                </div>

                {/* Right Side - Images and Title */}
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="font-semibold text-center text-2xl md:text-3xl mb-6">Find Your Perfect Destination Here.</h2>

                    <div className="flex flex-col items-center">
                        {/* Main Display Image */}
                        <div className="relative w-full flex">
                            <img
                                onClick={() => openModal(showImage)}
                                src={images[showImage]}
                                alt="Main View"
                                className="h-60 md:h-72 shadow-teal-500 w-full object-cover rounded-lg cursor-pointer shadow-md mb-4"
                            />
                            <p className="absolute bottom-5 left-3 text-white text-lg font-semibold drop-shadow">{captions[showImage]}</p>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 w-full">
                            <img
                                onClick={() => setShowImage('image2')}
                                src={in1}
                                alt="Interior View 1"
                                className="h-24 md:h-28 w-full object-cover shadow-md shadow-teal-500 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                onClick={() => setShowImage('image3')}
                                src={in2}
                                alt="Interior View 2"
                                className="h-24 md:h-28 w-full object-cover shadow-md shadow-teal-500 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                onClick={() => setShowImage('image4')}
                                src={in3}
                                alt="Interior View 3"
                                className="h-24 md:h-28 w-full shadow-md shadow-teal-500 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Destination;