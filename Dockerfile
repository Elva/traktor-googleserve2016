FROM node:4
WORKDIR /code
COPY package.json /code/package.json
RUN npm install
COPY . /code
CMD node index.js
