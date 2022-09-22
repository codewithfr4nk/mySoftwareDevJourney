#!/bin/sh

a=1

until ! [ $a -gt 0 ]
do
	echo $a
	a=`expr $a + 1`
	if [ $a -eq 100 ]
	then
	    break
	fi
done
