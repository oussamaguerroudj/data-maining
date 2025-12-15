import React from 'react';
import AdminStats from '../components/AdminStats';
import AdminJobSection from '../components/AdminJobSection';

const AdminPage = ({ jobs, candidates, onNavigateToJobs }) => {
  const totalCandidates = jobs.reduce((sum, job) => sum + job.candidates, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-6">
          <button 
            onClick={onNavigateToJobs}
            className="mb-6 text-blue-200 hover:text-white flex items-center gap-2 transition-colors"
          >
            ← Retour aux offres
          </button>
          <h1 className="text-4xl font-bold mb-4">Espace Administration</h1>
          <p className="text-blue-200">Gestion des candidatures et sélection par Intelligence Artificielle</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <AdminStats totalJobs={jobs.length} totalCandidates={totalCandidates} />

        {/* Jobs with AI-Ranked Candidates */}
        <div className="space-y-8">
          {jobs.map(job => (
            <AdminJobSection key={job.id} job={job} topCandidates={candidates} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;