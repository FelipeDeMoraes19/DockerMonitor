from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator
from app.docker_service import get_containers, get_container_stats

app = FastAPI()

# Middleware de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inicializa o Instrumentator
instrumentator = Instrumentator().instrument(app)
@app.on_event("startup")
async def _startup():
    instrumentator.expose(app, endpoint="/metrics", include_in_schema=False)

@app.get("/")
async def root():
    return {"message": "Welcome to DockerMonitor API!"}

@app.get("/healthcheck")
async def healthcheck():
    return {"status": "OK", "message": "Backend is running!"}

@app.get("/containers")
async def list_containers():
    """Endpoint to list running Docker containers."""
    return {"containers": get_containers()}

@app.get("/stats")
async def stats():
    return {"stats": get_container_stats()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
