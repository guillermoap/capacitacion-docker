FROM node:14.10-alpine

ENV APP_NAME capacitacion-docker
ENV APP_HOME /app/$APP_NAME
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY *.json ./
RUN npm install
COPY /src /src
COPY *.sh ./
EXPOSE 5400
RUN echo 'alias sequelize="node_modules/.bin/sequelize"' >> ~/.bashrc

