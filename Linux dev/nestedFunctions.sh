#!/bin/sh

firstName(){
	name1= echo "First Name: "
	read name1
	lastName
}

lastName(){
	name2= echo "Last Name: "
	read name2
	greet
}

greet(){
	echo "Hello $name1 $name2"
}
firstName
