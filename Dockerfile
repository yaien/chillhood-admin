FROM node:12.5.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD npm run build
CMD npm start -- --port ${PORT:-8080}