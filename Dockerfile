FROM node:16 as hugo
ARG ARCH=64bit
ARG HUGO_VERSION=0.84.4
WORKDIR /html
COPY . .
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-${ARCH}.tar.gz .
RUN tar xzvf hugo_${HUGO_VERSION}_Linux-${ARCH}.tar.gz
RUN chmod +x hugo
RUN npm install
RUN npm run build
RUN ./hugo --minify -v
RUN ls -ltR public

FROM --platform=arm64 nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=hugo /html/public /usr/share/nginx/html
