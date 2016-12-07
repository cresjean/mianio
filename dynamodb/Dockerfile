FROM ubuntu:latest
WORKDIR /opt/dynamodb
# Install packages
RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" | tee /etc/apt/sources.list.d/webupd8team-java.list \
    && echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" | tee -a /etc/apt/sources.list.d/webupd8team-java.list \
    && echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections \
    && apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886 \
    && apt-get update \
    && apt-get install -y \
    wget \
    unzip \
    oracle-java8-installer \
    && apt-get clean

RUN mkdir -p /opt/dynamodb
RUN cd /opt/dynamodb
RUN wget http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.zip
RUN unzip dynamodb_local_latest.zip
