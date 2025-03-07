import { useState } from "react";


interface ScheduleSessionProps {
    onClose: () => void;
    mentorId: string;
  }


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

export default function ScheduleSession({ onClose, mentor }: ScheduleSessionProps & { mentor: Mentor }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];
  const durations = [1, 2, 3];

  const handleConfirm = () => setIsConfirmed(true);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold text-center">Schedule a Session</h2>
        {!isConfirmed ? (
          <>

          
            <div className="mt-4">
              <label className="block text-sm">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Select Time</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Choose Time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm">Select Duration (Hours)</label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                {durations.map((duration) => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>
            <div className="mt-4 flex justify-between">
              <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded">Cancel</button>
              <button onClick={handleConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">Confirm</button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-green-500 text-lg">🎉 Session Confirmed!</p>
            <p>{selectedDate} at {selectedTime} for {selectedDuration} hour(s)</p>
            <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

// import { useState } from "react";

// interface ScheduleSessionProps {
//   onClose: () => void;
//   mentorId: string;
// }

// interface Mentor {
//   imageUrl?: string;
//   name: string;
//   title: string;
//   company: string;
//   about: string;
//   expertise: string[];
//   availability: string[];
//   rating: number;
//   reviews: number;
//   hourlyRate: number;
//   sessionsCompleted: number;
//   id: string;
// }

// export default function ScheduleSession({ onClose, mentor }: ScheduleSessionProps & { mentor: Mentor }) {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [selectedDuration, setSelectedDuration] = useState(1);
//   const [isConfirmed, setIsConfirmed] = useState(false);

//   const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];
//   const durations = [1, 2, 3];

//   const handleConfirm = () => setIsConfirmed(true);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         {/* Mentor's Name at the top */}
//         <h2 className="text-lg font-semibold text-center">Schedule a Session with {mentor.name}</h2>

//         {!isConfirmed ? (
//           <>
//             <div className="mt-4">
//               <label className="block text-sm">Select Date</label>
//               <input
//                 type="date"
//                 value={selectedDate}
//                 onChange={(e) => setSelectedDate(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mt-4">
//               <label className="block text-sm">Select Time</label>
//               <select
//                 value={selectedTime}
//                 onChange={(e) => setSelectedTime(e.target.value)}
//                 className="w-full p-2 border rounded"
//               >
//                 <option value="">Choose Time</option>
//                 {availableTimes.map((time) => (
//                   <option key={time} value={time}>{time}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mt-4">
//               <label className="block text-sm">Select Duration (Hours)</label>
//               <select
//                 value={selectedDuration}
//                 onChange={(e) => setSelectedDuration(Number(e.target.value))}
//                 className="w-full p-2 border rounded"
//               >
//                 {durations.map((duration) => (
//                   <option key={duration} value={duration}>{duration}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Display Total Cost */}
//             <div className="mt-2">
//               <p className="text-sm text-gray-500">Total Cost: ${selectedDuration * (mentor.hourlyRate || 0)}</p>
//             </div>

//             <div className="mt-4 flex justify-between">
//               <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded">Cancel</button>
//               <button onClick={handleConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">Confirm</button>
//             </div>
//           </>
//         ) : (
//           <div className="text-center">
//             <p className="text-green-500 text-lg">🎉 Session Confirmed!</p>
//             <p>{selectedDate} at {selectedTime} for {selectedDuration} hour(s)</p>
//             <p className="text-sm text-gray-500">Total Paid: ${selectedDuration * (mentor.hourlyRate || 0)}</p>
//             <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
