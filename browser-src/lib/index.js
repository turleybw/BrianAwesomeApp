/*jshint node:true es5:true laxcomma:true strict:true*/
(function () {
  "use strict";

  console.log('app start');

  var Home = require('./home')
    , domReady = require('domready')
    ;

  function templatePage() {
    Home.put('Welcome to my humble abode');
  }
  
  domReady(templatePage);
  console.log('end of file');
}());
