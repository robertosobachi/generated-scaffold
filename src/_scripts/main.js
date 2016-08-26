// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

/** @namespace Namespace for Application classes and functions. */
var myApp = myApp || {};


// link
// var linkModule = require('../_modules/link/link');

// carousel
var carouselModule = require('../_modules/carousel/carousel');

// carousel
var webpModule = require('../_modules/webp/webp');


/**
* Constructs Application
*
* @constructor
*/
myApp.Application = function() {

  // Activate Link modules logic
  // this.linkModule = new LinkModule();

  // Activate Carousel modules logic
  this.carouselModule = new carouselModule();

};

/** Initialise Application. */
myApp.Application.prototype.init = function () {

  this.carouselModule.init();

};

(function() {
  var app = new myApp.Application();
  app.init();
})();
