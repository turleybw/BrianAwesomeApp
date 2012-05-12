/*jshint node:true es5:true laxcomma:true strict:true*/
(function () {
  "use strict";

  var Home = exports
    , $ = require('ender')
    , request = require('ahr2')
    , domReady = require('domready')
    ;
  
  Home.put = function (msg) {
    $('#home p').text(msg);
  };

  function scrape() {
    var $form = $('#contact-form')
      ;
      
    return {
        first: $form.find('input[name="first"]').val()
      , last: $form.find('input[name="last"]').val()
      , tel: $form.find('input[name="tel"]').val()
      , email: $form.find('input[name="email"]').val()
      //, file: $form.find('input[type="file"]').files
    };
  }
  
  function tellSuccess(err, ahr, data) {
    if (!data || !data.success) {
      console.error('error');
      return;
    }

    console.log('succesful');
  }

  function putDb(ev) {
    console.log('form thing');
    ev.preventDefault();
    ev.stopPropagation();

    var newDb = scrape()
      ;

    console.log(newDb);
    request.put('/db', null, newDb).when(tellSuccess);
  }

  domReady(function () {
    $('body').delegate('#contact-form', 'submit', putDb);
  });

}());
