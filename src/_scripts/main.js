// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

/** @namespace Namespace for Application classes and functions. */
var myApp = myApp || {};


// link
// var linkModule = require('../_modules/link/link');

// carousel
var CarouselModule = require('../_modules/carousel/carousel');

// carousel
var WebpModule = require('../_modules/webp/webp');


/**
* Constructs Application
*
* @constructor
*/
myApp.Application = function() {

  // Activate Link modules logic
  // this.linkModule = new LinkModule();

  // Activate Carousel modules logic
  this.carouselModule = new CarouselModule();

};

/** Initialise Application. */
myApp.Application.prototype.init = function () {

  this.carouselModule.init();

};

(function() {
  var app = new myApp.Application();
  app.init();
})();
