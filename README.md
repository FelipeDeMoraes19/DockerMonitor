# 🚀 DockerMonitor

> **A real-time Docker container monitoring system with an interactive dashboard.**

[![Docker](https://img.shields.io/badge/Docker-✅-blue?style=flat-square)](https://www.docker.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-✅-green?style=flat-square)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-✅-blue?style=flat-square)](https://react.dev/)
[![Prometheus](https://img.shields.io/badge/Prometheus-✅-red?style=flat-square)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-✅-orange?style=flat-square)](https://grafana.com/)

---

## 📌 **Project Overview**
DockerMonitor provides **real-time monitoring** of running Docker containers, displaying:
✅ **CPU & Memory Usage**  
✅ **Execution Time per container**  
✅ **Container Status & Logs**  
✅ **Alerts & Metrics via Prometheus & Grafana**  

---

## 🛠 **Tech Stack**
- **Backend**: FastAPI
- **Database**: PostgreSQL
- **Frontend**: React (Recharts for graphs)
- **Monitoring**: Docker SDK for Python
- **Deployment**: Docker Compose
- **Extras**: Prometheus & Grafana for advanced visualization

---

## 📂 **Project Structure**
```sh
DockerMonitor/
│── backend/             
│── frontend/            
│── docker/              
│── docs/                
│── .gitignore           
│── README.md     
```       

## 🚀 **Getting Started**

### 🔹 Prerequisites
- ✅ Docker & Docker Compose installed
- ✅ Python 3.9+
- ✅ Node.js

### 🔹 Installation
1. Clone the repository:
```sh
git clone https://github.com/FelipeDeMoraes19/DockerMonitor.git
cd DockerMonitor
```

2. Start all services with Docker Compose:
```bash
docker-compose up -d
```

## 🌐 **Access Services**
- ✅ Backend (FastAPI/Django): http://localhost:8000
- ✅ Frontend (React/Streamlit): http://localhost:3000
- ✅ Grafana Dashboard: http://localhost:3001
*(Credentials: admin/admin)*