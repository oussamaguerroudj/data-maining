import React from 'react';
import { X, MapPin, Calendar, FileText, CheckCircle, ChevronRight } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

const ApplicationModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-t-2xl z-10">
          <div className="flex justify-between items-start">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                job.type === 'Stage' 
                  ? 'bg-yellow-400 text-blue-900' 
                  : 'bg-white/20 text-white'
              }`}>
                {job.type}
              </span>
              <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
              <div className="flex items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Deadline: {new Date(job.deadline).toLocaleDateString('fr-FR')}
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-8">
          {/* Job Details */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Description du Poste
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-3">Exigences:</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-3">Responsabilités:</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <ApplicationForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;