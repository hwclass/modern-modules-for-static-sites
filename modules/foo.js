/*
 * Module :: foo.js
 * Info : Module for initializing code for foo view.
 */

'use strict';

module.define("foo", ["bar"], function(bar){

  var strName = "laçin";

  /**
   * sayHelloToSomeone is a method that is used to say hello with injected bar module and its inner sayHello method 
   */
  function sayHelloToSomeone() {
    console.log(bar.sayHello(strName).toUpperCase());
  };

  return {
    sayHelloToSomeone: sayHelloToSomeone
  };

});
