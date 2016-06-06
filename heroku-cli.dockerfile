FROM phusion/baseimage:latest
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y wget && wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
WORKDIR /code
