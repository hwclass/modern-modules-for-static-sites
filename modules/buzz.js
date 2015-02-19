/*
 * Module :: buzz.js
 * Info : Module for initializing code for buzz view.
 */

'use strict';

module.define("buzz", ["foo", "bar"], function(){

  var strName = 'Jane';

  /**
   * okThen is a method that is used to say ok, then with someone else's name
   */
  function okThen(who) {
    return "Ok then, " + who;
  };

  /**
   * sayHelloToSomeone is a method that is used to say hello with injected bar module and its inner sayHello method 
   */
  function sayHelloToSomeone() {
    console.log(foo.sayHelloToSomeone(strName).toLowerCase());
  };

  /**
   * sayHelloToSomeoneElse is a method that is used to say hello with injected bar module and its inner sayHello method 
   */
  function sayHelloToSomeoneElse() {
    console.log(bar.sayHello(strName).toLowerCase());
  };

  return {
    okThen: okThen,
    sayHelloToSomeoneElse : sayHelloToSomeoneElse
  };

});