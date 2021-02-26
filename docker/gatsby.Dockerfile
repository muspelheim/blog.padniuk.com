FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN npm install --global gatsby-cli && gatsby telemetry --disable
