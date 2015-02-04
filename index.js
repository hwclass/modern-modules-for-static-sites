appName.define("index", ["config", "bar"], function(config, bar){
    
  function getConfig () {
    return config;
  };

  function logTitle () {
    console.log(config.getPageTitle());
  };

  function hello(str) {
    console.log(bar.hello(str));
  };

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