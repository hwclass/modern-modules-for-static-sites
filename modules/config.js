/*
 * Module :: config.js
 * Info : Module for initializing code for config.
 */

'use strict';

module.define("config", [], function () {

  var title = 'Main Page';

  /**
   * getPageTitle is a method that is used to get the page title
   */
  function getPageTitle () {
    return title;
  };

  /**
   * setPageTitle is a method that is used to set the page title
   */
  function setPageTitle (newTitle) {
    title = newTitle;
  };

  return {
    getPageTitle: getPageTitle,
    setPageTitle : setPageTitle
  };

});