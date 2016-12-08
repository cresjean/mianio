#!/bin/bash
echo "Cleaning"
rm -rf mianio
echo "Git clone"
ssh-agent bash -c 'ssh-add /var/tmp/github.secret;git clone git@github.com:cresjean/mianio.git;'
aws s3 sync /mianio/app-frontend/src/client s3://mianio.com --exclude 'app/*'
echo "Done"
sleep 1000
