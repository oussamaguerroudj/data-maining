import React from 'react';
import { GraduationCap, Briefcase, CheckCircle, FileText, XCircle } from 'lucide-react';

const CandidateCard = ({ candidate, index }) => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-blue-300 transition-all group cursor-pointer">
      <div className="flex items-center gap-4">
        {/* Rank Badge */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg ${
          index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white' :
          index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-700' :
          index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-500 text-white' :
          'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700'
        }`}>
          {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
        </div>
        
        {/* Candidate Info */}
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
            {candidate.name}
          </h4>
          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1 flex-wrap">
            <span className="flex items-center gap-1">
              <GraduationCap className="w-4 h-4 text-green-600" />
              {candidate.education}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4 text-blue-600" />
              {candidate.experience}
            </span>
          </div>
        </div>

        {/* Score Display */}
        <div className="text-center">
          <div className="relative w-20 h-20">
            <svg className="transform -rotate-90 w-20 h-20">
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke={index === 0 ? '#10b981' : '#3b82f6'}
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${(candidate.score / 100) * 201} 201`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-900">{candidate.score}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-1 font-semibold">Score IA</div>
        </div>
        
        {/* Status Indicator */}
        <div className={`w-3 h-3 rounded-full animate-pulse ${
          candidate.status === 'excellent' ? 'bg-green-500' : 'bg-blue-500'
        }`}></div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
          <CheckCircle className="w-5 h-5" />
          Accepter
        </button>
        <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
          <FileText className="w-5 h-5" />
          Voir Dossier
        </button>
        <button className="px-4 py-3 bg-gradient-to-r from-red-100 to-red-200 text-red-600 rounded-xl hover:from-red-200 hover:to-red-300 transition-all font-bold shadow-md hover:shadow-lg">
          <XCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
