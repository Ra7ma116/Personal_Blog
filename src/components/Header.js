// src/components/Header.js

import React from 'react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">My Personal Blog</h1>
                <p className="mt-4 text-lg sm:text-xl opacity-90 font-light">Insights, Adventures, and Everything In Between</p>
            </div>
        </header>
    );
};

export default Header;