import React, { useState } from 'react';
import JobsListPage from './pages/JobsListPage';
import AdminPage from './pages/AdminPage';
import ApplicationModal from './components/ApplicationModal';
import { jobsData, candidatesData } from './data/jobsData';

function App() {
  const [currentPage, setCurrentPage] = useState('jobs');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleCloseModal = () => {
    setShowApplicationModal(false);
    setSelectedJob(null);
  };

  return (
    <div className="font-sans">
      {currentPage === 'jobs' && (
        <JobsListPage 
          jobs={jobsData}
          onApply={handleApply}
          onNavigateToAdmin={() => setCurrentPage('admin')}
        />
      )}
      
      {currentPage === 'admin' && (
        <AdminPage 
          jobs={jobsData}
          candidates={candidatesData}
          onNavigateToJobs={() => setCurrentPage('jobs')}
        />
      )}

      {showApplicationModal && (
        <ApplicationModal 
          job={selectedJob}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;