FROM zeavo/node-mysql:8.9.0-5.6.38

WORKDIR /app
COPY . /app

RUN    npm config set registry 'https://registry.npm.taobao.org' \
    && npm i \
    && npm run build \
    && rm -rf src \
    && rm -rf test

EXPOSE 2369

CMD node dist/app.js