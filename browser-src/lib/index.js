/*jshint node:true es5:true laxcomma:true strict:true*/
(function () {
  "use strict";

  console.log('app start');

  var Home = require('./home')
    , domReady = require('domready')
    ;

  function templatePage() {
    Home.put('Welcome to the Awesome App');
  }
  
  domReady(templatePage);
  console.log('end of file');
}());
