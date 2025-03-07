


import { Link } from 'react-router-dom';
import { Star, DollarSign } from 'lucide-react';

interface Mentor {
  imageUrl?: string;
  name: string;
  title: string;
  company: string;
  about: string;
  expertise: string[];
  availability: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  sessionsCompleted: number;
  id: string;
}

import { useState } from 'react';
import GlassPopupScheduler from './schedule-meeting'; // Adjust the path as necessary

const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md border border-gray-200">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {mentor.imageUrl ? (
            <img src={mentor.imageUrl} alt={mentor.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-500 text-lg">👤</span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{mentor.name}</h3>
          <p className="text-sm text-gray-500">{mentor.title} at {mentor.company}</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-4 text-gray-600 text-sm">
        {mentor.about}
      </div>

      {/* Skills Section */}
      <div className="mt-4">
        <h4 className="text-gray-700 font-semibold text-sm mb-2">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="mt-4">
        <h4 className="text-gray-700 font-semibold text-sm mb-2">Availability</h4>
        <div className="flex flex-wrap gap-2">
          {mentor.availability.map((slot, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              {slot}
            </span>
          ))}
        </div>
      </div>

      {/* Ratings & Price */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="h-4 w-4" />
          <span className="font-semibold">{mentor.rating}</span>
          <span className="text-gray-500">({mentor.reviews} reviews)</span>
        </div>
        <div className="flex items-center font-semibold text-indigo-600">
          <DollarSign className="h-4 w-4" />
          <span>{mentor.hourlyRate}/hr</span>
        </div>
      </div>

      {/* Sessions Completed */}
      <div className="text-gray-500 text-sm mt-2">
        {mentor.sessionsCompleted} sessions completed
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
      <button
        onClick={() => setIsOpen(true)}
        className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center text-sm font-semibold hover:bg-blue-700 transition"
      >
        Book a Session
      </button>

      {isOpen && <GlassPopupScheduler onClose={() => setIsOpen(false)} mentor={mentor} mentorId={''} />}
        <Link to={`/mentor/${mentor.id}`} className="flex-1 border border-gray-300 py-2 rounded-lg text-center text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default MentorCard; 
//  mentor card shuld be scrolled in the comp not whole page