"use strict";
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: bisque;\r\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 10px;\r\n  background-color: #011811;\r\n  color: #b5c7d8;\r\n  font-size: 18px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  color: #b5c7d8;\r\n}\r\n\r\n.logo {\r\n  background-image: url();\r\n  background-size: 90%;\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border: 2px solid #003b08;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #012218;\r\n\r\n  /* padding-top: 30px; */\r\n  box-shadow: inset 2px 3px 3px 2px rgba(0, 119, 43, 0.99);\r\n}\r\n\r\n.image {\r\n  border: 5px solid #00704e;\r\n  border-radius: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin-top: 2.5rem;\r\n  border-radius: 10%;\r\n}\r\n\r\n.moviesItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 1rem 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n}\r\n\r\n.likes-name {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n}\r\n\r\n.likes-count {\r\n  width: 230px;\r\n  text-align: right;\r\n  margin-top: 5px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.likes-count.transition {\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  color: green;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.comment-btn {\r\n  width: 80%;\r\n  border: 2px solid #4cfa02;\r\n  padding: 8px 0 8px 0;\r\n  color: #001007;\r\n  background-color: #d4c7d0;\r\n  font-weight: 600;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: #005135;\r\n  border-radius: 2rem;\r\n  width: 80%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\nh2 {\r\n  margin-left: 0;\r\n  padding-top: 30px;\r\n}\r\n\r\n.show-name {\r\n  font-size: 150%;\r\n  padding: 20px 0;\r\n  color: #000;\r\n}\r\n\r\n.comment-popup .show-name {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-popup table {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comments-list {\r\n  margin-left: 27%;\r\n  list-style-type: none;\r\n  text-indent: 1%;\r\n}\r\n\r\np.summary {\r\n  display: flex;\r\n  padding: 0 3rem;\r\n  font-size: 14px;\r\n  width: 80%;\r\n}\r\n\r\n.close-comment {\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 900;\r\n  padding: 2% 0;\r\n  margin-left: 95%;\r\n  position: fixed;\r\n}\r\n\r\n.comment-holder {\r\n  text-align: center;\r\n  margin: 2%;\r\n  color: #000;\r\n}\r\n\r\n.form-title {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form button {\r\n  width: 300px;\r\n  border: 2px solid #000;\r\n  height: 35px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n}\r\n\r\n.comment-form button {\r\n  box-shadow: 2px 2px 1px 0;\r\n  cursor: pointer;\r\n  border: 2px solid #000;\r\n  padding: 5px 0;\r\n  color: #000;\r\n  font-weight: 600;\r\n  margin-right: 3rem;\r\n}\r\n\r\n.comment-form textarea {\r\n  width: 300px;\r\n  height: 100px;\r\n  border: 2px solid #000;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: #011811;\r\n  color: #fff;\r\n  height: 80px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie-wrapper {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto auto;\r\n  }\r\n\r\n  .likes-name {\r\n    display: flex;\r\n    width: 65%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,8FAA8F;AAChG;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,yBAAyB;EACzB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;EAC5B,2BAA2B;EAC3B,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;;EAEzB,uBAAuB;EACvB,wDAAwD;AAC1D;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,yBAAyB;EACzB,oBAAoB;EACpB,cAAc;EACd,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;IACE,aAAa;IACb,qCAAqC;IACrC,6BAA6B;EAC/B;;EAEA;IACE,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["body {\r\n  background-color: bisque;\r\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 10px;\r\n  background-color: #011811;\r\n  color: #b5c7d8;\r\n  font-size: 18px;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  color: #b5c7d8;\r\n}\r\n\r\n.logo {\r\n  background-image: url();\r\n  background-size: 90%;\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border: 2px solid #003b08;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #012218;\r\n\r\n  /* padding-top: 30px; */\r\n  box-shadow: inset 2px 3px 3px 2px rgba(0, 119, 43, 0.99);\r\n}\r\n\r\n.image {\r\n  border: 5px solid #00704e;\r\n  border-radius: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin-top: 2.5rem;\r\n  border-radius: 10%;\r\n}\r\n\r\n.moviesItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 1rem 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n}\r\n\r\n.likes-name {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n}\r\n\r\n.likes-count {\r\n  width: 230px;\r\n  text-align: right;\r\n  margin-top: 5px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.likes-count.transition {\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  color: green;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.comment-btn {\r\n  width: 80%;\r\n  border: 2px solid #4cfa02;\r\n  padding: 8px 0 8px 0;\r\n  color: #001007;\r\n  background-color: #d4c7d0;\r\n  font-weight: 600;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: #005135;\r\n  border-radius: 2rem;\r\n  width: 80%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\nh2 {\r\n  margin-left: 0;\r\n  padding-top: 30px;\r\n}\r\n\r\n.show-name {\r\n  font-size: 150%;\r\n  padding: 20px 0;\r\n  color: #000;\r\n}\r\n\r\n.comment-popup .show-name {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-popup table {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comments-list {\r\n  margin-left: 27%;\r\n  list-style-type: none;\r\n  text-indent: 1%;\r\n}\r\n\r\np.summary {\r\n  display: flex;\r\n  padding: 0 3rem;\r\n  font-size: 14px;\r\n  width: 80%;\r\n}\r\n\r\n.close-comment {\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n  font-weight: 900;\r\n  padding: 2% 0;\r\n  margin-left: 95%;\r\n  position: fixed;\r\n}\r\n\r\n.comment-holder {\r\n  text-align: center;\r\n  margin: 2%;\r\n  color: #000;\r\n}\r\n\r\n.form-title {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form button {\r\n  width: 300px;\r\n  border: 2px solid #000;\r\n  height: 35px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n}\r\n\r\n.comment-form button {\r\n  box-shadow: 2px 2px 1px 0;\r\n  cursor: pointer;\r\n  border: 2px solid #000;\r\n  padding: 5px 0;\r\n  color: #000;\r\n  font-weight: 600;\r\n  margin-right: 3rem;\r\n}\r\n\r\n.comment-form textarea {\r\n  width: 300px;\r\n  height: 100px;\r\n  border: 2px solid #000;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: #011811;\r\n  color: #fff;\r\n  height: 80px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie-wrapper {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto auto;\r\n  }\r\n\r\n  .likes-name {\r\n    display: flex;\r\n    width: 65%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_load_movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load-movies.js */ "./src/modules/load-movies.js");
/* harmony import */ var _modules_countItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/countItems.js */ "./src/modules/countItems.js");




const initialize = async () => {
  await (0,_modules_load_movies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

initialize();


/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");



const commentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6jTH3jOos7OpnHxCg6lz/comments/';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((button, username, text, showId) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    showId = showId.toString();
    const name = username.value.trim();
    const comment = text.value.trim();
    if (name && comment) {
      await fetch(commentAPI, {
        method: 'POST',
        body: JSON.stringify({
          item_id: showId,
          username: name,
          comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }
    username.value = '';
    text.value = '';

    const getcomment = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(showId);
    const usercomment = document.querySelector('.comments-list');
    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(getcomment, usercomment);
  });
});

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getMovies": () => (/* binding */ getMovies),
/* harmony export */   "postLikes": () => (/* binding */ postLikes)
/* harmony export */ });
/* eslint-disable max-len */
const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 37, 38, 39, 40];
const baseUrl = 'https://api.tvmaze.com';
const showsUrl = '/shows/';
const aPiLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const API_KEY = '6jTH3jOos7OpnHxCg6lz';
const addLike = `/apps/${API_KEY}/likes/`;

const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
  });
  return response.json();
};

const getlikesCount = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const hitlikesApi = async (url = '', id) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    Accept: 'text/plain',
    body: JSON.stringify({ item_id: id }),
  });
  return response.text();
};

const getMovies = async () => {
  try {
    const movielist = [];
    for (let z = 0; z < movies.length; z += 1) {
      const moviesId = baseUrl + showsUrl + movies[z];
      const promise = getData(moviesId);
      movielist.push(promise);
    }
    const movieData = await Promise.all(movielist);
    return { success: true, movieData };
  } catch (error) {
    return { success: false, error };
  }
};

const getLikes = async () => {
  try {
    const postLikeLink = aPiLink + addLike;
    const data = await getlikesCount(postLikeLink);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

const postLikes = async (id) => {
  try {
    const postLikeLink = aPiLink + addLike;
    const data = await hitlikesApi(postLikeLink, id);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};



/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComment.js */ "./src/modules/addComment.js");
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComments.js */ "./src/modules/getComments.js");




const commentPopup = document.querySelector('.comment-popup');

const popupWin = async (show) => {
  const closeSign = document.createElement('span');
  closeSign.innerHTML = 'X';
  closeSign.classList = 'close-comment';
  commentPopup.appendChild(closeSign);
  commentPopup.innerHTML += `
<img src="${show.image.medium}" class="popup-img">
<h3 class="show-name">${show.name}</h3>
<table>
  <tr>
    <td>
      <b>Language:</b> ${show.language}
    </td>
    <td>
      <b>Type:</b> ${show.type}
    </td>
  </tr>
</table>
<P class="summary">${show.summary}</p>
<h3 class="comment-holder">
    Comments <span class="comment-count">(0)</span>
    </h3>
    <ul class="comments-list">

    </ul>
    <h2 class="form-title">Add a comment</h2>
    <form class="comment-form">
      <input id="name" type="text" name="username" placeholder="Your name" required>
      <textarea id="textarea" placeholder="Your insights" name="comment" required minlength="1"></textarea>
      <button class="submit-btn" type="submit">Submit</button>
    </form>`;
  /* eslint-disable no-use-before-define */
  const getcomments = await getcomments(show.id);
  const usercomment = document.querySelector('.comments-list');
  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(getcomments, usercomment);

  const comBtn = document.querySelector('.submit-btn');
  const name = document.querySelector('#name');
  const text = document.querySelector('#textarea');
  (0,_addComment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(comBtn, name, text, show.id);
};
commentPopup.addEventListener('click', (event) => {
  if (event.target.closest('.close-comment')) {
    commentPopup.style.display = 'none';
    commentPopup.innerHTML = '';
  }
});
(0,_getComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupWin);

/***/ }),

/***/ "./src/modules/countItems.js":
/*!***********************************!*\
  !*** ./src/modules/countItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function countItems() {
  const countMovies = document.querySelectorAll('.movie-wrapper > *');
  return countMovies.length;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countItems);

/***/ }),

/***/ "./src/modules/countcomments.js":
/*!**************************************!*\
  !*** ./src/modules/countcomments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComments = (getcomment) => getcomment.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _countcomments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countcomments.js */ "./src/modules/countcomments.js");


const displayComments = (getcomment, usercomment) => {
  usercomment.innerHTML = '';
  if (getcomment.length > 0) {
    getcomment.forEach((comment) => {
      const listlink = document.createElement('li');
      listlink.classList.add('commment-item');
      listlink.innerHTML = `${comment.creation_date} ${comment.username} : ${comment.comment}`;
      usercomment.appendChild(listlink);
    });
    const checkCount = document.querySelector('.total-comments');
    const commentCount = (0,_countcomments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(getcomment);
    checkCount.innerHTML = `(${commentCount})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);

/***/ }),

/***/ "./src/modules/getComments.js":
/*!************************************!*\
  !*** ./src/modules/getComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getcomments = async (showId) => {
  showId = showId.toString();
  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6jTH3jOos7OpnHxCg6lz/comments?item_id=${showId}`);
  const result = comment.json();
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getcomments);

/***/ }),

/***/ "./src/modules/load-movies.js":
/*!************************************!*\
  !*** ./src/modules/load-movies.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentPopup.js */ "./src/modules/commentPopup.js");



const object = [];
const commentPopup = document.querySelector('.comment-popup');

const buildDivElement = (ldMovies, show) => {
  if (!show) {
    return;
  }
  const moviesItem = document.createElement('div');
  moviesItem.classList.add('moviesItem');
  moviesItem.innerHTML = `
      <img class="image" src="${show.image && show.image.medium}" alt="${show.name}">
      <div class="likes-name">
          <p class="title">${show.name}</p>
          <i class="lni lni-heart" id="${show.id}"></i>
      </div>
      <p class="likes-count">${show.likes} Likes</p>`;
  const btn = document.createElement('button');
  btn.classList = 'comment-btn';
  btn.innerHTML = 'Comments';
  moviesItem.appendChild(btn);
  btn.addEventListener('click', () => {
    commentPopup.style.display = 'grid';
    (0,_commentPopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(show);
  });
  ldMovies.appendChild(moviesItem);
};

const CreateMovieElement = async (loadMovie, show) => {
  const flix = document.querySelector('.flix');
  loadMovie.innerHTML = '';
  const result = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
  const likesData = result.data;
  const updatedMovies = show.map((movie) => {
    const like = likesData.find((like) => parseInt(like.item_id, 36) === movie.id);
    // eslint-disable-next-line no-unused-expressions
    like ? movie.likes = like.likes : movie.likes = 0;
    object.push(movie);
    return movie;
  });
  for (let i = 0; i < updatedMovies.length; i += 1) {
    buildDivElement(loadMovie, updatedMovies[i]);
  }
  flix.textContent = `Show (${show.length})`;
};

const showMovies = async () => {
  const loadMovies = document.querySelector('.movie-wrapper');
  const result = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getMovies)();
  if (result.success) {
    await CreateMovieElement(loadMovies, result.movieData);
  }
};

const parentElement = document.querySelector('.movie-wrapper');
parentElement.addEventListener('click', (e) => {
  if (e.target.matches('.lni.lni-heart')) {
    const flixId = e.target.id;
    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(flixId).then((result) => {
      if (result.success) {
        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)().then((resultLike) => {
          const newLikes = resultLike.data.find((newlikes) => newlikes.item_id === flixId);
          const newParent = e.target.parentElement.parentElement;
          const addLikes = newParent.querySelector('.likes-count');
          addLikes.classList.add('transition');
          addLikes.textContent = `${newLikes.likes} Likes`;
          setTimeout(() => {
            addLikes.classList.remove('transition');
          }, 100);
        });
      }
    });
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2I7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50UG9wdXAuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvdW50SXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvdW50Y29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xvYWQtbW92aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxyXFxuICBjb2xvcjogI2I1YzdkODtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2I1YzdkODtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDNiMDg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyMTg7XFxyXFxuXFxyXFxuICAvKiBwYWRkaW5nLXRvcDogMzBweDsgKi9cXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAzcHggM3B4IDJweCByZ2JhKDAsIDExOSwgNDMsIDAuOTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Uge1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwNzA0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXNJdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY291bnQge1xcclxcbiAgd2lkdGg6IDIzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb3VudC50cmFuc2l0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNmYTAyO1xcclxcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxyXFxuICBjb2xvcjogIzAwMTAwNztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGM3ZDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYmFja2dyb3VuZDogIzAwNTEzNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE1MCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAgLnNob3ctbmFtZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB0YWJsZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNyU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB0ZXh0LWluZGVudDogMSU7XFxyXFxufVxcclxcblxcclxcbnAuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBwYWRkaW5nOiAyJSAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaG9sZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gaW5wdXQsXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZXMtbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNw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XHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiwgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTgxMTtcXHJcXG4gIGNvbG9yOiAjYjVjN2Q4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYjVjN2Q4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogOTAlO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwM2IwODtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXdyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjIxODtcXHJcXG5cXHJcXG4gIC8qIHBhZGRpbmctdG9wOiAzMHB4OyAqL1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDNweCAzcHggMnB4IHJnYmEoMCwgMTE5LCA0MywgMC45OSk7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDA3MDRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllc0l0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxcmVtIDFyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb3VudCB7XFxyXFxuICB3aWR0aDogMjMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvdW50LnRyYW5zaXRpb24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Y2ZhMDI7XFxyXFxuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcXHJcXG4gIGNvbG9yOiAjMDAxMDA3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YzdkMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDA1MTM1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCAuc2hvdy1uYW1lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHRhYmxlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtaW5kZW50OiAxJTtcXHJcXG59XFxyXFxuXFxyXFxucC5zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmc6IDIlIDA7XFxyXFxuICBtYXJnaW4tbGVmdDogOTUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ob2xkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSBpbnB1dCxcXHJcXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTgxMTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1vdmllLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlcy1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHNob3dNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2xvYWQtbW92aWVzLmpzJztcbmltcG9ydCBjb3VudEl0ZW1zIGZyb20gJy4vbW9kdWxlcy9jb3VudEl0ZW1zLmpzJztcblxuY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2hvd01vdmllcygpO1xuICBjb3VudEl0ZW1zKCk7XG59O1xuXG5pbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgZ2V0Y29tbWVudHMgZnJvbSAnLi9nZXRDb21tZW50cy5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcblxuY29uc3QgY29tbWVudEFQSSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy82alRIM2pPb3M3T3BuSHhDZzZsei9jb21tZW50cy8nO1xuXG5leHBvcnQgZGVmYXVsdCAoYnV0dG9uLCB1c2VybmFtZSwgdGV4dCwgc2hvd0lkKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd0lkID0gc2hvd0lkLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjb21tZW50ID0gdGV4dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKG5hbWUgJiYgY29tbWVudCkge1xuICAgICAgYXdhaXQgZmV0Y2goY29tbWVudEFQSSwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IHNob3dJZCxcbiAgICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICB0ZXh0LnZhbHVlID0gJyc7XG5cbiAgICBjb25zdCBnZXRjb21tZW50ID0gYXdhaXQgZ2V0Y29tbWVudHMoc2hvd0lkKTtcbiAgICBjb25zdCB1c2VyY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0Jyk7XG4gICAgZGlzcGxheUNvbW1lbnRzKGdldGNvbW1lbnQsIHVzZXJjb21tZW50KTtcbiAgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNvbnN0IG1vdmllcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgNDEsIDQyLCAzNywgMzgsIDM5LCA0MF07XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20nO1xuY29uc3Qgc2hvd3NVcmwgPSAnL3Nob3dzLyc7XG5jb25zdCBhUGlMaW5rID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XG5jb25zdCBBUElfS0VZID0gJzZqVEgzak9vczdPcG5IeENnNmx6JztcbmNvbnN0IGFkZExpa2UgPSBgL2FwcHMvJHtBUElfS0VZfS9saWtlcy9gO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCA9ICcnKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGdldGxpa2VzQ291bnQgPSBhc3luYyAodXJsID0gJycpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgaGl0bGlrZXNBcGkgPSBhc3luYyAodXJsID0gJycsIGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBBY2NlcHQ6ICd0ZXh0L3BsYWluJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZWxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG1vdmllcy5sZW5ndGg7IHogKz0gMSkge1xuICAgICAgY29uc3QgbW92aWVzSWQgPSBiYXNlVXJsICsgc2hvd3NVcmwgKyBtb3ZpZXNbel07XG4gICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGF0YShtb3ZpZXNJZCk7XG4gICAgICBtb3ZpZWxpc3QucHVzaChwcm9taXNlKTtcbiAgICB9XG4gICAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwobW92aWVsaXN0KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtb3ZpZURhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3IgfTtcbiAgfVxufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdExpa2VMaW5rID0gYVBpTGluayArIGFkZExpa2U7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldGxpa2VzQ291bnQocG9zdExpa2VMaW5rKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH07XG4gIH1cbn07XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBvc3RMaWtlTGluayA9IGFQaUxpbmsgKyBhZGRMaWtlO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoaXRsaWtlc0FwaShwb3N0TGlrZUxpbmssIGlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH07XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldE1vdmllcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9OyIsImltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkQ29tbWVudC5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcbmltcG9ydCBnZXRjb21tZW50cyBmcm9tICcuL2dldENvbW1lbnRzLmpzJztcblxuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcblxuY29uc3QgcG9wdXBXaW4gPSBhc3luYyAoc2hvdykgPT4ge1xuICBjb25zdCBjbG9zZVNpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNsb3NlU2lnbi5pbm5lckhUTUwgPSAnWCc7XG4gIGNsb3NlU2lnbi5jbGFzc0xpc3QgPSAnY2xvc2UtY29tbWVudCc7XG4gIGNvbW1lbnRQb3B1cC5hcHBlbmRDaGlsZChjbG9zZVNpZ24pO1xuICBjb21tZW50UG9wdXAuaW5uZXJIVE1MICs9IGBcbjxpbWcgc3JjPVwiJHtzaG93LmltYWdlLm1lZGl1bX1cIiBjbGFzcz1cInBvcHVwLWltZ1wiPlxuPGgzIGNsYXNzPVwic2hvdy1uYW1lXCI+JHtzaG93Lm5hbWV9PC9oMz5cbjx0YWJsZT5cbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIDxiPkxhbmd1YWdlOjwvYj4gJHtzaG93Lmxhbmd1YWdlfVxuICAgIDwvdGQ+XG4gICAgPHRkPlxuICAgICAgPGI+VHlwZTo8L2I+ICR7c2hvdy50eXBlfVxuICAgIDwvdGQ+XG4gIDwvdHI+XG48L3RhYmxlPlxuPFAgY2xhc3M9XCJzdW1tYXJ5XCI+JHtzaG93LnN1bW1hcnl9PC9wPlxuPGgzIGNsYXNzPVwiY29tbWVudC1ob2xkZXJcIj5cbiAgICBDb21tZW50cyA8c3BhbiBjbGFzcz1cImNvbW1lbnQtY291bnRcIj4oMCk8L3NwYW4+XG4gICAgPC9oMz5cbiAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1saXN0XCI+XG5cbiAgICA8L3VsPlxuICAgIDxoMiBjbGFzcz1cImZvcm0tdGl0bGVcIj5BZGQgYSBjb21tZW50PC9oMj5cbiAgICA8Zm9ybSBjbGFzcz1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbmFtZT1cImNvbW1lbnRcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5gO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuICBjb25zdCBnZXRjb21tZW50cyA9IGF3YWl0IGdldGNvbW1lbnRzKHNob3cuaWQpO1xuICBjb25zdCB1c2VyY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0Jyk7XG4gIGRpc3BsYXlDb21tZW50cyhnZXRjb21tZW50cywgdXNlcmNvbW1lbnQpO1xuXG4gIGNvbnN0IGNvbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuJyk7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRhcmVhJyk7XG4gIGFkZENvbW1lbnQoY29tQnRuLCBuYW1lLCB0ZXh0LCBzaG93LmlkKTtcbn07XG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2xvc2UtY29tbWVudCcpKSB7XG4gICAgY29tbWVudFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29tbWVudFBvcHVwLmlubmVySFRNTCA9ICcnO1xuICB9XG59KTtcbmdldGNvbW1lbnRzKCk7XG5leHBvcnQgZGVmYXVsdCBwb3B1cFdpbjsiLCJmdW5jdGlvbiBjb3VudEl0ZW1zKCkge1xuICBjb25zdCBjb3VudE1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZpZS13cmFwcGVyID4gKicpO1xuICByZXR1cm4gY291bnRNb3ZpZXMubGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3VudEl0ZW1zOyIsImNvbnN0IGNvdW50Q29tbWVudHMgPSAoZ2V0Y29tbWVudCkgPT4gZ2V0Y29tbWVudC5sZW5ndGg7XG5leHBvcnQgZGVmYXVsdCBjb3VudENvbW1lbnRzOyIsImltcG9ydCBjb3VudENvbW1lbnRzIGZyb20gJy4vY291bnRjb21tZW50cy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChnZXRjb21tZW50LCB1c2VyY29tbWVudCkgPT4ge1xuICB1c2VyY29tbWVudC5pbm5lckhUTUwgPSAnJztcbiAgaWYgKGdldGNvbW1lbnQubGVuZ3RoID4gMCkge1xuICAgIGdldGNvbW1lbnQuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgbGlzdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdGxpbmsuY2xhc3NMaXN0LmFkZCgnY29tbW1lbnQtaXRlbScpO1xuICAgICAgbGlzdGxpbmsuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9IDogJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICAgIHVzZXJjb21tZW50LmFwcGVuZENoaWxkKGxpc3RsaW5rKTtcbiAgICB9KTtcbiAgICBjb25zdCBjaGVja0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJyk7XG4gICAgY29uc3QgY29tbWVudENvdW50ID0gY291bnRDb21tZW50cyhnZXRjb21tZW50KTtcbiAgICBjaGVja0NvdW50LmlubmVySFRNTCA9IGAoJHtjb21tZW50Q291bnR9KWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50czsiLCJjb25zdCBnZXRjb21tZW50cyA9IGFzeW5jIChzaG93SWQpID0+IHtcbiAgc2hvd0lkID0gc2hvd0lkLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvNmpUSDNqT29zN09wbkh4Q2c2bHovY29tbWVudHM/aXRlbV9pZD0ke3Nob3dJZH1gKTtcbiAgY29uc3QgcmVzdWx0ID0gY29tbWVudC5qc29uKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0Y29tbWVudHM7IiwiaW1wb3J0IHsgZ2V0TW92aWVzLCBnZXRMaWtlcywgcG9zdExpa2VzIH0gZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHBvcHVwV2luIGZyb20gJy4vY29tbWVudFBvcHVwLmpzJztcblxuY29uc3Qgb2JqZWN0ID0gW107XG5jb25zdCBjb21tZW50UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1wb3B1cCcpO1xuXG5jb25zdCBidWlsZERpdkVsZW1lbnQgPSAobGRNb3ZpZXMsIHNob3cpID0+IHtcbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG1vdmllc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW92aWVzSXRlbS5jbGFzc0xpc3QuYWRkKCdtb3ZpZXNJdGVtJyk7XG4gIG1vdmllc0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgPGltZyBjbGFzcz1cImltYWdlXCIgc3JjPVwiJHtzaG93LmltYWdlICYmIHNob3cuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7c2hvdy5uYW1lfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpa2VzLW5hbWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+JHtzaG93Lm5hbWV9PC9wPlxuICAgICAgICAgIDxpIGNsYXNzPVwibG5pIGxuaS1oZWFydFwiIGlkPVwiJHtzaG93LmlkfVwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3M9XCJsaWtlcy1jb3VudFwiPiR7c2hvdy5saWtlc30gTGlrZXM8L3A+YDtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5jbGFzc0xpc3QgPSAnY29tbWVudC1idG4nO1xuICBidG4uaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcbiAgbW92aWVzSXRlbS5hcHBlbmRDaGlsZChidG4pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29tbWVudFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgcG9wdXBXaW4oc2hvdyk7XG4gIH0pO1xuICBsZE1vdmllcy5hcHBlbmRDaGlsZChtb3ZpZXNJdGVtKTtcbn07XG5cbmNvbnN0IENyZWF0ZU1vdmllRWxlbWVudCA9IGFzeW5jIChsb2FkTW92aWUsIHNob3cpID0+IHtcbiAgY29uc3QgZmxpeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGl4Jyk7XG4gIGxvYWRNb3ZpZS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gcmVzdWx0LmRhdGE7XG4gIGNvbnN0IHVwZGF0ZWRNb3ZpZXMgPSBzaG93Lm1hcCgobW92aWUpID0+IHtcbiAgICBjb25zdCBsaWtlID0gbGlrZXNEYXRhLmZpbmQoKGxpa2UpID0+IHBhcnNlSW50KGxpa2UuaXRlbV9pZCwgMzYpID09PSBtb3ZpZS5pZCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgIGxpa2UgPyBtb3ZpZS5saWtlcyA9IGxpa2UubGlrZXMgOiBtb3ZpZS5saWtlcyA9IDA7XG4gICAgb2JqZWN0LnB1c2gobW92aWUpO1xuICAgIHJldHVybiBtb3ZpZTtcbiAgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZE1vdmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1aWxkRGl2RWxlbWVudChsb2FkTW92aWUsIHVwZGF0ZWRNb3ZpZXNbaV0pO1xuICB9XG4gIGZsaXgudGV4dENvbnRlbnQgPSBgU2hvdyAoJHtzaG93Lmxlbmd0aH0pYDtcbn07XG5cbmNvbnN0IHNob3dNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvYWRNb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtd3JhcHBlcicpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRNb3ZpZXMoKTtcbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgYXdhaXQgQ3JlYXRlTW92aWVFbGVtZW50KGxvYWRNb3ZpZXMsIHJlc3VsdC5tb3ZpZURhdGEpO1xuICB9XG59O1xuXG5jb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXdyYXBwZXInKTtcbnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmxuaS5sbmktaGVhcnQnKSkge1xuICAgIGNvbnN0IGZsaXhJZCA9IGUudGFyZ2V0LmlkO1xuICAgIHBvc3RMaWtlcyhmbGl4SWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIGdldExpa2VzKCkudGhlbigocmVzdWx0TGlrZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0xpa2VzID0gcmVzdWx0TGlrZS5kYXRhLmZpbmQoKG5ld2xpa2VzKSA9PiBuZXdsaWtlcy5pdGVtX2lkID09PSBmbGl4SWQpO1xuICAgICAgICAgIGNvbnN0IG5ld1BhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBjb25zdCBhZGRMaWtlcyA9IG5ld1BhcmVudC5xdWVyeVNlbGVjdG9yKCcubGlrZXMtY291bnQnKTtcbiAgICAgICAgICBhZGRMaWtlcy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XG4gICAgICAgICAgYWRkTGlrZXMudGV4dENvbnRlbnQgPSBgJHtuZXdMaWtlcy5saWtlc30gTGlrZXNgO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWRkTGlrZXMuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd01vdmllczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=