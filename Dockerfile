FROM node:14-alpine3.12
ADD ./server /app

ADD ./client ./frontend

WORKDIR /frontend
RUN npm i
RUN npm run build
 

#  setup
WORKDIR /app
RUN npm install
EXPOSE $PORT

# build app
RUN npm run build

# copy client
WORKDIR /
COPY frontend/build app/dist/react


WORKDIR /app

CMD [ "node", "dist/src/main" ]