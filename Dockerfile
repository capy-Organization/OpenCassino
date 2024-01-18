FROM node:21.6 

WORKDIR /app

COPY package.json package.*.json /app

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "dev"]


