var app = {
	modules: {},
	module : function(name) {
		if (this.modules[name]) return this.modules[name];
	}
}

/*
var dikeyshop = (function() {

	var modules = {};
	
	var module = function(name) {
		if (this.modules[name]) return this.modules[name];
	}
   
   return {
      modules : modules,
      module : module
   }
   
});
*/