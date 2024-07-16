from pydantic import BaseModel

class JobDescription(BaseModel):
    url: str

class Resume(BaseModel):
    content: str
