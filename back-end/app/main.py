
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import noticias, user


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",  
    "http://127.0.0.1:8000",
    "http://localhost:5173",

]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

app.include_router(noticias.router, prefix="/api/noticias", tags=["noticias"])
app.include_router(user.router, prefix="/api/user", tags=["user"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
