#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
# pkill -9 node
# exit 0
# ps -ef | grep node | grep -v grep | awk '{print $2}' | xargs kill
stat=`echo $?`
echo $stat;