import React, { useState } from 'react';
import { menuItems } from '../data';

type Category = 'all' | 'burger' | 'sides' | 'drinks';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'burger', 'sides', 'drinks'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as Category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${item.price}</span>
                  <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}