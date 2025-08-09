// src/components/Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="max-w-6xl mx-auto text-center text-sm">
                <p>&copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.</p>
                <p className="mt-2">Built with React and Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;