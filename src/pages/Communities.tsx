import React from 'react';
import { Users, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { communities } from '../data/mockData';

const Communities = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Learning Communities</h1>
        <p className="text-gray-600">Join communities of like-minded learners and grow together</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <div key={community.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <community.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{community.name}</h3>
                  <p className="text-gray-600">{community.members} members</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{community.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {community.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>{community.activeDiscussions} discussions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{community.weeklyMeetups ? 'Weekly meetups' : 'Monthly meetups'}</span>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Join Community
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Discussions */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Trending Discussions</h2>
        <div className="bg-white rounded-xl shadow-sm divide-y">
          {[1, 2, 3].map((discussion) => (
            <div key={discussion} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">
                    Best practices for learning System Design?
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Looking for advice on how to effectively learn and practice system design concepts...
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>24 replies</span>
                    <span>•</span>
                    <span>3 hours ago</span>
                  </div>
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                  Join Discussion
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;