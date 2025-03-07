import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, Calendar, MessageSquare, FileText, Settings, HelpCircle, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col fixed">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <Users className="text-blue-500" size={24} />
        <h1 className="text-xl font-semibold">MentorMatch</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li><Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-500"><Home size={20} /> Home</Link></li>
          <li><Link to="/search" className="flex items-center gap-2 text-gray-700 hover:text-blue-500"><Users size={20} /> Find Mentors</Link></li>
          <li><Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-500"><Calendar size={20} /> Dashboard</Link></li>
          <li><Link to="/mentor-dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-500"><MessageSquare size={20} /> Mentor Dashboard</Link></li>
          <li><Link to="/communities" className="flex items-center gap-2 text-gray-700 hover:text-blue-500"><FileText size={20} /> Communities</Link></li>
          <li><Link to="/settings" className="flex items-center gap-2 text-gray-700 hover:text-blue-500"><Settings size={20} /> Settings</Link></li>
        </ul>
      </nav>

      {/* Footer Links */}
      <div className="mt-auto">
        <ul className="space-y-4">
          <li><Link to="/help" className="flex items-center gap-2 text-gray-700 hover:text-blue-500"><HelpCircle size={20} /> Help & Support</Link></li>
          <li><Link to="/signin" className="flex items-center gap-2 text-gray-700 hover:text-red-500"><LogOut size={20} /> Sign In</Link></li>
          <li><Link to="/signup" className="flex items-center gap-2 text-gray-700 hover:text-red-500"><LogOut size={20} /> Sign Up</Link></li>
        </ul>
      </div>
    </div>
  );
}
