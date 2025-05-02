import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import mainImage from '../assets/travel1.jpg';
import image1 from '../assets/images/image (1).jpg';
import image2 from '../assets/images/image (2).jpg';
import image3 from '../assets/images/image (3).jpg';
import image4 from '../assets/images/image (4).jpg';
import image5 from '../assets/images/image (5).jpg';
import image6 from '../assets/images/image (6).jpg';

const images = [image1, image2, image3, image4, image5, image6];

const Hero = () => {
    const [selectedImage, setSelectedImage] = useState(image1);

    const sliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        pauseOnHover: false,
    };

    return (
        <section className="relative min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-600 w-full overflow-hidden">
            <Slider {...sliderSettings} className="relative inset-0 w-full min-h-screen z-10">
                {images.map((img, idx) => (
                    <div key={idx}>
                        <img
                            src={img}
                            alt={`slide-${idx}`}
                            className="w-full min-h-screen object-cover brightness-65"
                        />
                    </div>
                ))}
            </Slider>

            <div className="absolute top-0 z-50 md:mt-10 mt-2  h-full flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold drop-shadow-md">
                    Explore the <span className='text-teal-500'>Beauty</span>  of Kenya
                </h2>
                <p className="mt-4 text-lg md:text-2xl font-medium drop-shadow">
                    Discover breathtaking <span className='text-teal-500 font-medium'>destinations, rich culture</span> , and thrilling <span className='text-teal-500'>adventures</span> .
                </p>


                {/* Review + Image Preview */}
                <div className="flex md:flex-row flex-col mt-10 w-full  items-center gap-6">
                    <div className="md:w-1/2 md:block hidden border  rounded-lg font-semibold p-3 border-gray-200 text-left text-lg">
                        "Kenya is a land of breathtaking beauty,
                        where endless savannahs meet snow-capped mountains,
                        and vibrant cultures thrive alongside some of the world’s most majestic wildlife.
                        From the iconic Maasai Mara and shimmering shores of Diani to the bustling city of Nairobi and
                        the serene lakes of the Great Rift Valley, Kenya promises unforgettable adventures at every turn."

                    </div>
                    <div className="md:w-1/2 relative flex flex-col justify-center">
                        <img
                            src={selectedImage}
                            alt="Preview"
                            className="w-full max-w-md md:h-60 h-60 object-cover rounded-lg shadow-md shadow-black"
                        />
                        <a href="#destinations"
                            className="mt-8 md:block hidden absolute bottom-2 left-3 px-5 py-1 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded transition"
                        >Discover Now                          
                        </a>
                    </div>

                </div>

                {/* Clickable Thumbnails */}
                <div className="grid md:grid-cols-6 grid-cols-3 mb-20 gap-2 mt-10">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`thumb-${idx}`}
                            onClick={() => setSelectedImage(img)}
                            className={`w-24 h-16 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img ? 'border-teal-500' : 'border-transparent'
                                }`}
                        />
                    ))}
                </div>
                <a
                    href="#destinations"
                    className="-mt-17 md:hidden block  px-8 py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded transition"
                >
                    Discover Now
                </a>
            </div>
        </section>
    );
};

export default Hero;
