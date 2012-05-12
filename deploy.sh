#!/usr/bin/env bash

# sudo npm install -g jade lessc coffee-script jshint uglify-js pakmanager

pushd server
  npm install
popd

pushd browser-src
  rsync -a ./static/ ../public/

  jade index.jade
  mv index.html ../public/

  lessc style.less > style.css
  mv style.css ../public/

  pakmanager build
  #uglifyjs pakmanaged.js > pakmanaged.min.js
  mv pakmanaged.js ../public/
popd
