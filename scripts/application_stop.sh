#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
pkill node

stat=`echo $?`
if [ $stat -eq 1  ]; then
  exit 0
fi