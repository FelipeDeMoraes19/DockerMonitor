<<<<<<< HEAD
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

3. Acesse o backend via **FastAPI**:
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

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 478adcc (Initialize project using Create React App)
