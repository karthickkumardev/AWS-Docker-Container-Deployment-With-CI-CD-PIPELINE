#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing Docker Container"
docker ps | grep "carserver" | grep -v grep | awk '{print $1}' | xargs docker stop