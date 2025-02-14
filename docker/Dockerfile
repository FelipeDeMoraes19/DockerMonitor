# Usar a imagem oficial do Python
FROM python:3.12

# Criar e definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos do backend para dentro do contêiner
COPY backend/ ./ 

# Instalar as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Expor a porta 8000 (onde o FastAPI rodará)
EXPOSE 8000

# Comando para rodar a aplicação
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
