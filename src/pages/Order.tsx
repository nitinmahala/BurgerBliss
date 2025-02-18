import React, { useState } from 'react';
import { menuItems } from '../data';
import { MenuItem } from '../types';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

export default function Order() {
  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.item.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter(cartItem => cartItem.item.id !== itemId);
    });
  };

  const total = cart.reduce((sum, { item, quantity }) => sum + item.price * quantity, 0);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Order Online</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <ShoppingCart className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Your Order</h2>
              </div>
              
              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(({ item, quantity }) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-500">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}