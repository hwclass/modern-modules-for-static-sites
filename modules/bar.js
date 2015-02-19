'use strict';

module.define("bar", [], function(){

  function hello(who) {
    return "Let me introduce: " + who;
  };

  return {
    hello: hello
  };

});