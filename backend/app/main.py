from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # later replace with your Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend running"}

@app.get("/api/leetcode")
def leetcode_stats():
    username = "_amardipkarn"

    solved_url = f"https://alfa-leetcode-api.onrender.com/{username}/solved"
    contest_url = f"https://alfa-leetcode-api.onrender.com/{username}/contest"

    solved = requests.get(solved_url, timeout=10).json()
    contest = requests.get(contest_url, timeout=10).json()

    return {
        "username": username,
        "solved": solved,
        "contest": contest
    }