from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.docker_service import get_containers, get_container_stats

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.get("/")
async def root():
    return {"message": "Bem-vindo ao DockerMonitor API!"}

@app.get("/healthcheck")
async def healthcheck():
    return {"status": "OK", "message": "Backend está rodando!"}

@app.get("/containers")
async def list_containers():
    """
    Endpoint para listar contêineres em execução no Docker.
    """
    return {"containers": get_containers()}

@app.get("/stats") 
async def stats():
    return {"stats": get_container_stats()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
