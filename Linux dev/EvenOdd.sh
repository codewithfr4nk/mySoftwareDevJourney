#!/bin/sh

a=0

while [ $a -lt 5 ]
do
	rem=`expr $a % 2`
	if [ $rem -eq 0 ]
	then
		echo $a "is Even..."
		
	fi
	echo $a "is Odd!"
	a=`expr $a + 1`
done
