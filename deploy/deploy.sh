#!/bin/bash
ssh-agent bash -c 'ssh-add /var/tmp/github.secret; git clone git@github.com:cresjean/mianio.git'

sleep 1000
