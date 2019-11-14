#!/bin/sh -l

echo "keyvalue"
time=$(date)
echo "::set-output name=key1::$time-did1"
echo "::set-output name=key2::$time-did2"
