import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export const compareJobAndResume = (jobUrl: string, resume: string) => {
    return api.post('/compare', { url: jobUrl, resume });
};
