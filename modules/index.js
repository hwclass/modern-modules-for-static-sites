'use strict';

module.define("index", ["config", "bar"], function(config, bar){
  
  //Returns the current config object  
  function getConfig () {
    return config;
  };

  //Logs the title
  function logTitle () {
    console.log(config.getPageTitle());
  };

  //Logs the string with by using bar module's hello method
  function hello(str) {
    console.log(bar.hello(str));
  };

  //Gets the paremeter specified in the browser's address bar 
  function getURLParameter (sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      };
    };
  };

  return {
    getConfig: getConfig,
    logTitle : logTitle,
    getURLParameter : getURLParameter,
    hello : hello
  };
	
});
