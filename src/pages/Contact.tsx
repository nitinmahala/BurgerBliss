import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { location } from '../data';

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">{location.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      {location.hours.map((hours, index) => (
                        <p key={index}>{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg p-8 h-full">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="h-[600px] bg-gray-200 rounded-lg">
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.894925361216!2d75.39001347548201!3d28.11564237595097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391339e47fab9d4d%3A0x67a76002e6654896!2sGrill%20Masters%20Jhunjhunu%20-Best%20Fast%20food%20restaurant%20in%20Jhunjhunu%2C%20best%20pizza%20restaurant%2C%20Coffee%20Cafe%20in%20Jhunjhunu!5e1!3m2!1sen!2sin!4v1739908677743!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


