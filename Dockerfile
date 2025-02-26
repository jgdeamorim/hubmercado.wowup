# Usar uma versão LTS do Node.js
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos essenciais
COPY package*.json ./
RUN npm install

# Copiar restante dos arquivos
COPY . .

# Gerar build do Next.js
RUN npm run build

# Comando para iniciar Next.js
CMD ["npm", "run", "start"]
