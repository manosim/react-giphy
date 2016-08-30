FROM node:4-onbuild
# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

WORKDIR /usr/src/app
RUN npm install --save react-giphy

# Expose the app port
EXPOSE 8080

RUN npm install -g http-server
