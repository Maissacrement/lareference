FROM node

ARG NS
RUN echo "nameserver ${NS}" >> /etc/resolv.conf 


WORKDIR /app
COPY ./package.json /app

RUN yarn
COPY . /app

ENTRYPOINT [ "yarn", "start" ]