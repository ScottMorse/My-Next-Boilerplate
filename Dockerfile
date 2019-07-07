FROM node:10

WORKDIR /urs/src/app

COPY . .

EXPOSE 8080

RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
