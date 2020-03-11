FROM node:slim

RUN apt-get update \
    && apt-get install -y wget --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/home

COPY index.js .
COPY wait-until-unavailable .

EXPOSE 3000

CMD ["node", "index.js"]
