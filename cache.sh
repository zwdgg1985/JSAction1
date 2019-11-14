#!/bin/sh -l

echo "keyvalue"

echo "::set-output name=key1::${{ runner.OS }}-test-check1"
echo "::set-output name=key2::${{ runner.OS }}-test-check2"
