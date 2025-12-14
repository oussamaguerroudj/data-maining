import React, { useMemo } from 'react';
import AdminStats from '../components/AdminStats';
import AdminJobSection from '../components/AdminJobSection';
import { jobsData, candidatesData } from '../data/jobsData';
import { ArrowLeft, Briefcase, PlusCircle, BarChart3 } from 'lucide-react';

const AdminPage = ({ onNavigateToJobs }) => {
  const totalJobs = jobsData.length;
  const totalCandidates = jobsData.reduce((sum, job) => sum + job.candidates, 0);

  // Group candidates data by job ID (mocked for simplicity here)
  const jobsWithCandidates = useMemo(() => {
    // In a real application, you would fetch candidates specific to each job ID.
    // Here, we just assign the candidatesData to all jobs for demonstration.
    return jobsData.map(job => ({
      ...job,
      candidates: candidatesData // Mocked: all candidates apply to all jobs
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-1 flex items-center gap-3">
                <BarChart3 className="w-7 h-7" />
                Tableau de Bord Administration
              </h1>
              <p className="text-blue-200">Gestion des offres d'emploi et des candidatures</p>
            </div>
            <button 
              onClick={onNavigateToJobs}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center gap-2 border border-white/40"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour aux Offres
            </button>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-6 py-12">
        {/* Statistics */}
        <AdminStats 
          totalJobs={totalJobs} 
          totalCandidates={totalCandidates} 
        />

        {/* Job Management Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-600" />
            Gestion des Offres Actives
          </h2>
          <button className="bg-green-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors transform hover:scale-[1.03] shadow-lg flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Créer une Nouvelle Offre
          </button>
        </div>

        {/* List of Jobs */}
        <div className="space-y-10">
          {jobsData.map(job => (
            <AdminJobSection key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;