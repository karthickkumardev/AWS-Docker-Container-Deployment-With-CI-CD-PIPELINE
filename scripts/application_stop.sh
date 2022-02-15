#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
#ok
pkill -9 node
stat=`echo $?`
if [ $stat -eq 1  ]; then
  exit 0
fi