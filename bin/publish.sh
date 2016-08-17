#!/bin/bash
set -e

PAGES_DIR=./gh-pages
REPO="git@github.com:contentful/gallery-app-react.git"

echo "Publishing"

# get the gh-pages branch of the repo
if [ ! -d $PAGES_DIR ] ; then
  git clone --single-branch --branch gh-pages $REPO $PAGES_DIR
fi

cp *.png dist/*.js $PAGES_DIR

# Setup base path and analytics tag
cat index.html | \
  sed -e "s/<base href='\/'/<base href='\/gallery-app-react\/'/g" | \
  sed -e 's/<!--ANALYTICS-->/{{{ANALYTICS}}}/g' > \
  $PAGES_DIR/index.mustache

./node_modules/.bin/mustache ./config/analytics.json $PAGES_DIR/index.mustache > $PAGES_DIR/index.html
rm -f $PAGES_DIR/index.mustache

cp $PAGES_DIR/index.html $PAGES_DIR/404.html

pushd $PAGES_DIR
git add .
git commit -a -m "Docs update"
if [ $? -eq 1 ] ; then
  echo "Nothing to update"
else
  git push origin gh-pages
fi
popd
