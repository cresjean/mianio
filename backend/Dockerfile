FROM node:latest
WORKDIR /opt/mianio

RUN mkdir -p /opt/mianio
ADD api /opt/mianio
ADD package.json /opt/mianio


RUN npm install \
    && npm install -g nodemon
