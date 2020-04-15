webpackHotUpdate("static/development/pages/index.js",{

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
  var data = {
    species: [],
    gender: [],
    status: []
  };
  characters.forEach(function (character) {
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

/***/ })

})
//# sourceMappingURL=index.js.14bc09648ba99be78f7a.hot-update.js.map