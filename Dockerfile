FROM node:14.10-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5400
RUN echo 'alias sequelize="node_modules/.bin/sequelize"' >> ~/.bashrc
CMD [ "npm", "run", "dev" ]
