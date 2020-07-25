(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./app/components/User.js":
/*!********************************!*\
  !*** ./app/components/User.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/api */ \"./app/util/api.js\");\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/helpers */ \"./app/util/helpers.js\");\n/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./News */ \"./app/components/News.js\");\n/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/theme */ \"./app/context/theme.js\");\n/* harmony import */ var _custom_hooks_useOnScrollBottom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-hooks/useOnScrollBottom */ \"./app/custom-hooks/useOnScrollBottom.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction User(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    created: null,\n    id: null,\n    karma: null,\n    submitted: [],\n    isLoading: true,\n    error: null\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      state = _useState2[0],\n      setState = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.parse(props.location.search),\n        id = _queryString$parse.id;\n\n    Object(_util_api__WEBPACK_IMPORTED_MODULE_2__[\"fetchPostsByUser\"])(id).then(function (_ref) {\n      var id = _ref.id,\n          karma = _ref.karma,\n          submitted = _ref.submitted,\n          created = _ref.created;\n      setState(function (prevState) {\n        return _objectSpread(_objectSpread({}, prevState), {}, {\n          id: id,\n          karma: karma,\n          submitted: submitted,\n          created: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(created),\n          isLoading: false\n        });\n      });\n    })[\"catch\"](function (error) {\n      return setState(function (prevState) {\n        return _objectSpread(_objectSpread({}, prevState), {}, {\n          error: error,\n          isLoading: false\n        });\n      });\n    });\n  }, [props.location.search]);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n      theme = _useContext.theme;\n\n  var id = state.id,\n      karma = state.karma,\n      submitted = state.submitted,\n      created = state.created,\n      isLoading = state.isLoading,\n      error = state.error;\n\n  var _useOnScrollBottom = Object(_custom_hooks_useOnScrollBottom__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(error, isLoading, submitted),\n      limitedIDs = _useOnScrollBottom.limitedIDs,\n      hasMore = _useOnScrollBottom.hasMore;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Loading...\") : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, error.message) : karma && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    className: \"nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: {\n      marginBottom: \"5px\"\n    }\n  }, id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"subtitle-\".concat(theme)\n  }, \"joined\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, created), \" \", \"has\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, karma), \" \", \"karma\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Posts\")), limitedIDs.map(function (id) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_News__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      newsID: id,\n      key: id\n    });\n  }), !hasMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"You did it! You reached the end! That's all Posts I have for now! \\uD83D\\uDD1A\")));\n}\n\n//# sourceURL=webpack:///./app/components/User.js?");

/***/ })

}]);