FROM node:14.15.0-buster-slim

ENV RESTAPI_PORT 8080

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${RESTAPI_PORT}

CMD ["node", "."]
