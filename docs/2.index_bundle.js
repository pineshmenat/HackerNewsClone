(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/components/News.js":
/*!********************************!*\
  !*** ./app/components/News.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return News; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/api */ \"./app/util/api.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Subtitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subtitle */ \"./app/components/Subtitle.js\");\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/helpers */ \"./app/util/helpers.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar News = /*#__PURE__*/function (_React$Component) {\n  _inherits(News, _React$Component);\n\n  var _super = _createSuper(News);\n\n  function News() {\n    var _this;\n\n    _classCallCheck(this, News);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      id: null,\n      url: null,\n      title: null,\n      by: null,\n      time: null,\n      descendants: null,\n      isLoading: true,\n      error: null\n    });\n\n    return _this;\n  }\n\n  _createClass(News, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var newsID = this.props.newsID;\n      Object(_util_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchNewsById\"])(newsID).then(function (_ref) {\n        var id = _ref.id,\n            url = _ref.url,\n            title = _ref.title,\n            by = _ref.by,\n            time = _ref.time,\n            descendants = _ref.descendants;\n\n        _this2.setState({\n          id: id,\n          url: url,\n          title: title,\n          by: by,\n          time: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(time),\n          descendants: descendants,\n          isLoading: false\n        });\n      })[\"catch\"](function (error) {\n        return _this2.setState({\n          error: error,\n          isLoading: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          id = _this$state.id,\n          url = _this$state.url,\n          title = _this$state.title,\n          by = _this$state.by,\n          time = _this$state.time,\n          descendants = _this$state.descendants,\n          isLoading = _this$state.isLoading,\n          error = _this$state.error;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading...\") : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, error.message) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        className: \"news-li\"\n      }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"news\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"title\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: url\n      }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Subtitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: id,\n        by: by,\n        time: time,\n        descendants: descendants\n      }))));\n    }\n  }]);\n\n  return News;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./app/components/News.js?");

/***/ }),

/***/ "./app/components/Subtitle.js":
/*!************************************!*\
  !*** ./app/components/Subtitle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Subtitle; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Subtitle(_ref) {\n  var id = _ref.id,\n      by = _ref.by,\n      time = _ref.time,\n      descendants = _ref.descendants;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"subtitle\"\n  }, \"by \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: {\n      pathname: \"/user\",\n      search: \"?id=\".concat(by)\n    }\n  }, by), \" on \".concat(time, \" with \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: {\n      pathname: \"/post\",\n      search: \"?id=\".concat(id)\n    }\n  }, \"\".concat(descendants)), \" comments\");\n}\nSubtitle.propTypes = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,\n  by: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  time: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,\n  descendants: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number\n};\n\n//# sourceURL=webpack:///./app/components/Subtitle.js?");

/***/ }),

/***/ "./app/components/TopNews.js":
/*!***********************************!*\
  !*** ./app/components/TopNews.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TopNews; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ \"./app/components/News.js\");\n/* harmony import */ var _util_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/api.js */ \"./app/util/api.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar TopNews = /*#__PURE__*/function (_React$Component) {\n  _inherits(TopNews, _React$Component);\n\n  var _super = _createSuper(TopNews);\n\n  function TopNews() {\n    var _this;\n\n    _classCallCheck(this, TopNews);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      newsIDs: [],\n      isLoading: true,\n      error: null\n    });\n\n    return _this;\n  }\n\n  _createClass(TopNews, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.handlefetch();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (prevProps.type !== this.props.type) this.handlefetch();\n    }\n  }, {\n    key: \"handlefetch\",\n    value: function handlefetch() {\n      var _this2 = this;\n\n      var type = this.props.type;\n      console.log(type);\n      Object(_util_api_js__WEBPACK_IMPORTED_MODULE_2__[\"fetchNewsIDsByType\"])(type).then(function (newsIDs) {\n        return _this2.setState({\n          newsIDs: newsIDs,\n          isLoading: false\n        });\n      })[\"catch\"](function (error) {\n        return _this2.setState({\n          error: error,\n          isLoading: false\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          isLoading = _this$state.isLoading,\n          error = _this$state.error,\n          newsIDs = _this$state.newsIDs;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, isLoading === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading...\") : error !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Error!\") : newsIDs.map(function (id) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_News__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          newsID: id,\n          key: id\n        });\n      }));\n    }\n  }]);\n\n  return TopNews;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./app/components/TopNews.js?");

/***/ }),

/***/ "./app/util/api.js":
/*!*************************!*\
  !*** ./app/util/api.js ***!
  \*************************/
/*! exports provided: fetchNewsIDsByType, fetchNewsById, fetchCommentsById, fetchPostsByUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNewsIDsByType\", function() { return fetchNewsIDsByType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchNewsById\", function() { return fetchNewsById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCommentsById\", function() { return fetchCommentsById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPostsByUser\", function() { return fetchPostsByUser; });\nfunction fetchNewsIDsByType() {\n  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';\n  return fetch(\"https://hacker-news.firebaseio.com/v0/\".concat(type, \"stories.json?print=pretty\")).then(function (res) {\n    return res.json();\n  }).then(function (ids) {\n    return ids.slice(0, 50);\n  });\n}\nfunction fetchNewsById(newsId) {\n  if (typeof newsId == 'undefined') return Promise.reject(new Error(\"please provide newsId\"));\n  return fetch(\"https://hacker-news.firebaseio.com/v0/item/\".concat(newsId, \".json?print=pretty\")).then(function (res) {\n    return res.json();\n  }).then(function (news) {\n    return news;\n  });\n}\nfunction fetchCommentsById(commentId) {\n  // if (typeof commentId == 'undefined') return Promise.reject(new Error(\"please provide commentId\"));\n  return fetch(\"https://hacker-news.firebaseio.com/v0/item/\".concat(commentId, \".json?print=pretty\")).then(function (res) {\n    return res.json();\n  }).then(function (comment) {\n    return comment;\n  });\n}\nfunction fetchPostsByUser(userId) {\n  return fetch(\"https://hacker-news.firebaseio.com/v0/user/\".concat(userId, \".json?print=pretty\")).then(function (res) {\n    return res.json();\n  }).then(function (user) {\n    return user;\n  });\n}\n\n//# sourceURL=webpack:///./app/util/api.js?");

/***/ }),

/***/ "./app/util/helpers.js":
/*!*****************************!*\
  !*** ./app/util/helpers.js ***!
  \*****************************/
/*! exports provided: formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\nfunction formatDate(time) {\n  return new Date(time * 1000).toLocaleDateString(\"en-US\", {\n    hour: \"numeric\",\n    minute: \"numeric\"\n  });\n}\n\n//# sourceURL=webpack:///./app/util/helpers.js?");

/***/ })

}]);