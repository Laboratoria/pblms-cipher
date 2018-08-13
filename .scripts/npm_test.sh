#!/bin/bash

return_code=0;

if [ -d tmp ]
then
	echo 'tmp exist'
else
	mkdir ./tmp
fi
echo starting linter
npm run --silent linter:json > ./tmp/eslintMessage.json
if [ $? != 0 ]
then
	echo eslint ko
	return_code=1
	eslint_return=1
else
	echo eslint ok
	eslint_return=0
fi
echo starting unit-test
npm run --silent unit-test:json > ./tmp/unitTestMessage.json
if [ $? != 0 ]
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
echo https://github.com/$TRAVIS_PULL_REQUEST_SLUG.git > ./tmp/gitPath.txt
exit $return_code;
