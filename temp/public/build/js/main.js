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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/calendar_editor.js":
/*!**************************************!*\
  !*** ./assets/js/calendar_editor.js ***!
  \**************************************/
/*! exports provided: check_cell_status, fill_busyness */
/*! exports used: check_cell_status, fill_busyness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = check_cell_status;
/* harmony export (immutable) */ __webpack_exports__["b"] = fill_busyness;
function check_cell_status(obj) {
    if (obj.busy) {
        return "busy";
    } else {
        return "free";
    }
}

function fill_busyness(fill_obj, calendar) {
    for (var sector_key in calendar.sectors) {
        if (sector_key == fill_obj.sector) {
            for (var i = 0; i < calendar.sectors[sector_key].first_month.length; i++) {
                if (sector_key == fill_obj.sector && fill_obj.month == calendar.sectors[sector_key].first_month[i].month && fill_obj.day == calendar.sectors[sector_key].first_month[i].day) {
                    calendar.sectors[sector_key].first_month[i].busy = fill_obj.busy;
                }
            }
            for (var _i = 0; _i < calendar.sectors[sector_key].second_month.length; _i++) {
                if (sector_key == fill_obj.sector && fill_obj.month == calendar.sectors[sector_key].second_month[_i].month && fill_obj.day == calendar.sectors[sector_key].second_month[_i].day) {
                    calendar.sectors[sector_key].second_month[_i].busy = fill_obj.busy;
                }
            }
        }
    }
}

/***/ }),

/***/ "./assets/js/class/Calendar.js":
/*!*************************************!*\
  !*** ./assets/js/class/Calendar.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Calendar = function () {
    function Calendar() {
        _classCallCheck(this, Calendar);

        this.max_days_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.sector_months = this.get_sector_months();
        this.sectors = {};
    }

    _createClass(Calendar, [{
        key: 'get_sector_months',
        value: function get_sector_months() {
            var d = new Date();

            var currentDate = {
                year: d.getFullYear(),
                month: d.getMonth(),
                day: d.getDate()
            };
            var daysDiff = currentDate.day - 30;

            var firstMonth = {
                'month': currentDate.month + 1,
                'start_day': currentDate.day,
                'end_day': this.max_days_of_month[currentDate.month]
            };

            var secondMonth = {
                'month': currentDate.month + 2,
                'start_day': 1,
                'end_day': this.max_days_of_month[currentDate.month + 1] + daysDiff - 2
            };

            return this.sector_months = {
                'first_month': firstMonth,
                'second_month': secondMonth
            };
        }
    }, {
        key: 'create_sectors',
        value: function create_sectors() {
            var sector_obj = {
                'first': {
                    'name': "",
                    'first_month': [],
                    'second_month': []
                },
                'second': {
                    'name': "",
                    'first_month': [],
                    'second_month': []
                },
                'third': {
                    'name': "",
                    'first_month': [],
                    'second_month': []
                },
                'fourth': {
                    'name': "",
                    'first_month': [],
                    'second_month': []
                },
                'fifth': {
                    'name': "",
                    'first_month': [],
                    'second_month': []
                },
                'sixth': {
                    'name': "",
                    'first_month': [],
                    'second_month': []
                },
                'seventh': {
                    'name': "",
                    'first_month': [],
                    'second_month': []
                }
            };

            sector_obj.first.name = "Pirmas sektorius";
            sector_obj.second.name = "Antras sektorius";
            sector_obj.third.name = "Trecias sektorius";
            sector_obj.fourth.name = "Ketvirtas sektorius";
            sector_obj.fifth.name = "Penktas sektorius";
            sector_obj.sixth.name = "Sestas sektorius";
            sector_obj.seventh.name = "Septintas sektorius";

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(sector_obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sector_key = _step.value;

                    for (var i = this.sector_months.first_month.start_day; i <= this.sector_months.first_month.end_day; i++) {
                        sector_obj[sector_key].first_month.push({ 'day': i,
                            'month': this.sector_months.first_month.month,
                            'busy': false,
                            'start_from_8': false,
                            'start_from_20': false,
                            'registered_to': "" });
                    }
                    for (var _i = this.sector_months.second_month.start_day; _i <= this.sector_months.second_month.end_day; _i++) {
                        sector_obj[sector_key].second_month.push({ 'day': _i,
                            'month': this.sector_months.second_month.month,
                            'busy': false,
                            'start_from_8': false,
                            'start_from_20': false,
                            'registered_to': "" });
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.sectors = sector_obj;
        }
    }]);

    return Calendar;
}();

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_Calendar_js__ = __webpack_require__(/*! ./class/Calendar.js */ "./assets/js/class/Calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_editor_js__ = __webpack_require__(/*! ./calendar_editor.js */ "./assets/js/calendar_editor.js");



var calendar = new __WEBPACK_IMPORTED_MODULE_0__class_Calendar_js__["a" /* default */]();
calendar.create_sectors();
console.log(calendar);

var busy_date = {
    'sector': 'third',
    'month': 12,
    'day': 15,
    'busy': true
};

Object(__WEBPACK_IMPORTED_MODULE_1__calendar_editor_js__["b" /* fill_busyness */])(busy_date, calendar);

for (var i = 0; i < calendar.sectors.first.first_month.length; i++) {
    $('.table_head_row').append('<th class="table_head_cell">' + calendar.sectors.first.first_month[i].day + '</th>');
}

for (var _i = 0; _i < calendar.sectors.first.second_month.length; _i++) {
    $('.table_head_row').append('<th class="table_head_cell">' + calendar.sectors.first.second_month[_i].day + '</th>');
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = Object.keys(calendar.sectors)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var sectors_key = _step.value;


        //appending sector name
        $('.calendar_table').append('<tr class="sectors" id="' + sectors_key + '">' + '<td class="sectors_cell">' + calendar.sectors[sectors_key].name + '</td>' + '</tr>');
        //appending first month
        for (var _i2 = 0; _i2 < calendar.sectors[sectors_key].first_month.length; _i2++) {
            $('#' + sectors_key).append('<td class="sectors_day_cell ' + Object(__WEBPACK_IMPORTED_MODULE_1__calendar_editor_js__["a" /* check_cell_status */])(calendar.sectors[sectors_key].first_month[_i2]) + '"></td>');
        }
        //appending second month
        for (var _i3 = 0; _i3 < calendar.sectors[sectors_key].second_month.length; _i3++) {
            $('#' + sectors_key).append('<td class="sectors_day_cell ' + Object(__WEBPACK_IMPORTED_MODULE_1__calendar_editor_js__["a" /* check_cell_status */])(calendar.sectors[sectors_key].second_month[_i3]) + '"></td>');
        }
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTExMjc5YjUyZGQ5MjdjNzZkNWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhbGVuZGFyX2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvQ2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOlsiY2hlY2tfY2VsbF9zdGF0dXMiLCJvYmoiLCJidXN5IiwiZmlsbF9idXN5bmVzcyIsImZpbGxfb2JqIiwiY2FsZW5kYXIiLCJzZWN0b3Jfa2V5Iiwic2VjdG9ycyIsInNlY3RvciIsImkiLCJmaXJzdF9tb250aCIsImxlbmd0aCIsIm1vbnRoIiwiZGF5Iiwic2Vjb25kX21vbnRoIiwiQ2FsZW5kYXIiLCJtYXhfZGF5c19vZl9tb250aCIsInNlY3Rvcl9tb250aHMiLCJnZXRfc2VjdG9yX21vbnRocyIsImQiLCJEYXRlIiwiY3VycmVudERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJkYXlzRGlmZiIsImZpcnN0TW9udGgiLCJzZWNvbmRNb250aCIsInNlY3Rvcl9vYmoiLCJmaXJzdCIsIm5hbWUiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwic2l4dGgiLCJzZXZlbnRoIiwiT2JqZWN0Iiwia2V5cyIsInN0YXJ0X2RheSIsImVuZF9kYXkiLCJwdXNoIiwiY3JlYXRlX3NlY3RvcnMiLCJjb25zb2xlIiwibG9nIiwiYnVzeV9kYXRlIiwiJCIsImFwcGVuZCIsInNlY3RvcnNfa2V5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUF2QixDQUFvQ0wsRUFBcEMsRUFBdUNJLEdBQXRFLEdBQTBFLE9BQXRHO0FBQ0g7Ozs7Ozs7QUFHRCx5QkFBMEJ5QixPQUFPQyxJQUFQLENBQVlsQyxTQUFTRSxPQUFyQixDQUExQiw4SEFBeUQ7QUFBQSxZQUE5QzBDLFdBQThDOzs7QUFFckQ7QUFDQUYsVUFBRSxpQkFBRixFQUFxQkMsTUFBckIsQ0FBNEIsNkJBQTZCQyxXQUE3QixHQUEyQyxJQUEzQyxHQUNJLDJCQURKLEdBQ2tDNUMsU0FBU0UsT0FBVCxDQUFpQjBDLFdBQWpCLEVBQThCbEIsSUFEaEUsR0FDdUUsT0FEdkUsR0FFQSxPQUY1QjtBQUdBO0FBQ0EsYUFBSyxJQUFJdEIsTUFBSSxDQUFiLEVBQWdCQSxNQUFJSixTQUFTRSxPQUFULENBQWlCMEMsV0FBakIsRUFBOEJ2QyxXQUE5QixDQUEwQ0MsTUFBOUQsRUFBc0VGLEtBQXRFLEVBQTJFO0FBQ3ZFc0MsY0FBRSxNQUFJRSxXQUFOLEVBQW1CRCxNQUFuQixDQUEwQixpQ0FBK0JoRCxzRkFBaUJBLENBQUNLLFNBQVNFLE9BQVQsQ0FBaUIwQyxXQUFqQixFQUE4QnZDLFdBQTlCLENBQTBDRCxHQUExQyxDQUFsQixDQUEvQixHQUErRixTQUF6SDtBQUNIO0FBQ0Q7QUFDQSxhQUFLLElBQUlBLE1BQUksQ0FBYixFQUFnQkEsTUFBSUosU0FBU0UsT0FBVCxDQUFpQjBDLFdBQWpCLEVBQThCbkMsWUFBOUIsQ0FBMkNILE1BQS9ELEVBQXVFRixLQUF2RSxFQUE0RTtBQUN4RXNDLGNBQUUsTUFBSUUsV0FBTixFQUFtQkQsTUFBbkIsQ0FBMEIsaUNBQStCaEQsc0ZBQWlCQSxDQUFDSyxTQUFTRSxPQUFULENBQWlCMEMsV0FBakIsRUFBOEJuQyxZQUE5QixDQUEyQ0wsR0FBM0MsQ0FBbEIsQ0FBL0IsR0FBZ0csU0FBMUg7QUFDSDtBQUNKIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9tYWluLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDkxMTI3OWI1MmRkOTI3Yzc2ZDVkIiwiZXhwb3J0IGZ1bmN0aW9uIGNoZWNrX2NlbGxfc3RhdHVzIChvYmopIHtcbiAgICBpZihvYmouYnVzeSl7XG4gICAgICAgIHJldHVybiBcImJ1c3lcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIFwiZnJlZVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxfYnVzeW5lc3MgKGZpbGxfb2JqLCBjYWxlbmRhcikge1xuICAgIGZvciAoY29uc3Qgc2VjdG9yX2tleSBpbiBjYWxlbmRhci5zZWN0b3JzKSB7XG4gICAgICAgIGlmIChzZWN0b3Jfa2V5ID09IGZpbGxfb2JqLnNlY3Rvcil7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXIuc2VjdG9yc1tzZWN0b3Jfa2V5XS5maXJzdF9tb250aC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rvcl9rZXkgPT0gZmlsbF9vYmouc2VjdG9yICYmIGZpbGxfb2JqLm1vbnRoID09IGNhbGVuZGFyLnNlY3RvcnNbc2VjdG9yX2tleV0uZmlyc3RfbW9udGhbaV0ubW9udGggJiYgZmlsbF9vYmouZGF5ID09IGNhbGVuZGFyLnNlY3RvcnNbc2VjdG9yX2tleV0uZmlyc3RfbW9udGhbaV0uZGF5KXtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXIuc2VjdG9yc1tzZWN0b3Jfa2V5XS5maXJzdF9tb250aFtpXS5idXN5ID0gZmlsbF9vYmouYnVzeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXIuc2VjdG9yc1tzZWN0b3Jfa2V5XS5zZWNvbmRfbW9udGgubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmIChzZWN0b3Jfa2V5ID09IGZpbGxfb2JqLnNlY3RvciAmJiBmaWxsX29iai5tb250aCA9PSBjYWxlbmRhci5zZWN0b3JzW3NlY3Rvcl9rZXldLnNlY29uZF9tb250aFtpXS5tb250aCAmJiBmaWxsX29iai5kYXkgPT0gY2FsZW5kYXIuc2VjdG9yc1tzZWN0b3Jfa2V5XS5zZWNvbmRfbW9udGhbaV0uZGF5KXtcbiAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXIuc2VjdG9yc1tzZWN0b3Jfa2V5XS5zZWNvbmRfbW9udGhbaV0uYnVzeSA9IGZpbGxfb2JqLmJ1c3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NhbGVuZGFyX2VkaXRvci5qcyIsImV4cG9ydCB7IENhbGVuZGFyIGFzIGRlZmF1bHR9XG5cblxuXG5cbmNsYXNzIENhbGVuZGFyIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWF4X2RheXNfb2ZfbW9udGggPSBbMzEsIDI4LCAzMSwgMzAgLDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG4gICAgICAgIHRoaXMuc2VjdG9yX21vbnRocyA9IHRoaXMuZ2V0X3NlY3Rvcl9tb250aHMoKTtcbiAgICAgICAgdGhpcy5zZWN0b3JzID0ge307XG4gICAgfVxuXG4gICAgZ2V0X3NlY3Rvcl9tb250aHMgKCkge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IHtcbiAgICAgICAgICAgIHllYXI6IGQuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIG1vbnRoOiBkLmdldE1vbnRoKCksXG4gICAgICAgICAgICBkYXk6IGQuZ2V0RGF0ZSgpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRheXNEaWZmID0gY3VycmVudERhdGUuZGF5IC0gMzA7XG5cbiAgICAgICAgY29uc3QgZmlyc3RNb250aCA9IHtcbiAgICAgICAgICAgICdtb250aCc6IGN1cnJlbnREYXRlLm1vbnRoKzEsXG4gICAgICAgICAgICAnc3RhcnRfZGF5JzogY3VycmVudERhdGUuZGF5LFxuICAgICAgICAgICAgJ2VuZF9kYXknOiB0aGlzLm1heF9kYXlzX29mX21vbnRoW2N1cnJlbnREYXRlLm1vbnRoXSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzZWNvbmRNb250aCA9IHtcbiAgICAgICAgICAgICdtb250aCc6IGN1cnJlbnREYXRlLm1vbnRoKzIsXG4gICAgICAgICAgICAnc3RhcnRfZGF5JzogMSxcbiAgICAgICAgICAgICdlbmRfZGF5JzogdGhpcy5tYXhfZGF5c19vZl9tb250aFtjdXJyZW50RGF0ZS5tb250aCsxXSArIGRheXNEaWZmIC0gMixcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHJldHVybiB0aGlzLnNlY3Rvcl9tb250aHMgPSB7XG4gICAgICAgICAgICAnZmlyc3RfbW9udGgnOiBmaXJzdE1vbnRoLFxuICAgICAgICAgICAgJ3NlY29uZF9tb250aCc6IHNlY29uZE1vbnRoXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlX3NlY3RvcnMgKCkge1xuICAgICAgICBjb25zdCBzZWN0b3Jfb2JqID0ge1xuICAgICAgICAgICAgJ2ZpcnN0Jzoge1xuICAgICAgICAgICAgICAgICduYW1lJzpcIlwiLFxuICAgICAgICAgICAgICAgICdmaXJzdF9tb250aCc6IFtdLFxuICAgICAgICAgICAgICAgICdzZWNvbmRfbW9udGgnOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzZWNvbmQnOiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOlwiXCIsXG4gICAgICAgICAgICAgICAgJ2ZpcnN0X21vbnRoJzogW10sXG4gICAgICAgICAgICAgICAgJ3NlY29uZF9tb250aCc6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RoaXJkJzoge1xuICAgICAgICAgICAgICAgICduYW1lJzpcIlwiLFxuICAgICAgICAgICAgICAgICdmaXJzdF9tb250aCc6IFtdLFxuICAgICAgICAgICAgICAgICdzZWNvbmRfbW9udGgnOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdmb3VydGgnOiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOlwiXCIsXG4gICAgICAgICAgICAgICAgJ2ZpcnN0X21vbnRoJzogW10sXG4gICAgICAgICAgICAgICAgJ3NlY29uZF9tb250aCc6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2ZpZnRoJzoge1xuICAgICAgICAgICAgICAgICduYW1lJzpcIlwiLFxuICAgICAgICAgICAgICAgICdmaXJzdF9tb250aCc6IFtdLFxuICAgICAgICAgICAgICAgICdzZWNvbmRfbW9udGgnOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzaXh0aCc6IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6XCJcIixcbiAgICAgICAgICAgICAgICAnZmlyc3RfbW9udGgnOiBbXSxcbiAgICAgICAgICAgICAgICAnc2Vjb25kX21vbnRoJzogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnc2V2ZW50aCc6IHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6XCJcIixcbiAgICAgICAgICAgICAgICAnZmlyc3RfbW9udGgnOiBbXSxcbiAgICAgICAgICAgICAgICAnc2Vjb25kX21vbnRoJzogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rvcl9vYmouZmlyc3QubmFtZSA9IFwiUGlybWFzIHNla3Rvcml1c1wiO1xuICAgICAgICBzZWN0b3Jfb2JqLnNlY29uZC5uYW1lID0gXCJBbnRyYXMgc2VrdG9yaXVzXCI7XG4gICAgICAgIHNlY3Rvcl9vYmoudGhpcmQubmFtZSA9IFwiVHJlY2lhcyBzZWt0b3JpdXNcIjtcbiAgICAgICAgc2VjdG9yX29iai5mb3VydGgubmFtZSA9IFwiS2V0dmlydGFzIHNla3Rvcml1c1wiO1xuICAgICAgICBzZWN0b3Jfb2JqLmZpZnRoLm5hbWUgPSBcIlBlbmt0YXMgc2VrdG9yaXVzXCI7XG4gICAgICAgIHNlY3Rvcl9vYmouc2l4dGgubmFtZSA9IFwiU2VzdGFzIHNla3Rvcml1c1wiO1xuICAgICAgICBzZWN0b3Jfb2JqLnNldmVudGgubmFtZSA9IFwiU2VwdGludGFzIHNla3Rvcml1c1wiO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2VjdG9yX2tleSBvZiBPYmplY3Qua2V5cyhzZWN0b3Jfb2JqKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VjdG9yX21vbnRocy5maXJzdF9tb250aC5zdGFydF9kYXk7IGkgPD0gdGhpcy5zZWN0b3JfbW9udGhzLmZpcnN0X21vbnRoLmVuZF9kYXk7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlY3Rvcl9vYmpbc2VjdG9yX2tleV0uZmlyc3RfbW9udGgucHVzaCh7J2RheSc6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGgnOiB0aGlzLnNlY3Rvcl9tb250aHMuZmlyc3RfbW9udGgubW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnVzeSc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXJ0X2Zyb21fOCc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXJ0X2Zyb21fMjAnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWdpc3RlcmVkX3RvJzpcIlwifSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zZWN0b3JfbW9udGhzLnNlY29uZF9tb250aC5zdGFydF9kYXk7IGkgPD0gdGhpcy5zZWN0b3JfbW9udGhzLnNlY29uZF9tb250aC5lbmRfZGF5OyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWN0b3Jfb2JqW3NlY3Rvcl9rZXldLnNlY29uZF9tb250aC5wdXNoKHsnZGF5JzogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGgnOiB0aGlzLnNlY3Rvcl9tb250aHMuc2Vjb25kX21vbnRoLm1vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidXN5JzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXJ0X2Zyb21fOCc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdGFydF9mcm9tXzIwJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlZ2lzdGVyZWRfdG8nOlwiXCJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlY3RvcnMgPSBzZWN0b3Jfb2JqO1xuICAgIH1cblxuXG59XG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jbGFzcy9DYWxlbmRhci5qcyIsImltcG9ydCBDYWxlbmRhciBmcm9tICcuL2NsYXNzL0NhbGVuZGFyLmpzJztcbmltcG9ydCB7IGNoZWNrX2NlbGxfc3RhdHVzLFxuICAgICAgICAgZmlsbF9idXN5bmVzc1xuICAgICAgIH0gZnJvbSAnLi9jYWxlbmRhcl9lZGl0b3IuanMnO1xuXG5cbmNvbnN0IGNhbGVuZGFyID0gbmV3IENhbGVuZGFyKCk7XG5jYWxlbmRhci5jcmVhdGVfc2VjdG9ycygpO1xuY29uc29sZS5sb2coY2FsZW5kYXIpO1xuXG5cbmNvbnN0IGJ1c3lfZGF0ZSA9IHtcbiAgICAnc2VjdG9yJzogJ3RoaXJkJyxcbiAgICAnbW9udGgnOiAxMixcbiAgICAnZGF5JzogMTUsXG4gICAgJ2J1c3knOiB0cnVlXG59O1xuXG5maWxsX2J1c3luZXNzKGJ1c3lfZGF0ZSwgY2FsZW5kYXIpO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXIuc2VjdG9ycy5maXJzdC5maXJzdF9tb250aC5sZW5ndGg7IGkrKyl7XG4gICAgJCgnLnRhYmxlX2hlYWRfcm93JykuYXBwZW5kKCc8dGggY2xhc3M9XCJ0YWJsZV9oZWFkX2NlbGxcIj4nK2NhbGVuZGFyLnNlY3RvcnMuZmlyc3QuZmlyc3RfbW9udGhbaV0uZGF5Kyc8L3RoPicpO1xufVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNhbGVuZGFyLnNlY3RvcnMuZmlyc3Quc2Vjb25kX21vbnRoLmxlbmd0aDsgaSsrKXtcbiAgICAkKCcudGFibGVfaGVhZF9yb3cnKS5hcHBlbmQoJzx0aCBjbGFzcz1cInRhYmxlX2hlYWRfY2VsbFwiPicrY2FsZW5kYXIuc2VjdG9ycy5maXJzdC5zZWNvbmRfbW9udGhbaV0uZGF5Kyc8L3RoPicpO1xufVxuXG5cbmZvciAoY29uc3Qgc2VjdG9yc19rZXkgb2YgT2JqZWN0LmtleXMoY2FsZW5kYXIuc2VjdG9ycykpIHtcblxuICAgIC8vYXBwZW5kaW5nIHNlY3RvciBuYW1lXG4gICAgJCgnLmNhbGVuZGFyX3RhYmxlJykuYXBwZW5kKCc8dHIgY2xhc3M9XCJzZWN0b3JzXCIgaWQ9XCInICsgc2VjdG9yc19rZXkgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwic2VjdG9yc19jZWxsXCI+JyArIGNhbGVuZGFyLnNlY3RvcnNbc2VjdG9yc19rZXldLm5hbWUgKyAnPC90ZD4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvdHI+Jyk7XG4gICAgLy9hcHBlbmRpbmcgZmlyc3QgbW9udGhcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGVuZGFyLnNlY3RvcnNbc2VjdG9yc19rZXldLmZpcnN0X21vbnRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICQoJyMnK3NlY3RvcnNfa2V5KS5hcHBlbmQoJzx0ZCBjbGFzcz1cInNlY3RvcnNfZGF5X2NlbGwgJytjaGVja19jZWxsX3N0YXR1cyhjYWxlbmRhci5zZWN0b3JzW3NlY3RvcnNfa2V5XS5maXJzdF9tb250aFtpXSkrJ1wiPjwvdGQ+Jyk7XG4gICAgfVxuICAgIC8vYXBwZW5kaW5nIHNlY29uZCBtb250aFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXIuc2VjdG9yc1tzZWN0b3JzX2tleV0uc2Vjb25kX21vbnRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICQoJyMnK3NlY3RvcnNfa2V5KS5hcHBlbmQoJzx0ZCBjbGFzcz1cInNlY3RvcnNfZGF5X2NlbGwgJytjaGVja19jZWxsX3N0YXR1cyhjYWxlbmRhci5zZWN0b3JzW3NlY3RvcnNfa2V5XS5zZWNvbmRfbW9udGhbaV0pKydcIj48L3RkPicpO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9