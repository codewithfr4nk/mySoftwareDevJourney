#!/bin/sh

#defining the function
Hello(){
	NAME= echo "What's your name: "
	read NAME
	AGE= echo "What's your age: "
	read AGE
	fav= echo "What's your favorite num: "
	read fav
	echo
	echo "Hello, $NAME \nYou're "$AGE' years old.'
	return $fav
}

#calling/invoking the function
Hello 

#binding the return value oof the function to a variable with '$?'
ret=$?
echo "Your favorite number is: "$ret 
