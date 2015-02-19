'use strict';

module.define("buzz", ["foo", "bar"], function(){

  function okThen(who) {
    return "Ok then, " + who;
  };

  return {
    okThen: okThen
  };

});