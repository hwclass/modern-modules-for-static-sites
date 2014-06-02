var appName = (function ModuleManager(app) {

    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = app.modules[deps[i]];
        }
        app.modules[name] = impl.apply(impl, deps);
    }

    function get(name) {
        return app.modules[name];
    }

    return {
        define: define,
        get: get
    };
	
})(app);