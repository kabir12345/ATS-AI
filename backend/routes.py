from fastapi import APIRouter, HTTPException
from schemas import JobDescriptionRequest, ResumeRequest, ComparisonResult
from services import scrape_job_description, compare_keywords

router = APIRouter()

@router.post("/compare", response_model=ComparisonResult)
def compare(job: JobDescriptionRequest, resume: ResumeRequest):
    job_description = scrape_job_description(job.url)
    missing_keywords = compare_keywords(job_description, resume.resume)
    return ComparisonResult(missing_keywords=missing_keywords)
