import React from 'react';

const blogPosts = [
    {
        title: 'Top 5 Hidden Gems in Kenya',
        excerpt: 'Discover lesser-known places in Kenya that offer breathtaking experiences without the crowds.',
        image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80',
        date: 'April 10, 2025',
    },
    {
        title: 'Best Time to Visit Kenya',
        excerpt: 'Learn about the different seasons in Kenya and the best months for wildlife, beaches, and adventure.',
        image: 'https://images.unsplash.com/photo-1549887534-4f7ae71bcd71?auto=format&fit=crop&w=800&q=80',
        date: 'March 22, 2025',
    },
    {
        title: 'Cultural Experiences You Can’t Miss',
        excerpt: 'Immerse yourself in authentic Kenyan culture—from Maasai villages to Swahili coastal life.',
        image: 'https://images.unsplash.com/photo-1600427511830-e6bfe2d55060?auto=format&fit=crop&w=800&q=80',
        date: 'February 18, 2025',
    },
];

const Blog = () => {
    return (
        <section id="blog" className="py-16 bg-gray-100 dark:bg-gray-900">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
                Travel Blog
            </h2>

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div
                        key={post.title}
                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-1">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">{post.excerpt}</p>
                            <a
                                href="#"
                                className="text-green-600 dark:text-green-400 mt-4 inline-block hover:underline"
                            >
                                Read more →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
