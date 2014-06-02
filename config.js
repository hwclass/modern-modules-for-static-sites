appName.define("config", [], function () {
    
	var title = 'Main Page';
	
	function getPageTitle () {
		return title;
	}
	
	function setPageTitle (newTitle) {
		title = newTitle;
	}

  return {
    getPageTitle: getPageTitle,
		setPageTitle : setPageTitle
  };
	
});