// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <h1 className="text-2xl font-bold text-white">Modern Blog</h1>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-white hover:text-indigo-200 font-medium">Home</a>
                        <a href="#" className="text-white hover:text-indigo-200 font-medium">Categories</a>
                        <a href="#" className="text-white hover:text-indigo-200 font-medium">About</a>
                        <a href="#" className="text-white hover:text-indigo-200 font-medium">Contact</a>
                    </nav>
                    <button className="md:hidden text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div className="mt-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Discover Inspiring Content</h2>
                    <p className="text-lg text-indigo-100 max-w-2xl mx-auto">Explore our collection of articles on technology, travel, food, and more.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;