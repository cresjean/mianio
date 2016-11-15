FROM ubuntu:latest

# Install packages
RUN apt-get update \
    && apt-get install -y \
    unzip \
    curl \
    git \
    python

# Prepare
RUN touch ~/.ssh/known_hosts
RUN ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN mkdir -p /root/.aws
RUN curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
RUN unzip awscli-bundle.zip
RUN ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
