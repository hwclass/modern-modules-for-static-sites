/*
 * Module :: base.js
 * Info : Module for initializing code for base view.
 */

'use strict';

module.define("index", ["config"], function(){

  /**
   * getConfig is a method that is used to get injected config code context
   */
  function getConfig(attr) {
    return (config[attr]?config[attr]:'null');
  };

  return {
    getConfig: getConfig
  };

});