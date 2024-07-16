from typing import List
from bs4 import BeautifulSoup
import requests
from transformers import pipeline

def scrape_job_description(url: str) -> str:
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    job_description = soup.get_text()
    return job_description

def compare_keywords(job_description: str, resume: str) -> List[str]:
    job_keywords = set(job_description.split())
    resume_keywords = set(resume.split())
    missing_keywords = job_keywords - resume_keywords
    return list(missing_keywords)
