FROM node:alpine3.19

WORKDIR /opt/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
