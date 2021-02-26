FROM node:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh python make gcc g++ autoconf libtool automake nasm

RUN apk add --update --no-cache \
    --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main vips-dev

RUN npm install --global gatsby-cli && \
    gatsby telemetry --disable

WORKDIR /app