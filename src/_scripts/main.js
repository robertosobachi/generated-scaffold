// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

/**
* My JavaScript application
*
* @module Application
*/

/** @namespace Namespace for Application classes and functions. */
var greenLight = greenLight || {};


/**
* Constructs Application
*
* @constructor
*/
greenLight.Application = function() {

  // swiper - iDangerous plugin.
  this.swiper = require('swiper');

  // link
  this.linkModule = require('../_modules/link/link');

  // carousel
  this.carouselModule = require('../_modules/carousel/carousel');

};

/** Initialise Application. */
greenLight.Application.prototype.init = function () {

  new this.linkModule(); // Activate Link modules logic

  new this.carouselModule(); // Activate Link modules logic

};

(function() {
  var app = new greenLight.Application();
  app.init();
})();
