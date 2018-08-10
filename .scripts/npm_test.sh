#!/bin/bash

return_code=0;
if [ -d tmp ]
then
	echo 'tmp exist'
else
	mkdir ./tmp
fi
echo starting linter
./node_modules/.bin/eslint -f json */*.js > ./tmp/eslintMessage.json
if [ $? -eq 1 ]
then
	echo eslint ko
	return_code=1
	eslint_return=1
else
	echo eslint ok
	eslint_return=0
fi
echo starting unit-test
./node_modules/.bin/mocha --reporter json ./test/cipher.spec.js > ./tmp/unitTestMessage.json
if [ $? -eq 1 ]
then
	echo unit-test ko
	return_code=1
	unit_test_return=1
else
	echo unit-test ok
	unit_test_return=0
fi
echo $eslint_return > ./tmp/eslintFail.txt
echo $unit_test_return > ./tmp/unitTestFail.txt
echo $(git config --get remote.origin.url) > ./tmp/gitPath.txt
exit $return_code;
