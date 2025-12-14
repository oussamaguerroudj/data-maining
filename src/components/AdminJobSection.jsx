import React from 'react';
import { MapPin, Users, Calendar, Star, ChevronRight } from 'lucide-react';
import CandidateCard from './CandidateCard';

const AdminJobSection = ({ job, topCandidates }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                job.type === 'Stage' 
                  ? 'bg-yellow-400 text-blue-900' 
                  : 'bg-white/20 text-white'
              }`}>
                {job.type}
              </span>
            </div>
            <div className="flex items-center gap-6 text-blue-100 text-sm flex-wrap">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {job.candidates} candidatures
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Deadline: {new Date(job.deadline).toLocaleDateString('fr-FR')}
              </span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
            <div className="text-2xl font-bold">{job.positions}</div>
            <div className="text-xs text-blue-200">Postes</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-2 rounded-lg">
              <Star className="w-5 h-5 text-white" />
            </div>
            Top 5 Candidats - Sélection IA
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-semibold">
            Algorithme de Data Mining
          </span>
        </div>

        <div className="space-y-3">
          {topCandidates.map((candidate, idx) => (
            <CandidateCard key={candidate.id} candidate={candidate} index={idx} />
          ))}
        </div>

        <button className="w-full mt-6 py-4 border-2 border-blue-200 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
          Voir tous les {job.candidates} candidats
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default AdminJobSection;