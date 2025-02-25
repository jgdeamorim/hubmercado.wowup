# Usar uma versão LTS do Node.js
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos para dentro do container
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Gerar o build do Next.js
RUN npm run build

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]
