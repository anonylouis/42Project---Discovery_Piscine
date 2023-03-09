#!/bin/bash

if [ $# -eq 0 ]
then
	echo "No arguments supplied"
elif [ $# -le 3 ]
then
	for argv in "$@"
	do
		echo $argv
	done
else
	echo $1
	echo $2
	echo $3
fi
