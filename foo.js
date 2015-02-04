'use strict';

appName.define("foo", ["bar"], function(bar){

  var hungry = "test";

  function awesome() {
    console.log( bar.hello(hungry).toUpperCase() );
  };

  return {
    awesome: awesome
  };

});