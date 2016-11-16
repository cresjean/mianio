#!/bin/bash
ssh-agent bash -c 'ssh-add /var/tmp/github.secret; git clone git@github.com:cresjean/mianio.git'
aws s3 cp /mianio/s3 s3://mianio.com --recursive
echo "Done"
