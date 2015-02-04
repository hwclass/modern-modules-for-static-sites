'use strict';

appName.define("index", ["config"], function(){

  function getConfig(attr) {
    return (config[attr]?config[attr]:'null');
  };

  return {
    getConfig: getConfig
  };

});