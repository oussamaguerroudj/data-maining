import React from 'react';
import { Briefcase, MapPin, Users, Calendar, ChevronRight } from 'lucide-react';

const JobCard = ({ job, onApply }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden group cursor-pointer border-2 border-transparent hover:border-blue-200"
      onClick={() => onApply(job)}
    >
      <div className={`h-2 ${job.type === 'Stage' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gradient-to-r from-blue-600 to-blue-700'}`}></div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${
            job.type === 'Stage' 
              ? 'bg-yellow-100 text-yellow-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {job.type}
          </span>
          <div className="bg-blue-50 p-2 rounded-xl group-hover:bg-blue-100 transition-colors">
            <Briefcase className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {job.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{job.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>{job.positions} poste{job.positions > 1 ? 's' : ''} disponible{job.positions > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Limite: {new Date(job.deadline).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold flex items-center justify-center gap-2 group-hover:shadow-lg">
            Postuler Maintenant
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;