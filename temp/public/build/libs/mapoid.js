/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/libs/mapoid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/libs/mapoid.js":
/*!*******************************!*\
  !*** ./assets/libs/mapoid.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 *  Project: Mapper 1.0
 *  Description: Responsive html map area highlighter with area selection
 *  Author:
 *  License:
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.


;(function ($, window, document, undefined) {

			// undefined is used here as the undefined global variable in ECMAScript 3 is
			// mutable (ie. it can be changed by someone else). undefined isn't really being
			// passed in so we can ensure the value of it is truly undefined. In ES5, undefined
			// can no longer be modified.

			// window is passed through as local variable rather than global
			// as this (slightly) quickens the resolution process and can be more efficiently
			// minified (especially when both are regularly referenced in your plugin).

			// Create the defaults once
			var pluginName = 'mapoid',
			    defaults = {
						propertyName: "value"
			};

			// The actual plugin constructor
			function mapoidPlugin(element, options) {
						//this.element = element;

						// jQuery has an extend method which merges the contents of two or
						// more objects, storing the result in the first object. The first object
						// is generally empty as we don't want to alter the default options for
						// future instances of the plugin

						this.elem = element;
						this.$elem = $(element);
						this.$elem_original = this.$elem;
						this.options = options;

						// This next line takes advantage of HTML5 data attributes
						// to support customization of the plugin on a per-element
						// basis. For example,
						// <div class=item' data-plugin-options='{"message":"Goodbye World!"}'></div>
						//this.metadata = this.$elem.data( 'plugin-options' );
						this.metadata = this.$elem.data();

						this._init();
			}

			//Plugin.prototype =
			mapoidPlugin.prototype = {

						defaults: {
									width: 600,

									strokeColor: 'black',
									strokeWidth: 1,
									fillColor: 'black',
									fillOpacity: 0.5,
									fadeTime: 500,
									selectedArea: false,
									selectOnClick: true,

									click: false,
									dblclick: false,
									mousedown: false,
									mouseup: false,
									mouseover: false,
									mouseout: false,
									mousemove: false,
									mouseenter: false,
									mouseleave: false,
									hoverIn: false,
									hoverOut: false,

									select: false,
									deselect: false
						},

						lang: {
									textSelectAll: function textSelectAll() {
												return "Select all";
									}
						},

						_init: function _init() {
									// Introduce defaults that can be extended either
									// globally or using an object literal.
									this.config = $.extend({}, this.defaults, this.options, this.metadata);
									//alert( JSON.stringify( this.lang.textSearching() ) )

									//alert( this.config.strokeWidth )
									//alert(42)

									//this.isResponsive = false
									//this.imageLoaded = false
									this.map = this.$elem;

									this.selectedAreas = [];

									var self = this;

									//self.mapLoaded = false
									//self.coordsLoaded = false
									//self.mapHidden = false

									var mapName = self.$elem.attr('name');
									self.image = $(document).find("img[usemap='#" + mapName + "']");
									//self.imageSrc = self.image.attr('src')
									//alert( self.$elem.attr('name') )

									var wrapper = $("<div class='wrp'></div>");
									$("map[name=" + mapName + "]").add("img[usemap='#" + mapName + "']").wrapAll(wrapper);
									//});
									this.$elem = this.$elem.closest('div');
									//this.elem = wrapper[0]
									//alert( this.image.width() )

									//if( !self.image.is(':visible')  ){

									//self.image.css('display','block')
									//self.map.css('display','block')
									//self.$elem.css('display','block')

									//}

									//alert( self.image.width() )
									//alert( self.image.css('width') )
									//self.map.on('show',function(){
									//alert(1)
									//})
									//var w = this.image.attr('width')
									//var h = this.image.attr('height')
									//var wd = this.image.width()
									//alert(w+" - "+wd)

									self.mapHidden = self.mapIsVisible() ? false : true;

									//alert(self.mapHidden)
									//if( !self.mapIsVisible()  )
									//	self.mapHidden = true

									//alert( self.$elem.attr('name') )
									//$("map[name="+mapName+"],img[usemap='#"+mapName+"']").each(function(){

									//alert(self.mapIsVisible())
									//alert(1)


									self._onImgLoad(self.image, function (img) {

												//alert(img.height)
												//self.
												self.image.attr('width', img.width);
												self.image.attr('height', img.height);

												//alert(self.image.attr('width') )
												//alert(self.image.attr('height') )
												//alert(self.image.css('width') )
												//do something
												//alert('map is not visible')
												self._loadMap();

												//else
												//

												self._initEvents();

												$(window).resize(function () {
															//self.resetMap( );
															//if(!self.mapLoaded)
															//self._loadMap();
															self._reloadAreas();

															//alert(s)
												});
												//self.imageLoaded = true
									});

									return this;
						},

						/**
       * Returns a random integer between min (inclusive) and max (inclusive)
       * Using Math.round() will give you a non-uniform distribution!
       */
						_getRandomInt: function _getRandomInt(min, max) {
									return Math.floor(Math.random() * (max - min + 1)) + min;
						},

						mapIsVisible: function mapIsVisible() {
									var self = this;

									return self.map.is(':visible') && self.image.is(':visible');
									//return true

									//return false
						},

						_loadMap: function _loadMap() {

									var self = this;

									//self.mapLoaded = false


									var i = self._getRandomInt(1, 65000);
									var j = self._getRandomInt(1, 100);

									//var j = Math.ceil(Math.random() * 100 + 1);
									//var $this    = $(this);
									var $this = self.image;

									//alert($this.prop('tagName'))


									//self._loadMap();
									//self._responsiveImage( );

									// redraw canvas of the selected areas


									var cla = $this.attr('class');
									//alert( $(this).attr('class') )
									//i = $(this).attr('class')
									//i=j
									//alert(cla)

									//$this.attr('class', 'map'+i)

									//$this.attr('usemap', '#map'+i)
									//this.map.attr('name', 'map'+i)

									//var this_class = $this.attr('class')

									self.$elem.css({ 'position': 'relative' });
									//alert(this_class)
									//self.mlDrawIt(this_class);

									//if (!document.all) {
									//self.mlDrawCanvas('map'+i);
									//}

									//var	mlSource = $this.attr('src'),
									//idPrefix = mlSource.substr(mlSource.length - 1),
									//mlThisID = $this.addClass('image'+j+idPrefix+i),

									//mlMapName = $this.attr('usemap').replace('#',''),
									//$that = $('map[name="'+mlMapName+'"]'),
									/*	$that    = $this.nextAll('map').eq(0), */
									//mlThatID = $that.addClass('ml_map'+j+idPrefix+i);

									//self.saveMapData( );

									//self._responsiveImage( );


									//self.isResponsive = false

									if (typeof self.image.attr('usemap') == 'undefined') return;

									//return

									//if( self.mapIsVisible()  )
									self._redrawCoords();

									if (self.config.selectedArea) self._selectAreas(self.config.selectedArea);

									//console.log('mapa je nacitana')


									//self.mapLoaded = true

						},

						_redrawCoords: function _redrawCoords() {

									var self = this;

									//self.coordsLoaded = false

									//if(!self.mapIsVisible)
									//return


									var c = 'coords';
									var w = self.image.attr('width');
									var h = self.image.attr('height');
									var wd = self.image.width();
									//var	hg = this.image.height()
									//var wPercent = this.image.width()/100
									//var	hPercent = this.image.height()/100

									var proportion = wd / w * 100;

									self.map.find('area').each(function () {
												var $this = $(this);

												if (!$this.data(c)) $this.data(c, $this.attr(c));
												var coords = $this.data(c).split(','),
												    coordsPercent = new Array(coords.length);
												for (var i = 0; i < coordsPercent.length; ++i) {
															coordsPercent[i] = coords[i] * proportion / 100;
												}

												//Change old coordinates to new
												$this.attr(c, coordsPercent.toString());
									});

									//self.coordsLoaded = true
						},

						_eventCallback: function _eventCallback(event, e, el) {
									var self = this;

									if (self.config[event]) {
												var id = el.data('id');
												if (typeof self.config[event] === 'function') self.config[event](e, el, id, self.selectedAreas);else console.log(event + ' nie je funkcia!');

												return true;
									}

									return false;
						},

						_reloadAreasIfHidden: function _reloadAreasIfHidden() {

									var self = this;
									if (self.mapHidden) {
												self._reloadAreas();
												self.mapHidden = false;
									}
						},

						_reloadAreas: function _reloadAreas() {

									var self = this;

									self.$elem.find('canvas').remove();

									if (!self.mapIsVisible()) {
												self.mapHidden = true;
												console.log('mapa nie je vidiet');
												return;
									}

									self._redrawCoords();

									var s = self.$elem.find('area.selected').each(function (k, v) {

												var id = $(this).data('id');
												var fixed = $(this).hasClass('fixed');

												self._mapover($(this), true, fixed);
									});
						},

						_initEvents: function _initEvents() {

									var self = this;

									self.map.on('mouseover', 'area', function (e) {
												//console.log(14891)
												//if(!self.coordsLoaded)
												//if( !self.mapIsVisible()  )

												self._reloadAreasIfHidden();

												self._eventCallback('mouseover', e, $(this));

												self._mapover($(this), false, false, true);
												//alert(1)

									});

									self.map.on('mouseout', 'area', function (e) {
												//console.log(tid)

												self._eventCallback('mouseout', e, $(this));

												self.$elem.find('canvas.temp').fadeOut(self.config.fadeTime);
												//alert( $(this).closest('div').find('canvas').length )
												//alert(self.$elem.attr('class'))
												//alert( self.$elem.find('canvas').length )

									});

									self.map.on('click', 'area', function (e) {
												//console.log(tid)
												e.preventDefault();

												if (!self._eventCallback('click', e, $(this)) && !self.config.selectOnClick) {
															var href = $(this).attr('href');
															if (href) location.href = href;
												} else if (self.config.selectOnClick) {
															var id = parseInt($(this).data('id'));

															//var selected = $(this).hasClass('selected')
															var selected = self._inArray(self.selectedAreas, id);
															var fixed = $(this).hasClass('fixed');

															//if(!fixed)
															{
																		if (!selected) {
																					//self.selectedAreas.push(id)
																					self._selectArea(id, fixed, false);
																		} else {
																					self._deselectArea(id, false);
																		}
															}
															//else
															//alert(id)
															//console.log( self.selectedAreas )
												}

												//alert(href)
												return false;

												//self.$elem.find('canvas.temp').fadeOut( self.config.fadeTime )
									});

									self.map.on('mousedown', 'area', function (e) {
												self._eventCallback('mousedown', e, $(this));
									});
									self.map.on('mouseup', 'area', function (e) {
												self._eventCallback('mouseup', e, $(this));
									});

									self.map.on('dblclick', 'area', function (e) {
												self._eventCallback('dblclick', e, $(this));
									});

									self.map.on('mousemove', 'area', function (e) {
												self._eventCallback('mousemove', e, $(this));
									});

									self.map.on('mouseenter', 'area', function (e) {
												self._eventCallback('mouseenter', e, $(this));
									});
									self.map.on('mouseleave', 'area', function (e) {
												self._eventCallback('mouseleave', e, $(this));
									});

									self.map.find('area').hover(function (e) {
												self._eventCallback('hoverIn', e, $(this));
									}, function (e) {
												self._eventCallback('hoverOut', e, $(this));
									});
						},

						_removeItem: function _removeItem(array, item) {
									for (var i = 0; i < array.length; i++) {
												if (array[i] === item) {
															array.splice(i, 1);
															break;
												}
									}
						},

						_inArray: function _inArray(array, item) {
									for (var i = 0; i < array.length; i++) {
												if (array[i] === item) {
															return true;
															break;
												}
									}

									return false;
						},

						_onImgLoad: function _onImgLoad(image, cb) {
									var self = this;
									var img = new Image();
									//img.src = areaImg;

									img.src = (image[0].getAttribute ? image[0].getAttribute("src") : false) || image[0].src;

									img.onload = function () {

												cb(img);
									};

									//_getOrigImgSize : function( img ){
									//var t = new Image();
									//t.src = (img.getAttribute ? img.getAttribute("src") : false) || img.src;
									//return {'w':t.width, 'h':t.height};
									//},
						},

						_onMapLoaded: function _onMapLoaded(cb) {
									var self = this;

									//if( this.mapLoaded && !this.coordsLoaded && self.mapIsVisible()  )
									//{
									//	self._redrawCoords()

									//	setTimeout(function(){
									//	console.log('0000')
									//	self._onMapLoaded( cb )
									//},10)
									//}
									//else if(this.mapLoaded && this.coordsLoaded)
									if (self.mapIsVisible()) {

												self._onImgLoad(self.image, function (img) {

															//if(self.mapHidden)
															{
																		//self._redrawCoords()
																		//self.mapHidden = false;
															}

															cb();
															//self._loadMap();
															//self._initEvents();

															//self.imageLoaded = true
												});
									}
									//else
									{
												//console.log('Public function denied - hidden')

												//self._onImgLoad( self.image.attr('src'), function(img){
												//if( self.mapIsVisible() )
												//self._loadMap();
												//})

												//setTimeout(function(){
												//console.log('0000')
												//self._onMapLoaded( cb )
												//},10)
									}
						},

						_mapover: function _mapover(area, selected, fixed, removeTemp) {

									var self = this;

									var area_id = parseInt(area.data('id'));
									if (isNaN(area_id)) {
												area_id = self._getRandomInt(1, 99999);
												area.data('id', area_id);
												//alert(id)
									}

									if (removeTemp) self.$elem.find('canvas.temp').remove();

									//cId = this._getRandomInt(1,60000)

									var $img = self.image,
									    $bg_fill = $img.data('bg_fill'),
									    w = $img.width(),
									    h = $img.height(),
									    shapeSort = area.attr('shape');
									var canvas = $('<canvas data-id="' + area_id + '" width="' + w + '" height="' + h + '"></canvas>');
									//$img.parent().append(makeCanvas);


									//alert(size.h )
									//canvas.width(w)
									//canvas.height(h)

									$img.parent().append(canvas);
									//$('body').prepend(canvas);
									//$img.parent().append('<canvas>blablabla</canvas>');
									//$img.parent().append('<>');

									if (!selected) canvas.addClass('temp');
									//$('#can'+cId).addClass('temp')
									else area.addClass('selected');

									if (fixed) area.addClass('fixed');

									//var hmap = $(mlAreaID).closest('.hmap')
									//this.$elem.find('.tarea'+tarea_id+' .ttitle').addClass('hovered')
									var bg_fill = self.$elem.find('.fill').css('background-color');
									var bg_opacity = self.$elem.find('.fill').css('opacity');
									//console.log( bg_opacity )
									//alert(area)
									//self.$elem.css({'width':'auto','height':'auto',})

									//var o = self.$elem.offset();
									//var x = self.$elem.position();
									//alert(o.top)
									//alert(x.top)
									//alert("Top: " + x.top + " Left: " + x.left);

									/*
          *
          * pointer-events:none makes canvas layer invisible to mouse events in most modern browsers
          * allowing map area to still be clickable through the canvas layer.
          * For IE browsers less than 11 the highlighting is disabled in DrawIt function.
          *
          */
									//canvas.parent().css({'position':'relative'})
									canvas.css({
												'width': w + 'px',
												'height': h + 'px',
												'display': 'block',
												'position': 'absolute',
												'top': '0px',
												'left': '0px',
												'pointer-events': 'none'
												//'z-index':'9999'
									});
									//var	$canvas = document.getElementById('can'+cId),
									var $canvas = canvas[0],
									    context = $canvas.getContext('2d');
									// context.clearRect(0, 0, $canvas.width, $canvas.height);

									//$canvas.width = w;
									//$canvas.height = h;
									var cox, coy;
									var coords = area.attr('coords').split(','),
									    cox = [];
									coy = [];
									for (var i = 0; i < coords.length; i++) {
												if (i % 2 == 0) {
															cox.push(coords[i]);
												} else {
															coy.push(coords[i]);
												}
									}

									//alert(coords)
									/* Shape coordinate apportioning */

									var showCanvas = true;
									var area_img = area.data('img');

									var mainImgSrc = self.image.attr('src');

									//alert(self.image.attr('src'))

									//self.onImgLoad(mainImgSrc, function(im){


									if (area_img && shapeSort == 'poly') {
												showCanvas = false;
												//area_img = base_url+area_img;

												self._onImgLoad(area_img, function (img) {

															var min_x = Math.min.apply(null, cox);
															var min_y = Math.min.apply(null, coy);
															var max_x = Math.max.apply(null, cox);
															var max_y = Math.max.apply(null, coy);

															var f_w = max_x - min_x;
															var f_h = max_y - min_y;
															//console.log(f_w+" "+f_h)

															context.drawImage(img, min_x, min_y, f_w, f_h);
															canvas.hide().fadeIn(self.config.fadeTime);
												});
									} else {

												context.fillStyle = self.config.fillColor;
												context.lineWidth = self.config.strokeWidth;
												context.strokeStyle = self.config.strokeColor;
												context.globalAlpha = self.config.fillOpacity;

												if (shapeSort == 'rect') {
															context.fillRect(cox[0], coy[0], cox[1] - cox[0], coy[1] - coy[0]);

															if (self.config.strokeWidth > 0) context.strokeRect(cox[0], coy[0], cox[1] - cox[0], coy[1] - coy[0]);
												} else {
															context.beginPath();

															if (shapeSort == 'poly') {

																		context.moveTo(cox[0], coy[0]);
																		for (var j = 1; j < cox.length; j++) {
																					context.lineTo(cox[j], coy[j]);
																		}
																		context.closePath();
															} else if (shapeSort == 'circle') {

																		context.arc(cox[0], coy[0], cox[1], 0, Math.PI * 2, true);
																		//context.fillStyle = 'rgba('+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 255) + 1)+','+Math.floor((Math.random() * 100) + 1)+',0.3)';
															}

															if (self.config.fillColor) context.fill();
															if (self.config.strokeWidth > 0) context.stroke();
												}

												if (showCanvas) canvas.hide().fadeIn(self.config.fadeTime);
									}

									//})

						},

						_selectArea: function _selectArea(id, fixed, showCanvas) {
									var self = this;

									id = parseInt(id);

									var el = self.$elem.find("area[data-id='" + id + "']");
									var selected = el.hasClass('selected');
									var cnv = self.$elem.find('canvas[data-id="' + id + '"]');

									//alert(self.mapHidden)
									if (self.mapIsVisible()) {
												self._reloadAreasIfHidden();
									} else self.mapHidden = true;

									//{
									//console.log('ID '+id+' nemozem vybrat, mapa nie je viditelna!')
									//return false;
									//}

									if (selected) {
												console.log('ID ' + id + ' je uz vybrane!');
												return false;
									}

									if (fixed !== true) fixed = false;

									if (el.length > 0) {
												self.$elem.find('canvas[data-id="' + id + '"]:last').removeClass('temp');
												el.addClass('selected');
												cnv.removeClass('temp');
												self.selectedAreas.push(id);
												if (showCanvas) self._mapover(el, true, fixed);

												self._eventCallback('select', false, el);
									} else console.log('Plocha s ID ' + id + ' na mape neexistuje!');
						},

						_deselectArea: function _deselectArea(id, hideCanvas) {
									var self = this;

									id = parseInt(id);

									var el = self.$elem.find("area[data-id='" + id + "']");
									var cnv = self.$elem.find('canvas[data-id="' + id + '"]');
									var selected = el.hasClass('selected');
									var fixed = el.hasClass('fixed');

									if (!selected || fixed) {
												//console.log('ID '+id+' je uz zrusene!')
												return false;
									}

									//if(fixed !== true)
									//fixed = false

									if (el.length > 0) {
												cnv.addClass('temp');

												if (cnv.length > 1 || hideCanvas) {
															self.$elem.find('canvas[data-id="' + id + '"]:last').fadeOut(self.config.fadeTime);
												}
												el.removeClass('selected');

												self._removeItem(self.selectedAreas, id);

												self._eventCallback('deselect', false, el);
									} else console.log('Plocha s ID ' + id + ' na mape neexistuje!');
						},

						_selectAreas: function _selectAreas(obj, sec, callback) {
									var self = this;
									var sec_init = sec;
									var length = obj.length;

									function doSetTimeout(i, id, fixed) {
												setTimeout(function () {
															self._selectArea(id, fixed, true);
															self._doCallback(i, length, sec, callback);
												}, sec_init);
												sec_init += sec;
									}
									//console.log('l- '+obj.length)
									for (var i = 0; i < length; i++) {
												var id = parseInt(obj[i].id);
												var fixed = obj[i].fixed === true ? true : false;
												//var fixed = val.fixed
												//alert(id)
												//var isLast =  (i == length-1)
												//alert(id + ' is last')
												if (sec) {
															doSetTimeout(i, id, fixed);
															//setTimeout(function(){


															//console.log('ssssss')
															//if(isLast)
															//callback()
															//}, sec_init)
															//sec_init += sec
												} else {
															self._selectArea(id, fixed, true);
															self._doCallback(i, length, sec, callback);
												}
									}
									//$.each( obj, function(key, val){
									//var id = parseInt(key)
									//var fixed = val.fixed
									//alert(val)


									//})
						},

						_doCallback: function _doCallback(i, length, sec, callback) {
									var self = this;
									if (i === length - 1 && typeof callback === 'function') {
												if (sec > 0) setTimeout(function () {
															callback(self.map, self.selectedAreas);
												}, sec);else callback(self.map, self.selectedAreas);
									}
						},

						_deselectAreas: function _deselectAreas(obj, sec, callback) {
									var self = this;
									var sec_init = sec;
									var length = obj.length;

									function doSetTimeout(i, id) {
												setTimeout(function () {
															self._deselectArea(id, true);
															self._doCallback(i, length, sec, callback);
												}, sec_init);
												sec_init += sec;
									}

									//$.each( obj, function(key, val){

									for (var i = 0; i < length; i++) {
												var id = parseInt(obj[i].id);
												//var fixed = (obj[i].fixed === true ? true : false )

												//var id = parseInt(key)
												//var fixed = val.fixed

												if (sec) {
															doSetTimeout(i, id);

															//setTimeout(function(){
															//self._selectArea(id,fixed,true)
															//self._deselectArea( id, true )
															//}, sec_init)
															//sec_init += sec
												} else {
															self._deselectArea(id, true);
															self._doCallback(i, length, sec, callback);
												}
									}
						},

						isSelected: function isSelected(id) {
									var self = this;

									if (self._inArray(self.selectedAreas, id)) return true;

									return false;
						},

						isFixed: function isFixed(id) {
									var self = this;
									var el = self.$elem.find("area[data-id='" + id + "']");

									if (el.hasClass('fixed')) return true;

									return false;
						},

						getSelected: function getSelected() {
									return this.selectedAreas;
						},

						getAll: function getAll() {
									var self = this;
									var ids = [];

									self.$elem.find('area').each(function (key, val) {
												var el = $(this);
												var id = parseInt(el.data('id'));
												//var fixed = val.fixed
												//alert(val)
												ids.push({ 'id': id });
												//ids[id] = {}
												//self._selectArea(id,fixed,true)
									});

									return ids;
						},

						selectOne: function selectOne(id, fixed) {
									var self = this;

									self._onMapLoaded(function () {

												self._selectArea(id, fixed, true);
									});
						},

						selectAll: function selectAll(sec, callback) {
									var self = this;

									var obj = self.getAll();
									//alert(obj)
									self.selectMany(obj, sec, callback);
						},

						deselectAll: function deselectAll(sec, callback) {
									var self = this;

									var obj = self.getAll();
									//alert(obj)
									self.deselect(obj, sec, callback);
						},

						selectMany: function selectMany(obj, sec, callback) {
									var self = this;

									self._onMapLoaded(function () {

												self._selectAreas(obj, sec, callback);

												//callback()
									});

									//alert(event)
									//alert(id)
						},

						deselect: function deselect(obj, sec, callback) {
									var self = this;
									self._deselectAreas(obj, sec, callback);
						},

						removeFixed: function removeFixed(obj) {
									var self = this;
									//self._deselectAreas(obj, sec, callback)
									for (var i = 0; i < obj.length; i++) {
												var id = parseInt(obj[i].id);
												var el = self.$elem.find("area[data-id='" + id + "']");
												var cnv = self.$elem.find('canvas[data-id="' + id + '"]');
												cnv.remove();
												el.removeClass('selected').removeClass('fixed');
												self._removeItem(self.selectedAreas, id);

												//alert(obj[i].id)
									}
						},

						changeConfig: function changeConfig(key, value) {
									var self = this;
									self.config[key] = value;
						}

						/*
      mlDrawCanvas : function(){
      		//var mlImageClass = document.getElementsByClassName(imageClass)[0],
      var $image = this.image,
      	//$image = $("."+imageClass),
      		w = $image.width(),
      		h = $image.height();
      			if($image.siblings('canvas')) {
      			$image.siblings('canvas').remove();
      			}
      			mlGetMapName = $image.attr('usemap').replace('#',''),
      	theMap = $('map[name="'+mlGetMapName+'"]').addClass('mlHighlight'),
      	wrapped = $('<div id="wrap'+mlGetMapName+'image"></div>');
      	//wrapped = $('<div class="wrapper"></div>');
      			if($image.parent('#wrap'+mlGetMapName+'image').length) {
      		$image.unwrap();
      		}
      			$image.wrap(wrapped);
      
      			var $wrap = $('#wrap'+mlGetMapName+'image');
      					var opts = {
      						'position':'relative',
      						'margin':'0 auto',
      						'line-height':'0',
      						'width':w
      						}
      			if($wrap.parent().width() < $image.attr('width'))
      			opts.width = 'auto'
      
      			this.$elem.css(opts);
      
      var index = 0;
       //Adds function atts to all areas on image map
      	theMap.children('area').each(function() {
      		var $this = $(this);
      			index++;
      			$this.attr('id',mlGetMapName+'area'+index);
      			// World Map add-ons //
      			$this.attr('target','_blank');
      		var	atTitle = $this.attr('alt');
      			//$this.attr('href') ? $this.attr('href') : $this.attr('href', 'http://en.wikipedia.org/wiki/'+atTitle);
      			$this.attr('href') ? $this.attr('href') : $this.attr('href', '');
      			// End World Map add-ons //
      			$this.attr('title') ? $this.attr('title') : $this.attr('title',atTitle);
      					//var cb = 'mapover('+$this.attr('id')+');'
      			//$this.attr('onmouseover','mapover('+$this.attr('id')+');').attr('onmouseout','mapout('+$this.attr('id')+');');
      			//$this.attr('onmouseover', cb).attr('onmouseout');
      
      	});
      
      	//var a = theMap.children('area:first')
      	//var b = theMap.children('area:last')
      			//b.mouseover(); mouseover
      
      }
      */

						// You don't need to change something below:
						// A really lightweight plugin wrapper around the constructor,
						// preventing against multiple instantiations and allowing any
						// public function (ie. a function whose name doesn't start
						// with an underscore) to be called via the jQuery plugin,
						// e.g. $(element).defaultPluginName('functionName', arg1, arg2)
			};$.fn[pluginName] = function (options) {
						var args = arguments;

						// Is the first parameter an object (options), or was omitted,
						// instantiate a new instance of the plugin.
						if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
									return this.each(function () {

												// Only allow the plugin to be instantiated once,
												// so we check that the element has no plugin instantiation yet
												if (!$.data(this, 'plugin_' + pluginName)) {

															// if it has no instance, create a new one,
															// pass options to our plugin constructor,
															// and store the plugin instance
															// in the elements jQuery data object.
															$.data(this, 'plugin_' + pluginName, new mapoidPlugin(this, options));
												}
									});

									// If the first parameter is a string and it doesn't start
									// with an underscore or "contains" the `init`-function,
									// treat this as a call to a public method.
						} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

									// Cache the method call
									// to make it possible
									// to return a value
									var returns;

									this.each(function () {
												var instance = $.data(this, 'plugin_' + pluginName);

												// Tests that there's already a plugin-instance
												// and checks that the requested public method exists
												if (instance instanceof mapoidPlugin && typeof instance[options] === 'function') {
															//alert( options )
															// Call the method of our plugin instance,
															// and pass it the supplied arguments.
															returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
												}

												// Allow instances to be destroyed via the 'destroy' method
												if (options === 'destroy') {
															$.data(this, 'plugin_' + pluginName, null);
												}
									});

									// If the earlier cached method
									// gives a value back return the value,
									// otherwise return this to preserve chainability.
									return returns !== undefined ? returns : this;
						}
			};
})(jQuery, window, document);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTExMjc5YjUyZGQ5MjdjNzZkNWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpYnMvbWFwb2lkLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsInBsdWdpbk5hbWUiLCJkZWZhdWx0cyIsInByb3BlcnR5TmFtZSIsIm1hcG9pZFBsdWdpbiIsImVsZW1lbnQiLCJvcHRpb25zIiwiZWxlbSIsIiRlbGVtIiwiJGVsZW1fb3JpZ2luYWwiLCJtZXRhZGF0YSIsImRhdGEiLCJfaW5pdCIsInByb3RvdHlwZSIsIndpZHRoIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VXaWR0aCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwiZmFkZVRpbWUiLCJzZWxlY3RlZEFyZWEiLCJzZWxlY3RPbkNsaWNrIiwiY2xpY2siLCJkYmxjbGljayIsIm1vdXNlZG93biIsIm1vdXNldXAiLCJtb3VzZW92ZXIiLCJtb3VzZW91dCIsIm1vdXNlbW92ZSIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiaG92ZXJJbiIsImhvdmVyT3V0Iiwic2VsZWN0IiwiZGVzZWxlY3QiLCJsYW5nIiwidGV4dFNlbGVjdEFsbCIsImNvbmZpZyIsImV4dGVuZCIsIm1hcCIsInNlbGVjdGVkQXJlYXMiLCJzZWxmIiwibWFwTmFtZSIsImF0dHIiLCJpbWFnZSIsImZpbmQiLCJ3cmFwcGVyIiwiYWRkIiwid3JhcEFsbCIsImNsb3Nlc3QiLCJtYXBIaWRkZW4iLCJtYXBJc1Zpc2libGUiLCJfb25JbWdMb2FkIiwiaW1nIiwiaGVpZ2h0IiwiX2xvYWRNYXAiLCJfaW5pdEV2ZW50cyIsInJlc2l6ZSIsIl9yZWxvYWRBcmVhcyIsIl9nZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpcyIsImkiLCJqIiwiJHRoaXMiLCJjbGEiLCJjc3MiLCJfcmVkcmF3Q29vcmRzIiwiX3NlbGVjdEFyZWFzIiwiYyIsInciLCJoIiwid2QiLCJwcm9wb3J0aW9uIiwiZWFjaCIsImNvb3JkcyIsInNwbGl0IiwiY29vcmRzUGVyY2VudCIsIkFycmF5IiwibGVuZ3RoIiwidG9TdHJpbmciLCJfZXZlbnRDYWxsYmFjayIsImV2ZW50IiwiZSIsImVsIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiX3JlbG9hZEFyZWFzSWZIaWRkZW4iLCJyZW1vdmUiLCJzIiwiayIsInYiLCJmaXhlZCIsImhhc0NsYXNzIiwiX21hcG92ZXIiLCJvbiIsImZhZGVPdXQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJsb2NhdGlvbiIsInBhcnNlSW50Iiwic2VsZWN0ZWQiLCJfaW5BcnJheSIsIl9zZWxlY3RBcmVhIiwiX2Rlc2VsZWN0QXJlYSIsImhvdmVyIiwiX3JlbW92ZUl0ZW0iLCJhcnJheSIsIml0ZW0iLCJzcGxpY2UiLCJjYiIsIkltYWdlIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiX29uTWFwTG9hZGVkIiwiYXJlYSIsInJlbW92ZVRlbXAiLCJhcmVhX2lkIiwiaXNOYU4iLCIkaW1nIiwiJGJnX2ZpbGwiLCJzaGFwZVNvcnQiLCJjYW52YXMiLCJwYXJlbnQiLCJhcHBlbmQiLCJhZGRDbGFzcyIsImJnX2ZpbGwiLCJiZ19vcGFjaXR5IiwiJGNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY294IiwiY295IiwicHVzaCIsInNob3dDYW52YXMiLCJhcmVhX2ltZyIsIm1haW5JbWdTcmMiLCJtaW5feCIsImFwcGx5IiwibWluX3kiLCJtYXhfeCIsIm1heF95IiwiZl93IiwiZl9oIiwiZHJhd0ltYWdlIiwiaGlkZSIsImZhZGVJbiIsImZpbGxTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZ2xvYmFsQWxwaGEiLCJmaWxsUmVjdCIsInN0cm9rZVJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJzdHJva2UiLCJjbnYiLCJyZW1vdmVDbGFzcyIsImhpZGVDYW52YXMiLCJvYmoiLCJzZWMiLCJjYWxsYmFjayIsInNlY19pbml0IiwiZG9TZXRUaW1lb3V0Iiwic2V0VGltZW91dCIsIl9kb0NhbGxiYWNrIiwiX2Rlc2VsZWN0QXJlYXMiLCJpc1NlbGVjdGVkIiwiaXNGaXhlZCIsImdldFNlbGVjdGVkIiwiZ2V0QWxsIiwiaWRzIiwia2V5IiwidmFsIiwic2VsZWN0T25lIiwic2VsZWN0QWxsIiwic2VsZWN0TWFueSIsImRlc2VsZWN0QWxsIiwicmVtb3ZlRml4ZWQiLCJjaGFuZ2VDb25maWciLCJ2YWx1ZSIsImZuIiwiYXJncyIsImFyZ3VtZW50cyIsInJldHVybnMiLCJpbnN0YW5jZSIsInNsaWNlIiwiY2FsbCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7QUFPQTtBQUNBOzs7QUFJQSxDQUFFLFdBQVdBLENBQVgsRUFBY0MsTUFBZCxFQUFzQkMsUUFBdEIsRUFBZ0NDLFNBQWhDLEVBQTRDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFJQyxhQUFhLFFBQWpCO0FBQUEsT0FDSUMsV0FBVztBQUNQQyxvQkFBYztBQURQLElBRGY7O0FBS0E7QUFDQSxZQUFTQyxZQUFULENBQXVC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SUFBckM7QUFDRDtBQUNKLFVBaEJEOztBQWtCQTtBQUNBO0FBQ0E7QUFDQSxnQkFBT2tNLFlBQVluTSxTQUFaLEdBQXdCbU0sT0FBeEIsR0FBa0MsSUFBekM7QUFDSDtBQUNKLElBckREO0FBdURILENBL3ZDQyxFQSt2Q0FJLE1BL3ZDQSxFQSt2Q1F6TSxNQS92Q1IsRUErdkNnQkMsUUEvdkNoQixDQUFELEMiLCJmaWxlIjoibGlicy9tYXBvaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9saWJzL21hcG9pZC5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MTEyNzliNTJkZDkyN2M3NmQ1ZCIsIi8qXHJcbiAqICBQcm9qZWN0OiBNYXBwZXIgMS4wXHJcbiAqICBEZXNjcmlwdGlvbjogUmVzcG9uc2l2ZSBodG1sIG1hcCBhcmVhIGhpZ2hsaWdodGVyIHdpdGggYXJlYSBzZWxlY3Rpb25cclxuICogIEF1dGhvcjpcclxuICogIExpY2Vuc2U6XHJcbiAqL1xyXG5cclxuLy8gdGhlIHNlbWktY29sb24gYmVmb3JlIGZ1bmN0aW9uIGludm9jYXRpb24gaXMgYSBzYWZldHkgbmV0IGFnYWluc3QgY29uY2F0ZW5hdGVkXHJcbi8vIHNjcmlwdHMgYW5kL29yIG90aGVyIHBsdWdpbnMgd2hpY2ggbWF5IG5vdCBiZSBjbG9zZWQgcHJvcGVybHkuXHJcblxyXG5cclxuXHJcbjsoZnVuY3Rpb24gKCAkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQgKSB7XHJcblxyXG4gICAgLy8gdW5kZWZpbmVkIGlzIHVzZWQgaGVyZSBhcyB0aGUgdW5kZWZpbmVkIGdsb2JhbCB2YXJpYWJsZSBpbiBFQ01BU2NyaXB0IDMgaXNcclxuICAgIC8vIG11dGFibGUgKGllLiBpdCBjYW4gYmUgY2hhbmdlZCBieSBzb21lb25lIGVsc2UpLiB1bmRlZmluZWQgaXNuJ3QgcmVhbGx5IGJlaW5nXHJcbiAgICAvLyBwYXNzZWQgaW4gc28gd2UgY2FuIGVuc3VyZSB0aGUgdmFsdWUgb2YgaXQgaXMgdHJ1bHkgdW5kZWZpbmVkLiBJbiBFUzUsIHVuZGVmaW5lZFxyXG4gICAgLy8gY2FuIG5vIGxvbmdlciBiZSBtb2RpZmllZC5cclxuXHJcbiAgICAvLyB3aW5kb3cgaXMgcGFzc2VkIHRocm91Z2ggYXMgbG9jYWwgdmFyaWFibGUgcmF0aGVyIHRoYW4gZ2xvYmFsXHJcbiAgICAvLyBhcyB0aGlzIChzbGlnaHRseSkgcXVpY2tlbnMgdGhlIHJlc29sdXRpb24gcHJvY2VzcyBhbmQgY2FuIGJlIG1vcmUgZWZmaWNpZW50bHlcclxuICAgIC8vIG1pbmlmaWVkIChlc3BlY2lhbGx5IHdoZW4gYm90aCBhcmUgcmVndWxhcmx5IHJlZmVyZW5jZWQgaW4geW91ciBwbHVnaW4pLlxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgZGVmYXVsdHMgb25jZVxyXG4gICAgdmFyIHBsdWdpbk5hbWUgPSAnbWFwb2lkJyxcclxuICAgICAgICBkZWZhdWx0cyA9IHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBcInZhbHVlXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgIC8vIFRoZSBhY3R1YWwgcGx1Z2luIGNvbnN0cnVjdG9yXHJcbiAgICBmdW5jdGlvbiBtYXBvaWRQbHVnaW4oIGVsZW1lbnQsIG9wdGlvbnMgKSB7XHJcbiAgICAgICAgLy90aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBqUXVlcnkgaGFzIGFuIGV4dGVuZCBtZXRob2Qgd2hpY2ggbWVyZ2VzIHRoZSBjb250ZW50cyBvZiB0d28gb3JcclxuICAgICAgICAvLyBtb3JlIG9iamVjdHMsIHN0b3JpbmcgdGhlIHJlc3VsdCBpbiB0aGUgZmlyc3Qgb2JqZWN0LiBUaGUgZmlyc3Qgb2JqZWN0XHJcbiAgICAgICAgLy8gaXMgZ2VuZXJhbGx5IGVtcHR5IGFzIHdlIGRvbid0IHdhbnQgdG8gYWx0ZXIgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3JcclxuICAgICAgICAvLyBmdXR1cmUgaW5zdGFuY2VzIG9mIHRoZSBwbHVnaW5cclxuXHJcblx0XHR0aGlzLmVsZW0gPSBlbGVtZW50O1xyXG5cdFx0dGhpcy4kZWxlbSA9ICQoZWxlbWVudCk7XHJcblx0XHR0aGlzLiRlbGVtX29yaWdpbmFsID0gdGhpcy4kZWxlbVxyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcblxyXG5cdFx0Ly8gVGhpcyBuZXh0IGxpbmUgdGFrZXMgYWR2YW50YWdlIG9mIEhUTUw1IGRhdGEgYXR0cmlidXRlc1xyXG5cdFx0Ly8gdG8gc3VwcG9ydCBjdXN0b21pemF0aW9uIG9mIHRoZSBwbHVnaW4gb24gYSBwZXItZWxlbWVudFxyXG5cdFx0Ly8gYmFzaXMuIEZvciBleGFtcGxlLFxyXG5cdFx0Ly8gPGRpdiBjbGFzcz1pdGVtJyBkYXRhLXBsdWdpbi1vcHRpb25zPSd7XCJtZXNzYWdlXCI6XCJHb29kYnllIFdvcmxkIVwifSc+PC9kaXY+XHJcblx0XHQvL3RoaXMubWV0YWRhdGEgPSB0aGlzLiRlbGVtLmRhdGEoICdwbHVnaW4tb3B0aW9ucycgKTtcclxuXHRcdHRoaXMubWV0YWRhdGEgPSB0aGlzLiRlbGVtLmRhdGEoICk7XHJcblxyXG5cdFx0dGhpcy5faW5pdCgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cdC8vUGx1Z2luLnByb3RvdHlwZSA9XHJcblx0bWFwb2lkUGx1Z2luLnByb3RvdHlwZSA9XHJcblx0e1xyXG5cclxuXHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdHdpZHRoIDogNjAwLFxyXG5cclxuXHRcdFx0c3Ryb2tlQ29sb3I6ICdibGFjaycsXHJcblx0XHRcdHN0cm9rZVdpZHRoOiAxLFxyXG5cdFx0XHRmaWxsQ29sb3I6ICdibGFjaycsXHJcblx0XHRcdGZpbGxPcGFjaXR5OiAwLjUsXHJcblx0XHRcdGZhZGVUaW1lOiA1MDAsXHJcblx0XHRcdHNlbGVjdGVkQXJlYTogZmFsc2UsXHJcblx0XHRcdHNlbGVjdE9uQ2xpY2s6IHRydWUsXHJcblxyXG5cdFx0XHRjbGljazpmYWxzZSxcclxuXHRcdFx0ZGJsY2xpY2s6ZmFsc2UsXHJcblx0XHRcdG1vdXNlZG93bjpmYWxzZSxcclxuXHRcdFx0bW91c2V1cDpmYWxzZSxcclxuXHRcdFx0bW91c2VvdmVyOmZhbHNlLFxyXG5cdFx0XHRtb3VzZW91dDpmYWxzZSxcclxuXHRcdFx0bW91c2Vtb3ZlOmZhbHNlLFxyXG5cdFx0XHRtb3VzZWVudGVyOmZhbHNlLFxyXG5cdFx0XHRtb3VzZWxlYXZlOmZhbHNlLFxyXG5cdFx0XHRob3ZlckluOmZhbHNlLFxyXG5cdFx0XHRob3Zlck91dDpmYWxzZSxcclxuXHJcblx0XHRcdHNlbGVjdDpmYWxzZSxcclxuXHRcdFx0ZGVzZWxlY3Q6ZmFsc2VcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGxhbmc6IHtcclxuXHRcdFx0dGV4dFNlbGVjdEFsbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJTZWxlY3QgYWxsXCI7IH1cclxuXHRcdH0sXHJcblxyXG5cdFx0X2luaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBJbnRyb2R1Y2UgZGVmYXVsdHMgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgZWl0aGVyXHJcblx0XHRcdC8vIGdsb2JhbGx5IG9yIHVzaW5nIGFuIG9iamVjdCBsaXRlcmFsLlxyXG5cdFx0XHR0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdHRoaXMubWV0YWRhdGEpO1xyXG5cdFx0XHQvL2FsZXJ0KCBKU09OLnN0cmluZ2lmeSggdGhpcy5sYW5nLnRleHRTZWFyY2hpbmcoKSApIClcclxuXHJcblx0XHRcdC8vYWxlcnQoIHRoaXMuY29uZmlnLnN0cm9rZVdpZHRoIClcclxuXHRcdFx0Ly9hbGVydCg0MilcclxuXHJcblx0XHRcdC8vdGhpcy5pc1Jlc3BvbnNpdmUgPSBmYWxzZVxyXG5cdFx0XHQvL3RoaXMuaW1hZ2VMb2FkZWQgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLm1hcCA9IHRoaXMuJGVsZW1cclxuXHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRBcmVhcyA9IFtdXHJcblxyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHJcblx0XHRcdC8vc2VsZi5tYXBMb2FkZWQgPSBmYWxzZVxyXG5cdFx0XHQvL3NlbGYuY29vcmRzTG9hZGVkID0gZmFsc2VcclxuXHRcdFx0Ly9zZWxmLm1hcEhpZGRlbiA9IGZhbHNlXHJcblxyXG5cdFx0XHR2YXIgbWFwTmFtZSA9IHNlbGYuJGVsZW0uYXR0cignbmFtZScpXHJcblx0XHRcdHNlbGYuaW1hZ2UgPSAkKGRvY3VtZW50KS5maW5kKFwiaW1nW3VzZW1hcD0nI1wiK21hcE5hbWUrXCInXVwiKVxyXG5cdFx0XHQvL3NlbGYuaW1hZ2VTcmMgPSBzZWxmLmltYWdlLmF0dHIoJ3NyYycpXHJcblx0XHRcdC8vYWxlcnQoIHNlbGYuJGVsZW0uYXR0cignbmFtZScpIClcclxuXHJcblx0XHRcdHZhciB3cmFwcGVyID0gJChcIjxkaXYgY2xhc3M9J3dycCc+PC9kaXY+XCIpXHJcblx0XHRcdCQoXCJtYXBbbmFtZT1cIittYXBOYW1lK1wiXVwiKS5hZGQoXCJpbWdbdXNlbWFwPScjXCIrbWFwTmFtZStcIiddXCIpLndyYXBBbGwod3JhcHBlcik7XHJcblx0XHRcdFx0Ly99KTtcclxuXHRcdFx0dGhpcy4kZWxlbSA9IHRoaXMuJGVsZW0uY2xvc2VzdCgnZGl2JylcclxuXHRcdFx0XHQvL3RoaXMuZWxlbSA9IHdyYXBwZXJbMF1cclxuXHRcdFx0Ly9hbGVydCggdGhpcy5pbWFnZS53aWR0aCgpIClcclxuXHJcblx0XHRcdC8vaWYoICFzZWxmLmltYWdlLmlzKCc6dmlzaWJsZScpICApe1xyXG5cclxuXHRcdFx0XHQvL3NlbGYuaW1hZ2UuY3NzKCdkaXNwbGF5JywnYmxvY2snKVxyXG5cdFx0XHRcdC8vc2VsZi5tYXAuY3NzKCdkaXNwbGF5JywnYmxvY2snKVxyXG5cdFx0XHRcdC8vc2VsZi4kZWxlbS5jc3MoJ2Rpc3BsYXknLCdibG9jaycpXHJcblxyXG5cdFx0XHQvL31cclxuXHJcblx0XHRcdC8vYWxlcnQoIHNlbGYuaW1hZ2Uud2lkdGgoKSApXHJcblx0XHRcdC8vYWxlcnQoIHNlbGYuaW1hZ2UuY3NzKCd3aWR0aCcpIClcclxuXHRcdFx0Ly9zZWxmLm1hcC5vbignc2hvdycsZnVuY3Rpb24oKXtcclxuXHRcdFx0Ly9hbGVydCgxKVxyXG5cdFx0XHQvL30pXHJcblx0XHRcdC8vdmFyIHcgPSB0aGlzLmltYWdlLmF0dHIoJ3dpZHRoJylcclxuXHRcdFx0Ly92YXIgaCA9IHRoaXMuaW1hZ2UuYXR0cignaGVpZ2h0JylcclxuXHRcdFx0Ly92YXIgd2QgPSB0aGlzLmltYWdlLndpZHRoKClcclxuXHRcdFx0Ly9hbGVydCh3K1wiIC0gXCIrd2QpXHJcblxyXG5cdFx0XHRzZWxmLm1hcEhpZGRlbiA9ICggc2VsZi5tYXBJc1Zpc2libGUoKSApID8gZmFsc2UgOiB0cnVlXHJcblxyXG5cdFx0XHQvL2FsZXJ0KHNlbGYubWFwSGlkZGVuKVxyXG5cdFx0XHQvL2lmKCAhc2VsZi5tYXBJc1Zpc2libGUoKSAgKVxyXG5cdFx0XHQvL1x0c2VsZi5tYXBIaWRkZW4gPSB0cnVlXHJcblxyXG5cdFx0XHRcdC8vYWxlcnQoIHNlbGYuJGVsZW0uYXR0cignbmFtZScpIClcclxuXHRcdFx0XHQvLyQoXCJtYXBbbmFtZT1cIittYXBOYW1lK1wiXSxpbWdbdXNlbWFwPScjXCIrbWFwTmFtZStcIiddXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdC8vYWxlcnQoc2VsZi5tYXBJc1Zpc2libGUoKSlcclxuXHRcdFx0XHQvL2FsZXJ0KDEpXHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRcdHNlbGYuX29uSW1nTG9hZCggc2VsZi5pbWFnZSwgZnVuY3Rpb24oaW1nKXtcclxuXHJcblx0XHRcdFx0XHQvL2FsZXJ0KGltZy5oZWlnaHQpXHJcblx0XHRcdFx0XHQvL3NlbGYuXHJcblx0XHRcdFx0XHRzZWxmLmltYWdlLmF0dHIoJ3dpZHRoJywgaW1nLndpZHRoIClcclxuXHRcdFx0XHRcdHNlbGYuaW1hZ2UuYXR0cignaGVpZ2h0JywgaW1nLmhlaWdodCApXHJcblxyXG5cdFx0XHRcdFx0Ly9hbGVydChzZWxmLmltYWdlLmF0dHIoJ3dpZHRoJykgKVxyXG5cdFx0XHRcdFx0Ly9hbGVydChzZWxmLmltYWdlLmF0dHIoJ2hlaWdodCcpIClcclxuXHRcdFx0XHRcdC8vYWxlcnQoc2VsZi5pbWFnZS5jc3MoJ3dpZHRoJykgKVxyXG5cdFx0XHRcdFx0Ly9kbyBzb21ldGhpbmdcclxuXHRcdFx0XHRcdC8vYWxlcnQoJ21hcCBpcyBub3QgdmlzaWJsZScpXHJcblx0XHRcdFx0XHRzZWxmLl9sb2FkTWFwKCk7XHJcblxyXG5cclxuXHJcblx0XHRcdFx0XHQvL2Vsc2VcclxuXHRcdFx0XHRcdC8vXHJcblxyXG5cdFx0XHRcdFx0c2VsZi5faW5pdEV2ZW50cygpO1xyXG5cclxuXHJcblx0XHRcdFx0XHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvL3NlbGYucmVzZXRNYXAoICk7XHJcblx0XHRcdFx0XHRcdC8vaWYoIXNlbGYubWFwTG9hZGVkKVxyXG5cdFx0XHRcdFx0XHQvL3NlbGYuX2xvYWRNYXAoKTtcclxuXHRcdFx0XHRcdFx0c2VsZi5fcmVsb2FkQXJlYXMoKVxyXG5cclxuXHRcdFx0XHRcdFx0Ly9hbGVydChzKVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvL3NlbGYuaW1hZ2VMb2FkZWQgPSB0cnVlXHJcblxyXG5cdFx0XHRcdH0pXHJcblxyXG5cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChpbmNsdXNpdmUpXHJcblx0XHQgKiBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcclxuXHRcdCAqL1xyXG5cdFx0X2dldFJhbmRvbUludDogZnVuY3Rpb24obWluLCBtYXgpIHtcclxuXHRcdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0XHR9LFxyXG5cclxuXHRcdG1hcElzVmlzaWJsZSA6IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cdFx0XHRyZXR1cm4gKCBzZWxmLm1hcC5pcygnOnZpc2libGUnKSAmJiBzZWxmLmltYWdlLmlzKCc6dmlzaWJsZScpIClcclxuXHRcdFx0Ly9yZXR1cm4gdHJ1ZVxyXG5cclxuXHRcdFx0Ly9yZXR1cm4gZmFsc2VcclxuXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRfbG9hZE1hcCA6IGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHJcblx0XHRcdC8vc2VsZi5tYXBMb2FkZWQgPSBmYWxzZVxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0dmFyIGkgPSBzZWxmLl9nZXRSYW5kb21JbnQoMSw2NTAwMClcclxuXHRcdFx0dmFyIGogPSBzZWxmLl9nZXRSYW5kb21JbnQoMSwxMDApXHJcblxyXG5cdFx0XHRcdFx0Ly92YXIgaiA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwICsgMSk7XHJcblx0XHRcdC8vdmFyICR0aGlzICAgID0gJCh0aGlzKTtcclxuXHRcdFx0dmFyICR0aGlzICAgID0gc2VsZi5pbWFnZVxyXG5cclxuXHRcdFx0Ly9hbGVydCgkdGhpcy5wcm9wKCd0YWdOYW1lJykpXHJcblxyXG5cclxuXHJcblx0XHRcdC8vc2VsZi5fbG9hZE1hcCgpO1xyXG5cdFx0XHQvL3NlbGYuX3Jlc3BvbnNpdmVJbWFnZSggKTtcclxuXHJcblx0XHRcdC8vIHJlZHJhdyBjYW52YXMgb2YgdGhlIHNlbGVjdGVkIGFyZWFzXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0dmFyIGNsYSA9ICR0aGlzLmF0dHIoJ2NsYXNzJylcclxuXHRcdFx0Ly9hbGVydCggJCh0aGlzKS5hdHRyKCdjbGFzcycpIClcclxuXHRcdFx0Ly9pID0gJCh0aGlzKS5hdHRyKCdjbGFzcycpXHJcblx0XHRcdC8vaT1qXHJcblx0XHRcdC8vYWxlcnQoY2xhKVxyXG5cclxuXHRcdFx0Ly8kdGhpcy5hdHRyKCdjbGFzcycsICdtYXAnK2kpXHJcblxyXG5cdFx0XHQvLyR0aGlzLmF0dHIoJ3VzZW1hcCcsICcjbWFwJytpKVxyXG5cdFx0XHQvL3RoaXMubWFwLmF0dHIoJ25hbWUnLCAnbWFwJytpKVxyXG5cclxuXHRcdFx0Ly92YXIgdGhpc19jbGFzcyA9ICR0aGlzLmF0dHIoJ2NsYXNzJylcclxuXHJcblx0XHRcdHNlbGYuJGVsZW0uY3NzKHsncG9zaXRpb24nOidyZWxhdGl2ZSd9KTtcclxuXHRcdFx0Ly9hbGVydCh0aGlzX2NsYXNzKVxyXG5cdFx0XHQvL3NlbGYubWxEcmF3SXQodGhpc19jbGFzcyk7XHJcblxyXG5cdFx0XHQvL2lmICghZG9jdW1lbnQuYWxsKSB7XHJcblx0XHRcdC8vc2VsZi5tbERyYXdDYW52YXMoJ21hcCcraSk7XHJcblx0XHRcdC8vfVxyXG5cclxuXHRcdFx0Ly92YXJcdG1sU291cmNlID0gJHRoaXMuYXR0cignc3JjJyksXHJcblx0XHRcdFx0Ly9pZFByZWZpeCA9IG1sU291cmNlLnN1YnN0cihtbFNvdXJjZS5sZW5ndGggLSAxKSxcclxuXHRcdFx0XHQvL21sVGhpc0lEID0gJHRoaXMuYWRkQ2xhc3MoJ2ltYWdlJytqK2lkUHJlZml4K2kpLFxyXG5cclxuXHRcdFx0XHQvL21sTWFwTmFtZSA9ICR0aGlzLmF0dHIoJ3VzZW1hcCcpLnJlcGxhY2UoJyMnLCcnKSxcclxuXHRcdFx0XHQvLyR0aGF0ID0gJCgnbWFwW25hbWU9XCInK21sTWFwTmFtZSsnXCJdJyksXHJcblx0XHRcdC8qXHQkdGhhdCAgICA9ICR0aGlzLm5leHRBbGwoJ21hcCcpLmVxKDApLCAqL1xyXG5cdFx0XHRcdC8vbWxUaGF0SUQgPSAkdGhhdC5hZGRDbGFzcygnbWxfbWFwJytqK2lkUHJlZml4K2kpO1xyXG5cclxuXHRcdFx0Ly9zZWxmLnNhdmVNYXBEYXRhKCApO1xyXG5cclxuXHRcdFx0Ly9zZWxmLl9yZXNwb25zaXZlSW1hZ2UoICk7XHJcblxyXG5cclxuXHRcdFx0Ly9zZWxmLmlzUmVzcG9uc2l2ZSA9IGZhbHNlXHJcblxyXG5cdFx0XHRpZiAodHlwZW9mKHNlbGYuaW1hZ2UuYXR0cigndXNlbWFwJykpID09ICd1bmRlZmluZWQnKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0Ly9yZXR1cm5cclxuXHJcblx0XHRcdC8vaWYoIHNlbGYubWFwSXNWaXNpYmxlKCkgIClcclxuXHRcdFx0c2VsZi5fcmVkcmF3Q29vcmRzKClcclxuXHJcblxyXG5cdFx0XHRpZihzZWxmLmNvbmZpZy5zZWxlY3RlZEFyZWEpXHJcblx0XHRcdFx0c2VsZi5fc2VsZWN0QXJlYXMoIHNlbGYuY29uZmlnLnNlbGVjdGVkQXJlYSApXHJcblxyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdtYXBhIGplIG5hY2l0YW5hJylcclxuXHJcblxyXG5cdFx0XHQvL3NlbGYubWFwTG9hZGVkID0gdHJ1ZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0X3JlZHJhd0Nvb3JkcyA6IGZ1bmN0aW9uKClcclxuXHRcdHtcclxuXHJcblx0XHRcdHZhciBzZWxmID0gdGhpc1xyXG5cclxuXHRcdFx0Ly9zZWxmLmNvb3Jkc0xvYWRlZCA9IGZhbHNlXHJcblxyXG5cdFx0XHQvL2lmKCFzZWxmLm1hcElzVmlzaWJsZSlcclxuXHRcdFx0Ly9yZXR1cm5cclxuXHJcblxyXG5cdFx0XHR2YXIgYyA9ICdjb29yZHMnXHJcblx0XHRcdHZhciB3ID0gc2VsZi5pbWFnZS5hdHRyKCd3aWR0aCcpXHJcblx0XHRcdHZhciBoID0gc2VsZi5pbWFnZS5hdHRyKCdoZWlnaHQnKVxyXG5cdFx0XHR2YXIgd2QgPSBzZWxmLmltYWdlLndpZHRoKClcclxuXHRcdFx0Ly92YXJcdGhnID0gdGhpcy5pbWFnZS5oZWlnaHQoKVxyXG5cdFx0XHQvL3ZhciB3UGVyY2VudCA9IHRoaXMuaW1hZ2Uud2lkdGgoKS8xMDBcclxuXHRcdFx0Ly92YXJcdGhQZXJjZW50ID0gdGhpcy5pbWFnZS5oZWlnaHQoKS8xMDBcclxuXHJcblx0XHRcdHZhciBwcm9wb3J0aW9uID0gKHdkIC8gdykgKiAxMDA7XHJcblxyXG5cclxuXHJcblx0XHRcdHNlbGYubWFwLmZpbmQoJ2FyZWEnKS5lYWNoKGZ1bmN0aW9uKClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdGlmICghJHRoaXMuZGF0YShjKSlcclxuXHRcdFx0XHQkdGhpcy5kYXRhKGMsICR0aGlzLmF0dHIoYykpO1xyXG5cdFx0XHRcdHZhciBjb29yZHMgPSAkdGhpcy5kYXRhKGMpLnNwbGl0KCcsJyksXHJcblx0XHRcdFx0Y29vcmRzUGVyY2VudCA9IG5ldyBBcnJheShjb29yZHMubGVuZ3RoKTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvb3Jkc1BlcmNlbnQubGVuZ3RoOyArK2kpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29vcmRzUGVyY2VudFtpXSA9ICgoY29vcmRzW2ldKSpwcm9wb3J0aW9uKSAvIDEwMFxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vQ2hhbmdlIG9sZCBjb29yZGluYXRlcyB0byBuZXdcclxuXHRcdFx0XHQkdGhpcy5hdHRyKGMsIGNvb3Jkc1BlcmNlbnQudG9TdHJpbmcoKSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vc2VsZi5jb29yZHNMb2FkZWQgPSB0cnVlXHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRfZXZlbnRDYWxsYmFjayA6IGZ1bmN0aW9uKGV2ZW50LCBlLCBlbCl7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpc1xyXG5cclxuXHJcblx0XHRcdGlmKHNlbGYuY29uZmlnW2V2ZW50XSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBpZCA9IGVsLmRhdGEoJ2lkJylcclxuXHRcdFx0XHRpZih0eXBlb2Ygc2VsZi5jb25maWdbZXZlbnRdID09PSAnZnVuY3Rpb24nKVxyXG5cdFx0XHRcdFx0c2VsZi5jb25maWdbZXZlbnRdKCBlLCBlbCwgaWQsIHNlbGYuc2VsZWN0ZWRBcmVhcyApXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coIGV2ZW50ICsgJyBuaWUgamUgZnVua2NpYSEnKVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdF9yZWxvYWRBcmVhc0lmSGlkZGVuIDogZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdHZhciBzZWxmID0gdGhpc1xyXG5cdFx0XHRpZihzZWxmLm1hcEhpZGRlbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGYuX3JlbG9hZEFyZWFzKClcclxuXHRcdFx0XHRzZWxmLm1hcEhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0X3JlbG9hZEFyZWFzIDogZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdHZhciBzZWxmID0gdGhpc1xyXG5cclxuXHRcdFx0c2VsZi4kZWxlbS5maW5kKCdjYW52YXMnKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGlmKCAhc2VsZi5tYXBJc1Zpc2libGUoKSAgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2VsZi5tYXBIaWRkZW4gPSB0cnVlXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ21hcGEgbmllIGplIHZpZGlldCcpXHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRzZWxmLl9yZWRyYXdDb29yZHMoKVxyXG5cclxuXHRcdFx0dmFyIHMgPSBzZWxmLiRlbGVtLmZpbmQoJ2FyZWEuc2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uKGssdil7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpXHJcblx0XHRcdFx0XHR2YXIgZml4ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKCdmaXhlZCcpXHJcblxyXG5cdFx0XHRcdFx0c2VsZi5fbWFwb3ZlciggJCh0aGlzKSwgdHJ1ZSwgZml4ZWQgKVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0X2luaXRFdmVudHMgOiBmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cclxuXHJcblx0XHRcdHNlbGYubWFwLm9uKCdtb3VzZW92ZXInLCAnYXJlYScsICBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKDE0ODkxKVxyXG5cdFx0XHRcdC8vaWYoIXNlbGYuY29vcmRzTG9hZGVkKVxyXG5cdFx0XHRcdC8vaWYoICFzZWxmLm1hcElzVmlzaWJsZSgpICApXHJcblxyXG5cdFx0XHRcdHNlbGYuX3JlbG9hZEFyZWFzSWZIaWRkZW4oKVxyXG5cclxuXHRcdFx0XHRzZWxmLl9ldmVudENhbGxiYWNrKCdtb3VzZW92ZXInLCBlLCAkKHRoaXMpKVxyXG5cclxuXHRcdFx0XHRzZWxmLl9tYXBvdmVyKCAkKHRoaXMpLCBmYWxzZSwgZmFsc2UsIHRydWUgKVxyXG5cdFx0XHRcdC8vYWxlcnQoMSlcclxuXHJcblxyXG5cclxuXHRcdFx0fSlcclxuXHJcblxyXG5cclxuXHRcdFx0c2VsZi5tYXAub24oJ21vdXNlb3V0JywgJ2FyZWEnLCAgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aWQpXHJcblxyXG5cdFx0XHRcdHNlbGYuX2V2ZW50Q2FsbGJhY2soJ21vdXNlb3V0JywgIGUsICQodGhpcykpXHJcblxyXG5cdFx0XHRcdHNlbGYuJGVsZW0uZmluZCgnY2FudmFzLnRlbXAnKS5mYWRlT3V0KCBzZWxmLmNvbmZpZy5mYWRlVGltZSApXHJcblx0XHRcdFx0Ly9hbGVydCggJCh0aGlzKS5jbG9zZXN0KCdkaXYnKS5maW5kKCdjYW52YXMnKS5sZW5ndGggKVxyXG5cdFx0XHRcdC8vYWxlcnQoc2VsZi4kZWxlbS5hdHRyKCdjbGFzcycpKVxyXG5cdFx0XHRcdC8vYWxlcnQoIHNlbGYuJGVsZW0uZmluZCgnY2FudmFzJykubGVuZ3RoIClcclxuXHJcblxyXG5cclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdHNlbGYubWFwLm9uKCdjbGljaycsICdhcmVhJywgIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2codGlkKVxyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuXHJcblx0XHRcdFx0aWYoIXNlbGYuX2V2ZW50Q2FsbGJhY2soJ2NsaWNrJywgZSwgJCh0aGlzKSkgJiYgIXNlbGYuY29uZmlnLnNlbGVjdE9uQ2xpY2spXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKVxyXG5cdFx0XHRcdFx0aWYoaHJlZilcclxuXHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBocmVmO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZWxzZSBpZihzZWxmLmNvbmZpZy5zZWxlY3RPbkNsaWNrKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBpZCA9IHBhcnNlSW50KCAkKHRoaXMpLmRhdGEoJ2lkJykgKVxyXG5cclxuXHRcdFx0XHRcdC8vdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcygnc2VsZWN0ZWQnKVxyXG5cdFx0XHRcdFx0dmFyIHNlbGVjdGVkID0gc2VsZi5faW5BcnJheShzZWxmLnNlbGVjdGVkQXJlYXMsIGlkKVxyXG5cdFx0XHRcdFx0dmFyIGZpeGVkID0gJCh0aGlzKS5oYXNDbGFzcygnZml4ZWQnKVxyXG5cclxuXHRcdFx0XHRcdC8vaWYoIWZpeGVkKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZighc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQvL3NlbGYuc2VsZWN0ZWRBcmVhcy5wdXNoKGlkKVxyXG5cdFx0XHRcdFx0XHRcdHNlbGYuX3NlbGVjdEFyZWEoaWQsZml4ZWQsZmFsc2UpXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLl9kZXNlbGVjdEFyZWEoIGlkLCBmYWxzZSApXHJcblxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly9lbHNlXHJcblx0XHRcdFx0XHQvL2FsZXJ0KGlkKVxyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyggc2VsZi5zZWxlY3RlZEFyZWFzIClcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0XHQvL2FsZXJ0KGhyZWYpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblxyXG5cclxuXHRcdFx0XHQvL3NlbGYuJGVsZW0uZmluZCgnY2FudmFzLnRlbXAnKS5mYWRlT3V0KCBzZWxmLmNvbmZpZy5mYWRlVGltZSApXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRzZWxmLm1hcC5vbignbW91c2Vkb3duJywgJ2FyZWEnLCAgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0c2VsZi5fZXZlbnRDYWxsYmFjaygnbW91c2Vkb3duJywgZSwgJCh0aGlzKSlcclxuXHRcdFx0fSlcclxuXHRcdFx0c2VsZi5tYXAub24oJ21vdXNldXAnLCAnYXJlYScsICBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRzZWxmLl9ldmVudENhbGxiYWNrKCdtb3VzZXVwJywgIGUsICQodGhpcykpXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRzZWxmLm1hcC5vbignZGJsY2xpY2snLCAnYXJlYScsICBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRzZWxmLl9ldmVudENhbGxiYWNrKCdkYmxjbGljaycsICBlLCAkKHRoaXMpKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0c2VsZi5tYXAub24oJ21vdXNlbW92ZScsICdhcmVhJywgIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHNlbGYuX2V2ZW50Q2FsbGJhY2soJ21vdXNlbW92ZScsICBlLCAkKHRoaXMpKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0c2VsZi5tYXAub24oJ21vdXNlZW50ZXInLCAnYXJlYScsICBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRzZWxmLl9ldmVudENhbGxiYWNrKCdtb3VzZWVudGVyJywgIGUsICQodGhpcykpXHJcblx0XHRcdH0pXHJcblx0XHRcdHNlbGYubWFwLm9uKCdtb3VzZWxlYXZlJywgJ2FyZWEnLCAgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0c2VsZi5fZXZlbnRDYWxsYmFjaygnbW91c2VsZWF2ZScsICBlLCAkKHRoaXMpKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0c2VsZi5tYXAuZmluZCgnYXJlYScpLmhvdmVyKGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHNlbGYuX2V2ZW50Q2FsbGJhY2soJ2hvdmVySW4nLCAgZSwgJCh0aGlzKSlcclxuXHRcdFx0fSwgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0c2VsZi5fZXZlbnRDYWxsYmFjaygnaG92ZXJPdXQnLCBlLCAkKHRoaXMpKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0X3JlbW92ZUl0ZW06IGZ1bmN0aW9uIChhcnJheSwgaXRlbSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKGFycmF5W2ldPT09aXRlbSl7XHJcblx0XHRcdFx0YXJyYXkuc3BsaWNlKGksMSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9pbkFycmF5OiBmdW5jdGlvbiAoYXJyYXksIGl0ZW0pXHJcblx0XHR7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZihhcnJheVtpXT09PWl0ZW0pe1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0X29uSW1nTG9hZDogZnVuY3Rpb24gKCBpbWFnZSwgY2IgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHRcdFx0dmFyIGltZyA9IG5ldyBJbWFnZTtcclxuXHRcdFx0Ly9pbWcuc3JjID0gYXJlYUltZztcclxuXHJcblx0XHRcdGltZy5zcmMgPSAoIGltYWdlWzBdLmdldEF0dHJpYnV0ZSA/IGltYWdlWzBdLmdldEF0dHJpYnV0ZShcInNyY1wiKSA6IGZhbHNlKSB8fCBpbWFnZVswXS5zcmM7XHJcblxyXG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGNiKGltZylcclxuXHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHQvL19nZXRPcmlnSW1nU2l6ZSA6IGZ1bmN0aW9uKCBpbWcgKXtcclxuXHRcdFx0Ly92YXIgdCA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHQvL3Quc3JjID0gKGltZy5nZXRBdHRyaWJ1dGUgPyBpbWcuZ2V0QXR0cmlidXRlKFwic3JjXCIpIDogZmFsc2UpIHx8IGltZy5zcmM7XHJcblx0XHRcdC8vcmV0dXJuIHsndyc6dC53aWR0aCwgJ2gnOnQuaGVpZ2h0fTtcclxuXHRcdFx0Ly99LFxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0X29uTWFwTG9hZGVkOiBmdW5jdGlvbihjYilcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cclxuXHRcdFx0Ly9pZiggdGhpcy5tYXBMb2FkZWQgJiYgIXRoaXMuY29vcmRzTG9hZGVkICYmIHNlbGYubWFwSXNWaXNpYmxlKCkgIClcclxuXHRcdFx0Ly97XHJcblx0XHRcdC8vXHRzZWxmLl9yZWRyYXdDb29yZHMoKVxyXG5cclxuXHRcdFx0Ly9cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0Ly9cdGNvbnNvbGUubG9nKCcwMDAwJylcclxuXHRcdFx0Ly9cdHNlbGYuX29uTWFwTG9hZGVkKCBjYiApXHJcblx0XHRcdFx0Ly99LDEwKVxyXG5cdFx0XHQvL31cclxuXHRcdFx0Ly9lbHNlIGlmKHRoaXMubWFwTG9hZGVkICYmIHRoaXMuY29vcmRzTG9hZGVkKVxyXG5cdFx0XHRpZiggc2VsZi5tYXBJc1Zpc2libGUoKSApXHJcblx0XHRcdHtcclxuXHJcblx0XHRcdFx0c2VsZi5fb25JbWdMb2FkKCBzZWxmLmltYWdlLCBmdW5jdGlvbihpbWcpe1xyXG5cclxuXHRcdFx0XHRcdC8vaWYoc2VsZi5tYXBIaWRkZW4pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvL3NlbGYuX3JlZHJhd0Nvb3JkcygpXHJcblx0XHRcdFx0XHQvL3NlbGYubWFwSGlkZGVuID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Y2IoKVxyXG5cdFx0XHRcdFx0Ly9zZWxmLl9sb2FkTWFwKCk7XHJcblx0XHRcdFx0XHQvL3NlbGYuX2luaXRFdmVudHMoKTtcclxuXHJcblx0XHRcdFx0XHQvL3NlbGYuaW1hZ2VMb2FkZWQgPSB0cnVlXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0Ly9lbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCdQdWJsaWMgZnVuY3Rpb24gZGVuaWVkIC0gaGlkZGVuJylcclxuXHJcblx0XHRcdFx0Ly9zZWxmLl9vbkltZ0xvYWQoIHNlbGYuaW1hZ2UuYXR0cignc3JjJyksIGZ1bmN0aW9uKGltZyl7XHJcblx0XHRcdFx0Ly9pZiggc2VsZi5tYXBJc1Zpc2libGUoKSApXHJcblx0XHRcdFx0Ly9zZWxmLl9sb2FkTWFwKCk7XHJcblx0XHRcdFx0Ly99KVxyXG5cclxuXHRcdFx0XHQvL3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCcwMDAwJylcclxuXHRcdFx0XHQvL3NlbGYuX29uTWFwTG9hZGVkKCBjYiApXHJcblx0XHRcdFx0Ly99LDEwKVxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdH0sXHJcblxyXG5cclxuXHJcblxyXG5cdFx0X21hcG92ZXIgOiBmdW5jdGlvbiggYXJlYSwgc2VsZWN0ZWQsIGZpeGVkLCByZW1vdmVUZW1wICl7XHJcblxyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHJcblx0XHRcdHZhciBhcmVhX2lkID0gcGFyc2VJbnQoIGFyZWEuZGF0YSgnaWQnKSApXHJcblx0XHRcdGlmKCBpc05hTihhcmVhX2lkKSApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhcmVhX2lkID0gc2VsZi5fZ2V0UmFuZG9tSW50KDEsOTk5OTkpXHJcblx0XHRcdFx0YXJlYS5kYXRhKCdpZCcsIGFyZWFfaWQpXHJcblx0XHRcdFx0Ly9hbGVydChpZClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYocmVtb3ZlVGVtcClcclxuXHRcdFx0c2VsZi4kZWxlbS5maW5kKCdjYW52YXMudGVtcCcpLnJlbW92ZSgpXHJcblxyXG5cdFx0XHQvL2NJZCA9IHRoaXMuX2dldFJhbmRvbUludCgxLDYwMDAwKVxyXG5cclxuXHRcdFx0dmFyICRpbWcgPSBzZWxmLmltYWdlLFxyXG5cdFx0XHRcdCRiZ19maWxsID0gJGltZy5kYXRhKCdiZ19maWxsJyksXHJcblx0XHRcdFx0dyA9ICRpbWcud2lkdGgoKSxcclxuXHRcdFx0XHRoID0gJGltZy5oZWlnaHQoKSxcclxuXHRcdFx0XHRzaGFwZVNvcnQgPSBhcmVhLmF0dHIoJ3NoYXBlJyk7XHJcblx0XHRcdHZhclx0Y2FudmFzID0gJCgnPGNhbnZhcyBkYXRhLWlkPVwiJythcmVhX2lkKydcIiB3aWR0aD1cIicrdysnXCIgaGVpZ2h0PVwiJytoKydcIj48L2NhbnZhcz4nKTtcclxuXHRcdFx0XHQvLyRpbWcucGFyZW50KCkuYXBwZW5kKG1ha2VDYW52YXMpO1xyXG5cclxuXHJcblxyXG5cdFx0XHRcdC8vYWxlcnQoc2l6ZS5oIClcclxuXHRcdFx0XHQvL2NhbnZhcy53aWR0aCh3KVxyXG5cdFx0XHRcdC8vY2FudmFzLmhlaWdodChoKVxyXG5cclxuXHRcdFx0XHQkaW1nLnBhcmVudCgpLmFwcGVuZChjYW52YXMpO1xyXG5cdFx0XHRcdC8vJCgnYm9keScpLnByZXBlbmQoY2FudmFzKTtcclxuXHRcdFx0XHQvLyRpbWcucGFyZW50KCkuYXBwZW5kKCc8Y2FudmFzPmJsYWJsYWJsYTwvY2FudmFzPicpO1xyXG5cdFx0XHRcdC8vJGltZy5wYXJlbnQoKS5hcHBlbmQoJzw+Jyk7XHJcblxyXG5cdFx0XHRcdGlmKCFzZWxlY3RlZClcclxuXHRcdFx0XHRjYW52YXMuYWRkQ2xhc3MoJ3RlbXAnKVxyXG5cdFx0XHRcdC8vJCgnI2NhbicrY0lkKS5hZGRDbGFzcygndGVtcCcpXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGFyZWEuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuXHJcblx0XHRcdFx0aWYoZml4ZWQpXHJcblx0XHRcdFx0YXJlYS5hZGRDbGFzcygnZml4ZWQnKVxyXG5cclxuXHJcblx0XHRcdFx0Ly92YXIgaG1hcCA9ICQobWxBcmVhSUQpLmNsb3Nlc3QoJy5obWFwJylcclxuXHRcdFx0XHQvL3RoaXMuJGVsZW0uZmluZCgnLnRhcmVhJyt0YXJlYV9pZCsnIC50dGl0bGUnKS5hZGRDbGFzcygnaG92ZXJlZCcpXHJcblx0XHRcdFx0dmFyIGJnX2ZpbGwgPSBzZWxmLiRlbGVtLmZpbmQoJy5maWxsJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJylcclxuXHRcdFx0XHR2YXIgYmdfb3BhY2l0eSA9IHNlbGYuJGVsZW0uZmluZCgnLmZpbGwnKS5jc3MoJ29wYWNpdHknKVxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coIGJnX29wYWNpdHkgKVxyXG5cdFx0XHRcdC8vYWxlcnQoYXJlYSlcclxuXHRcdFx0XHQvL3NlbGYuJGVsZW0uY3NzKHsnd2lkdGgnOidhdXRvJywnaGVpZ2h0JzonYXV0bycsfSlcclxuXHJcblx0XHRcdFx0Ly92YXIgbyA9IHNlbGYuJGVsZW0ub2Zmc2V0KCk7XHJcblx0XHRcdFx0Ly92YXIgeCA9IHNlbGYuJGVsZW0ucG9zaXRpb24oKTtcclxuXHRcdFx0XHQvL2FsZXJ0KG8udG9wKVxyXG5cdFx0XHRcdC8vYWxlcnQoeC50b3ApXHJcblx0XHRcdFx0Ly9hbGVydChcIlRvcDogXCIgKyB4LnRvcCArIFwiIExlZnQ6IFwiICsgeC5sZWZ0KTtcclxuXHJcblx0XHQvKlxyXG5cdFx0ICpcclxuXHRcdCAqIHBvaW50ZXItZXZlbnRzOm5vbmUgbWFrZXMgY2FudmFzIGxheWVyIGludmlzaWJsZSB0byBtb3VzZSBldmVudHMgaW4gbW9zdCBtb2Rlcm4gYnJvd3NlcnNcclxuXHRcdCAqIGFsbG93aW5nIG1hcCBhcmVhIHRvIHN0aWxsIGJlIGNsaWNrYWJsZSB0aHJvdWdoIHRoZSBjYW52YXMgbGF5ZXIuXHJcblx0XHQgKiBGb3IgSUUgYnJvd3NlcnMgbGVzcyB0aGFuIDExIHRoZSBoaWdobGlnaHRpbmcgaXMgZGlzYWJsZWQgaW4gRHJhd0l0IGZ1bmN0aW9uLlxyXG5cdFx0ICpcclxuXHRcdCAqL1xyXG5cdFx0XHRcdC8vY2FudmFzLnBhcmVudCgpLmNzcyh7J3Bvc2l0aW9uJzoncmVsYXRpdmUnfSlcclxuXHRcdFx0XHRjYW52YXMuY3NzKHtcclxuXHRcdFx0XHRcdFx0J3dpZHRoJzogdysncHgnLFxyXG5cdFx0XHRcdFx0XHQnaGVpZ2h0JzogaCsncHgnLFxyXG5cdFx0XHRcdFx0XHQnZGlzcGxheSc6ICdibG9jaycsXHJcblx0XHRcdFx0XHRcdCdwb3NpdGlvbic6J2Fic29sdXRlJyxcclxuXHRcdFx0XHRcdFx0J3RvcCc6ICcwcHgnLFxyXG5cdFx0XHRcdFx0XHQnbGVmdCc6ICcwcHgnLFxyXG5cdFx0XHRcdFx0XHQncG9pbnRlci1ldmVudHMnOidub25lJyxcclxuXHRcdFx0XHRcdFx0Ly8nei1pbmRleCc6Jzk5OTknXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHQvL3Zhclx0JGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW4nK2NJZCksXHJcblx0XHRcdHZhclx0JGNhbnZhcyA9IGNhbnZhc1swXSxcclxuXHRcdFx0XHRjb250ZXh0ID0gJGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cdFx0XHRcdC8vIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsICRjYW52YXMud2lkdGgsICRjYW52YXMuaGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0Ly8kY2FudmFzLndpZHRoID0gdztcclxuXHRcdFx0XHQvLyRjYW52YXMuaGVpZ2h0ID0gaDtcclxuXHRcdFx0XHR2YXIgY294LGNveVxyXG5cdFx0XHRcdHZhclx0Y29vcmRzID0gYXJlYS5hdHRyKCdjb29yZHMnKS5zcGxpdCgnLCcpLFxyXG5cdFx0XHRcdFx0Y294ID0gW107XHJcblx0XHRcdFx0XHRjb3kgPSBbXTtcclxuXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYoaSAlIDIgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y294LnB1c2goY29vcmRzW2ldKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb3kucHVzaChjb29yZHNbaV0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vYWxlcnQoY29vcmRzKVxyXG5cdFx0LyogU2hhcGUgY29vcmRpbmF0ZSBhcHBvcnRpb25pbmcgKi9cclxuXHJcblx0XHRcdHZhciBzaG93Q2FudmFzID0gdHJ1ZVxyXG5cdFx0XHR2YXIgYXJlYV9pbWcgPSBhcmVhLmRhdGEoJ2ltZycpO1xyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0dmFyIG1haW5JbWdTcmMgPSBzZWxmLmltYWdlLmF0dHIoJ3NyYycpXHJcblxyXG5cclxuXHRcdFx0Ly9hbGVydChzZWxmLmltYWdlLmF0dHIoJ3NyYycpKVxyXG5cclxuXHRcdFx0Ly9zZWxmLm9uSW1nTG9hZChtYWluSW1nU3JjLCBmdW5jdGlvbihpbSl7XHJcblxyXG5cclxuXHRcdFx0aWYoYXJlYV9pbWcgJiYgc2hhcGVTb3J0ID09ICdwb2x5JylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNob3dDYW52YXMgPSBmYWxzZVxyXG5cdFx0XHRcdC8vYXJlYV9pbWcgPSBiYXNlX3VybCthcmVhX2ltZztcclxuXHJcblx0XHRcdFx0c2VsZi5fb25JbWdMb2FkKGFyZWFfaW1nLCBmdW5jdGlvbihpbWcpe1xyXG5cclxuXHRcdFx0XHRcdHZhciBtaW5feCA9IE1hdGgubWluLmFwcGx5KG51bGwsIGNveCk7XHJcblx0XHRcdFx0XHR2YXIgbWluX3kgPSBNYXRoLm1pbi5hcHBseShudWxsLCBjb3kpO1xyXG5cdFx0XHRcdFx0dmFyIG1heF94ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgY294KTtcclxuXHRcdFx0XHRcdHZhciBtYXhfeSA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGNveSk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGZfdyA9IG1heF94IC0gbWluX3hcclxuXHRcdFx0XHRcdHZhciBmX2ggPSBtYXhfeSAtIG1pbl95XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKGZfdytcIiBcIitmX2gpXHJcblxyXG5cdFx0XHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoaW1nLG1pbl94LG1pbl95LCBmX3csIGZfaCk7XHJcblx0XHRcdFx0XHRjYW52YXMuaGlkZSgpLmZhZGVJbiggc2VsZi5jb25maWcuZmFkZVRpbWUgKVxyXG5cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHJcblx0XHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBzZWxmLmNvbmZpZy5maWxsQ29sb3I7XHJcblx0XHRcdFx0Y29udGV4dC5saW5lV2lkdGggPSBzZWxmLmNvbmZpZy5zdHJva2VXaWR0aDtcclxuXHRcdFx0XHRjb250ZXh0LnN0cm9rZVN0eWxlID0gc2VsZi5jb25maWcuc3Ryb2tlQ29sb3I7XHJcblx0XHRcdFx0Y29udGV4dC5nbG9iYWxBbHBoYSA9IHNlbGYuY29uZmlnLmZpbGxPcGFjaXR5XHJcblxyXG5cdFx0XHRcdGlmKHNoYXBlU29ydCA9PSAncmVjdCcpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29udGV4dC5maWxsUmVjdChjb3hbMF0sY295WzBdLGNveFsxXS1jb3hbMF0sY295WzFdLWNveVswXSk7XHJcblxyXG5cdFx0XHRcdFx0aWYoc2VsZi5jb25maWcuc3Ryb2tlV2lkdGggPiAwKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5zdHJva2VSZWN0KGNveFswXSxjb3lbMF0sY294WzFdLWNveFswXSxjb3lbMV0tY295WzBdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoc2hhcGVTb3J0ID09ICdwb2x5JyApXHJcblx0XHRcdFx0XHR7XHJcblxyXG5cdFx0XHRcdFx0XHRjb250ZXh0Lm1vdmVUbyhjb3hbMF0sY295WzBdKTtcclxuXHRcdFx0XHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGNveC5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRleHQubGluZVRvKGNveFtqXSxjb3lbal0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y29udGV4dC5jbG9zZVBhdGgoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYoc2hhcGVTb3J0ID09ICdjaXJjbGUnKVxyXG5cdFx0XHRcdFx0e1xyXG5cclxuXHRcdFx0XHRcdFx0Y29udGV4dC5hcmMoY294WzBdLGNveVswXSxjb3hbMV0sMCxNYXRoLlBJKjIsdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdC8vY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgnK01hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyNTUpICsgMSkrJywnK01hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyNTUpICsgMSkrJywnK01hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMSkrJywwLjMpJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZihzZWxmLmNvbmZpZy5maWxsQ29sb3IpXHJcblx0XHRcdFx0XHRjb250ZXh0LmZpbGwoKTtcclxuXHRcdFx0XHRcdGlmKHNlbGYuY29uZmlnLnN0cm9rZVdpZHRoID4gMClcclxuXHRcdFx0XHRcdGNvbnRleHQuc3Ryb2tlKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRcdGlmKHNob3dDYW52YXMpXHJcblx0XHRcdFx0Y2FudmFzLmhpZGUoKS5mYWRlSW4oIHNlbGYuY29uZmlnLmZhZGVUaW1lIClcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly99KVxyXG5cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdF9zZWxlY3RBcmVhOiBmdW5jdGlvbiggaWQsIGZpeGVkLCBzaG93Q2FudmFzIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cdFx0XHRpZCA9IHBhcnNlSW50KCBpZCApXHJcblxyXG5cdFx0XHR2YXIgZWwgPSBzZWxmLiRlbGVtLmZpbmQoXCJhcmVhW2RhdGEtaWQ9J1wiK2lkK1wiJ11cIilcclxuXHRcdFx0dmFyIHNlbGVjdGVkID0gZWwuaGFzQ2xhc3MoJ3NlbGVjdGVkJylcclxuXHRcdFx0dmFyIGNudiA9IHNlbGYuJGVsZW0uZmluZCgnY2FudmFzW2RhdGEtaWQ9XCInK2lkKydcIl0nKVxyXG5cclxuXHJcblx0XHRcdC8vYWxlcnQoc2VsZi5tYXBIaWRkZW4pXHJcblx0XHRcdGlmKCBzZWxmLm1hcElzVmlzaWJsZSgpIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNlbGYuX3JlbG9hZEFyZWFzSWZIaWRkZW4oKVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0c2VsZi5tYXBIaWRkZW4gPSB0cnVlXHJcblxyXG5cdFx0XHQvL3tcclxuXHRcdFx0Ly9jb25zb2xlLmxvZygnSUQgJytpZCsnIG5lbW96ZW0gdnlicmF0LCBtYXBhIG5pZSBqZSB2aWRpdGVsbmEhJylcclxuXHRcdFx0Ly9yZXR1cm4gZmFsc2U7XHJcblx0XHRcdC8vfVxyXG5cclxuXHRcdFx0aWYoc2VsZWN0ZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0lEICcraWQrJyBqZSB1eiB2eWJyYW5lIScpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoZml4ZWQgIT09IHRydWUpXHJcblx0XHRcdGZpeGVkID0gZmFsc2VcclxuXHJcblx0XHRcdGlmKGVsLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzZWxmLiRlbGVtLmZpbmQoJ2NhbnZhc1tkYXRhLWlkPVwiJytpZCsnXCJdOmxhc3QnKS5yZW1vdmVDbGFzcygndGVtcCcpXHJcblx0XHRcdFx0ZWwuYWRkQ2xhc3MoJ3NlbGVjdGVkJylcclxuXHRcdFx0XHRjbnYucmVtb3ZlQ2xhc3MoJ3RlbXAnKVxyXG5cdFx0XHRcdHNlbGYuc2VsZWN0ZWRBcmVhcy5wdXNoKGlkKVxyXG5cdFx0XHRcdGlmKHNob3dDYW52YXMpXHJcblx0XHRcdFx0c2VsZi5fbWFwb3ZlciggZWwsIHRydWUsIGZpeGVkIClcclxuXHJcblx0XHRcdFx0c2VsZi5fZXZlbnRDYWxsYmFjaygnc2VsZWN0JywgZmFsc2UsIGVsIClcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdQbG9jaGEgcyBJRCAnK2lkKycgbmEgbWFwZSBuZWV4aXN0dWplIScpXHJcblx0XHR9LFxyXG5cclxuXHRcdF9kZXNlbGVjdEFyZWE6IGZ1bmN0aW9uKCBpZCwgaGlkZUNhbnZhcyApXHJcblx0XHR7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpc1xyXG5cclxuXHRcdFx0aWQgPSBwYXJzZUludCggaWQgKVxyXG5cclxuXHRcdFx0dmFyIGVsID0gc2VsZi4kZWxlbS5maW5kKFwiYXJlYVtkYXRhLWlkPSdcIitpZCtcIiddXCIpXHJcblx0XHRcdHZhciBjbnYgPSBzZWxmLiRlbGVtLmZpbmQoJ2NhbnZhc1tkYXRhLWlkPVwiJytpZCsnXCJdJylcclxuXHRcdFx0dmFyIHNlbGVjdGVkID0gZWwuaGFzQ2xhc3MoJ3NlbGVjdGVkJylcclxuXHRcdFx0dmFyIGZpeGVkID0gZWwuaGFzQ2xhc3MoJ2ZpeGVkJylcclxuXHJcblx0XHRcdGlmKCFzZWxlY3RlZCB8fCBmaXhlZClcclxuXHRcdFx0e1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCdJRCAnK2lkKycgamUgdXogenJ1c2VuZSEnKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vaWYoZml4ZWQgIT09IHRydWUpXHJcblx0XHRcdC8vZml4ZWQgPSBmYWxzZVxyXG5cclxuXHRcdFx0aWYoZWwubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNudi5hZGRDbGFzcygndGVtcCcpXHJcblxyXG5cdFx0XHRcdGlmKCBjbnYubGVuZ3RoID4gMSB8fCBoaWRlQ2FudmFzIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0c2VsZi4kZWxlbS5maW5kKCdjYW52YXNbZGF0YS1pZD1cIicraWQrJ1wiXTpsYXN0JykuZmFkZU91dCggc2VsZi5jb25maWcuZmFkZVRpbWUgKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbC5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKVxyXG5cclxuXHRcdFx0XHRzZWxmLl9yZW1vdmVJdGVtKCBzZWxmLnNlbGVjdGVkQXJlYXMsIGlkIClcclxuXHJcblx0XHRcdFx0c2VsZi5fZXZlbnRDYWxsYmFjayggJ2Rlc2VsZWN0JywgZmFsc2UsIGVsIClcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKCdQbG9jaGEgcyBJRCAnK2lkKycgbmEgbWFwZSBuZWV4aXN0dWplIScpXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRfc2VsZWN0QXJlYXM6IGZ1bmN0aW9uKCBvYmosIHNlYywgY2FsbGJhY2sgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHRcdFx0dmFyIHNlY19pbml0ID0gc2VjXHJcblx0XHRcdHZhciBsZW5ndGg9b2JqLmxlbmd0aFxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gZG9TZXRUaW1lb3V0KGksaWQsZml4ZWQpIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNlbGYuX3NlbGVjdEFyZWEoaWQsZml4ZWQsdHJ1ZSlcclxuXHRcdFx0XHRzZWxmLl9kb0NhbGxiYWNrKGksbGVuZ3RoLHNlYyxjYWxsYmFjaylcclxuXHRcdFx0XHR9LCBzZWNfaW5pdCk7XHJcblx0XHRcdFx0c2VjX2luaXQgKz0gc2VjXHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdC8vY29uc29sZS5sb2coJ2wtICcrb2JqLmxlbmd0aClcclxuXHRcdFx0Zm9yKHZhciBpPTA7IGk8bGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgaWQgPSBwYXJzZUludChvYmpbaV0uaWQpXHJcblx0XHRcdFx0dmFyIGZpeGVkID0gKG9ialtpXS5maXhlZCA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZSApXHJcblx0XHRcdFx0Ly92YXIgZml4ZWQgPSB2YWwuZml4ZWRcclxuXHRcdFx0XHQvL2FsZXJ0KGlkKVxyXG5cdFx0XHRcdC8vdmFyIGlzTGFzdCA9ICAoaSA9PSBsZW5ndGgtMSlcclxuXHRcdFx0XHQvL2FsZXJ0KGlkICsgJyBpcyBsYXN0JylcclxuXHRcdFx0XHRpZihzZWMpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0ZG9TZXRUaW1lb3V0KGksaWQsZml4ZWQpXHJcblx0XHRcdFx0XHQvL3NldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnc3Nzc3NzJylcclxuXHRcdFx0XHRcdC8vaWYoaXNMYXN0KVxyXG5cdFx0XHRcdFx0Ly9jYWxsYmFjaygpXHJcblx0XHRcdFx0XHQvL30sIHNlY19pbml0KVxyXG5cdFx0XHRcdFx0Ly9zZWNfaW5pdCArPSBzZWNcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNlbGYuX3NlbGVjdEFyZWEoaWQsZml4ZWQsdHJ1ZSlcclxuXHRcdFx0XHRcdHNlbGYuX2RvQ2FsbGJhY2soaSxsZW5ndGgsc2VjLGNhbGxiYWNrKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyQuZWFjaCggb2JqLCBmdW5jdGlvbihrZXksIHZhbCl7XHJcblx0XHRcdFx0Ly92YXIgaWQgPSBwYXJzZUludChrZXkpXHJcblx0XHRcdFx0Ly92YXIgZml4ZWQgPSB2YWwuZml4ZWRcclxuXHRcdFx0XHQvL2FsZXJ0KHZhbClcclxuXHJcblxyXG5cdFx0XHQvL30pXHJcblx0XHR9LFxyXG5cclxuXHRcdF9kb0NhbGxiYWNrOiBmdW5jdGlvbihpLGxlbmd0aCxzZWMsY2FsbGJhY2spIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblx0XHRcdGlmKCBpID09PSBsZW5ndGgtMSAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZihzZWM+MClcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y2FsbGJhY2soIHNlbGYubWFwLCBzZWxmLnNlbGVjdGVkQXJlYXMgKVxyXG5cdFx0XHRcdH0sIHNlYylcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0Y2FsbGJhY2soIHNlbGYubWFwLCBzZWxmLnNlbGVjdGVkQXJlYXMgKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9kZXNlbGVjdEFyZWFzOiBmdW5jdGlvbiggb2JqLCBzZWMsIGNhbGxiYWNrIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblx0XHRcdHZhciBzZWNfaW5pdCA9IHNlY1xyXG5cdFx0XHR2YXIgbGVuZ3RoPW9iai5sZW5ndGhcclxuXHJcblxyXG5cdFx0XHRmdW5jdGlvbiBkb1NldFRpbWVvdXQoaSxpZCkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2VsZi5fZGVzZWxlY3RBcmVhKCBpZCwgdHJ1ZSApXHJcblx0XHRcdFx0c2VsZi5fZG9DYWxsYmFjayhpLGxlbmd0aCxzZWMsY2FsbGJhY2spXHJcblx0XHRcdFx0fSwgc2VjX2luaXQpO1xyXG5cdFx0XHRcdHNlY19pbml0ICs9IHNlY1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8kLmVhY2goIG9iaiwgZnVuY3Rpb24oa2V5LCB2YWwpe1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpPTA7IGk8bGVuZ3RoOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgaWQgPSBwYXJzZUludChvYmpbaV0uaWQpXHJcblx0XHRcdFx0Ly92YXIgZml4ZWQgPSAob2JqW2ldLmZpeGVkID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlIClcclxuXHJcblx0XHRcdFx0Ly92YXIgaWQgPSBwYXJzZUludChrZXkpXHJcblx0XHRcdFx0Ly92YXIgZml4ZWQgPSB2YWwuZml4ZWRcclxuXHJcblx0XHRcdFx0aWYoc2VjKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRvU2V0VGltZW91dChpLGlkKVxyXG5cclxuXHRcdFx0XHRcdC8vc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0Ly9zZWxmLl9zZWxlY3RBcmVhKGlkLGZpeGVkLHRydWUpXHJcblx0XHRcdFx0XHQvL3NlbGYuX2Rlc2VsZWN0QXJlYSggaWQsIHRydWUgKVxyXG5cdFx0XHRcdFx0Ly99LCBzZWNfaW5pdClcclxuXHRcdFx0XHRcdC8vc2VjX2luaXQgKz0gc2VjXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzZWxmLl9kZXNlbGVjdEFyZWEoIGlkLCB0cnVlIClcclxuXHRcdFx0XHRcdHNlbGYuX2RvQ2FsbGJhY2soaSxsZW5ndGgsc2VjLGNhbGxiYWNrKVxyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHJcblxyXG5cdFx0aXNTZWxlY3RlZDogZnVuY3Rpb24oIGlkIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cdFx0XHRpZiAoIHNlbGYuX2luQXJyYXkoIHNlbGYuc2VsZWN0ZWRBcmVhcywgaWQpIClcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fSxcclxuXHJcblx0XHRpc0ZpeGVkOiBmdW5jdGlvbiggaWQgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHRcdFx0dmFyIGVsID0gc2VsZi4kZWxlbS5maW5kKFwiYXJlYVtkYXRhLWlkPSdcIitpZCtcIiddXCIpXHJcblxyXG5cdFx0XHRpZiAoIGVsLmhhc0NsYXNzKCdmaXhlZCcpIClcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRTZWxlY3RlZDogZnVuY3Rpb24oIClcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRBcmVhcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0QWxsOiBmdW5jdGlvbiggKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHRcdFx0dmFyIGlkcyA9IFtdXHJcblxyXG5cdFx0XHRzZWxmLiRlbGVtLmZpbmQoJ2FyZWEnKS5lYWNoKCAgZnVuY3Rpb24oa2V5LCB2YWwpe1xyXG5cdFx0XHRcdHZhciBlbCA9ICQodGhpcylcclxuXHRcdFx0XHR2YXIgaWQgPSBwYXJzZUludCggZWwuZGF0YSgnaWQnKSApXHJcblx0XHRcdFx0Ly92YXIgZml4ZWQgPSB2YWwuZml4ZWRcclxuXHRcdFx0XHQvL2FsZXJ0KHZhbClcclxuXHRcdFx0XHRpZHMucHVzaCggeydpZCc6aWR9IClcclxuXHRcdFx0XHQvL2lkc1tpZF0gPSB7fVxyXG5cdFx0XHRcdC8vc2VsZi5fc2VsZWN0QXJlYShpZCxmaXhlZCx0cnVlKVxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0cmV0dXJuIGlkcztcclxuXHRcdH0sXHJcblxyXG5cclxuXHJcblxyXG5cdFx0c2VsZWN0T25lOiBmdW5jdGlvbiggaWQsIGZpeGVkIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cdFx0XHRzZWxmLl9vbk1hcExvYWRlZCggZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0c2VsZi5fc2VsZWN0QXJlYShpZCxmaXhlZCx0cnVlKVxyXG5cdFx0XHR9KVxyXG5cclxuXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzZWxlY3RBbGw6IGZ1bmN0aW9uKCBzZWMsIGNhbGxiYWNrIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cdFx0XHR2YXIgb2JqID0gc2VsZi5nZXRBbGwoKVxyXG5cdFx0XHQvL2FsZXJ0KG9iailcclxuXHRcdFx0c2VsZi5zZWxlY3RNYW55KCBvYmosIHNlYywgY2FsbGJhY2sgKVxyXG5cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdGRlc2VsZWN0QWxsOiBmdW5jdGlvbiggc2VjLCBjYWxsYmFjayApXHJcblx0XHR7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpc1xyXG5cclxuXHRcdFx0dmFyIG9iaiA9IHNlbGYuZ2V0QWxsKClcclxuXHRcdFx0Ly9hbGVydChvYmopXHJcblx0XHRcdHNlbGYuZGVzZWxlY3QoIG9iaiwgc2VjLCBjYWxsYmFjayApXHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRzZWxlY3RNYW55OiBmdW5jdGlvbiggb2JqLCBzZWMsIGNhbGxiYWNrIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblxyXG5cclxuXHJcblx0XHRcdHNlbGYuX29uTWFwTG9hZGVkKCBmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHRzZWxmLl9zZWxlY3RBcmVhcyhvYmosIHNlYywgY2FsbGJhY2spXHJcblxyXG5cdFx0XHRcdC8vY2FsbGJhY2soKVxyXG5cdFx0XHR9KVxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0Ly9hbGVydChldmVudClcclxuXHRcdFx0Ly9hbGVydChpZClcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVzZWxlY3Q6IGZ1bmN0aW9uKCBvYmosIHNlYywgY2FsbGJhY2sgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHRcdFx0c2VsZi5fZGVzZWxlY3RBcmVhcyhvYmosIHNlYywgY2FsbGJhY2spXHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZUZpeGVkOiBmdW5jdGlvbiggb2JqIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzXHJcblx0XHRcdC8vc2VsZi5fZGVzZWxlY3RBcmVhcyhvYmosIHNlYywgY2FsbGJhY2spXHJcblx0XHRcdGZvcih2YXIgaT0wOyBpPG9iai5sZW5ndGg7IGkrKylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciBpZCA9IHBhcnNlSW50KCBvYmpbaV0uaWQgKVxyXG5cdFx0XHRcdHZhciBlbCA9IHNlbGYuJGVsZW0uZmluZChcImFyZWFbZGF0YS1pZD0nXCIraWQrXCInXVwiKVxyXG5cdFx0XHRcdHZhciBjbnYgPSBzZWxmLiRlbGVtLmZpbmQoJ2NhbnZhc1tkYXRhLWlkPVwiJytpZCsnXCJdJylcclxuXHRcdFx0XHRjbnYucmVtb3ZlKClcclxuXHRcdFx0XHRlbC5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnZml4ZWQnKVxyXG5cdFx0XHRcdHNlbGYuX3JlbW92ZUl0ZW0oIHNlbGYuc2VsZWN0ZWRBcmVhcywgaWQgKVxyXG5cclxuXHRcdFx0XHQvL2FsZXJ0KG9ialtpXS5pZClcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGNoYW5nZUNvbmZpZzogZnVuY3Rpb24oIGtleSwgdmFsdWUgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHRcdFx0c2VsZi5jb25maWdbIGtleSBdID0gdmFsdWVcclxuXHRcdH1cclxuXHJcblx0XHQvKlxyXG5cdFx0bWxEcmF3Q2FudmFzIDogZnVuY3Rpb24oKXtcclxuXHJcblx0XHQvL3ZhciBtbEltYWdlQ2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGltYWdlQ2xhc3MpWzBdLFxyXG5cdFx0dmFyICRpbWFnZSA9IHRoaXMuaW1hZ2UsXHJcblx0XHRcdC8vJGltYWdlID0gJChcIi5cIitpbWFnZUNsYXNzKSxcclxuXHRcdFx0XHR3ID0gJGltYWdlLndpZHRoKCksXHJcblx0XHRcdFx0aCA9ICRpbWFnZS5oZWlnaHQoKTtcclxuXHJcblx0XHRcdGlmKCRpbWFnZS5zaWJsaW5ncygnY2FudmFzJykpIHtcclxuXHRcdFx0XHRcdCRpbWFnZS5zaWJsaW5ncygnY2FudmFzJykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRtbEdldE1hcE5hbWUgPSAkaW1hZ2UuYXR0cigndXNlbWFwJykucmVwbGFjZSgnIycsJycpLFxyXG5cdFx0XHR0aGVNYXAgPSAkKCdtYXBbbmFtZT1cIicrbWxHZXRNYXBOYW1lKydcIl0nKS5hZGRDbGFzcygnbWxIaWdobGlnaHQnKSxcclxuXHRcdFx0d3JhcHBlZCA9ICQoJzxkaXYgaWQ9XCJ3cmFwJyttbEdldE1hcE5hbWUrJ2ltYWdlXCI+PC9kaXY+Jyk7XHJcblx0XHRcdC8vd3JhcHBlZCA9ICQoJzxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+PC9kaXY+Jyk7XHJcblxyXG5cdFx0XHRpZigkaW1hZ2UucGFyZW50KCcjd3JhcCcrbWxHZXRNYXBOYW1lKydpbWFnZScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdCRpbWFnZS51bndyYXAoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHQkaW1hZ2Uud3JhcCh3cmFwcGVkKTtcclxuXHJcblxyXG5cdFx0XHRcdFx0dmFyICR3cmFwID0gJCgnI3dyYXAnK21sR2V0TWFwTmFtZSsnaW1hZ2UnKTtcclxuXHJcblx0XHRcdFx0XHR2YXIgb3B0cyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdCdwb3NpdGlvbic6J3JlbGF0aXZlJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdtYXJnaW4nOicwIGF1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzonMCcsXHJcblx0XHRcdFx0XHRcdFx0XHQnd2lkdGgnOndcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKCR3cmFwLnBhcmVudCgpLndpZHRoKCkgPCAkaW1hZ2UuYXR0cignd2lkdGgnKSlcclxuXHRcdFx0XHRcdG9wdHMud2lkdGggPSAnYXV0bydcclxuXHJcblxyXG5cdFx0XHRcdFx0dGhpcy4kZWxlbS5jc3Mob3B0cyk7XHJcblxyXG5cclxuXHRcdHZhciBpbmRleCA9IDA7XHJcblx0XHQgLy9BZGRzIGZ1bmN0aW9uIGF0dHMgdG8gYWxsIGFyZWFzIG9uIGltYWdlIG1hcFxyXG5cdFx0XHR0aGVNYXAuY2hpbGRyZW4oJ2FyZWEnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblx0XHRcdFx0XHRpbmRleCsrO1xyXG5cdFx0XHRcdFx0JHRoaXMuYXR0cignaWQnLG1sR2V0TWFwTmFtZSsnYXJlYScraW5kZXgpO1xyXG5cdFx0XHRcdFx0Ly8gV29ybGQgTWFwIGFkZC1vbnMgLy9cclxuXHRcdFx0XHRcdCR0aGlzLmF0dHIoJ3RhcmdldCcsJ19ibGFuaycpO1xyXG5cdFx0XHRcdHZhclx0YXRUaXRsZSA9ICR0aGlzLmF0dHIoJ2FsdCcpO1xyXG5cdFx0XHRcdFx0Ly8kdGhpcy5hdHRyKCdocmVmJykgPyAkdGhpcy5hdHRyKCdocmVmJykgOiAkdGhpcy5hdHRyKCdocmVmJywgJ2h0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvJythdFRpdGxlKTtcclxuXHRcdFx0XHRcdCR0aGlzLmF0dHIoJ2hyZWYnKSA/ICR0aGlzLmF0dHIoJ2hyZWYnKSA6ICR0aGlzLmF0dHIoJ2hyZWYnLCAnJyk7XHJcblx0XHRcdFx0XHQvLyBFbmQgV29ybGQgTWFwIGFkZC1vbnMgLy9cclxuXHRcdFx0XHRcdCR0aGlzLmF0dHIoJ3RpdGxlJykgPyAkdGhpcy5hdHRyKCd0aXRsZScpIDogJHRoaXMuYXR0cigndGl0bGUnLGF0VGl0bGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vdmFyIGNiID0gJ21hcG92ZXIoJyskdGhpcy5hdHRyKCdpZCcpKycpOydcclxuXHRcdFx0XHRcdC8vJHRoaXMuYXR0cignb25tb3VzZW92ZXInLCdtYXBvdmVyKCcrJHRoaXMuYXR0cignaWQnKSsnKTsnKS5hdHRyKCdvbm1vdXNlb3V0JywnbWFwb3V0KCcrJHRoaXMuYXR0cignaWQnKSsnKTsnKTtcclxuXHRcdFx0XHRcdC8vJHRoaXMuYXR0cignb25tb3VzZW92ZXInLCBjYikuYXR0cignb25tb3VzZW91dCcpO1xyXG5cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHJcblx0XHRcdC8vdmFyIGEgPSB0aGVNYXAuY2hpbGRyZW4oJ2FyZWE6Zmlyc3QnKVxyXG5cdFx0XHQvL3ZhciBiID0gdGhlTWFwLmNoaWxkcmVuKCdhcmVhOmxhc3QnKVxyXG5cclxuXHRcdFx0Ly9iLm1vdXNlb3ZlcigpOyBtb3VzZW92ZXJcclxuXHJcblxyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHJcblx0fVxyXG5cclxuICAgIC8vIFlvdSBkb24ndCBuZWVkIHRvIGNoYW5nZSBzb21ldGhpbmcgYmVsb3c6XHJcbiAgICAvLyBBIHJlYWxseSBsaWdodHdlaWdodCBwbHVnaW4gd3JhcHBlciBhcm91bmQgdGhlIGNvbnN0cnVjdG9yLFxyXG4gICAgLy8gcHJldmVudGluZyBhZ2FpbnN0IG11bHRpcGxlIGluc3RhbnRpYXRpb25zIGFuZCBhbGxvd2luZyBhbnlcclxuICAgIC8vIHB1YmxpYyBmdW5jdGlvbiAoaWUuIGEgZnVuY3Rpb24gd2hvc2UgbmFtZSBkb2Vzbid0IHN0YXJ0XHJcbiAgICAvLyB3aXRoIGFuIHVuZGVyc2NvcmUpIHRvIGJlIGNhbGxlZCB2aWEgdGhlIGpRdWVyeSBwbHVnaW4sXHJcbiAgICAvLyBlLmcuICQoZWxlbWVudCkuZGVmYXVsdFBsdWdpbk5hbWUoJ2Z1bmN0aW9uTmFtZScsIGFyZzEsIGFyZzIpXHJcbiAgICAkLmZuW3BsdWdpbk5hbWVdID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xyXG5cclxuICAgICAgICAvLyBJcyB0aGUgZmlyc3QgcGFyYW1ldGVyIGFuIG9iamVjdCAob3B0aW9ucyksIG9yIHdhcyBvbWl0dGVkLFxyXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBwbHVnaW4uXHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT25seSBhbGxvdyB0aGUgcGx1Z2luIHRvIGJlIGluc3RhbnRpYXRlZCBvbmNlLFxyXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgY2hlY2sgdGhhdCB0aGUgZWxlbWVudCBoYXMgbm8gcGx1Z2luIGluc3RhbnRpYXRpb24geWV0XHJcbiAgICAgICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAncGx1Z2luXycgKyBwbHVnaW5OYW1lKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCBoYXMgbm8gaW5zdGFuY2UsIGNyZWF0ZSBhIG5ldyBvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBvcHRpb25zIHRvIG91ciBwbHVnaW4gY29uc3RydWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHN0b3JlIHRoZSBwbHVnaW4gaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZWxlbWVudHMgalF1ZXJ5IGRhdGEgb2JqZWN0LlxyXG4gICAgICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAncGx1Z2luXycgKyBwbHVnaW5OYW1lLCBuZXcgbWFwb2lkUGx1Z2luKCB0aGlzLCBvcHRpb25zICkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IHBhcmFtZXRlciBpcyBhIHN0cmluZyBhbmQgaXQgZG9lc24ndCBzdGFydFxyXG4gICAgICAgIC8vIHdpdGggYW4gdW5kZXJzY29yZSBvciBcImNvbnRhaW5zXCIgdGhlIGBpbml0YC1mdW5jdGlvbixcclxuICAgICAgICAvLyB0cmVhdCB0aGlzIGFzIGEgY2FsbCB0byBhIHB1YmxpYyBtZXRob2QuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9uc1swXSAhPT0gJ18nICYmIG9wdGlvbnMgIT09ICdpbml0Jykge1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIG1ldGhvZCBjYWxsXHJcbiAgICAgICAgICAgIC8vIHRvIG1ha2UgaXQgcG9zc2libGVcclxuICAgICAgICAgICAgLy8gdG8gcmV0dXJuIGEgdmFsdWVcclxuICAgICAgICAgICAgdmFyIHJldHVybnM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gJC5kYXRhKHRoaXMsICdwbHVnaW5fJyArIHBsdWdpbk5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRlc3RzIHRoYXQgdGhlcmUncyBhbHJlYWR5IGEgcGx1Z2luLWluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgY2hlY2tzIHRoYXQgdGhlIHJlcXVlc3RlZCBwdWJsaWMgbWV0aG9kIGV4aXN0c1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgbWFwb2lkUGx1Z2luICYmIHR5cGVvZiBpbnN0YW5jZVtvcHRpb25zXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFx0Ly9hbGVydCggb3B0aW9ucyApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCB0aGUgbWV0aG9kIG9mIG91ciBwbHVnaW4gaW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHBhc3MgaXQgdGhlIHN1cHBsaWVkIGFyZ3VtZW50cy5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5zID0gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoIGluc3RhbmNlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJncywgMSApICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWxsb3cgaW5zdGFuY2VzIHRvIGJlIGRlc3Ryb3llZCB2aWEgdGhlICdkZXN0cm95JyBtZXRob2RcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zID09PSAnZGVzdHJveScpIHtcclxuICAgICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdwbHVnaW5fJyArIHBsdWdpbk5hbWUsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBlYXJsaWVyIGNhY2hlZCBtZXRob2RcclxuICAgICAgICAgICAgLy8gZ2l2ZXMgYSB2YWx1ZSBiYWNrIHJldHVybiB0aGUgdmFsdWUsXHJcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSByZXR1cm4gdGhpcyB0byBwcmVzZXJ2ZSBjaGFpbmFiaWxpdHkuXHJcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5zICE9PSB1bmRlZmluZWQgPyByZXR1cm5zIDogdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxufShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9saWJzL21hcG9pZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=