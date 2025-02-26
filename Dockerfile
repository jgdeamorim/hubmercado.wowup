# Usar uma versão LTS do Node.js
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos essenciais
COPY package*.json ./
RUN npm install --only=production

# Copiar restante dos arquivos
COPY . .

# Gerar build do Next.js
RUN npm run build

# Iniciar Next.js corretamente
CMD ["node_modules/.bin/next", "start"]
