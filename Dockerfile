FROM alpine
RUN apk add --update nodejs npm 
COPY . /src
WORKDIR /src
RUN npm install
Expose 3000
ENTRYPOINT ["node" , "./app.js"]