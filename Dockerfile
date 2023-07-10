FROM node:18.16.0

WORKDIR /home/node/app

COPY package.json ./package.json
COPY .npmrc ./.npmrc
COPY .nvmrc ./.nvmrc

RUN npm i