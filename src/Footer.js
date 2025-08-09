// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Modern Blog</h3>
                        <p className="text-gray-400">Bringing you the latest insights on technology, travel, and culinary adventures.</p>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Technology</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Travel</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Food</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">All Posts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">Subscribe</h4>
                        <p className="text-gray-400 mb-4">Get the latest posts delivered to your inbox.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-l-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Modern Blog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;