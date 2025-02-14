# 🚀 DockerMonitor

Sistema de monitoramento de contêineres Docker com visualização em dashboard.

## 📌 Visão Geral

Este projeto visa monitorar contêineres Docker em tempo real, exibindo informações sobre:
- Uso de **CPU e memória**
- **Tempo de execução** de cada contêiner
- Status de **execução e logs**
- **Alertas** e métricas em um dashboard interativo

## 🛠 Tecnologias Utilizadas

- **Backend**: FastAPI ou Django Rest Framework
- **Banco de Dados**: PostgreSQL
- **Frontend**: React ou Streamlit
- **Monitoramento**: Docker SDK para Python
- **Deploy**: Docker Compose
- **Extras**: Prometheus e Grafana para visualização avançada

## 📂 Estrutura do Projeto

```
DockerMonitor/
│── backend/             # Backend FastAPI/Django
│── frontend/            # Frontend React
│── docker/              # Configurações Docker Compose
│── docs/                # Documentação
│── .gitignore           # Arquivos ignorados pelo Git
│── README.md            # Documentação principal
```

## ⚙️ Instalação e Configuração

### **Pré-requisitos**
- Docker e Docker Compose instalados
- Python 3.9+
- Node.js

### **Passos para rodar o projeto**

1. Clone o repositório:
   ```sh
   git clone https://github.com/FelipeDeMoraes19/DockerMonitor.git
   cd DockerMonitor
   ```

2. Inicie os serviços com Docker Compose:
   ```sh
   docker-compose up -d
   ```

3. Acesse o backend via **FastAPI/Django**:
   ```sh
   http://localhost:8000
   ```

4. Acesse o frontend via **React/Streamlit**:
   ```sh
   http://localhost:3000
   ```

## 🔥 Endpoints da API

| Método  | Rota               | Descrição                         |
|---------|--------------------|---------------------------------|
| GET     | `/healthcheck`      | Verifica se o backend está rodando |
| GET     | `/containers`       | Lista todos os contêineres ativos |
| GET     | `/metrics`          | Retorna métricas para Prometheus  |

## 📊 Dashboard e Monitoramento

- O sistema utiliza **Prometheus** para coletar métricas dos contêineres
- O **Grafana** exibe essas métricas em tempo real
- Acesse o painel do Grafana em: `http://localhost:3001`

