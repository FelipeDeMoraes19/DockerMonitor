from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Bem-vindo ao DockerMonitor API!"}

@app.get("/healthcheck")
async def healthcheck():
    return {"status": "OK", "message": "Backend está rodando!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
