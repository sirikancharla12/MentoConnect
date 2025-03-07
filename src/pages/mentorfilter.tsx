// import React, { useState } from "react";

// const MentorFilters = () => {
//   const [search, setSearch] = useState("");
//   const [skills, setSkills] = useState(["React", "UX Design"]);
//   const [industry, setIndustry] = useState("");
//   const [experience, setExperience] = useState("");
//   const [price, setPrice] = useState(200);
//   const [availability, setAvailability] = useState("");
//   const [rating, setRating] = useState("4+ Stars");

//   const handleRemoveSkill = (skill: string) => {
//     setSkills(skills.filter((s) => s !== skill));
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md w-64 h-max">
//       <div className="flex justify-between mb-4">
//         <h2 className="text-lg font-semibold">Filters</h2>
//         <button className="text-blue-500 text-sm">Reset</button>
//       </div>

//       <div className="mb-4">
//         <label className="block text-sm font-medium">Skills</label>
//         <select className="w-full mt-1 p-2 border rounded-md">
//         <option>Select skills</option>
// <option>Programming</option>
// <option>Designing</option>
// <option>Marketing</option>
// <option>Product Management</option>
// <option>Leadership</option>
// <option>Web Development</option>
// <option>Data Analysis</option>
// <option>Machine Learning</option>
// <option>Cybersecurity</option>
// <option>Cloud Computing</option>
// <option>DevOps</option>
// <option>UI/UX Design</option>
// <option>SEO</option>
// <option>Content Writing</option>
// <option>Social Media Management</option>
// <option>Project Management</option>
// <option>Finance</option>
// <option>Sales</option>
// <option>Communication</option>
// <option>Video Editing</option>
// <option>Graphic Design</option>
// <option>Public Speaking</option>
// <option>Software Testing</option>
// <option>Networking</option>
// <option>Game Development</option>


//         </select>
//         <div className="mt-2 flex flex-wrap gap-2">
//           {skills.map((skill) => (
//             <span key={skill} className="bg-blue-100 px-2 py-1 rounded-md flex items-center gap-1">
//               {skill}
//               <button onClick={() => handleRemoveSkill(skill)} className="text-red-500">&times;</button>
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Industry</label>
//         <select className="w-full mt-1 p-2 border rounded-md">
//         <option>Select industry</option>
// <option value="technology">Technology</option>
// <option value="finance">Finance</option>
// <option value="healthcare">Healthcare</option>
// <option value="education">Education</option>
// <option value="marketing">Marketing</option>
// <option value="design">Design</option>
// <option value="consulting">Consulting</option>
// <option value="engineering">Engineering</option>
// <option value="business">Business</option>
// <option value="entertainment">Entertainment</option>
// <option value="legal">Legal</option>
// <option value="manufacturing">Manufacturing</option>
// <option value="real-estate">Real Estate</option>
// <option value="sports">Sports</option>
// <option value="government">Government</option>
// <option value="nonprofit">Nonprofit</option>
// <option value="automotive">Automotive</option>
// <option value="hospitality">Hospitality</option>
// <option value="media">Media</option>
// <option value="retail">Retail</option>
// <option value="science">Science</option>

//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Experience Level</label>
//         <select className="w-full mt-1 p-2 border rounded-md">
//           <option>Select experience</option>
//   <option>Beginner (0-1 years)</option>
//   <option>Intermediate (1-3 years)</option>
//   <option>Advanced (3-5 years)</option>
//   <option>Expert (5+ years)</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Price Range</label>
//         <input
//           type="range"
//           min="0"
//           max="200"
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//           className="w-full"
//         />
//         <div className="text-sm text-gray-500">${price} - $200</div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Availability</label>
//         <select className="w-full mt-1 p-2 border rounded-md">
        
//   <option>Select availability</option>
//   <option>Weekdays</option>
//   <option>Weekends</option>
//   <option>Mornings</option>
//   <option>Afternoons</option>
//   <option>Evenings</option>
//   <option>Flexible</option>
//   <option>By Appointment</option>
// </select>


//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Rating</label>
//         <select className="w-full mt-1 p-2 border rounded-md">
//         <option>Select rating</option>
//     <option>5 Stars</option>
//     <option>4+ Stars</option>
//     <option>3+ Stars</option>
//     <option>2+ Stars</option>
//     <option>1+ Stars</option>
//         </select>
//       </div>
//       <button className="w-full bg-blue-500 text-white py-2 rounded-md">Apply Filters</button>
//     </div>
//   );
// };

// export default MentorFilters;


import React, { useState } from "react";

interface Mentor {
  name: string;
  skills: string[];
  industry: string;
  experience: string;
  price: number;
  availability: string;
  rating: number;
}

interface MentorFiltersProps {
    mentors: Mentor[];
    setFilteredMentors: React.Dispatch<React.SetStateAction<Mentor[]>>;
  }
  

const MentorFilters: React.FC<MentorFiltersProps> = () => {
  const [search, setSearch] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [industry, setIndustry] = useState("");
  const [experience, setExperience] = useState("");
  const [price, setPrice] = useState(200);
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

//   const applyFilters = () => {
//     const filtered = mentors.filter((mentor) => {
//       return (
//         (!search || mentor.name.toLowerCase().includes(search.toLowerCase())) &&
//         (!industry || mentor.industry === industry) &&
//         (!experience || mentor.experience === experience) &&
//         (!availability || mentor.availability === availability) &&
//         (!rating || mentor.rating >= parseInt(rating)) &&
//         mentor.price <= price
        
//       );
//     });
//     setFilteredMentors(filtered);
//   };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-64 h-max">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button className="text-blue-500 text-sm" >
          Reset
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Skills</label>
        <select onChange={(e) => setSkills([...skills, e.target.value])} className="w-full mt-1 p-2 border rounded-md">
          <option>Select skills</option>
          <option>Programming</option>
          <option>Designing</option>
          <option>Marketing</option>
          <option>Product Management</option>
          <option>Leadership</option>
        </select>
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="bg-blue-100 px-2 py-1 rounded-md flex items-center gap-1">
              {skill}
              <button onClick={() => handleRemoveSkill(skill)} className="text-red-500">&times;</button>
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Industry</label>
        <select onChange={(e) => setIndustry(e.target.value)} className="w-full mt-1 p-2 border rounded-md">
          <option>Select industry</option>
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
          <option>Education</option>
          <option>Marketing</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Experience Level</label>
        <select onChange={(e) => setExperience(e.target.value)} className="w-full mt-1 p-2 border rounded-md">
          <option>Select experience</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Price Range</label>
        <input
          type="range"
          min="0"
          max="200"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-sm text-gray-500">${price} - $200</div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Availability</label>
        <select onChange={(e) => setAvailability(e.target.value)} className="w-full mt-1 p-2 border rounded-md">
          <option>Select availability</option>
          <option>Weekdays</option>
          <option>Weekends</option>
          <option>Flexible</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Rating</label>
        <select onChange={(e) => setRating(e.target.value)} className="w-full mt-1 p-2 border rounded-md">
          <option>Select rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
          <option value="2">2+ Stars</option>
          <option value="1">1+ Stars</option>
        </select>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-md">
        Apply Filters
      </button>
    </div>
  );
};

export default MentorFilters;
