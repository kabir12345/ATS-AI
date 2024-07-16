import React, { useState } from 'react';

const ResumeUpload: React.FC = () => {
    const [resume, setResume] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setResume(reader.result as string);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div>
            <label>
                Upload Resume:
                <input type="file" onChange={handleFileChange} />
            </label>
        </div>
    );
};

export default ResumeUpload;