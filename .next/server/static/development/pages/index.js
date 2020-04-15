module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Character/Character.js":
/*!*******************************************!*\
  !*** ./components/Character/Character.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Character; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/Character/Character.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Character(props) {
  const {
    character
  } = props;
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: '15rem',
      float: 'left',
      margin: '1rem 15px 0 0',
      height: '29rem'
    },
    key: character.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "image-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Img, {
    variant: "top",
    src: character.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "char-name-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, character.name), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "ID: ", character.id, " "), "-", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 54
    }
  }, " Created: ", moment__WEBPACK_IMPORTED_MODULE_1___default()(character.created).fromNow()))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    variant: "flush",
    style: {
      fontSize: '12px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "desc-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, "Status:"), __jsx("span", {
    className: "desc-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, character.status)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "desc-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, "Species:"), __jsx("span", {
    className: "desc-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  }, character.species)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "desc-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "Gender:"), __jsx("span", {
    className: "desc-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, character.gender)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "desc-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, "Origin:"), __jsx("span", {
    className: "desc-value",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, character.origin.name))))));
}

/***/ }),

/***/ "./components/CharacterFilters/CharacterFilters.connect.js":
/*!*****************************************************************!*\
  !*** ./components/CharacterFilters/CharacterFilters.connect.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CharacterFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharacterFilters */ "./components/CharacterFilters/CharacterFilters.js");




function mapStateToProps(state) {
  return {
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_CharacterFilters__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/CharacterFilters/CharacterFilters.js":
/*!*********************************************************!*\
  !*** ./components/CharacterFilters/CharacterFilters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterFilters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filters_Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Filters/Filters */ "./components/Filters/Filters.js");
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/CharacterFilters/CharacterFilters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const filtersData = {
  "species": {
    "label": "Species",
    "data": ["Human", "Mythology", "Other"]
  }
};
function CharacterFilters(props) {
  const filters = props.filters;

  function onSpeciesFilterChange(filters) {
    props.onFilterChange && props.onFilterChange({
      species: filters
    });
  }

  function onGenderFilterChange(filters) {
    props.onFilterChange && props.onFilterChange({
      gender: filters
    });
  }

  function onStatusFilterChange(filters) {
    props.onFilterChange && props.onFilterChange({
      status: filters
    });
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, filters.species.length > 0 && __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Species",
    filters: filters.species,
    onFilterChange: onSpeciesFilterChange,
    selectedFilters: props.filtersApplied.species,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), filters.gender.length > 0 && __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Gender",
    filters: filters.gender,
    onFilterChange: onGenderFilterChange,
    selectedFilters: props.filtersApplied.gender,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), filters.status.length > 0 && __jsx(_Filters_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Status",
    filters: filters.status,
    onFilterChange: onStatusFilterChange,
    selectedFilters: props.filtersApplied.status,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }));
}

/***/ }),

/***/ "./components/CharacterFiltersApplied/CharacterFiltersApplied.connect.js":
/*!*******************************************************************************!*\
  !*** ./components/CharacterFiltersApplied/CharacterFiltersApplied.connect.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CharacterFiltersApplied__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharacterFiltersApplied */ "./components/CharacterFiltersApplied/CharacterFiltersApplied.js");




function mapStateToProps(state) {
  return {
    filtersApplied: state.filtersApplied
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_CharacterFiltersApplied__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./components/CharacterFiltersApplied/CharacterFiltersApplied.js":
/*!***********************************************************************!*\
  !*** ./components/CharacterFiltersApplied/CharacterFiltersApplied.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterFiltersApplied; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/CharacterFiltersApplied/CharacterFiltersApplied.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CharacterFiltersApplied(props) {
  const filters = props.filtersApplied;

  function removeFilter(filterCategory, filter) {
    props.onAppliedFilterRemove && props.onAppliedFilterRemove(filterCategory, filter);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object.keys(filters || {}).map(filterCategory => (filters[filterCategory] || []).map(filter => filter ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    style: {
      marginRight: '10px',
      marginBottom: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 34
    }
  }, filter, " ", __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    variant: "light",
    onClick: () => removeFilter(filterCategory, filter),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 125
    }
  }, "X")) : null)));
}

/***/ }),

/***/ "./components/CharacterList/CharacterList.js":
/*!***************************************************!*\
  !*** ./components/CharacterList/CharacterList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Character_Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Character/Character */ "./components/Character/Character.js");
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/CharacterList/CharacterList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CharacterList(props) {
  return props.characters.map(character => __jsx(_Character_Character__WEBPACK_IMPORTED_MODULE_1__["default"], {
    character: character,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 46
    }
  }));
}

/***/ }),

/***/ "./components/Filters/Filters.js":
/*!***************************************!*\
  !*** ./components/Filters/Filters.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_filterStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/filterStyles */ "./components/styles/filterStyles.js");
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/Filters/Filters.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Filters(props) {
  const {
    label,
    filters,
    selectedFilters = []
  } = props;

  function onFilterChange(evt) {
    const value = evt.target.value;
    const newFilters = evt.target.checked ? selectedFilters.concat(value) : selectedFilters.filter(filter => filter !== value);
    props.onFilterChange && props.onFilterChange(newFilters);
  }

  return __jsx(_styles_filterStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, label), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, filters.map(filter => __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "checkbox",
    value: filter,
    checked: selectedFilters.indexOf(filter) > -1,
    onChange: onFilterChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }), __jsx("span", {
    className: "filter-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, filter))))));
}

/***/ }),

/***/ "./components/Pagination/Pagination.js":
/*!*********************************************!*\
  !*** ./components/Pagination/Pagination.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/Pagination/Pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  const {
    pagination
  } = props;

  function previousPage() {
    if (pagination.prev) {
      props.onPaginate(props.page - 1);
    }
  }

  function nextPage() {
    if (pagination.next) {
      props.onPaginate(props.page + 1);
    }
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    style: {
      float: 'left',
      width: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"].Prev, {
    onClick: previousPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Previous"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Pagination"].Prev, {
    onClick: nextPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Next")));
});

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Search extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.search = this.search.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  search() {
    this.props.onSearch && this.props.onSearch(this.state.searchText);
  }

  onSearchTextChange(evt) {
    this.setState({
      searchText: evt.target.value
    });
  }

  render() {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      bg: "none",
      variant: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
      style: {
        width: '80%',
        float: 'left'
      },
      type: "text",
      placeholder: "Search here..",
      className: "mr-sm-",
      onChange: this.onSearchTextChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "outline-info",
      onClick: this.search,
      style: {
        marginLeft: '10px',
        padding: '0.8125rem 2rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, "Search")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/Sorting.js":
/*!*******************************!*\
  !*** ./components/Sorting.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/components/Sorting.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Sorting extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      style: {
        textAlign: 'right',
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, "Sort by ID"), __jsx("input", {
      type: "radio",
      name: "sorting",
      id: "ascending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), __jsx("label", {
      htmlFor: "ascending",
      style: {
        marginLeft: '5px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "Ascending"), __jsx("input", {
      type: "radio",
      name: "sorting",
      id: "descending",
      style: {
        marginLeft: '10px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx("label", {
      htmlFor: "descending",
      style: {
        marginLeft: '5px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, "Descending"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sorting);

/***/ }),

/***/ "./components/styles/filterStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/filterStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Filter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    background: transparent;
    border: 1px solid ${props => props.theme.offWhite};
    position: relative;
    display: block;
    margin-bottom: 20px;
    h3 {
        text-transform: uppercase;
        display:block;
        text-align:center;
        font-size: 1rem;
        margin-top: 1rem;
    }
  ul {
    padding: 0 20px;
    list-style: none;
    li {
      font-size: 1.2rem;
      padding: 10px 0;
      line-height: 0.5rem;
    }
    .checkbox-value {
      color: ${props => props.theme.terracotta};
      margin-left: 10px;
    }
  }
  .filter-name {
    margin-left: 10px;
    font-size: 14px;
  }
  }`;
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/character */ "./services/character/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/filters */ "./redux/actions/filters.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Sorting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sorting */ "./components/Sorting.js");
/* harmony import */ var _components_CharacterList_CharacterList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CharacterList/CharacterList */ "./components/CharacterList/CharacterList.js");
/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Pagination/Pagination */ "./components/Pagination/Pagination.js");
/* harmony import */ var _components_CharacterFilters_CharacterFilters_connect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CharacterFilters/CharacterFilters.connect */ "./components/CharacterFilters/CharacterFilters.connect.js");
/* harmony import */ var _components_CharacterFiltersApplied_CharacterFiltersApplied_connect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CharacterFiltersApplied/CharacterFiltersApplied.connect */ "./components/CharacterFiltersApplied/CharacterFiltersApplied.connect.js");
var _jsxFileName = "/Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // components








class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: props.characters || [],
      pagination: props.pagination || null,
      page: 1,
      filters: {}
    };
    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.paginateCharacters = this.paginateCharacters.bind(this);
    this.filterCharacters = this.filterCharacters.bind(this);
    this.searchCharacters = this.searchCharacters.bind(this);
    this.onAppliedFilterRemove = this.onAppliedFilterRemove.bind(this);
  }

  static async getInitialProps(context) {
    return Object(_services_character__WEBPACK_IMPORTED_MODULE_2__["getCharacters"])().then(res => {
      context.store.dispatch(Object(_redux_actions_filters__WEBPACK_IMPORTED_MODULE_5__["setCharactersFiltersAction"])(res.data.results));
      return {
        characters: res.data.results,
        pagination: res.data.info
      };
    }).catch(err => {
      console.error('ERROR', err);
      return {
        characters: [],
        pagination: null
      };
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filtersApplied !== this.props.filtersApplied) {
      this.fetchCharacters();
    }
  }

  fetchCharacters() {
    Object(_services_character__WEBPACK_IMPORTED_MODULE_2__["getCharacters"])({
      searchText: this.state.searchText || '',
      species: this.props.filtersApplied.species || [],
      gender: this.props.filtersApplied.gender || [],
      status: this.props.filtersApplied.status || [],
      page: this.state.page || 1
    }).then(res => {
      this.setState({
        characters: res.data.results,
        pagination: res.data.info
      });
    }).catch(err => {
      return {
        characters: [],
        pagination: null
      };
    });
  }

  paginateCharacters(page) {
    this.setState({
      page
    }, () => this.fetchCharacters());
  }

  filterCharacters(filters) {
    const filtersApplied = _objectSpread({}, this.state.filters, {}, filters);

    this.props.setFiltersApplied(filtersApplied);
  }

  searchCharacters(searchText) {
    this.setState({
      searchText,
      page: 1
    }, () => this.fetchCharacters());
  }

  onAppliedFilterRemove(filterCategory, removedFilter) {
    const filters = _objectSpread({}, this.props.filtersApplied, {
      [filterCategory]: this.props.filtersApplied[filterCategory].filter(filter => filter !== removedFilter)
    });

    this.props.setFiltersApplied(filters);
  }

  render() {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "2",
      className: "float-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx(_components_CharacterFilters_CharacterFilters_connect__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onFilterChange: this.filterCharacters,
      filtersApplied: this.props.filtersApplied,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "8",
      className: "float-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, __jsx(_components_CharacterFiltersApplied_CharacterFiltersApplied_connect__WEBPACK_IMPORTED_MODULE_12__["default"], {
      filters: this.state.filters,
      onAppliedFilterRemove: this.onAppliedFilterRemove,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }), __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onSearch: this.searchCharacters,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }), __jsx(_components_Sorting__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }), __jsx(_components_CharacterList_CharacterList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      characters: this.state.characters,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }), __jsx(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
      pagination: this.state.pagination,
      onPaginate: this.paginateCharacters,
      page: this.state.page,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    })));
  }

}

function mapStateToProps(state) {
  return {
    filters: state.filters,
    filtersApplied: state.filtersApplied
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFiltersApplied: filtersApplied => {
      dispatch({
        type: 'SET_FILTERS_APPLIED',
        payload: filtersApplied
      });
    }
  };
}

const HomeConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Home);
HomeConnect.getInitialProps = Home.getInitialProps;
/* harmony default export */ __webpack_exports__["default"] = (HomeConnect);

/***/ }),

/***/ "./redux/actions/filters.js":
/*!**********************************!*\
  !*** ./redux/actions/filters.js ***!
  \**********************************/
/*! exports provided: setCharactersFiltersAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCharactersFiltersAction", function() { return setCharactersFiltersAction; });
function setCharactersFiltersAction(characters) {
  const data = {
    species: [],
    gender: [],
    status: []
  };
  characters.forEach(character => {
    if (data.species && data.species.indexOf(character.species) === -1) {
      data.species = data.species.concat(character.species);
    }

    if (data.gender && data.gender.indexOf(character.gender) === -1) {
      data.gender = data.gender.concat(character.gender);
    }

    if (data.status && data.status.indexOf(character.status) === -1) {
      data.status = data.status.concat(character.status);
    }
  });
  return {
    type: 'SET_FILTERS',
    payload: data
  };
}

/***/ }),

/***/ "./redux/reducers/filters.js":
/*!***********************************!*\
  !*** ./redux/reducers/filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (filters = {}, action) {
  switch (action.type) {
    case 'SET_FILTERS':
      filters = action.payload;
  }

  return filters;
});
;

/***/ }),

/***/ "./redux/reducers/filtersApplied.js":
/*!******************************************!*\
  !*** ./redux/reducers/filtersApplied.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (filtersApplied = [], action) {
  switch (action.type) {
    case 'SET_FILTERS_APPLIED':
      filtersApplied = _objectSpread({}, filtersApplied, {}, action.payload);
  }

  return filtersApplied;
});
;

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./redux/reducers/filters.js");
/* harmony import */ var _filtersApplied__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filtersApplied */ "./redux/reducers/filtersApplied.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  filters: _filters__WEBPACK_IMPORTED_MODULE_1__["default"],
  filtersApplied: _filtersApplied__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: makeStore, getStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./redux/reducers/index.js");


const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
function makeStore(initialState) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, composeEnhancers());
  return store;
}
;
let store = null;
function getStore(initialState = {}) {
  if (store === null) {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, composeEnhancers());
  }

  return store;
}
;

/***/ }),

/***/ "./services/character/index.js":
/*!*************************************!*\
  !*** ./services/character/index.js ***!
  \*************************************/
/*! exports provided: getCharacters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacters", function() { return getCharacters; });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http */ "./services/http/index.js");

function getCharacters(params = {}) {
  const species = (params.species || []).map(species => `species=${species}`).join('&');
  const gender = (params.gender || []).map(gender => `gender=${gender.toLowerCase()}`).join('&');
  const status = (params.status || []).map(status => `status=${status.toLowerCase()}`).join('&');
  const page = `page=${params.page || 1}`;
  const name = `name=${params.searchText || ''}`;
  const url = `https://rickandmortyapi.com/api/character/?${species}&${gender}&${page}&${name}&${status}`;
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
}

/***/ }),

/***/ "./services/http/index.js":
/*!********************************!*\
  !*** ./services/http/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create());

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nitbhatn0/Desktop/XT React Case study/xt-react-assignment/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map