import React from 'react';
import image1 from '../assets/frog.jpg'
import image2 from '../assets/frog1.jpg'

const ContactUs = () => {
    return (
        <section id="contact" className=" bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
                Get in <span className='text-teal-500'>Touch</span> 
                </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-2">
                    Have questions, feedback, or want to partner with us? We'd love to hear from you!
                </p>
            <div className='py-10 px-4 gap-10  flex md:flex-row flex-col items-center'>
                <div className='md:w-1/2 w-full  flex'>
                    <div className='relative flex'>
                        <img src={image2} alt="" className='rounded-lg shadow-lg dark:shadow-white shadow-black h-full w-full' />
                        <p className='absolute text-md text-white  text-center font-semibold pl-4 bottom-10'>Planning to Travel to the Unknown wilderness and have no idea where to or how to?
                            <span className=''> Worry not, we are here to help. Fill out the form to get help!</span> </p>

                    </div>

                </div>
                <div className='md:w-1/2 w-full flex'>
                    <div className="w-full mx-auto">

                        <form className="bg-white dark:bg-gray-800 border border-black md:p-8 p-4 rounded-lg shadow-lg dark:shadow-white shadow-black grid gap-6">
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
