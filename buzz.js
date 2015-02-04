'use strict';

appName.define("buzz", ["foo", "bar"], function(){

  function okThen(who) {
    return "Ok then, " + who;
  };

  return {
    okThen: okThen
  };

});