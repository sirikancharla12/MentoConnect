import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, Calendar, MessageCircle, Video, DollarSign, Award, Briefcase, Users, ThumbsUp } from 'lucide-react';
import { mentors } from '../data/mockData';

const MentorProfile = () => {
  const { id } = useParams();
  const mentor = mentors.find(m => m.id === Number(id));

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-64 bg-indigo-600">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white flex items-end gap-8">
            <img
              src={mentor.imageUrl}
              alt={mentor.name}
              className="w-32 h-32 rounded-xl border-4 border-white shadow-lg"
            />
            <div className="flex-1 pb-2">
              <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
              <p className="text-xl opacity-90">{mentor.title} at {mentor.company}</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Message
              </button>
              <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-400 transition-colors flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Session
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-8 p-8 border-b">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-2xl font-bold ml-2">{mentor.rating}</span>
            </div>
            <p className="text-gray-600">{mentor.reviews} Reviews</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-indigo-600" />
              <span className="text-2xl font-bold ml-2">120+</span>
            </div>
            <p className="text-gray-600">Students Mentored</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-6 w-6 text-indigo-600" />
              <span className="text-2xl font-bold ml-2">500+</span>
            </div>
            <p className="text-gray-600">Hours Taught</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <ThumbsUp className="h-6 w-6 text-indigo-600" />
              <span className="text-2xl font-bold ml-2">98%</span>
            </div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed">{mentor.bio}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {mentor.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Senior AI Researcher</h3>
                    <p className="text-gray-600">TechCorp AI • 2020 - Present</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Research Fellow</h3>
                    <p className="text-gray-600">Stanford AI Lab • 2018 - 2020</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Session Options</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Video className="h-5 w-5 text-indigo-600" />
                    <span>1:1 Video Call</span>
                  </div>
                  <span className="font-semibold">${mentor.hourlyRate}/hr</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-indigo-600" />
                    <span>Chat Consultation</span>
                  </div>
                  <span className="font-semibold">${Math.floor(mentor.hourlyRate * 0.7)}/hr</span>
                </div>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors">
                Schedule Session
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-gray-600 mb-4">{mentor.availability}</p>
              <div className="grid grid-cols-3 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                  <div key={day} className="text-center p-2 bg-white rounded border border-gray-100">
                    <span className="text-sm font-medium">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;