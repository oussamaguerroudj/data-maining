import React, { useState } from 'react';
import JobsListPage from "./pages/JobsListPage";
import AdminPage from './pages/AdminPage';
import ApplicationModal from "./components/ApplicationModal";
// في ملف src/App.jsx
import { 
    jobsData as jobs,           // تغيير اسم jobsData إلى jobs
    candidatesData as topCandidates // تغيير اسم candidatesData إلى topCandidates
} from "./data/jobsData";
const AlgeriePosteRecruitment = () => {
  const [currentPage, setCurrentPage] = useState('jobs');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  return (
    <div className="font-sans">
 
      
      {currentPage === 'jobs' && (
        <JobsListPage 
          jobs={jobs}
          setCurrentPage={setCurrentPage}
          setSelectedJob={setSelectedJob}
          setShowApplicationModal={setShowApplicationModal}
        />
      )}
      
      {currentPage === 'admin' && (
        <AdminPage 
          jobs={jobs}
          topCandidates={topCandidates}
          setCurrentPage={setCurrentPage}
        />
      )}
      
      <ApplicationModal 
        showApplicationModal={showApplicationModal}
        setShowApplicationModal={setShowApplicationModal}
        selectedJob={selectedJob}
      />
    </div>
  );
};

export default AlgeriePosteRecruitment;