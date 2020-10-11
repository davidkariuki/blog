FROM node:alpine
RUN apk add git

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install
COPY . .

EXPOSE 5000

ENTRYPOINT ["yarn", "dev"]
