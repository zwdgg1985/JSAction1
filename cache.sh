#!/bin/sh -l

echo "keyvalue"
time=$(date)
echo ::set-output name=key::${{ runner.os}}-$time
