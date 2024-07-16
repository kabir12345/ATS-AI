import React from 'react';
import JobForm from './components/JobForm';
import ResumeUpload from './components/ResumeUpload';
import ComparisonResult from './components/ComparisonResult';

const App: React.FC = () => {
    return (
        <div>
            <h1>Job Description Comparator</h1>
            <JobForm />
            <ResumeUpload />
            <ComparisonResult />
        </div>
    );
};

export default App;
