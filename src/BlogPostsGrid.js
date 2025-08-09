// src/components/BlogPostsGrid.js
import React from 'react';

const BlogPostsGrid = ({ posts, postsSectionRef }) => {
    return (
        <section ref={postsSectionRef} className="mt-12 animate-fade-in">
            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No posts found matching your criteria</h3>
                    <p className="mt-2 text-gray-500">Try adjusting your search or filter</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{post.date}</span>
                                    <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center">
                                        Read more
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};

export default BlogPostsGrid;