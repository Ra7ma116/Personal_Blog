// src/components/BlogPostsGrid.js

import React from 'react';
import { Calendar, Tag } from 'lucide-react';

// Blog Post Card Component
const BlogPostCard = ({ post }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
        <img
            src={post.image}
            alt={post.title}
            className="w-full h-52 object-cover object-center"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/CCCCCC/666666?text=Image+Error`; }}
        />
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
            <div className="flex items-center justify-between text-gray-500 text-xs mt-auto">
                <span className="flex items-center">
                    <Calendar size={14} className="mr-1 text-blue-500" /> {post.date}
                </span>
                <span className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    <Tag size={12} className="mr-1" /> {post.category}
                </span>
            </div>
        </div>
    </div>
);

const BlogPostsGrid = ({ posts, postsSectionRef }) => {
    return (
        <section ref={postsSectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
                posts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                ))
            ) : (
                <div className="col-span-full text-center py-10 text-gray-600 text-lg">
                    No posts found matching your criteria.
                </div>
            )}
        </section>
    );
};

export default BlogPostsGrid;