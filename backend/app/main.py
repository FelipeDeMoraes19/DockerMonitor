from fastapi import FastAPI
from app.docker_service import get_containers

app = FastAPI()

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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
