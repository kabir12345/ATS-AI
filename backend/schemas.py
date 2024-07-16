from pydantic import BaseModel

class JobDescriptionRequest(BaseModel):
    url: str

class ResumeRequest(BaseModel):
    resume: str

class ComparisonResult(BaseModel):
    missing_keywords: list[str]
