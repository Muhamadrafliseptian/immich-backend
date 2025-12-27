# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code
COPY . .

# Build NestJS app
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app

# Hanya copy hasil build & package.json
COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist

# NestJS default port
EXPOSE 3000

# Jalankan NestJS
CMD ["node", "dist/main"]
