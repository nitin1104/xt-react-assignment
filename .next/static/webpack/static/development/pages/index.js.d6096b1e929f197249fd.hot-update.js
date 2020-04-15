webpackHotUpdate("static/development/pages/index.js",{

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

function getCharacters() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var species = (params.species || []).map(function (species) {
    return "species=".concat(species);
  }).join('&');
  var gender = (params.gender || []).map(function (gender) {
    return "gender=".concat(gender.toLowerCase());
  }).join('&');
  var status = (params.status || []).map(function (status) {
    return "status=".concat(status.toLowerCase());
  }).join('&');
  var page = "page=".concat(params.page || 1);
  var name = "name=".concat(params.searchText || '');
  var url = "https://rickandmortyapi.com/api/character/?".concat(species, "&").concat(gender, "&").concat(page, "&").concat(name, "&").concat(status);
  return _http__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
}

/***/ })

})
//# sourceMappingURL=index.js.d6096b1e929f197249fd.hot-update.js.map