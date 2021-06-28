FROM node:12.16.1-alpine

ARG UID=1000
ARG GID=1000

RUN apk add --update-cache shadow su-exec

RUN usermod -u ${UID} node && groupmod -g ${GID} node

RUN npm install -g @angular/cli

WORKDIR /app

COPY node-entrypoint.sh /sbin/node-entrypoint.sh

ENTRYPOINT [ "node-entrypoint.sh" ]