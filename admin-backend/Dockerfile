FROM node:latest
WORKDIR /opt/mianio-admin

RUN mkdir -p /opt/mianio-admin

ADD package.json /opt/mianio-admin
RUN npm install \
    && npm install -g nodemon
