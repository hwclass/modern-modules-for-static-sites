/*
 * Module :: moduleManager.js
 * Info : Module for managing the other modules.
 */

'use strict';

var module = (function ModuleManager() {

  var app = {
    modules: {},
    module : function(name) {
      if (this.modules[name]) return this.modules[name];
    }
  };

  /**
   * define is a method that is used to add modules into the context
   */
  function define(name, deps, impl) {
    for (var i=0; i<deps.length; i++) {
      deps[i] = app.modules[deps[i]];
    };
    app.modules[name] = impl.apply(impl, deps);
  };

  /**
   * get is a method that is used to fetch the requested module with name
   */
  function get(name) {
    return app.modules[name];
  };

  return {
    define: define,
    get: get
  };
	
})();