module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/UHd":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"seeMore": "SeeMore_seeMore__1ASG0",
	"button": "SeeMore_button__1T6i9"
};


/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/u1C":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loginWrapper": "Login_loginWrapper__3ma0X",
	"title": "Login_title__3Fxn5",
	"forgetPass": "Login_forgetPass__3HcjO",
	"waiting": "Login_waiting__2boNr",
	"waitingIcon": "Login_waitingIcon__1n77L",
	"button": "Login_button__3P6FW",
	"errorLabel": "Login_errorLabel__1_s3U",
	"thirdAuthen": "Login_thirdAuthen__2Z7tJ",
	"item": "Login_item__2vkVX",
	"icon": "Login_icon__2Bzhe",
	"text": "Login_text__3TnWC",
	"register": "Login_register__QoITO",
	"close": "Login_close__3ViyZ"
};


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1LRZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeeMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SeeMore_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/UHd");
/* harmony import */ var _SeeMore_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SeeMore_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SeeMore({
  link
}) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: link
  }, __jsx("div", {
    className: _SeeMore_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.seeMore
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _SeeMore_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,
    style: {
      backgroundColor: '#e91e63'
    }
  }, "Xem th\xEAm")));
}

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2vEZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QtEk");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gifY");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Post({
  postData
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.topPost
  }, __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dateTag
  }, __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon
  }, __jsx("img", {
    src: "/icons/clock.svg",
    alt: "clock"
  })), __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(postData.createdAt).format('DD/MM/YYYY'))), __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.postTitle
  }, postData.title)), __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.seperate
  }, __jsx("hr", null)), __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(postData.content)), __jsx("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.seperate
  }, __jsx("hr", null)));
}

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eZpf");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8nVP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseURL = "http://149.28.155.221:3000";
/* harmony default export */ __webpack_exports__["a"] = (baseURL);

/***/ }),

/***/ "9N20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oQai");
/* harmony import */ var _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Services_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var layouts_WaveBackgroundLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WxnA");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var config_basedUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8nVP");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // @ts-ignore




function Services({
  services,
  disableTitle,
  disableBackground
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  const handleClick = urlTitle => {
    router.push(`/dich-vu/${urlTitle}`);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, disableBackground ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !disableTitle && __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title
  }, "D\u1ECACH V\u1EE4"), __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.servicesWrapper
  }, services.map((item, i) => __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    left: i % 2 ? false : true,
    right: i % 2 ? true : false,
    key: i
  }, __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    onClick: () => handleClick(item.urlTitle)
  }, __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name
  }, item.title), __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon
  }, __jsx("img", {
    src: `${config_basedUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]}/api/post/image/${item.urlTitle}`,
    alt: "icon"
  }))))))) : __jsx(layouts_WaveBackgroundLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, !disableTitle && __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title
  }, "D\u1ECACH V\u1EE4"), __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.servicesWrapper
  }, services.map((item, i) => __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    left: i % 2 ? false : true,
    right: i % 2 ? true : false,
    key: i
  }, __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item,
    onClick: () => handleClick(item.urlTitle)
  }, __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.name
  }, item.title), __jsx("div", {
    className: _Services_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.icon
  }, __jsx("img", {
    src: `${config_basedUrl__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]}/api/post/image/${item.urlTitle}`,
    alt: "icon"
  }))))))));
}

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BKUt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserSuccess; });
/* unused harmony export createUser */
/* unused harmony export updateUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loginByGoogle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loginByGoogleError; });
/* unused harmony export createUsersError */
/* unused harmony export updateUserError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logOutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return loginUserError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loginByFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loginByFacebookError; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Types = {
  LOGIN_USER: 'user/login-user',
  LOGIN_USER_ERROR: 'user/login-user-error',
  GET_USER_SUCCESS: 'user/get-user-success',
  GET_USER: 'user/get-user',
  GET_USER_ERROR: 'user/get-user-error',
  CREATE_USER: 'user/create-user',
  CREATE_USER_ERROR: 'user/create-user-error',
  LOG_OUT_USER: 'user/logout-user',
  LOG_OUT_USER_ERROR: 'user/logout-user-error',
  UPDATE_USER: 'user/update-user',
  UPDATE_USER_ERROR: 'user/update-user-error',
  LOGIN_BY_GOOGLE: 'user/login-by-google',
  LOGIN_BY_GOOGLE_ERROR: 'user/login-by-google-error',
  LOGIN_BY_FACEBOOK: 'user/login-by-facebook',
  LOGIN_BY_FACEBOOK_ERROR: 'user/login-by-facebook-error'
};
const loginUser = ({
  email,
  password
}) => ({
  type: Types.LOGIN_USER,
  payload: {
    email,
    password
  }
});
const getUser = () => ({
  type: Types.GET_USER
});
const getUserSuccess = user => ({
  type: Types.GET_USER_SUCCESS,
  payload: _objectSpread({}, user)
});
const createUser = user => ({
  type: Types.CREATE_USER,
  payload: _objectSpread({}, user)
});
const updateUser = fields => ({
  type: Types.UPDATE_USER,
  payload: _objectSpread({}, fields)
});
const loginByGoogle = fields => ({
  type: Types.LOGIN_BY_GOOGLE,
  payload: _objectSpread({}, fields)
});
const loginByGoogleError = ({
  error
}) => ({
  type: Types.LOGIN_BY_GOOGLE_ERROR,
  payload: {
    error
  }
});
const createUsersError = ({
  error
}) => ({
  type: Types.CREATE_USER_ERROR,
  payload: {
    error
  }
});
const updateUserError = ({
  error
}) => ({
  type: Types.UPDATE_USER_ERROR,
  payload: {
    error
  }
});
const logOutUser = () => ({
  type: Types.LOG_OUT_USER
});
const getUserError = () => ({
  type: Types.GET_USER_ERROR
});
const loginUserError = ({
  error
}) => ({
  type: Types.LOGIN_USER_ERROR,
  payload: {
    error
  }
});
const loginByFacebook = fields => ({
  type: Types.LOGIN_BY_FACEBOOK,
  payload: _objectSpread({}, fields)
});
const loginByFacebookError = ({
  error
}) => ({
  type: Types.LOGIN_BY_FACEBOOK_ERROR,
  payload: {
    error
  }
});

/***/ }),

/***/ "BpYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isFormValid; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const validate = (element, formdata) => {
  let error = [true, ''];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? 'Email không hợp lệ' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.confirm) {
    const valid = element.value.trim() === formdata[element.validation.confirm].value;
    const message = `${!valid ? 'Mật khẩu nhập lại không chính xác' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.password) {
    const valid = element.value.length >= 6;
    const message = `${!valid ? 'Mật khẩu phải lớn hơn 6 kí tự' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    let valid;

    if (element.element !== 'image') {
      valid = element.value.trim() !== '';
    } else {
      valid = element.value !== '';
    }

    const message = `${!valid ? 'Bạn phải nhập mục này' : ''}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
}; // @ts-ignore

const update = (element, formdata, formName) => {
  const newFormdata = _objectSpread({}, formdata);

  const newElement = _objectSpread({}, newFormdata[element.id]);

  if (element.id === 'content') {
    newElement.value = element.event;
  } else if (element.id === 'image') {
    newElement.value = element.event.target.files[0];
  } else {
    newElement.value = element.event.target.value;
  }

  if (element.blur || element.id === 'image' || element.id === 'content' || element.id === 'password') {
    const validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }

  newElement.touched = element.blur;
  newFormdata[element.id] = newElement;
  return newFormdata;
}; // @ts-ignore

const generateData = (formdata, formName) => {
  const dataToSubmit = {};

  const setType = name => {
    if (name === 'Dự án') {
      return 'project';
    } else if (name === 'Dịch vụ') {
      return 'service';
    } else {
      return 'info';
    }
  };

  for (const key in formdata) {
    if (key === 'role') {
      dataToSubmit[key] = formdata[key].value === 'Quản trị viên' ? 1 : 0;
    } else if (key === 'type') {
      dataToSubmit[key] = setType(formdata[key].value);
    } else if (key === 'image') {
      if (typeof formdata[key].value === 'object') {
        dataToSubmit[key] = formdata[key].value;
      }
    } else if (key !== 'confirmPassword') {
      dataToSubmit[key] = formdata[key].value;
    }
  }

  return dataToSubmit;
}; // @ts-ignore

const isFormValid = (formdata, formName) => {
  let formIsValid = true;

  for (const key in formdata) {
    formIsValid = formdata[key].valid && formIsValid;
  }

  return formIsValid;
};

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CuGD":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardWrapper": "Card_cardWrapper__2ugvi",
	"card": "Card_card__1bH3q",
	"dateWrapper": "Card_dateWrapper__rVRbN",
	"dateIcon": "Card_dateIcon__1biFL",
	"date": "Card_date__1_dJm",
	"contentWrapper": "Card_contentWrapper__2JT6q",
	"wave": "Card_wave__2n3lv",
	"title": "Card_title__1aFOy"
};


/***/ }),

/***/ "Dm74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./components/ChatWindow/ChatWindow.module.scss
var ChatWindow_module = __webpack_require__("Oi/m");
var ChatWindow_module_default = /*#__PURE__*/__webpack_require__.n(ChatWindow_module);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__("ksxi");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-facebook-login/dist/facebook-login-render-props"
var facebook_login_render_props_ = __webpack_require__("G4lZ");
var facebook_login_render_props_default = /*#__PURE__*/__webpack_require__.n(facebook_login_render_props_);

// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__("rCsO");
var external_react_google_login_default = /*#__PURE__*/__webpack_require__.n(external_react_google_login_);

// EXTERNAL MODULE: external "emoji-mart"
var external_emoji_mart_ = __webpack_require__("ECR8");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-lazy-load"
var external_react_lazy_load_ = __webpack_require__("zKpT");
var external_react_lazy_load_default = /*#__PURE__*/__webpack_require__.n(external_react_lazy_load_);

// CONCATENATED MODULE: ./components/EmojiInput/use-debounce.ts
// @ts-nocheck
// vendors

function useDebounce(callback, delay) {
  const maxWaitArgs = Object(external_react_["useRef"])([]);
  const functionTimeoutHandler = Object(external_react_["useRef"])(null);
  const isComponentUnmounted = Object(external_react_["useRef"])(false);
  const debouncedFunction = callback;
  Object(external_react_["useEffect"])(() => () => {
    // we use flag, as we allow to call callPending outside the hook
    isComponentUnmounted.current = true;
  }, []);
  const debouncedCallback = Object(external_react_["useCallback"])((...args) => {
    maxWaitArgs.current = args;
    clearTimeout(functionTimeoutHandler.current);
    functionTimeoutHandler.current = setTimeout(() => {
      if (!isComponentUnmounted.current) {
        debouncedFunction(...args);
      }
    }, delay);
  }, [debouncedFunction, delay]); // At the moment, we use 3 args array so that we save backward compatibility

  return [debouncedCallback];
}
// CONCATENATED MODULE: ./components/EmojiInput/index.tsx
var __jsx = external_react_default.a.createElement;
//@ts-nocheck
// vendors



 // utils



function InputEmoji({
  value,
  onChange,
  cleanOnEnter,
  onEnter,
  placeholder,
  onResize,
  onClick,
  onFocus,
  maxLength,
  keepOpenend,
  onKeyDown,
  inputClass,
  disableRecent,
  tabIndex,
  // style
  // height,
  borderRadius,
  borderColor,
  fontSize,
  fontFamily
}, ref) {
  const {
    0: showPicker,
    1: setShowPicker
  } = Object(external_react_["useState"])(false);
  const {
    0: allEmojiStyle,
    1: setAllEmojiStyle
  } = Object(external_react_["useState"])({});
  const {
    0: currentSize,
    1: setCurrentSize
  } = Object(external_react_["useState"])(null);
  const textInputRef = Object(external_react_["useRef"])(null);
  const cleanedTextRef = Object(external_react_["useRef"])('');
  const placeholderRef = Object(external_react_["useRef"])(null);
  Object(external_react_["useImperativeHandle"])(ref, () => ({
    get value() {
      return cleanedTextRef.current;
    },

    set value(value) {
      setValue(value);
    },

    focus: () => {
      textInputRef.current.focus();
    },
    blur: () => {
      replaceAllTextEmojiToString();
    }
  }));
  const replaceAllTextEmojis = Object(external_react_["useCallback"])(text => {
    let allEmojis = getAllEmojisFromText(text);

    if (allEmojis) {
      allEmojis = [...new Set(allEmojis)]; // remove duplicates

      allEmojis.forEach(emoji => {
        const style = allEmojiStyle[emoji];
        if (!style) return;
        text = replaceAll(text, emoji, `<img style="${style}" data-emoji="${emoji}" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif" />`);
      });
    }

    return text;
  }, [allEmojiStyle]);
  const updateHTML = Object(external_react_["useCallback"])(nextValue => {
    nextValue = nextValue || value;
    textInputRef.current.innerHTML = replaceAllTextEmojis(nextValue || '');
  }, [replaceAllTextEmojis]);
  const checkAndEmitResize = Object(external_react_["useCallback"])(() => {
    const nextSize = {
      width: textInputRef.current.offsetWidth,
      height: textInputRef.current.offsetHeight
    };

    if (!currentSize || currentSize.width !== nextSize.width || currentSize.height !== nextSize.height) {
      onResize(nextSize);
      setCurrentSize(nextSize);
    }
  }, [currentSize, onResize]);
  const emitChange = Object(external_react_["useCallback"])(() => {
    if (typeof onChange === 'function') {
      onChange(cleanedTextRef.current);
    }

    if (typeof onResize === 'function') {
      checkAndEmitResize();
    }
  }, [checkAndEmitResize, onChange, onResize]);
  Object(external_react_["useEffect"])(() => {
    function handleCopy(e) {
      const selectedText = window.getSelection();
      let container = document.createElement('div');

      for (let i = 0, len = selectedText.rangeCount; i < len; ++i) {
        container.appendChild(selectedText.getRangeAt(i).cloneContents());
      }

      container = replaceEmojiToString(container);
      e.clipboardData.setData('text', container.innerText);
      e.preventDefault();

      function replaceEmojiToString(container) {
        const images = Array.prototype.slice.call(container.querySelectorAll('img'));
        images.forEach(image => {
          image.outerHTML = image.dataset.emoji;
        });
        return container;
      }
    }

    function handlePaste(e) {
      e.preventDefault();
      let content;

      if (window.clipboardData) {
        content = window.clipboardData.getData('Text');
        content = replaceAllTextEmojis(content);

        if (window.getSelection) {
          const selObj = window.getSelection();
          const selRange = selObj.getRangeAt(0);
          selRange.deleteContents();
          selRange.insertNode(document.createTextNode(content));
        }
      } else if (e.clipboardData) {
        content = e.clipboardData.getData('text/plain');
        content = replaceAllTextEmojis(content);
        document.execCommand('insertHTML', false, content);
      }
    }

    const inputEl = textInputRef.current;

    const handleContentEditableInputCopyAndPaste = () => {
      inputEl.addEventListener('copy', handleCopy);
      inputEl.addEventListener('paste', handlePaste);
    };

    handleContentEditableInputCopyAndPaste();
    return () => {
      inputEl.removeEventListener('copy', handleCopy);
      inputEl.removeEventListener('paste', handlePaste);
    };
  }, [replaceAllTextEmojis]);
  Object(external_react_["useEffect"])(() => {
    const allEmojiButton = Array.prototype.slice.call(document.querySelectorAll('.emoji-mart-category-list > li > button'));
    const allEmojiStyle = {};
    allEmojiButton.forEach(emojiButton => {
      const label = emojiButton.getAttribute('aria-label');
      const [emoji] = label.split(',');
      const emojiSpanEl = emojiButton.querySelector('span');
      const style = replaceAll(emojiSpanEl.style.cssText, '"', "'");
      allEmojiStyle[emoji] = style;
    });
    setAllEmojiStyle(allEmojiStyle);
  }, []);
  Object(external_react_["useEffect"])(() => {
    updateHTML();
  }, [updateHTML]);
  const replaceAllTextEmojiToString = Object(external_react_["useCallback"])(() => {
    if (!textInputRef.current) {
      cleanedTextRef.current = '';
    }

    const container = document.createElement('div');
    container.innerHTML = textInputRef.current.innerHTML;
    const images = Array.prototype.slice.call(container.querySelectorAll('img'));
    images.forEach(image => {
      image.outerHTML = image.dataset.emoji;
    });
    let text = container.innerText; // remove all ↵ for safari

    text = text.replace(/\n/gi, '');
    cleanedTextRef.current = text;
    checkPlaceholder();
    emitChange();
  }, [emitChange]);
  const [replaceAllTextEmojiToStringDebounced] = useDebounce(replaceAllTextEmojiToString, 500);
  Object(external_react_["useEffect"])(() => {
    function handleKeydown(event) {
      placeholderRef.current.style.opacity = 0;

      if (typeof maxLength !== 'undefined' && event.keyCode !== 8 && totalCharacters() >= maxLength) {
        event.preventDefault();
      }

      if (event.keyCode === 13) {
        event.preventDefault();
        replaceAllTextEmojiToString();
        const cleanedText = cleanedTextRef.current;

        if (typeof onEnter === 'function') {
          onEnter(cleanedText);
        }

        if (cleanOnEnter) {
          updateHTML('');
        }

        if (typeof onKeyDown === 'function') {
          onKeyDown(event);
        }

        return false;
      }

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
      }
    }

    function handleKeyup() {
      replaceAllTextEmojiToStringDebounced();
    }

    const inputEl = textInputRef.current;
    inputEl.addEventListener('keydown', handleKeydown);
    inputEl.addEventListener('keyup', handleKeyup);
    return () => {
      inputEl.removeEventListener('keydown', handleKeydown);
      inputEl.removeEventListener('keyup', handleKeyup);
    };
  }, [onChange, cleanOnEnter, onEnter, updateHTML, replaceAllTextEmojiToString, replaceAllTextEmojiToStringDebounced, emitChange, maxLength, onKeyDown]);
  Object(external_react_["useEffect"])(() => {
    function handleFocus() {
      if (typeof onFocus === 'function') {
        onFocus();
      }
    }

    const inputEl = textInputRef.current;
    inputEl.addEventListener('focus', handleFocus);
    return () => {
      inputEl.removeEventListener('focus', handleFocus);
    };
  }, [onFocus]);

  function totalCharacters() {
    const text = textInputRef.current.innerText;
    const html = textInputRef.current.innerHTML;
    const textCount = text.length;
    const emojisCount = (html.match(/<img/g) || []).length;
    return textCount + emojisCount;
  }

  Object(external_react_["useEffect"])(() => {
    if (textInputRef.current) {
      setCurrentSize({
        width: textInputRef.current.offsetWidth,
        height: textInputRef.current.offsetHeight
      });
    }
  }, []);
  const excluePicker = Object(external_react_["useMemo"])(() => {
    const exclude = [];

    if (disableRecent) {
      exclude.push('recent');
    }

    return exclude;
  }, [disableRecent]);

  function setValue(value) {
    updateHTML(value);
    textInputRef.current.blur();
  }

  function toggleShowPicker() {
    setShowPicker(showPicker => !showPicker);
  }

  function pasteHtmlAtCaret(html) {
    let sel, range;

    if (window.getSelection) {
      // IE9 and non-IE
      sel = window.getSelection();

      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents(); // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)

        const el = document.createElement('div');
        el.innerHTML = html;
        const frag = document.createDocumentFragment();
        let node;
        let lastNode;

        while (node = el.firstChild) {
          lastNode = frag.appendChild(node);
        }

        range.insertNode(frag); // Preserve the selection

        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
    } else if (document.selection && document.selection.type !== 'Control') {
      // IE < 9
      document.selection.createRange().pasteHTML(html);
    }
  }

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  function getImage(emoji) {
    let shortNames = `${emoji.short_names}`;
    shortNames = replaceAll(shortNames, ',', ', ');
    const emojiSpanEl = document.querySelector(`[aria-label="${emoji.native}, ${shortNames}"] > span`);
    if (!emojiSpanEl) return '';
    const style = replaceAll(emojiSpanEl.style.cssText, '"', "'");
    return `<img style="${style}" data-emoji="${emoji.native}" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif" />`;
  }

  function handleSelectEmoji(emoji) {
    placeholderRef.current.style.opacity = 0;
    textInputRef.current.focus();
    pasteHtmlAtCaret(getImage(emoji));
    textInputRef.current.focus();
    emitChange();

    if (!keepOpenend) {
      toggleShowPicker();
    }
  }

  function getAllEmojisFromText(text) {
    return text.match(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g);
  }

  function checkPlaceholder() {
    const text = cleanedTextRef.current;

    if (text !== '' && placeholderRef.current.opacity !== 0) {
      placeholderRef.current.style.opacity = 0;
    } else {
      placeholderRef.current.style.opacity = 1;
    }
  }

  function handleClick() {
    if (typeof onClick === 'function') {
      onClick();
    }
  }

  return __jsx("div", {
    className: "react-emoji"
  }, __jsx("div", {
    className: "react-emoji-picker--container"
  }, __jsx("div", {
    className: `react-emoji-picker--wrapper${showPicker ? ' react-emoji-picker--wrapper__show' : ''}`
  }, __jsx("div", {
    className: `react-emoji-picker${showPicker ? ' react-emoji-picker__show' : ''}`
  }, __jsx(external_react_lazy_load_default.a, null, __jsx(external_emoji_mart_["Picker"], {
    showPreview: false,
    showSkinTones: false,
    set: "apple",
    onSelect: handleSelectEmoji,
    exclude: excluePicker
  }))))), __jsx("div", {
    className: "react-input-emoji--container",
    style: {
      borderRadius,
      borderColor,
      fontSize,
      fontFamily
    }
  }, __jsx("div", {
    className: "react-input-emoji--wrapper",
    onClick: handleClick
  }, __jsx("div", {
    ref: placeholderRef,
    className: "react-input-emoji--placeholder"
  }, placeholder), __jsx("div", {
    ref: textInputRef,
    tabIndex: tabIndex,
    contentEditable: true,
    className: `react-input-emoji--input${inputClass ? ` ${inputClass}` : ''}`,
    onBlur: emitChange
  }))), __jsx("button", {
    className: `react-input-emoji--button${showPicker ? ' react-input-emoji--button__show' : ''}`,
    onClick: toggleShowPicker
  }, __jsx("img", {
    src: "/icons/smile.svg",
    alt: "smile",
    style: {
      width: '1.5em'
    }
  })), showPicker && __jsx("div", {
    className: "react-input-emoji--overlay",
    onClick: toggleShowPicker
  }));
}

const InputEmojiWithRef = Object(external_react_["forwardRef"])(InputEmoji);
InputEmojiWithRef.propTypes = {
  value: external_prop_types_default.a.string,
  onChange: external_prop_types_default.a.func,
  cleanOnEnter: external_prop_types_default.a.bool,
  onEnter: external_prop_types_default.a.func,
  placeholder: external_prop_types_default.a.string,
  onResize: external_prop_types_default.a.func,
  onClick: external_prop_types_default.a.func,
  onFocus: external_prop_types_default.a.func,
  maxLength: external_prop_types_default.a.number,
  keepOpenend: external_prop_types_default.a.bool,
  onKeyDown: external_prop_types_default.a.func,
  inputClass: external_prop_types_default.a.string,
  disableRecent: external_prop_types_default.a.bool,
  tabIndex: external_prop_types_default.a.number,
  // style
  height: external_prop_types_default.a.number,
  borderRadius: external_prop_types_default.a.number,
  borderColor: external_prop_types_default.a.string,
  fontSize: external_prop_types_default.a.number,
  fontFamily: external_prop_types_default.a.string
};
InputEmojiWithRef.defaultProps = {
  height: 30,
  placeholder: 'Type a message',
  borderRadius: 21,
  borderColor: '#EAEAEA',
  fontSize: 15,
  fontFamily: 'sans-serif',
  tabIndex: 0
};
/* harmony default export */ var EmojiInput = (InputEmojiWithRef);
// EXTERNAL MODULE: ./redux/actions/users.ts
var users = __webpack_require__("BKUt");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/ChatWindow/index.tsx
var ChatWindow_jsx = external_react_default.a.createElement;
 // import { toggleChatBubble } from 'redux/actions/ui';



 // import Button from '@material-ui/core/Button';



 // @ts-ignore








function ChatWindow({
  messages,
  // handleOpenLogin,
  handleSendMessage,
  handleCloseChat,
  user,
  isAdmin,
  isOnline,
  roomInfo,
  handleClick,
  loginByGoogle,
  loginByGoogleError,
  // loginUserError;
  loginByFacebookError,
  loginByFacebook
}) {
  // @ts-ignore
  let lastSeenIndex;

  if (isAdmin && messages.length) {
    if (messages[messages.length - 1].sender === 'Admin') {
      // @ts-ignore
      lastSeenIndex = external_lodash_default.a.findLastIndex(messages, message => message.seen && message.sender === 'Admin');
    }
  } else if (!isAdmin && messages.length) {
    if (messages[messages.length - 1].sender !== 'Admin') {
      // @ts-ignore
      lastSeenIndex = external_lodash_default.a.findLastIndex(messages, message => message.seen && message.sender !== 'Admin');
    }
  }

  const renderTime = i => {
    if (i !== 0) {
      if (messages[i].createdAt - messages[i - 1].createdAt > 120000) {
        return ChatWindow_jsx("div", {
          className: ChatWindow_module_default.a.time
        }, external_moment_default()(messages[i].createdAt).locale('vi').startOf('minute').fromNow());
      }
    } else {
      return ChatWindow_jsx("div", {
        className: ChatWindow_module_default.a.time
      }, external_moment_default()(messages[i].createdAt).locale('vi').startOf('minute').fromNow());
    }
  };

  const responseGoogle = data => {
    loginByGoogle({
      token: data.tokenId,
      name: data.profileObj.name,
      thirdPartyAvatar: data.profileObj.imageUrl,
      email: data.profileObj.email,
      googleId: data.googleId
    });
  };

  const responseFacebook = data => {
    // console.log(data);
    loginByFacebook({
      token: data.accessToken,
      name: data.name,
      email: data.email,
      facebookId: data.id,
      thirdPartyAvatar: data.picture.data.url
    });
  };

  const renderChatMessages = () => messages.map((item, i) => {
    if (item.type === 'text') {
      if (isAdmin) {
        return item.sender === 'Admin' ? ChatWindow_jsx("div", {
          key: i
        }, renderTime(i), ChatWindow_jsx("div", {
          className: ChatWindow_module_default.a.normalText
        }, item.message), lastSeenIndex === i && ChatWindow_jsx("div", {
          className: ChatWindow_module_default.a.seen
        }, " \u2713 \u0110\xE3 xem")) : ChatWindow_jsx("div", {
          key: i
        }, renderTime(i), ChatWindow_jsx("div", {
          className: ChatWindow_module_default.a.senderText
        }, item.message));
      } else {
        return item.sender === 'Admin' ? ChatWindow_jsx("div", {
          key: i
        }, renderTime(i), ChatWindow_jsx("div", {
          className: ChatWindow_module_default.a.senderText
        }, item.message)) : ChatWindow_jsx("div", {
          key: i
        }, renderTime(i), ChatWindow_jsx("div", {
          className: ChatWindow_module_default.a.normalText
        }, item.message), lastSeenIndex === i && ChatWindow_jsx("div", {
          className: ChatWindow_module_default.a.seen
        }, " \u2713 \u0110\xE3 xem"));
      }
    }
  });

  Object(external_react_["useEffect"])(() => {
    if (loginByGoogleError) {
      external_antd_["message"].error(loginByGoogleError);
    }
  }, [loginByGoogleError]);
  Object(external_react_["useEffect"])(() => {
    if (loginByFacebookError) {
      external_antd_["message"].error(loginByFacebookError);
    }
  }, [loginByFacebookError]);
  return ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.chatWrapper,
    onClick: handleClick
  }, ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.top
  }, ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.admin
  }, ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.leftAdmin
  }, typeof roomInfo === 'boolean' ? ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.avatar
  }, ChatWindow_jsx(external_antd_["Avatar"], {
    style: {
      backgroundColor: '#e91e63',
      width: '3rem',
      height: '3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem'
    },
    icon: ChatWindow_jsx(icons_["UserOutlined"], null)
  })) : // @ts-ignore
  ChatWindow_jsx(UserAvatar["a" /* default */], {
    userId: roomInfo.roomId
  }), ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.dot
  })), ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.rightAdmin
  }, typeof roomInfo === 'boolean' ? ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.name
  }, "Admin") : ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.name
  }, roomInfo.roomName), isOnline ? ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.status
  }, "online") : ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.statusOffline
  }, "offline"))), ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.close,
    onClick: handleCloseChat
  }, ChatWindow_jsx("img", {
    src: "/icons/close-2.svg",
    alt: "close"
  }))), user ? ChatWindow_jsx(external_react_default.a.Fragment, null, ' ', ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.middle,
    id: "text"
  }, messages && renderChatMessages()), ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.bottom
  }, ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.inputWrapper
  }, ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.input
  }, ChatWindow_jsx(EmojiInput, {
    cleanOnEnter: true,
    onEnter: handleSendMessage,
    placeholder: "Nh\u1EADp tin nh\u1EAFn"
  })), ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.send,
    onClick: handleSendMessage
  }, ChatWindow_jsx("img", {
    src: "/icons/send.svg",
    alt: "send"
  }))))) : ChatWindow_jsx("div", {
    className: ChatWindow_module_default.a.requireLogin
  }, "B\u1EA1n ph\u1EA3i \u0111\u0103ng nh\u1EADp \u0111\u1EC3 chat!", ChatWindow_jsx("br", null), ChatWindow_jsx(external_react_google_login_default.a, {
    clientId: "374918945235-8gdpha6da5h9sqva4mgi53ldreces79b.apps.googleusercontent.com",
    render: renderProps => ChatWindow_jsx("div", {
      className: ChatWindow_module_default.a.item,
      onClick: renderProps.onClick
    }, ChatWindow_jsx("div", {
      className: ChatWindow_module_default.a.icon
    }, ChatWindow_jsx("img", {
      src: "/icons/google.svg",
      alt: "google"
    })), ChatWindow_jsx("div", {
      className: ChatWindow_module_default.a.text
    }, "\u0110\u0103ng nh\u1EADp b\u1EB1ng Google")),
    buttonText: "Login",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin'
  }), ChatWindow_jsx(facebook_login_render_props_default.a, {
    appId: "659986671317584" // autoLoad
    ,
    fields: "name,email,picture,id",
    callback: responseFacebook,
    render: renderProps => ChatWindow_jsx("div", {
      className: ChatWindow_module_default.a.item,
      onClick: renderProps.onClick
    }, ChatWindow_jsx("div", {
      className: ChatWindow_module_default.a.icon
    }, ChatWindow_jsx("img", {
      src: "/icons/facebook.svg",
      alt: "facebook"
    })), ChatWindow_jsx("div", {
      className: ChatWindow_module_default.a.text
    }, "\u0110\u0103ng nh\u1EADp b\u1EB1ng Facebook"))
  })));
}

const mapStateToProps = state => ({
  loginByGoogleError: state.users.loginByGoogleError,
  loginByFacebookError: state.users.loginByFacebookError
});

/* harmony default export */ var components_ChatWindow = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(mapStateToProps, {
  loginByGoogle: users["h" /* loginByGoogle */],
  loginByFacebook: users["f" /* loginByFacebook */]
})(ChatWindow));

/***/ }),

/***/ "ECR8":
/***/ (function(module, exports) {

module.exports = require("emoji-mart");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "G4lZ":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login/dist/facebook-login-render-props");

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "L7kf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__("yzvi");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__("NNXn");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/ui.ts
var ui = __webpack_require__("YIbT");

// EXTERNAL MODULE: ./redux/actions/users.ts
var users = __webpack_require__("BKUt");

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// CONCATENATED MODULE: ./components/Header/index.tsx
var __jsx = external_react_default.a.createElement;










const {
  Panel
} = external_antd_["Collapse"];

function Header({
  toggleRegisterLogin,
  user,
  getUser,
  logOutUser
}) {
  const isSmallDevice = Object(external_react_responsive_["useMediaQuery"])({
    query: '(max-width: 767px)'
  });
  const isMediumLargeDevice = Object(external_react_responsive_["useMediaQuery"])({
    query: '(min-width: 768px)'
  });

  const handleOpenLogin = () => {
    toggleRegisterLogin(true, 'login');
  }; // const handleOpenRegister = (): void => {
  //   toggleRegisterLogin(true, 'register');
  // };


  const handleLogOut = () => {
    logOutUser();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const renderTopMenu = () => __jsx("div", {
    className: Header_module_default.a.topMenu
  }, __jsx("div", {
    className: Header_module_default.a.text
  }, "MENU"), __jsx("div", {
    className: Header_module_default.a.icon
  }, __jsx("img", {
    src: "/icons/menu.svg",
    alt: "menu-icon"
  })));

  const renderAvatar = () => {
    const menu = __jsx(external_antd_["Menu"], null, __jsx(external_antd_["Menu"].Item, null, __jsx("div", {
      className: Header_module_default.a.logOut,
      style: {
        textAlign: 'center'
      },
      onClick: handleLogOut
    }, "\u0110\u0103ng xu\u1EA5t")));

    const setAvatar = () => {
      if (user.avatar) {
        return __jsx(external_antd_["Avatar"], {
          src: "/api/user/avatar"
        });
      } else if (user.thirdPartyAvatar) {
        return __jsx(external_antd_["Avatar"], {
          src: user.thirdPartyAvatar
        });
      } else if (!user.avatar) {
        return __jsx(external_antd_["Avatar"], {
          className: Header_module_default.a.avatarName
        }, user.name[0]);
      }
    };

    return __jsx("div", {
      className: Header_module_default.a.avatarWrapper
    }, __jsx("div", {
      className: Header_module_default.a.avatar
    }, setAvatar()), __jsx("div", {
      className: Header_module_default.a.down
    }, __jsx(external_antd_["Dropdown"], {
      overlay: menu,
      placement: "bottomCenter",
      trigger: ['click']
    }, __jsx(ExpandMore_default.a, null))));
  };

  const renderMediumLargeDeviceLayout = () => __jsx("header", {
    className: Header_module_default.a.header
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("div", {
    className: Header_module_default.a.logo
  }, __jsx("div", {
    className: Header_module_default.a.logoWrapper
  }, __jsx("img", {
    src: "/icons/logo.svg",
    alt: "logo"
  })), __jsx("div", {
    className: Header_module_default.a.text
  }, __jsx("div", {
    className: Header_module_default.a.name
  }, "PH\u01AF\u01A0NG NAM"), __jsx("div", {
    className: Header_module_default.a.slogan
  }, "Th\xE1ch Th\u1EE9c Th\u1EDDi Gian")))), __jsx("div", {
    className: Header_module_default.a.menuWrapper
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Trang Ch\u1EE7")), __jsx(link_default.a, {
    href: "/cua-hang"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "C\u1EEDa H\xE0ng")), __jsx(link_default.a, {
    href: "/dich-vu"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "D\u1ECBch V\u1EE5")), __jsx(link_default.a, {
    href: "/du-an"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "D\u1EF1 \xC1n")), __jsx(link_default.a, {
    href: "/kien-thuc"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Ki\u1EBFn Th\u1EE9c")), __jsx(link_default.a, {
    href: "/gioi-thieu"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Gi\u1EDBi Thi\u1EC7u")), __jsx(link_default.a, {
    href: "/lien-he"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Li\xEAn H\u1EC7"))), __jsx("div", {
    className: Header_module_default.a.right
  }, user ? renderAvatar() : __jsx("header", {
    className: Header_module_default.a.loginRegister
  }, __jsx("div", {
    className: Header_module_default.a.login,
    onClick: handleOpenLogin
  }, __jsx("div", {
    className: Header_module_default.a.icon
  }, __jsx("img", {
    src: "/icons/login.svg",
    alt: "login"
  })), __jsx("div", {
    className: Header_module_default.a.text
  }, "\u0110\u0102NG NH\u1EACP")))));

  const renderSmallDeviceLayout = () => __jsx("header", {
    className: Header_module_default.a.header
  }, __jsx("div", {
    className: Header_module_default.a.top
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("div", {
    className: Header_module_default.a.logo
  }, __jsx("div", {
    className: Header_module_default.a.logoWrapper
  }, __jsx("img", {
    src: "/icons/logo.svg",
    alt: "logo"
  })), __jsx("div", {
    className: Header_module_default.a.text
  }, __jsx("div", {
    className: Header_module_default.a.name
  }, "PH\u01AF\u01A0NG NAM"), __jsx("div", {
    className: Header_module_default.a.slogan
  }, "Th\xE1ch Th\u1EE9c Th\u1EDDi Gian")))), __jsx("div", {
    className: Header_module_default.a.right
  }, user ? renderAvatar() : __jsx("div", {
    className: Header_module_default.a.loginRegister
  }, __jsx("div", {
    className: Header_module_default.a.login,
    onClick: handleOpenLogin
  }, __jsx("div", {
    className: Header_module_default.a.icon
  }, __jsx("img", {
    src: "/icons/login.svg",
    alt: "login"
  })), __jsx("div", {
    className: Header_module_default.a.text
  }, "\u0110\u0102NG NH\u1EACP"))))), __jsx("div", {
    className: Header_module_default.a.menuWrapper
  }, __jsx(external_antd_["Collapse"], {
    className: Header_module_default.a.menu,
    style: {
      padding: '0'
    }
  }, __jsx(Panel, {
    header: renderTopMenu(),
    key: "1",
    showArrow: false,
    style: {
      padding: '0'
    }
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Trang Ch\u1EE7")), __jsx(link_default.a, {
    href: "/cua-hang"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "C\u1EEDa H\xE0ng")), __jsx(link_default.a, {
    href: "/dich-vu"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "D\u1ECBch V\u1EE5")), __jsx(link_default.a, {
    href: "/du-an"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "D\u1EF1 \xC1n")), __jsx(link_default.a, {
    href: "/kien-thuc"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Ki\u1EBFn Th\u1EE9c")), __jsx(link_default.a, {
    href: "/gioi-thieu"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Gi\u1EDBi Thi\u1EC7u")), __jsx(link_default.a, {
    href: "/lien-he"
  }, __jsx("div", {
    className: Header_module_default.a.menuItem
  }, "Li\xEAn H\u1EC7"))))));

  Object(external_react_["useEffect"])(() => {
    getUser();
  }, []);
  return __jsx(external_react_["Fragment"], null, isSmallDevice && renderSmallDeviceLayout(), isMediumLargeDevice && renderMediumLargeDeviceLayout());
}

const mapStateToProps = state => ({
  user: state.users.data
});

/* harmony default export */ var components_Header = (Object(external_react_redux_["connect"])(mapStateToProps, {
  toggleRegisterLogin: ui["c" /* toggleRegisterLogin */],
  getUser: users["b" /* getUser */],
  logOutUser: users["e" /* logOutUser */]
})(Header));
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__("kzqI");
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);

// CONCATENATED MODULE: ./components/Footer/index.tsx
var Footer_jsx = external_react_default.a.createElement;



function Footer({
  contacts
}) {
  const isSmallDevice = Object(external_react_responsive_["useMediaQuery"])({
    query: '(max-width: 767px)'
  });
  const isMediumLargeDevice = Object(external_react_responsive_["useMediaQuery"])({
    query: '(min-width: 768px)'
  });

  const renderMediumLargeDeviceLayout = () => Footer_jsx("footer", {
    className: Footer_module_default.a.footer,
    id: "footer"
  }, Footer_jsx("div", {
    className: Footer_module_default.a.copyRight
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/logo.svg",
    alt: "logo"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, "2020 \xA9 C\xF4ng Ty TNHH MTV X\xE2y D\u1EF1ng S\u01A1n Ph\u01B0\u01A1ng Nam")), Footer_jsx("div", {
    className: Footer_module_default.a.contact
  }, Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/telephone.svg",
    alt: "phone"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, contacts.phone)), Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/zalo.svg",
    alt: "zalo"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, contacts.zalo)), Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/mail.svg",
    alt: "email"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, contacts.gmail)), Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/facebook-2.svg",
    alt: "facebook"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, contacts.facebook))));

  const renderSmallDeviceLayout = () => Footer_jsx("footer", {
    className: Footer_module_default.a.footer,
    id: "footer"
  }, Footer_jsx("div", {
    className: Footer_module_default.a.logo
  }, Footer_jsx("div", {
    className: Footer_module_default.a.logoWrapper
  }, Footer_jsx("img", {
    src: "/icons/logo.svg",
    alt: "logo"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, Footer_jsx("div", {
    className: Footer_module_default.a.name
  }, "PH\u01AF\u01A0NG NAM"), Footer_jsx("div", {
    className: Footer_module_default.a.slogan
  }, "Th\xE1ch Th\u1EE9c Th\u1EDDi Gian"))), Footer_jsx("div", {
    className: Footer_module_default.a.contact
  }, Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/telephone.svg",
    alt: "phone"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, "0908 108 690")), Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/zalo.svg",
    alt: "zalo"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, "0908 108 690")), Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/mail.svg",
    alt: "email"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, "quanepoxy@gmail.com")), Footer_jsx("div", {
    className: Footer_module_default.a.contactItem
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/facebook-2.svg",
    alt: "facebook"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, "fb.com/epoxyphuongnam"))), Footer_jsx("div", {
    className: Footer_module_default.a.copyRight
  }, Footer_jsx("div", {
    className: Footer_module_default.a.icon
  }, Footer_jsx("img", {
    src: "/icons/logo.svg",
    alt: "logo"
  })), Footer_jsx("div", {
    className: Footer_module_default.a.text
  }, "2020 \xA9 C\xF4ng Ty TNHH MTV X\xE2y D\u1EF1ng S\u01A1n Ph\u01B0\u01A1ng Nam")));

  return Footer_jsx(external_react_["Fragment"], null, isSmallDevice && renderSmallDeviceLayout(), isMediumLargeDevice && renderMediumLargeDeviceLayout());
}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/utils/formAction.ts
var formAction = __webpack_require__("BpYe");

// EXTERNAL MODULE: ./components/FormField/index.tsx
var FormField = __webpack_require__("V5nD");

// EXTERNAL MODULE: ./components/LoginRegister/Login/Login.module.scss
var Login_module = __webpack_require__("/u1C");
var Login_module_default = /*#__PURE__*/__webpack_require__.n(Login_module);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__("rCsO");
var external_react_google_login_default = /*#__PURE__*/__webpack_require__.n(external_react_google_login_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "react-facebook-login/dist/facebook-login-render-props"
var facebook_login_render_props_ = __webpack_require__("G4lZ");
var facebook_login_render_props_default = /*#__PURE__*/__webpack_require__.n(facebook_login_render_props_);

// CONCATENATED MODULE: ./components/LoginRegister/Login/index.tsx
var Login_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // @ts-ignore



function Login({
  user,
  loginUser,
  close,
  loginByGoogle,
  loginByGoogleError,
  loginUserError,
  loginByFacebookError,
  loginByFacebook
}) {
  const router = Object(router_["useRouter"])();
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])({
    formError: false,
    formSuccess: '',
    formdata: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Mật khẩu'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  });
  const {
    0: waiting,
    1: setWaiting
  } = Object(external_react_["useState"])(false);

  const userIcon = () => Login_jsx("img", {
    src: "/icons/user.svg",
    alt: "user"
  });

  const passwordIcon = () => Login_jsx("img", {
    src: "/icons/password.svg",
    alt: "password"
  });

  const updateForm = element => {
    const newFormdata = Object(formAction["c" /* update */])(element, form.formdata, 'login');
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      formError: false,
      formdata: newFormdata
    }));
  };

  const submitForm = e => {
    e.preventDefault();
    const dataToSubmit = Object(formAction["a" /* generateData */])(form.formdata, 'login');
    const formIsValid = Object(formAction["b" /* isFormValid */])(form.formdata, 'login'); // console.log(form.formdata);

    if (formIsValid) {
      loginUser(dataToSubmit);
      setWaiting(true);
    } else {
      setForm(_objectSpread(_objectSpread({}, form), {}, {
        formError: true
      }));
    }
  };

  const responseGoogle = data => {
    loginByGoogle({
      token: data.tokenId,
      name: data.profileObj.name,
      thirdPartyAvatar: data.profileObj.imageUrl,
      email: data.profileObj.email,
      googleId: data.googleId
    });
  };

  const responseFacebook = data => {
    // console.log(data);
    loginByFacebook({
      token: data.accessToken,
      name: data.name,
      email: data.email,
      facebookId: data.id,
      thirdPartyAvatar: data.picture.data.url
    });
  };

  const handlePress = event => {
    const code = event.keyCode || event.which;

    if (code === 13) {
      //13 is the enter keycode
      //Do stuff in here
      submitForm(event);
    }
  };

  Object(external_react_["useEffect"])(() => {
    if (user) {
      if (user.role > 0) {
        router.push('/admin');
      } else {
        close();
      }
    }
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    if (loginByGoogleError) {
      external_antd_["message"].error(loginByGoogleError);
    }
  }, [loginByGoogleError]);
  Object(external_react_["useEffect"])(() => {
    if (loginByFacebookError) {
      external_antd_["message"].error(loginByFacebookError);
    }
  }, [loginByFacebookError]);
  Object(external_react_["useEffect"])(() => {
    if (loginUserError) {
      setWaiting(false);

      if (loginUserError.includes('Sai mật khẩu')) {
        setForm(_objectSpread(_objectSpread({}, form), {}, {
          formdata: _objectSpread(_objectSpread({}, form.formdata), {}, {
            password: _objectSpread(_objectSpread({}, form.formdata.password), {}, {
              valid: false,
              validationMessage: 'Sai mật khẩu'
            })
          })
        }));
      } else if (loginUserError.includes('Không tìm thấy người dùng')) {
        setForm(_objectSpread(_objectSpread({}, form), {}, {
          formdata: _objectSpread(_objectSpread({}, form.formdata), {}, {
            email: _objectSpread(_objectSpread({}, form.formdata.email), {}, {
              valid: false,
              validationMessage: 'Không tìm thấy người dùng'
            })
          })
        }));
      } else if (loginUserError.includes('Không thể đăng nhập bằng cách này')) {
        external_antd_["message"].error('Email này không thể đăng nhập bằng cách này');
      } else {
        external_antd_["message"].error(loginUserError);
      }
    }
  }, [loginUserError]);
  return Login_jsx("div", {
    className: Login_module_default.a.loginWrapper
  }, Login_jsx("div", {
    className: Login_module_default.a.title
  }, "\u0110\u0102NG NH\u1EACP"), Login_jsx("form", {
    onSubmit: event => submitForm(event)
  }, Login_jsx(FormField["a" /* default */], {
    id: 'email',
    formdata: form.formdata.email,
    change: e => updateForm(e),
    Prefix: userIcon,
    press: e => handlePress(e)
  }), Login_jsx(FormField["a" /* default */], {
    id: 'password',
    formdata: form.formdata.password,
    change: e => updateForm(e),
    Prefix: passwordIcon,
    press: e => handlePress(e)
  }), form.formError && Login_jsx("div", {
    className: Login_module_default.a.errorLabel
  }, "Ki\u1EC3m tra l\u1EA1i th\xF4ng tin"), waiting && Login_jsx("div", {
    className: Login_module_default.a.waiting
  }, Login_jsx(CircularProgress_default.a, {
    className: Login_module_default.a.waitingIcon
  })), Login_jsx(Button_default.a, {
    onClick: event => submitForm(event),
    style: {
      backgroundColor: '#e91e63'
    },
    className: Login_module_default.a.button,
    size: "large",
    type: "submit"
  }, "X\xE1c nh\u1EADn")), Login_jsx("div", {
    className: Login_module_default.a.thirdAuthen
  }, Login_jsx(external_react_google_login_default.a, {
    clientId: "374918945235-8gdpha6da5h9sqva4mgi53ldreces79b.apps.googleusercontent.com",
    render: renderProps => Login_jsx("div", {
      className: Login_module_default.a.item,
      onClick: renderProps.onClick
    }, Login_jsx("div", {
      className: Login_module_default.a.icon
    }, Login_jsx("img", {
      src: "/icons/google.svg",
      alt: "google"
    })), Login_jsx("div", {
      className: Login_module_default.a.text
    }, "\u0110\u0103ng nh\u1EADp b\u1EB1ng Google")),
    buttonText: "Login",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin'
  }), Login_jsx(facebook_login_render_props_default.a, {
    appId: "659986671317584" // autoLoad
    ,
    fields: "name,email,picture,id",
    callback: responseFacebook,
    render: renderProps => Login_jsx("div", {
      className: Login_module_default.a.item,
      onClick: renderProps.onClick
    }, Login_jsx("div", {
      className: Login_module_default.a.icon
    }, Login_jsx("img", {
      src: "/icons/facebook.svg",
      alt: "facebook"
    })), Login_jsx("div", {
      className: Login_module_default.a.text
    }, "\u0110\u0103ng nh\u1EADp b\u1EB1ng Facebook"))
  })), Login_jsx("div", {
    className: Login_module_default.a.close,
    onClick: close
  }, Login_jsx("img", {
    src: "/icons/close.svg",
    alt: "close"
  })));
}

const Login_mapStateToProps = state => ({
  user: state.users.data,
  loginByGoogleError: state.users.loginByGoogleError,
  loginByFacebookError: state.users.loginByFacebookError,
  loginUserError: state.users.loginUserError
});

/* harmony default export */ var LoginRegister_Login = (Object(external_react_redux_["connect"])(Login_mapStateToProps, {
  loginUser: users["j" /* loginUser */],
  loginByGoogle: users["h" /* loginByGoogle */],
  loginByFacebook: users["f" /* loginByFacebook */]
})(Login));
// EXTERNAL MODULE: ./components/LoginRegister/LoginRegister.module.scss
var LoginRegister_module = __webpack_require__("nxKQ");
var LoginRegister_module_default = /*#__PURE__*/__webpack_require__.n(LoginRegister_module);

// CONCATENATED MODULE: ./components/LoginRegister/index.tsx
var LoginRegister_jsx = external_react_default.a.createElement;







function LoginRegister({
  registerLogin,
  toggleRegisterLogin
}) {
  const onClose = () => {
    toggleRegisterLogin(false, 'none');
  };

  return LoginRegister_jsx(external_antd_["Drawer"], {
    placement: "right",
    closable: false,
    onClose: onClose,
    visible: registerLogin.isOpen,
    width: 320
  }, LoginRegister_jsx("div", {
    className: LoginRegister_module_default.a.drawer
  }, registerLogin.status === 'login' && LoginRegister_jsx(LoginRegister_Login, {
    close: onClose
  })));
}

const LoginRegister_mapStateToProps = state => ({
  registerLogin: state.ui.registerLogin,
  user: state.users.data
});

/* harmony default export */ var components_LoginRegister = (Object(external_react_redux_["connect"])(LoginRegister_mapStateToProps, {
  toggleRegisterLogin: ui["c" /* toggleRegisterLogin */]
})(LoginRegister));
// EXTERNAL MODULE: ./components/ScrollToTop/ScrollToTop.module.scss
var ScrollToTop_module = __webpack_require__("sGdV");
var ScrollToTop_module_default = /*#__PURE__*/__webpack_require__.n(ScrollToTop_module);

// CONCATENATED MODULE: ./components/ScrollToTop/index.tsx
var ScrollToTop_jsx = external_react_default.a.createElement;


function ScrollToTop() {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return ScrollToTop_jsx("div", {
    className: show ? ScrollToTop_module_default.a.scollTopWrapper : ScrollToTop_module_default.a.scollTopWrapperHidden,
    onClick: handleClick
  }, ScrollToTop_jsx("img", {
    src: "/icons/upload.svg",
    alt: "scroll-top"
  }));
}
// EXTERNAL MODULE: ./components/ClientChatBubble/ChatBubble.module.scss
var ChatBubble_module = __webpack_require__("YwkR");
var ChatBubble_module_default = /*#__PURE__*/__webpack_require__.n(ChatBubble_module);

// EXTERNAL MODULE: ./components/ChatWindow/index.tsx + 2 modules
var ChatWindow = __webpack_require__("Dm74");

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: ./components/utils/scrollBottom.ts
var scrollBottom = __webpack_require__("giyP");

// EXTERNAL MODULE: ./config/axios.ts
var axios = __webpack_require__("euk0");

// CONCATENATED MODULE: ./components/ClientChatBubble/index.tsx
var ClientChatBubble_jsx = external_react_default.a.createElement;





 // @ts-ignore






function ChatBubble({
  openChatBubble,
  toggleChatBubble,
  user,
  toggleRegisterLogin
}) {
  const {
    0: messages,
    1: setMessages
  } = Object(external_react_["useState"])([]);
  const {
    0: isOnline,
    1: setOnline
  } = Object(external_react_["useState"])(false);
  const socketRef = Object(external_react_["useRef"])();

  const handleOpenChat = () => {
    toggleChatBubble(true);

    if (user) {
      // @ts-ignore
      socketRef.current.emit('Set seen', {
        user: 'Admin',
        roomId: user._id
      });
    }
  };

  const handleCloseChat = () => {
    toggleChatBubble(false);
  };

  const handleOpenLogin = () => {
    toggleRegisterLogin(true, 'login');
  };

  const handleSendMessage = text => {
    if (text) {
      // @ts-ignore
      socketRef.current.emit('Chat Message', {
        data: {
          roomId: user._id,
          message: text,
          sender: user.name,
          type: 'text',
          createdAt: Date.now(),
          roomName: user.name
        },
        roomId: user._id
      }); // @ts-ignore
    }
  };

  Object(external_react_["useEffect"])(() => {
    socketRef.current = external_socket_io_client_default()();

    if (user) {
      // @ts-ignore
      socketRef.current.emit('Login', {
        userId: user._id
      }); // @ts-ignore

      socketRef.current.emit('Join room', {
        roomId: user._id
      });

      try {
        axios["a" /* default */].post('/messages', {
          roomId: user._id
        }).then(res => {
          if (res.data.messages.length) {
            setMessages(res.data.messages); // console.log(res.data.messages);
          } else {
            // @ts-ignore
            socketRef.current.emit('Initialize Chat', {
              roomId: user._id,
              roomName: user.name
            });
          }
        });
      } catch (error) {
        external_antd_["message"].error(error.response.error);
      } // @ts-ignore


      socketRef.current.on('Chat Message', msg => {
        // @ts-ignore
        setMessages(oldMessages => [...oldMessages, msg]);
      }); // @ts-ignore

      socketRef.current.on('Chat Error', err => {
        external_antd_["message"].error(err.response);
      }); // @ts-ignore

      socketRef.current.on('Active Users', data => {
        const dataArr = Object.values(data);

        if (dataArr.includes('Admin')) {
          setOnline(true);
        } else {
          setOnline(false);
        }
      }); // @ts-ignore

      socketRef.current.on('Set Seen', () => {
        axios["a" /* default */].post('/messages', {
          roomId: user._id
        }).then(res => {
          setMessages(res.data.messages);
        });
      });
    } else {
      toggleChatBubble(false);
    }
  }, [user]);

  const handleSetSeen = () => {
    if (user) {
      // @ts-ignore
      socketRef.current.emit('Set seen', {
        user: 'Admin',
        roomId: user._id
      });
    }
  };

  Object(external_react_["useEffect"])(() => {
    if (openChatBubble) {
      Object(scrollBottom["a" /* default */])();
    }
  }, [messages, openChatBubble]);
  return ClientChatBubble_jsx(external_react_default.a.Fragment, null, openChatBubble ? ClientChatBubble_jsx(ChatWindow["a" /* default */], {
    user: user,
    handleOpenLogin: handleOpenLogin,
    handleSendMessage: handleSendMessage,
    handleCloseChat: handleCloseChat,
    messages: messages,
    isOnline: isOnline,
    roomInfo: true,
    handleClick: handleSetSeen
  }) : ClientChatBubble_jsx("div", {
    className: ChatBubble_module_default.a.icon,
    onClick: handleOpenChat
  }, ClientChatBubble_jsx("img", {
    src: "/icons/chat.svg",
    alt: "chat"
  })));
}

const ClientChatBubble_mapStateToProps = state => ({
  openChatBubble: state.ui.openChatBubble,
  user: state.users.data
});

/* harmony default export */ var ClientChatBubble = (Object(external_react_redux_["connect"])(ClientChatBubble_mapStateToProps, {
  toggleChatBubble: ui["b" /* toggleChatBubble */],
  toggleRegisterLogin: ui["c" /* toggleRegisterLogin */]
})(ChatBubble));
// CONCATENATED MODULE: ./layouts/MainLayout/index.tsx
var MainLayout_jsx = external_react_default.a.createElement;









function MainLayout({
  children,
  title,
  contacts,
  user
}) {
  return MainLayout_jsx(external_react_["Fragment"], null, MainLayout_jsx(head_default.a, null, MainLayout_jsx("title", {
    key: "title"
  }, title), MainLayout_jsx("link", {
    rel: "icon",
    href: "/icons/logo.svg"
  }), MainLayout_jsx("meta", {
    name: "description",
    key: "description",
    content: "Chuy\xEAn cung c\u1EA5p c\xE1c d\u1ECBch v\u1EE5 thi c\xF4ng s\u01A1n epoxy, s\u01A1n n\u1EC1n nh\xE0 x\u01B0\u1EDFng, ch\u1ED1ng th\u1EA5m chuy\xEAn nghi\u1EC7p. B\xE1n v\xE0 ph\xE2n ph\u1ED1i c\xE1c s\u1EA3n ph\u1EA9m s\u01A1n epoxy H\xE0n qu\u1ED1c, \u0110\xE0i Loan... ch\xEDnh h\xE3ng gi\xE1 r\u1EBB \u1EDF Tp. H\u1ED3 Ch\xED Minh."
  }), MainLayout_jsx("meta", {
    property: "og:type",
    content: "website"
  }), MainLayout_jsx("meta", {
    property: "og:image",
    content: "https://i.imgur.com/yGP7IhH.jpg"
  }), MainLayout_jsx("meta", {
    property: "og:image:type",
    content: "image/jpg"
  }), MainLayout_jsx("meta", {
    property: "og:image:width",
    content: "1200"
  }), MainLayout_jsx("meta", {
    property: "og:image:height",
    content: "630"
  }), MainLayout_jsx("meta", {
    property: "og:image:alt",
    content: "son-phuong-nam"
  }), MainLayout_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap",
    rel: "stylesheet"
  })), MainLayout_jsx(components_Header, null), children, MainLayout_jsx(components_LoginRegister, null), MainLayout_jsx(ScrollToTop, null), (!user || user.role == 0) && MainLayout_jsx(ClientChatBubble, null), MainLayout_jsx(Footer, {
    contacts: contacts
  }));
}

const MainLayout_mapStateToProps = state => ({
  user: state.users.data
});

/* harmony default export */ var layouts_MainLayout = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(MainLayout_mapStateToProps)(MainLayout));

/***/ }),

/***/ "M71N":
/***/ (function(module, exports) {

module.exports = require("@tinymce/tinymce-react");

/***/ }),

/***/ "NNXn":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "Oi/m":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"chatWrapper": "ChatWindow_chatWrapper__3IgLs",
	"zoom": "ChatWindow_zoom__oNIcQ",
	"top": "ChatWindow_top__2SnIt",
	"admin": "ChatWindow_admin__18G8A",
	"leftAdmin": "ChatWindow_leftAdmin__6mk-o",
	"rightAdmin": "ChatWindow_rightAdmin__26iMR",
	"name": "ChatWindow_name__2P4M-",
	"status": "ChatWindow_status__3h-qn",
	"statusOffline": "ChatWindow_statusOffline__rKbs_",
	"close": "ChatWindow_close__13Jnu",
	"middle": "ChatWindow_middle__25t06",
	"text": "ChatWindow_text__2dKp9",
	"senderText": "ChatWindow_senderText__BH4x-",
	"normalText": "ChatWindow_normalText__3JihB",
	"time": "ChatWindow_time__3i2l0",
	"seen": "ChatWindow_seen__y9kIA",
	"bottom": "ChatWindow_bottom__g2801",
	"inputWrapper": "ChatWindow_inputWrapper__1wCZS",
	"input": "ChatWindow_input__34HXF",
	"send": "ChatWindow_send__1aQGR",
	"attachWrapper": "ChatWindow_attachWrapper__2i1Ly",
	"attachItem": "ChatWindow_attachItem__15keH",
	"requireLogin": "ChatWindow_requireLogin__1Hyqg",
	"item": "ChatWindow_item__Rk8ko",
	"icon": "ChatWindow_icon__1UACA"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QtEk":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"topPost": "Post_topPost__2MPpn",
	"dateTag": "Post_dateTag__20FRd",
	"icon": "Post_icon__25olY",
	"postTitle": "Post_postTitle__2CKh1",
	"seperate": "Post_seperate__3emGJ",
	"content": "Post_content__1AFuI"
};


/***/ }),

/***/ "R8/4":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"relatedPostWrapper": "RelatedPost_relatedPostWrapper__3JKii",
	"title": "RelatedPost_title__1GAW5"
};


/***/ }),

/***/ "V5nD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M71N");
/* harmony import */ var _tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Formfield = ({
  formdata,
  change,
  id,
  Prefix,
  press
}) => {
  const showError = () => {
    let errorMessage = null;

    if (formdata.validation && !formdata.valid) {
      errorMessage = __jsx("span", null, formdata.validationMessage);
    }

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case 'input':
        formTemplate = __jsx("div", null, formdata.showlabel ? __jsx("p", null, formdata.config.label) : null, Prefix && __jsx(Prefix, null), __jsx("input", _extends({}, formdata.config, {
          value: formdata.value,
          onBlur: event => change({
            event,
            id,
            blur: true
          }),
          onChange: event => change({
            event,
            id
          }),
          autoComplete: "off",
          onKeyPress: event => {
            press ? press(event) : null;
          }
        })), showError());
        break;

      case 'select':
        formTemplate = __jsx("div", {
          className: "formBlock"
        }, formdata.showlabel ? __jsx("p", null, formdata.config.label) : null, __jsx("select", {
          value: formdata.value,
          onBlur: event => change({
            event,
            id,
            blur: true
          }),
          onChange: event => change({
            event,
            id
          })
        }, formdata.config.options.map((item, i) => __jsx("option", {
          key: i,
          value: item.key
        }, item.value))), showError());
        break;

      case 'textarea':
        formTemplate = __jsx("div", {
          className: "formBlock"
        }, formdata.showlabel ? __jsx("div", {
          className: "label_inputs"
        }, formdata.config.label) : null, __jsx("textarea", _extends({}, formdata.config, {
          value: formdata.value,
          onBlur: event => change({
            event,
            id,
            blur: true
          }),
          onChange: event => change({
            event,
            id
          })
        })), showError());
        break;

      case 'image':
        const loadImage = event => {
          const output = document.getElementById('output'); // @ts-ignore

          output.src = URL.createObjectURL(event.target.files[0]); // @ts-ignore

          output.onload = function () {
            // @ts-ignore
            URL.revokeObjectURL(output.src); // free memory
          };
        };

        formTemplate = __jsx("div", null, formdata.showlabel ? __jsx("p", null, formdata.config.label) : null, __jsx("input", _extends({}, formdata.config, {
          autoComplete: "off",
          accept: "image/*",
          type: "file",
          onChange: event => {
            loadImage(event);
            change({
              event,
              id
            });
          }
        })), showError(), __jsx("img", {
          id: "output"
        }), typeof formdata.value === 'string' && formdata.value !== '' && __jsx("img", {
          src: formdata.value
        }));
        break;

      case 'rich_text':
        formTemplate = __jsx("div", null, formdata.showlabel ? __jsx("p", null, formdata.config.label) : null, __jsx(_tinymce_tinymce_react__WEBPACK_IMPORTED_MODULE_1__["Editor"], {
          initialValue: formdata.value,
          init: {
            height: 500,
            menubar: 'insert',
            // images_upload_url: '/api/post/image',
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
            toolbar: 'undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | image |help',
            // @ts-ignore
            file_picker_callback: function (cb, value, meta) {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              /*
                  Note: In modern browsers input[type="file"] is functional without
                  even adding it to the DOM, but that might not be the case in some older
                  or quirky browsers like IE, so you might want to add it to the DOM
                  just in case, and visually hide it. And do not forget do remove it
                  once you do not need it anymore.
                */

              input.onchange = function () {
                // @ts-ignore
                const file = this.files[0];
                const reader = new FileReader();

                reader.onload = function () {
                  /*
                      Note: Now we need to register the blob in TinyMCEs image blob
                      registry. In the next release this part hopefully won't be
                      necessary, as we are looking to handle it internally.
                    */
                  const id = 'blobid' + new Date().getTime(); // @ts-ignore

                  const blobCache = tinymce.activeEditor.editorUpload.blobCache; // @ts-ignore

                  const base64 = reader.result.split(',')[1];
                  const blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
                  /* call the callback and populate the Title field with the file name */

                  cb(blobInfo.blobUri(), {
                    title: file.name
                  });
                };

                reader.readAsDataURL(file);
              };

              input.click();
            },
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          },
          onEditorChange: event => change({
            event,
            id
          })
        }), showError());
        break;

      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderTemplate());
};

/* harmony default export */ __webpack_exports__["a"] = (Formfield);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "WxnA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaveBackGroundLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WaveBackgroundLayout_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z9DI");
/* harmony import */ var _WaveBackgroundLayout_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_WaveBackgroundLayout_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function WaveBackGroundLayout({
  children
}) {
  return __jsx("div", {
    className: _WaveBackgroundLayout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wave
  }, __jsx("img", {
    src: "/images/wave.png",
    alt: "wave"
  }), __jsx("div", {
    className: _WaveBackgroundLayout_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.children
  }, children));
}

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YIbT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toggleRegisterLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toggleChatBubble; });
const Types = {
  TOGGLE_REGISTER_LOGIN: 'ui/toggle-register-login',
  TOGGLE_CHAT_BUBBLE: 'ui/toggle-chat-bubble'
};
const toggleRegisterLogin = (isOpen, status) => ({
  type: Types.TOGGLE_REGISTER_LOGIN,
  payload: {
    isOpen,
    status
  }
});
const toggleChatBubble = isOpen => ({
  type: Types.TOGGLE_CHAT_BUBBLE,
  payload: {
    isOpen
  }
});

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YwkR":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"icon": "ChatBubble_icon__31wos"
};


/***/ }),

/***/ "c0DF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"projects": "Projects_projects__2s0hl",
	"title": "Projects_title__YSr5R",
	"cardsWrapper": "Projects_cardsWrapper__3MNzo"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eZpf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("euk0");
/* harmony import */ var layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("L7kf");
/* harmony import */ var components_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2vEZ");
/* harmony import */ var components_RelatedPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("o2PS");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ServiceDetail({
  postData,
  siteInfo,
  services
}) {
  // console.log(postData);
  return __jsx(layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: `${postData.title}`,
    contacts: siteInfo
  }, __jsx(components_Post__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    postData: postData
  }), __jsx(components_RelatedPost__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: "D\u1ECBch v\u1EE5 li\xEAn quan",
    type: "service",
    posts: services,
    disableBackground: true,
    disableTitle: true
  }));
}
async function getStaticPaths() {
  const paths = await config_axios__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('/posturls?type=service'); // console.log(paths.data.paths);

  return {
    paths: paths.data.paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const postData = await config_axios__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`/post/${params.id}`);
  const siteInfo = await config_axios__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('/site/info');
  const services = await config_axios__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get('/posts?type=service');
  return {
    props: {
      postData: postData.data.post,
      siteInfo: siteInfo.data.site.siteInfo,
      services: services.data.posts
    },
    revalidate: 1
  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "euk0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basedUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8nVP");


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${_basedUrl__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]}/api`
  /* other custom settings */

});
/* harmony default export */ __webpack_exports__["a"] = (axiosInstance);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gifY":
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "giyP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const scrollToBottom = () => {
  const textEl = document.getElementById('text'); // @ts-ignore

  if (textEl) {
    textEl.scrollTop = textEl.scrollHeight;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (scrollToBottom);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "ksxi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var config_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("euk0");
/* harmony import */ var _UserAvatar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("upzQ");
/* harmony import */ var _UserAvatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UserAvatar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var config_basedUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8nVP");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function UserAvatar({
  userId
}) {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    config_axios__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(`/user/${userId}/`).then(res => setUser(res.data.user));
  }, []);

  if (!user) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
      avatar: true
    });
  } else {
    // @ts-ignore
    if (user.avatar) {
      return __jsx("div", {
        className: _UserAvatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: `${config_basedUrl__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]}/api/user/avatar`
      })); // @ts-ignore
    } else if (user.thirdPartyAvatar) {
      return __jsx("div", {
        className: _UserAvatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        src: user.thirdPartyAvatar
      })); // @ts-ignore
    } else if (!user.avatar) {
      return __jsx("div", {
        className: _UserAvatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        className: _UserAvatar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatarName
      }, user.name[0]));
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (UserAvatar);

/***/ }),

/***/ "kzqI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3f33N",
	"copyRight": "Footer_copyRight__2cQd0",
	"icon": "Footer_icon__1lthJ",
	"contact": "Footer_contact__2nhW8",
	"contactItem": "Footer_contactItem__3Ps1j",
	"slogan": "Footer_slogan__2i23f",
	"logo": "Footer_logo__266gj",
	"logoWrapper": "Footer_logoWrapper__LR7cu",
	"text": "Footer_text__2cCMo",
	"name": "Footer_name__3wSMM"
};


/***/ }),

/***/ "n2ni":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Projects; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Projects/Projects.module.scss
var Projects_module = __webpack_require__("c0DF");
var Projects_module_default = /*#__PURE__*/__webpack_require__.n(Projects_module);

// EXTERNAL MODULE: ./components/ProjectCard/Card.module.scss
var Card_module = __webpack_require__("CuGD");
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./config/basedUrl.ts
var basedUrl = __webpack_require__("8nVP");

// CONCATENATED MODULE: ./components/ProjectCard/index.tsx
var __jsx = external_react_default.a.createElement;


 // @ts-ignore




function Card({
  title,
  urlTitle,
  date,
  type
}) {
  const formatDate = external_moment_default()(date).format('DD/MM/YYYY');
  const router = Object(router_["useRouter"])();

  const handleClick = () => {
    if (type === 'project') {
      router.push(`/du-an/${urlTitle}`);
    } else {
      router.push(`/kien-thuc/${urlTitle}`);
    }
  };

  return __jsx("div", {
    className: Card_module_default.a.cardWrapper,
    onClick: handleClick
  }, __jsx(Fade_default.a, {
    bottom: true
  }, __jsx("div", {
    className: Card_module_default.a.card,
    style: {
      background: `url('${basedUrl["a" /* default */]}/api/post/image/${urlTitle}')`
    }
  }, __jsx("div", {
    className: Card_module_default.a.dateWrapper
  }, __jsx("div", {
    className: Card_module_default.a.dateIcon
  }, __jsx("img", {
    src: "/icons/clock.svg",
    alt: "clock"
  })), __jsx("div", {
    className: Card_module_default.a.date
  }, formatDate)), __jsx("div", {
    className: Card_module_default.a.contentWrapper
  }, __jsx("div", {
    className: Card_module_default.a.wave
  }, __jsx("img", {
    src: "/images/wave-white.svg",
    alt: "wave"
  })), __jsx("div", {
    className: Card_module_default.a.title
  }, title)))));
}
// EXTERNAL MODULE: ./components/SeeMoreButton/index.tsx
var SeeMoreButton = __webpack_require__("1LRZ");

// CONCATENATED MODULE: ./components/Projects/index.tsx
var Projects_jsx = external_react_default.a.createElement;




function Projects({
  projects,
  disableTitle,
  disableLoadMore
}) {
  return Projects_jsx("div", {
    className: Projects_module_default.a.projects
  }, !disableTitle && Projects_jsx("div", {
    className: Projects_module_default.a.title
  }, "D\u1EF0 \xC1N M\u1EDAI NH\u1EA4T"), Projects_jsx("div", {
    className: Projects_module_default.a.cardsWrapper
  }, projects.map((item, i) => {
    if (item.publish) {
      return Projects_jsx(Card, {
        title: item.title,
        data: item.date,
        urlTitle: item.urlTitle,
        key: i,
        type: item.type
      });
    }
  })), !disableLoadMore && Projects_jsx(SeeMoreButton["a" /* default */], {
    link: "/du-an"
  }));
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "nxKQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"drawer": "LoginRegister_drawer__1I4X4"
};


/***/ }),

/***/ "o2PS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatedPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RelatedPost_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R8/4");
/* harmony import */ var _RelatedPost_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RelatedPost_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServicesComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9N20");
/* harmony import */ var components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("n2ni");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RelatedPost({
  posts,
  title,
  type,
  disableBackground,
  disableTitle
}) {
  return __jsx("div", {
    className: _RelatedPost_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.relatedPostWrapper
  }, __jsx("div", {
    className: _RelatedPost_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title
  }, title), type === 'service' ? __jsx("div", {
    className: _RelatedPost_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.servicesWrapper
  }, __jsx(_ServicesComponent__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    services: posts,
    disableBackground: disableBackground,
    disableTitle: disableTitle
  })) : __jsx("div", {
    className: _RelatedPost_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.postsWrapper
  }, __jsx(components_Projects__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    projects: posts,
    disableTitle: disableTitle,
    disableLoadMore: true
  })));
}

/***/ }),

/***/ "oQai":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "Services_title__CIQfd",
	"servicesWrapper": "Services_servicesWrapper__2e2v7",
	"item": "Services_item__2Cd0V",
	"icon": "Services_icon__1qCug",
	"name": "Services_name__2kVNv"
};


/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sGdV":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"scollTopWrapper": "ScrollToTop_scollTopWrapper__1nKIX",
	"scollTopWrapperHidden": "ScrollToTop_scollTopWrapperHidden__yVq-9"
};


/***/ }),

/***/ "upzQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"avatar": "UserAvatar_avatar__13rcE"
};


/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yzvi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__OkoDL",
	"slogan": "Header_slogan__2edRp",
	"register": "Header_register__2Huvs",
	"avatarWrapper": "Header_avatarWrapper__1Zr_Z",
	"name": "Header_name__1exKz",
	"logo": "Header_logo__1QUnI",
	"logoWrapper": "Header_logoWrapper__3edp8",
	"text": "Header_text__2Pdn3",
	"right": "Header_right__BAWsX",
	"avatar": "Header_avatar__1TzBd",
	"avatarName": "Header_avatarName__3P7-P",
	"down": "Header_down__alOtN",
	"cart": "Header_cart__2_468",
	"loginRegister": "Header_loginRegister__jnBjV",
	"login": "Header_login__1JtM2",
	"menuWrapper": "Header_menuWrapper__3udCa",
	"menuItem": "Header_menuItem__2DYDT",
	"topMenu": "Header_topMenu__Vsx4J",
	"icon": "Header_icon__2JMEy",
	"top": "Header_top__1zHdf",
	"menu": "Header_menu__O3ZZE"
};


/***/ }),

/***/ "z9DI":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wave": "WaveBackgroundLayout_wave__2O8mP",
	"children": "WaveBackgroundLayout_children__59GBZ"
};


/***/ }),

/***/ "zKpT":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });