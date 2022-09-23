#!/bin/sh

a=1
stop=6

until ! [ $a -lt $stop ]
do
	echo $a
	a=`expr $a + 1`
done
