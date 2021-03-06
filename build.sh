#!/bin/sh
if [ ! -d dist ] ; then
  mkdir dist
fi
cp manifest.json dist/
cp src/*.js dist/
cp src/*.html dist/
cp src/*.css dist/
cp -r assets dist/
zip -r dist.zip dist
