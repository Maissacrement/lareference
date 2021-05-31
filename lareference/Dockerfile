FROM node

ARG NS
RUN echo "nameserver ${NS}" >> /etc/resolv.conf 

WORKDIR /app
COPY ./package.json /app

RUN npm i -g @quasar/cli && yarn
COPY . /app

RUN yarn build:pwa

EXPOSE 443
ENTRYPOINT [ "quasar", "serve", "./dist/pwa", "-p", "443", "--history" ]