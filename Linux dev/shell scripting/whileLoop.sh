#!/bin/sh

start= echo "Enter start number: "
read start
#start=1
stop= echo "Enter stop number: "
read stop
echo ""
while [ $start -lt $stop ]
do
   echo $start
   start=`expr $start + 1`
done
