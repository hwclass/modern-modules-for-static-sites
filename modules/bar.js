/*
 * Module :: bar.js
 * Info : Module for initializing code for bar view.
 */

'use strict';

module.define("bar", [], function(){

  /**
   * sayHello is a method that is used to say hello
   */
  function sayHello(who) {
    return "Let me introduce: " + who;
  };

  return {
    sayHello: sayHello
  };

});