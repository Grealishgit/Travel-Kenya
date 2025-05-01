import React from 'react';

const ContactUs = () => {
    return (
        <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    Get in Touch
                </h2>

                <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                    Have questions, feedback, or want to partner with us? We'd love to hear from you!
                </p>

                <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md grid gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
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
        </section>
    );
};

export default ContactUs;
