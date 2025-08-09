// src/components/FilterControls.js

import React from 'react';
import { Search } from 'lucide-react';

const FilterControls = ({ categories, selectedCategory, setSelectedCategory, searchTerm, setSearchTerm }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105
              ${selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-auto md:min-w-[250px]">
                <input
                    type="text"
                    placeholder="Search posts by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
        </div>
    );
};

export default FilterControls;