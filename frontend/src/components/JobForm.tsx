import * as React from 'react';

const JobForm: React.FC = () => {
    const [url, setUrl] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Call API to scrape job description
        // and compare with uploaded resume
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Job Board URL:
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default JobForm;