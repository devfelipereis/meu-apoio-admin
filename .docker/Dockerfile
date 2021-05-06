FROM node:12.16.1-alpine

RUN npm install -g @angular/cli

WORKDIR /app

COPY node-entrypoint.sh /sbin/node-entrypoint.sh

ENTRYPOINT [ "node-entrypoint.sh" ]