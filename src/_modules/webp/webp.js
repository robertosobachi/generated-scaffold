'use strict';

var myApp = myApp || { Webp: {} };

// Constructor
myApp.Webp = function() {

  // Picturefill polyfill.
  this.swiperCtrl = require('picturefill');

};

/** Initialise Module. */
myApp.Webp.prototype.init = function() {

  console.log('Init Webp');

};

module.exports = myApp.Webp;
