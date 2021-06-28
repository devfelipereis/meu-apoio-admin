#!/bin/sh

su-exec node:node npm install && ng serve --host 0.0.0.0 --port 4200 --proxy-config proxy.conf.json