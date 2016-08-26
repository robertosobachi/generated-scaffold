'use strict';

var myApp = myApp || { Carousel: {} };

// Constructor
myApp.Carousel = function() {

  // swiper - iDangerous plugin.
  this.swiperCtrl = require('swiper');

};

/** Initialise Module. */
myApp.Carousel.prototype.init = function() {

  console.log('Init Carousel');

};

module.exports = myApp.Carousel;
