import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-500">
              BurgerBliss
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/menu" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Menu</Link>
              <Link to="/about" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/order" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Order Online</Link>
              <Link to="/contact" className="hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <ShoppingCart className="h-6 w-6 text-yellow-500" />
            </button>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">Home</Link>
            <Link to="/menu" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">Menu</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">About</Link>
            <Link to="/order" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">Order Online</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}