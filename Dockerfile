FROM debian:buster-slim as hugo
ARG ARCH=64bit
ARG HUGO_VERSION=0.78.1
WORKDIR /html
COPY . .
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-${ARCH}.tar.gz .
RUN tar xzvf hugo_${HUGO_VERSION}_Linux-${ARCH}.tar.gz
RUN chmod +x hugo
RUN ./hugo --minify

FROM --platform=arm64 nginx
COPY --from=hugo /html/public /usr/share/nginx/html
