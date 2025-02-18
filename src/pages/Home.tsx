import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data';

export default function Home() {
  const bestsellers = menuItems.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1586816001966-79b736744398?w=1920)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Bite into <span className="text-yellow-500">Happiness!</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Savor the perfect blend of premium ingredients and bold flavors
            </p>
            <Link
              to="/order"
              className="inline-flex items-center px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Bestsellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${item.price}</span>
                    <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Special Offer</h2>
          <p className="text-xl mb-8">Get 20% off on your first order!</p>
          <Link
            to="/order"
            className="inline-flex items-center px-8 py-3 bg-black text-yellow-500 font-bold rounded-full hover:bg-gray-900 transition-colors"
          >
            Claim Offer
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}