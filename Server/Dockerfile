FROM node:14

WORKDIR /docker

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080, AUTH_SECRET=ABCD, DATABASE_PASSWORD=123

EXPOSE 8080

CMD ["npm","start"]