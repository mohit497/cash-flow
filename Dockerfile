FROM node:14-alpine3.12
ADD ./server /app

ADD ./client ./frontend

WORKDIR /frontend
RUN npm i
RUN rm -rf .env
RUN npm run build

#  setup
WORKDIR /app
RUN npm install
EXPOSE $PORT

# build app
RUN rm -rf .env.local
RUN npm run build

#copy frontend build
WORKDIR /
RUN  cp ./frontend/build ./app/dist/react -r

WORKDIR /app

CMD [ "node", "dist/src/main" ]