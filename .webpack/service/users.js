(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

__webpack_require__(0);

var _awsSdk = __webpack_require__(4);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_awsSdk2.default.config.update({ region: "us-west-2" });

function call(action, params) {
  var dynamoDB = new _awsSdk2.default.DynamoDB.DocumentClient();

  return dynamoDB[action](params).promise();
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(6);

var _stringify2 = _interopRequireDefault(_stringify);

exports.success = success;
exports.failure = failure;

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: (0, _stringify2.default)(body)
  };
}

function success(body) {
  return buildResponse(200, body);
}

function failure(body) {
  return buildResponse(500, body);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash/kebabCase");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.create = exports.get = undefined;

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(2);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var get = exports.get = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, context, callback) {
    var params, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              TableName: TableName
            };
            _context.prev = 1;
            _context.next = 4;
            return dynamoDB.call('scan', params);

          case 4:
            result = _context.sent;


            callback(null, (0, _responseLib.success)(result.Items));
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](1);

            console.error(_context.t0);

            callback(null, (0, _responseLib.failure)({ status: false }));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));

  return function get(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var create = exports.create = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event, context, callback) {
    var data, Item, params, result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = JSON.parse(event.body);
            Item = {
              Id: data.Id
            };
            params = {
              TableName: TableName,
              Item: Item
            };
            _context2.prev = 3;
            _context2.next = 6;
            return dynamoDB.call('put', params);

          case 6:
            result = _context2.sent;


            callback(null, (0, _responseLib.success)({ success: true, data: Item }));
            _context2.next = 14;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2['catch'](3);

            console.error(_context2.t0);

            callback(null, (0, _responseLib.failure)({ status: false }));

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 10]]);
  }));

  return function create(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var update = exports.update = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event, context, callback) {
    var data, params, result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = JSON.parse(event.body);
            params = {
              TableName: TableName,
              Key: {
                Id: data.Id
              },
              UpdateExpression: 'SET favoriteRecipes = :favoriteRecipes',
              ExpressionAttributeValues: {
                ':favoriteRecipes': data.favoriteRecipes || null
              }
            };
            _context3.prev = 2;
            _context3.next = 5;
            return dynamoDB.call('update', params);

          case 5:
            result = _context3.sent;


            callback(null, (0, _responseLib.success)({ success: true, data: data }));
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3['catch'](2);

            console.error(_context3.t0);

            callback(null, (0, _responseLib.failure)({ status: false }));

          case 13:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[2, 9]]);
  }));

  return function update(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

__webpack_require__(0);

var _dynamodbLib = __webpack_require__(3);

var dynamoDB = _interopRequireWildcard(_dynamodbLib);

var _responseLib = __webpack_require__(5);

var _uuid = __webpack_require__(7);

var _uuid2 = _interopRequireDefault(_uuid);

var _kebabCase2 = __webpack_require__(8);

var _kebabCase3 = _interopRequireDefault(_kebabCase2);

var _forEach2 = __webpack_require__(9);

var _forEach3 = _interopRequireDefault(_forEach2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableName = 'LissnerUsers';

/***/ })
/******/ ])));
//# sourceMappingURL=users.js.map