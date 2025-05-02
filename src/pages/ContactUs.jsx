import React from 'react';
import image1 from '../assets/frog.jpg'
import image2 from '../assets/frog1.jpg'

const ContactUs = () => {
    return (
        <section id="contact" className=" bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
                    Get in Touch
                </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-2">
                    Have questions, feedback, or want to partner with us? We'd love to hear from you!
                </p>
            <div className='py-10 px-4 gap-10  flex md:flex-row flex-col items-center'>
                <div className='md:w-1/2 w-full  flex'>
                    <img src={image2} alt="" className='rounded-lg shadow-lg dark:shadow-white shadow-black h-full w-full' />
                </div>
                <div className='md:w-1/2 w-full flex'>
                    <div className="w-full mx-auto">

                        <form className="bg-white dark:bg-gray-800 border border-black p-8 rounded-lg shadow-lg dark:shadow-white shadow-black grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                                    className="p-3 rounded border text-black border-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                                    className="p-3 rounded border text-black border-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                                className="p-3 rounded border text-black border-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                                className="p-3 rounded border text-black border-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white py-3 px-6 rounded"
                    >
                        Send Message
                    </button>
                </form>
            </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
