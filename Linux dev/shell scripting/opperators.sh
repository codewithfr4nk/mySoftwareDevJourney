#!/bin/sh

a=9
b=5
echo "opperations on "$a 'and' $b

Add=`expr $a + $b`
echo 'Addition:' $Add

Sub=`expr $a - $b`
echo 'Subtraction:' $Sub

Mult=`expr $a \* $b`
echo 'Multiplication:' $Mult

Div=`expr $a \/ $b`
echo 'Division:' $Div

Rem=`expr $a % $b`
echo 'Remainder(Modulo):' $Rem


