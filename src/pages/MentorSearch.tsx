

import React, { useState } from 'react';
import { mentors, Mentor } from '../data/mockData'; // Import Mentor as a type and value
// import { mentors } from '../data/mockData';
import MentorFilters from './mentorfilter';
import MentorCard from './MentorCard';

const MentorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMentors, setFilteredMentors] = useState(mentors);  // ✅ Define state

  return (
    <div className="max-w-7xl mx-auto flex h-screen">
      <div className="w-1/4 h-screen overflow-y-auto bg-white shadow-lg rounded-2xl p-6">
        {/* ✅ Pass the correct props */}
        {/* <MentorFilters mentors={mentors} setFilteredMentors={setFilteredMentors} /> */}

        <MentorFilters mentors={[]} setFilteredMentors={(value: React.SetStateAction<Mentor[]>) => setFilteredMentors(value)} />
      </div>

      <div className="w-3/4 h-screen overflow-hidden flex flex-col">
        <div className="bg-white rounded shadow-lg mb-4">
          <input
            type="text"
            placeholder="Search mentors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Scrollable Mentor Cards */}
        <div className="flex-1 overflow-y-auto pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredMentors.length === 0 ? (
              <p className="text-center text-gray-600 col-span-full">No mentors found.</p>
            ) : (
              filteredMentors.map((mentor) => <MentorCard key={mentor.name} mentor={mentor} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorSearch;
