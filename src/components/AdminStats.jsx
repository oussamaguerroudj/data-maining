import React from 'react';
import { Briefcase, Users, Star, Clock } from 'lucide-react';

const AdminStats = ({ totalJobs, totalCandidates }) => {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform border-l-4 border-blue-600">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-blue-100 p-3 rounded-xl">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-3xl font-bold text-blue-900">{totalJobs}</span>
        </div>
        <p className="text-gray-600 font-semibold">Offres Actives</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform border-l-4 border-green-600">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-green-100 p-3 rounded-xl">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <span className="text-3xl font-bold text-green-900">{totalCandidates}</span>
        </div>
        <p className="text-gray-600 font-semibold">Candidatures Reçues</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform border-l-4 border-yellow-600">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-yellow-100 p-3 rounded-xl">
            <Star className="w-6 h-6 text-yellow-600" />
          </div>
          <span className="text-3xl font-bold text-yellow-900">28</span>
        </div>
        <p className="text-gray-600 font-semibold">Top Profils (IA)</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform border-l-4 border-purple-600">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-purple-100 p-3 rounded-xl">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-3xl font-bold text-purple-900">12</span>
        </div>
        <p className="text-gray-600 font-semibold">En Traitement</p>
      </div>
    </div>
  );
};

export default AdminStats;