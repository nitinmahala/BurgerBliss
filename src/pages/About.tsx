import React from 'react';
import { Utensils, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Crafting the Perfect Burger Since 2010</h2>
          <p className="text-gray-600 mb-8">
            BurgerBliss began with a simple mission: to create the most delicious, 
            high-quality burgers that bring joy to every bite. Our journey started 
            in a small kitchen with big dreams, and today, we're proud to serve 
            thousands of happy customers while maintaining the same dedication to 
            quality and taste that got us started.
          </p>
          <p className="text-gray-600">
            Every ingredient is carefully selected, every recipe perfected, and 
            every burger crafted with passion. We believe in supporting local 
            suppliers, maintaining sustainable practices, and creating a welcoming 
            environment for our customers and team members alike.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on ingredients or preparation methods.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-gray-600">
                Supporting local suppliers and creating jobs in our community.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly improving our recipes and service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}