#!/bin/sh

NUMS="1 2 3 4 5 6 7 8 9 "

for num in $NUMS
do
	Q=`expr $num % 2`
	if [ $Q -eq 0 ]
	then
		echo $num "is Even."
		continue
	fi
	echo $num "is Odd!"
done
