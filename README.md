# ATS-AI

## Overview
ATS-AI is a web application that helps users compare their resumes against job descriptions to identify missing keywords. The application consists of a frontend built with React and TypeScript, and a backend built with FastAPI.

## Features
- Upload resume and job description
- Compare resume against job description
- Identify missing keywords

## Prerequisites
- Node.js
- npm
- Python 3.8+
- virtualenv

## Installation

### Frontend
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Build the project:
    ```bash
    npm run build
    ```

4. Start the development server:
    ```bash
    npm start
    ```

### Backend
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Create a virtual environment:
    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

5. Start the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000` to access the frontend.
2. Use the provided forms to upload your resume and job description.
3. Click the compare button to see the missing keywords.

## Project Structure

### Frontend
- `src/api.ts`: API calls using Axios
- `src/App.tsx`: Main application component
- `src/components/ResumeUpload.tsx`: Component for uploading resumes
- `src/components/JobForm.tsx`: Component for job description form
- `src/components/ComparisonResult.tsx`: Component to display comparison results

### Backend
- `main.py`: FastAPI application entry point
- `models.py`: Pydantic models for data validation
- `schemas.py`: Pydantic schemas for request and response models
- `routes.py`: API routes
- `services.py`: Business logic for scraping job descriptions and comparing keywords

## License
This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgements
- [FastAPI](https://fastapi.tiangolo.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/)
- [Transformers](https://huggingface.co/transformers/)