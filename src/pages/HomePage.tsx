import React from 'react';
import { ArrowRight, Star, Users, Trophy, Brain } from 'lucide-react';
import { categories } from '../data/mockData';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Find Your Perfect Mentor
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with industry experts who can guide you through your professional journey and help you achieve your goals.
        </p>
        <Link
          to="/search"
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
              <p className="text-gray-600">Connect with industry leaders and experienced professionals.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Star className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Matching</h3>
              <p className="text-gray-600">Find mentors that match your goals and learning style.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Trophy className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Set goals and measure your growth with detailed analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; count: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-gray-600">{category.count} mentors</p>
                </div>
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;