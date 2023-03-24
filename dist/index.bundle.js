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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: bisque;\r\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n  background-color: #011811;\r\n  color: #b5c7d8;\r\n  font-size: 18px;\r\n  padding-right: 3rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 30px;\r\n  font-weight: 600;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  color: #b5c7d8;\r\n}\r\n\r\n.logo {\r\n  /* background-image: url(); */\r\n  background-size: 80%;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border: 2px solid #003b08;\r\n  color: beige;\r\n  padding-right: 1rem;\r\n  position: relative;\r\n}\r\n\r\nspan#logo-text {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 15%;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #012218;\r\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\r\n}\r\n\r\n.image {\r\n  border: 5px solid #00704e;\r\n  border-radius: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin: 2.5rem auto 0 auto;\r\n  border-radius: 10%;\r\n}\r\n\r\n.moviesItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 1rem 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n}\r\n\r\n.likes-name {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n}\r\n\r\n.likes-count {\r\n  width: 230px;\r\n  text-align: right;\r\n  margin-top: 5px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.likes-count.transition {\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  color: green;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.comment-btn {\r\n  width: 80%;\r\n  border: 2px solid #4cfa02;\r\n  padding: 8px 0 8px 0;\r\n  color: #001007;\r\n  background-color: #d4c7d0;\r\n  font-weight: 600;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: #005135;\r\n  border-radius: 2rem;\r\n  width: 60%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\nh2 {\r\n  margin-left: 0;\r\n  padding-top: 30px;\r\n}\r\n\r\n.show-name {\r\n  font-size: 150%;\r\n  padding: 20px 0;\r\n  color: #000;\r\n}\r\n\r\n.comment-popup .show-name {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-popup table {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comments-list {\r\n  margin-left: 27%;\r\n  list-style-type: none;\r\n  text-indent: 1%;\r\n}\r\n\r\np.summary {\r\n  display: flex;\r\n  padding: 0 3rem;\r\n  font-size: 14px;\r\n  width: 80%;\r\n}\r\n\r\n.close-comment {\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n  font-weight: 900;\r\n  padding: 2% 0;\r\n  margin-left: 95%;\r\n  position: fixed;\r\n}\r\n\r\n.comment-holder {\r\n  text-align: center;\r\n  margin: 2%;\r\n  color: #000;\r\n}\r\n\r\n.form-title {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form button {\r\n  width: 300px;\r\n  border: 2px solid #000;\r\n  height: 35px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n}\r\n\r\n.comment-form button {\r\n  box-shadow: 2px 2px 1px 0;\r\n  cursor: pointer;\r\n  border: 2px solid #000;\r\n  padding: 5px 0;\r\n  color: #000;\r\n  font-weight: 600;\r\n  margin-right: 3rem;\r\n}\r\n\r\n.comment-form textarea {\r\n  width: 300px;\r\n  height: 100px;\r\n  border: 2px solid #000;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: #011811;\r\n  color: #fff;\r\n  height: 80px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 20px;\r\n  word-spacing: 3px;\r\n}\r\n\r\nfooter b {\r\n  font-style: italic;\r\n  color: #4cfa02;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie-wrapper {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto auto;\r\n  }\r\n\r\n  .likes-name {\r\n    display: flex;\r\n    width: 65%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-color: bisque;\r\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n  background-color: #011811;\r\n  color: #b5c7d8;\r\n  font-size: 18px;\r\n  padding-right: 3rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 30px;\r\n  font-weight: 600;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  color: #b5c7d8;\r\n}\r\n\r\n.logo {\r\n  /* background-image: url(); */\r\n  background-size: 80%;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border: 2px solid #003b08;\r\n  color: beige;\r\n  padding-right: 1rem;\r\n  position: relative;\r\n}\r\n\r\nspan#logo-text {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 15%;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #012218;\r\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\r\n}\r\n\r\n.image {\r\n  border: 5px solid #00704e;\r\n  border-radius: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin: 2.5rem auto 0 auto;\r\n  border-radius: 10%;\r\n}\r\n\r\n.moviesItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 1rem 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n}\r\n\r\n.likes-name {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n}\r\n\r\n.likes-count {\r\n  width: 230px;\r\n  text-align: right;\r\n  margin-top: 5px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.likes-count.transition {\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  color: green;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.comment-btn {\r\n  width: 80%;\r\n  border: 2px solid #4cfa02;\r\n  padding: 8px 0 8px 0;\r\n  color: #001007;\r\n  background-color: #d4c7d0;\r\n  font-weight: 600;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: #005135;\r\n  border-radius: 2rem;\r\n  width: 60%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\nh2 {\r\n  margin-left: 0;\r\n  padding-top: 30px;\r\n}\r\n\r\n.show-name {\r\n  font-size: 150%;\r\n  padding: 20px 0;\r\n  color: #000;\r\n}\r\n\r\n.comment-popup .show-name {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-popup table {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comments-list {\r\n  margin-left: 27%;\r\n  list-style-type: none;\r\n  text-indent: 1%;\r\n}\r\n\r\np.summary {\r\n  display: flex;\r\n  padding: 0 3rem;\r\n  font-size: 14px;\r\n  width: 80%;\r\n}\r\n\r\n.close-comment {\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n  font-weight: 900;\r\n  padding: 2% 0;\r\n  margin-left: 95%;\r\n  position: fixed;\r\n}\r\n\r\n.comment-holder {\r\n  text-align: center;\r\n  margin: 2%;\r\n  color: #000;\r\n}\r\n\r\n.form-title {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comment-form input,\r\n.comment-form button {\r\n  width: 300px;\r\n  border: 2px solid #000;\r\n  height: 35px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n}\r\n\r\n.comment-form button {\r\n  box-shadow: 2px 2px 1px 0;\r\n  cursor: pointer;\r\n  border: 2px solid #000;\r\n  padding: 5px 0;\r\n  color: #000;\r\n  font-weight: 600;\r\n  margin-right: 3rem;\r\n}\r\n\r\n.comment-form textarea {\r\n  width: 300px;\r\n  height: 100px;\r\n  border: 2px solid #000;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: #011811;\r\n  color: #fff;\r\n  height: 80px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 20px;\r\n  word-spacing: 3px;\r\n}\r\n\r\nfooter b {\r\n  font-style: italic;\r\n  color: #4cfa02;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie-wrapper {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto auto;\r\n  }\r\n\r\n  .likes-name {\r\n    display: flex;\r\n    width: 65%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_moveiDataload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/moveiDataload.js */ "./src/modules/moveiDataload.js");
/* harmony import */ var _modules_countItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/countItems.js */ "./src/modules/countItems.js");




const prepare = async () => {
  await (0,_modules_moveiDataload_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_countItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

prepare();


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
/* harmony import */ var _retrieveComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieveComments.js */ "./src/modules/retrieveComments.js");
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");



const commentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DnTrjJoNQD9V1kXZAGcs/comments/';

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

    const getcomment = await (0,_retrieveComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(showId);
    const usercomment = document.querySelector('.comments-list');
    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(getcomment, usercomment);
  });
});

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

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCommentLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCommentLength.js */ "./src/modules/getCommentLength.js");


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
    const commentCount = (0,_getCommentLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(getcomment);
    checkCount.innerHTML = `(${commentCount})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);

/***/ }),

/***/ "./src/modules/getCommentLength.js":
/*!*****************************************!*\
  !*** ./src/modules/getCommentLength.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComments = (getcomment) => getcomment.length;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getMovies": () => (/* binding */ getMovies),
/* harmony export */   "postLikes": () => (/* binding */ postLikes)
/* harmony export */ });
/* eslint-disable max-len */
const movies = [77, 66, 72, 4, 55, 6, 93, 8, 22, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 37, 38, 39, 40];
const baseUrl = 'https://api.tvmaze.com';
const showsUrl = '/shows/';
const aPiLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
// const API_KEY = '6jTH3jOos7OpnHxCg6lz';
const API_KEY = 'DnTrjJoNQD9V1kXZAGcs';
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

/***/ "./src/modules/moveiDataload.js":
/*!**************************************!*\
  !*** ./src/modules/moveiDataload.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/modules/getData.js");
/* harmony import */ var _popWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popWindow.js */ "./src/modules/popWindow.js");



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
    (0,_popWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(show);
  });
  ldMovies.appendChild(moviesItem);
};

const CreateMovieElement = async (loadMovie, show) => {
  const number = document.querySelector('.Number');
  loadMovie.innerHTML = '';
  const result = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
  const likesData = result.data || []; // add fallback for undefined value
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
  number.textContent = `Show (${show.length})`;
};

const showMovies = async () => {
  const loadMovies = document.querySelector('.movie-wrapper');
  const result = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getMovies)();
  if (result.success) {
    await CreateMovieElement(loadMovies, result.movieData);
  }
};

const parentElement = document.querySelector('.movie-wrapper');
parentElement.addEventListener('click', async (e) => { // add async keyword
  if (e.target.matches('.lni.lni-heart')) {
    const numberId = e.target.id;
    const result = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(numberId); // await postLikes
    if (result.success) {
      const resultLike = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(); // await getLikes
      const newLikes = resultLike.data.find((newlikes) => newlikes.item_id === numberId);
      const newParent = e.target.parentElement.parentElement;
      const addLikes = newParent.querySelector('.likes-count');
      addLikes.classList.add('transition');
      addLikes.textContent = `${newLikes.likes} Likes`;
      setTimeout(() => {
        addLikes.classList.remove('transition');
      }, 100);
    }
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);


/***/ }),

/***/ "./src/modules/popWindow.js":
/*!**********************************!*\
  !*** ./src/modules/popWindow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComment.js */ "./src/modules/addComment.js");
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");
/* harmony import */ var _retrieveComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retrieveComments.js */ "./src/modules/retrieveComments.js");




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
(0,_retrieveComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupWin);

/***/ }),

/***/ "./src/modules/retrieveComments.js":
/*!*****************************************!*\
  !*** ./src/modules/retrieveComments.js ***!
  \*****************************************/
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxL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LHFEQUFRLElBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWU7QUFDVTtBQUNIOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5Qix3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWU7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZ0VBQVc7QUFDWCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3REdkI7QUFDQTtBQUNBLCtJQUErSSxPQUFPO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvdW50SXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0Q29tbWVudExlbmd0aC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbW92ZWlEYXRhbG9hZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wV2luZG93LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXRyaWV2ZUNvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxyXFxuICBjb2xvcjogI2I1YzdkODtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNiNWM3ZDg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpOyAqL1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxyXFxuICB3aWR0aDogNzBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAzYjA4O1xcclxcbiAgY29sb3I6IGJlaWdlO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiNsb2dvLXRleHQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNSU7XFxyXFxuICBsZWZ0OiAxNSU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtd3JhcHBlciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEyMjE4O1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTE5LCA0MywgMC45OSk7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDA3MDRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMi41cmVtIGF1dG8gMCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVzSXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFyZW0gMXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvdW50IHtcXHJcXG4gIHdpZHRoOiAyMzBweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY291bnQudHJhbnNpdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0biB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzRjZmEwMjtcXHJcXG4gIHBhZGRpbmc6IDhweCAwIDhweCAwO1xcclxcbiAgY29sb3I6ICMwMDEwMDc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRjN2QwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDUxMzU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwIDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxNTAlO1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIC5zaG93LW5hbWUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAgdGFibGUge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjclO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1pbmRlbnQ6IDElO1xcclxcbn1cXHJcXG5cXHJcXG5wLnN1bW1hcnkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDAgM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcGFkZGluZzogMiUgMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhvbGRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIGlucHV0LFxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIGJ1dHRvbiB7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDFweCAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExODExO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHdvcmQtc3BhY2luZzogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYiB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogIzRjZmEwMjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGlrZXMtbmFtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1C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Q1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiwgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTgxMTtcXHJcXG4gIGNvbG9yOiAjYjVjN2Q4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2I1YzdkODtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7ICovXFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDNiMDg7XFxyXFxuICBjb2xvcjogYmVpZ2U7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuI2xvZ28tdGV4dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDE1JTtcXHJcXG4gIGxlZnQ6IDE1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyMTg7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCAycHggcmdiYSgwLCAxMTksIDQzLCAwLjk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDcwNGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAyLjVyZW0gYXV0byAwIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXNJdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY291bnQge1xcclxcbiAgd2lkdGg6IDIzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb3VudC50cmFuc2l0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNmYTAyO1xcclxcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxyXFxuICBjb2xvcjogIzAwMTAwNztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGM3ZDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYmFja2dyb3VuZDogIzAwNTEzNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE1MCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAgLnNob3ctbmFtZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB0YWJsZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNyU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB0ZXh0LWluZGVudDogMSU7XFxyXFxufVxcclxcblxcclxcbnAuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBwYWRkaW5nOiAyJSAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaG9sZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gaW5wdXQsXFxyXFxuLmNvbW1lbnQtZm9ybSBidXR0b24ge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gYnV0dG9uIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMXB4IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBiIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjNGNmYTAyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1vdmllLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlcy1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHNob3dNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL21vdmVpRGF0YWxvYWQuanMnO1xuaW1wb3J0IGNvdW50SXRlbXMgZnJvbSAnLi9tb2R1bGVzL2NvdW50SXRlbXMuanMnO1xuXG5jb25zdCBwcmVwYXJlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzaG93TW92aWVzKCk7XG4gIGNvdW50SXRlbXMoKTtcbn07XG5cbnByZXBhcmUoKTtcbiIsImltcG9ydCBnZXRjb21tZW50cyBmcm9tICcuL3JldHJpZXZlQ29tbWVudHMuanMnO1xuaW1wb3J0IGRpc3BsYXlDb21tZW50cyBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5cbmNvbnN0IGNvbW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRG5UcmpKb05RRDlWMWtYWkFHY3MvY29tbWVudHMvJztcblxuZXhwb3J0IGRlZmF1bHQgKGJ1dHRvbiwgdXNlcm5hbWUsIHRleHQsIHNob3dJZCkgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNob3dJZCA9IHNob3dJZC50b1N0cmluZygpO1xuICAgIGNvbnN0IG5hbWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY29tbWVudCA9IHRleHQudmFsdWUudHJpbSgpO1xuICAgIGlmIChuYW1lICYmIGNvbW1lbnQpIHtcbiAgICAgIGF3YWl0IGZldGNoKGNvbW1lbnRBUEksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBzaG93SWQsXG4gICAgICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgdGV4dC52YWx1ZSA9ICcnO1xuXG4gICAgY29uc3QgZ2V0Y29tbWVudCA9IGF3YWl0IGdldGNvbW1lbnRzKHNob3dJZCk7XG4gICAgY29uc3QgdXNlcmNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtbGlzdCcpO1xuICAgIGRpc3BsYXlDb21tZW50cyhnZXRjb21tZW50LCB1c2VyY29tbWVudCk7XG4gIH0pO1xufTsiLCJmdW5jdGlvbiBjb3VudEl0ZW1zKCkge1xuICBjb25zdCBjb3VudE1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZpZS13cmFwcGVyID4gKicpO1xuICByZXR1cm4gY291bnRNb3ZpZXMubGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3VudEl0ZW1zOyIsImltcG9ydCBjb3VudENvbW1lbnRzIGZyb20gJy4vZ2V0Q29tbWVudExlbmd0aC5qcyc7XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChnZXRjb21tZW50LCB1c2VyY29tbWVudCkgPT4ge1xuICB1c2VyY29tbWVudC5pbm5lckhUTUwgPSAnJztcbiAgaWYgKGdldGNvbW1lbnQubGVuZ3RoID4gMCkge1xuICAgIGdldGNvbW1lbnQuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgbGlzdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdGxpbmsuY2xhc3NMaXN0LmFkZCgnY29tbW1lbnQtaXRlbScpO1xuICAgICAgbGlzdGxpbmsuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9IDogJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICAgIHVzZXJjb21tZW50LmFwcGVuZENoaWxkKGxpc3RsaW5rKTtcbiAgICB9KTtcbiAgICBjb25zdCBjaGVja0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJyk7XG4gICAgY29uc3QgY29tbWVudENvdW50ID0gY291bnRDb21tZW50cyhnZXRjb21tZW50KTtcbiAgICBjaGVja0NvdW50LmlubmVySFRNTCA9IGAoJHtjb21tZW50Q291bnR9KWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50czsiLCJjb25zdCBjb3VudENvbW1lbnRzID0gKGdldGNvbW1lbnQpID0+IGdldGNvbW1lbnQubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgY291bnRDb21tZW50czsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5jb25zdCBtb3ZpZXMgPSBbNzcsIDY2LCA3MiwgNCwgNTUsIDYsIDkzLCA4LCAyMiwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNSwgMjYsIDI3LCAyOCwgMjksIDMwLCAzMSwgMzIsIDMzLCAzNCwgMzUsIDQxLCA0MiwgMzcsIDM4LCAzOSwgNDBdO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tJztcbmNvbnN0IHNob3dzVXJsID0gJy9zaG93cy8nO1xuY29uc3QgYVBpTGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuLy8gY29uc3QgQVBJX0tFWSA9ICc2alRIM2pPb3M3T3BuSHhDZzZseic7XG5jb25zdCBBUElfS0VZID0gJ0RuVHJqSm9OUUQ5VjFrWFpBR2NzJztcbmNvbnN0IGFkZExpa2UgPSBgL2FwcHMvJHtBUElfS0VZfS9saWtlcy9gO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCA9ICcnKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGdldGxpa2VzQ291bnQgPSBhc3luYyAodXJsID0gJycpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgaGl0bGlrZXNBcGkgPSBhc3luYyAodXJsID0gJycsIGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBBY2NlcHQ6ICd0ZXh0L3BsYWluJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb3ZpZWxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCB6ID0gMDsgeiA8IG1vdmllcy5sZW5ndGg7IHogKz0gMSkge1xuICAgICAgY29uc3QgbW92aWVzSWQgPSBiYXNlVXJsICsgc2hvd3NVcmwgKyBtb3ZpZXNbel07XG4gICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGF0YShtb3ZpZXNJZCk7XG4gICAgICBtb3ZpZWxpc3QucHVzaChwcm9taXNlKTtcbiAgICB9XG4gICAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwobW92aWVsaXN0KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtb3ZpZURhdGEgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3IgfTtcbiAgfVxufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdExpa2VMaW5rID0gYVBpTGluayArIGFkZExpa2U7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldGxpa2VzQ291bnQocG9zdExpa2VMaW5rKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH07XG4gIH1cbn07XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBvc3RMaWtlTGluayA9IGFQaUxpbmsgKyBhZGRMaWtlO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBoaXRsaWtlc0FwaShwb3N0TGlrZUxpbmssIGlkKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yIH07XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldE1vdmllcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9OyIsImltcG9ydCB7IGdldE1vdmllcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9IGZyb20gJy4vZ2V0RGF0YS5qcyc7XG5pbXBvcnQgcG9wdXBXaW4gZnJvbSAnLi9wb3BXaW5kb3cuanMnO1xuXG5jb25zdCBvYmplY3QgPSBbXTtcbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5cbmNvbnN0IGJ1aWxkRGl2RWxlbWVudCA9IChsZE1vdmllcywgc2hvdykgPT4ge1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbW92aWVzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb3ZpZXNJdGVtLmNsYXNzTGlzdC5hZGQoJ21vdmllc0l0ZW0nKTtcbiAgbW92aWVzSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCIke3Nob3cuaW1hZ2UgJiYgc2hvdy5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHtzaG93Lm5hbWV9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlrZXMtbmFtZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj4ke3Nob3cubmFtZX08L3A+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsbmkgbG5pLWhlYXJ0XCIgaWQ9XCIke3Nob3cuaWR9XCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cImxpa2VzLWNvdW50XCI+JHtzaG93Lmxpa2VzfSBMaWtlczwvcD5gO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLmNsYXNzTGlzdCA9ICdjb21tZW50LWJ0bic7XG4gIGJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICBtb3ZpZXNJdGVtLmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb21tZW50UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICBwb3B1cFdpbihzaG93KTtcbiAgfSk7XG4gIGxkTW92aWVzLmFwcGVuZENoaWxkKG1vdmllc0l0ZW0pO1xufTtcblxuY29uc3QgQ3JlYXRlTW92aWVFbGVtZW50ID0gYXN5bmMgKGxvYWRNb3ZpZSwgc2hvdykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTnVtYmVyJyk7XG4gIGxvYWRNb3ZpZS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gcmVzdWx0LmRhdGEgfHwgW107IC8vIGFkZCBmYWxsYmFjayBmb3IgdW5kZWZpbmVkIHZhbHVlXG4gIGNvbnN0IHVwZGF0ZWRNb3ZpZXMgPSBzaG93Lm1hcCgobW92aWUpID0+IHtcbiAgICBjb25zdCBsaWtlID0gbGlrZXNEYXRhLmZpbmQoKGxpa2UpID0+IHBhcnNlSW50KGxpa2UuaXRlbV9pZCwgMzYpID09PSBtb3ZpZS5pZCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgIGxpa2UgPyBtb3ZpZS5saWtlcyA9IGxpa2UubGlrZXMgOiBtb3ZpZS5saWtlcyA9IDA7XG4gICAgb2JqZWN0LnB1c2gobW92aWUpO1xuICAgIHJldHVybiBtb3ZpZTtcbiAgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZE1vdmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1aWxkRGl2RWxlbWVudChsb2FkTW92aWUsIHVwZGF0ZWRNb3ZpZXNbaV0pO1xuICB9XG4gIG51bWJlci50ZXh0Q29udGVudCA9IGBTaG93ICgke3Nob3cubGVuZ3RofSlgO1xufTtcblxuY29uc3Qgc2hvd01vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbG9hZE1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS13cmFwcGVyJyk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE1vdmllcygpO1xuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICBhd2FpdCBDcmVhdGVNb3ZpZUVsZW1lbnQobG9hZE1vdmllcywgcmVzdWx0Lm1vdmllRGF0YSk7XG4gIH1cbn07XG5cbmNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtd3JhcHBlcicpO1xucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7IC8vIGFkZCBhc3luYyBrZXl3b3JkXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKCcubG5pLmxuaS1oZWFydCcpKSB7XG4gICAgY29uc3QgbnVtYmVySWQgPSBlLnRhcmdldC5pZDtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb3N0TGlrZXMobnVtYmVySWQpOyAvLyBhd2FpdCBwb3N0TGlrZXNcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IHJlc3VsdExpa2UgPSBhd2FpdCBnZXRMaWtlcygpOyAvLyBhd2FpdCBnZXRMaWtlc1xuICAgICAgY29uc3QgbmV3TGlrZXMgPSByZXN1bHRMaWtlLmRhdGEuZmluZCgobmV3bGlrZXMpID0+IG5ld2xpa2VzLml0ZW1faWQgPT09IG51bWJlcklkKTtcbiAgICAgIGNvbnN0IG5ld1BhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGFkZExpa2VzID0gbmV3UGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWtlcy1jb3VudCcpO1xuICAgICAgYWRkTGlrZXMuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpO1xuICAgICAgYWRkTGlrZXMudGV4dENvbnRlbnQgPSBgJHtuZXdMaWtlcy5saWtlc30gTGlrZXNgO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZExpa2VzLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd01vdmllcztcbiIsImltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkQ29tbWVudC5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcbmltcG9ydCBnZXRjb21tZW50cyBmcm9tICcuL3JldHJpZXZlQ29tbWVudHMuanMnO1xuXG5jb25zdCBjb21tZW50UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1wb3B1cCcpO1xuXG5jb25zdCBwb3B1cFdpbiA9IGFzeW5jIChzaG93KSA9PiB7XG4gIGNvbnN0IGNsb3NlU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2xvc2VTaWduLmlubmVySFRNTCA9ICdYJztcbiAgY2xvc2VTaWduLmNsYXNzTGlzdCA9ICdjbG9zZS1jb21tZW50JztcbiAgY29tbWVudFBvcHVwLmFwcGVuZENoaWxkKGNsb3NlU2lnbik7XG4gIGNvbW1lbnRQb3B1cC5pbm5lckhUTUwgKz0gYFxuPGltZyBzcmM9XCIke3Nob3cuaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwicG9wdXAtaW1nXCI+XG48aDMgY2xhc3M9XCJzaG93LW5hbWVcIj4ke3Nob3cubmFtZX08L2gzPlxuPHRhYmxlPlxuICA8dHI+XG4gICAgPHRkPlxuICAgICAgPGI+TGFuZ3VhZ2U6PC9iPiAke3Nob3cubGFuZ3VhZ2V9XG4gICAgPC90ZD5cbiAgICA8dGQ+XG4gICAgICA8Yj5UeXBlOjwvYj4gJHtzaG93LnR5cGV9XG4gICAgPC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG48UCBjbGFzcz1cInN1bW1hcnlcIj4ke3Nob3cuc3VtbWFyeX08L3A+XG48aDMgY2xhc3M9XCJjb21tZW50LWhvbGRlclwiPlxuICAgIENvbW1lbnRzIDxzcGFuIGNsYXNzPVwiY29tbWVudC1jb3VudFwiPigwKTwvc3Bhbj5cbiAgICA8L2gzPlxuICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzLWxpc3RcIj5cblxuICAgIDwvdWw+XG4gICAgPGgyIGNsYXNzPVwiZm9ybS10aXRsZVwiPkFkZCBhIGNvbW1lbnQ8L2gyPlxuICAgIDxmb3JtIGNsYXNzPVwiY29tbWVudC1mb3JtXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgPHRleHRhcmVhIGlkPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiBuYW1lPVwiY29tbWVudFwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cIjFcIj48L3RleHRhcmVhPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1idG5cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPmA7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4gIGNvbnN0IGdldGNvbW1lbnRzID0gYXdhaXQgZ2V0Y29tbWVudHMoc2hvdy5pZCk7XG4gIGNvbnN0IHVzZXJjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWxpc3QnKTtcbiAgZGlzcGxheUNvbW1lbnRzKGdldGNvbW1lbnRzLCB1c2VyY29tbWVudCk7XG5cbiAgY29uc3QgY29tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dGFyZWEnKTtcbiAgYWRkQ29tbWVudChjb21CdG4sIG5hbWUsIHRleHQsIHNob3cuaWQpO1xufTtcbmNvbW1lbnRQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1jb21tZW50JykpIHtcbiAgICBjb21tZW50UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb21tZW50UG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gIH1cbn0pO1xuZ2V0Y29tbWVudHMoKTtcbmV4cG9ydCBkZWZhdWx0IHBvcHVwV2luOyIsImNvbnN0IGdldGNvbW1lbnRzID0gYXN5bmMgKHNob3dJZCkgPT4ge1xuICBzaG93SWQgPSBzaG93SWQudG9TdHJpbmcoKTtcbiAgY29uc3QgY29tbWVudCA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy82alRIM2pPb3M3T3BuSHhDZzZsei9jb21tZW50cz9pdGVtX2lkPSR7c2hvd0lkfWApO1xuICBjb25zdCByZXN1bHQgPSBjb21tZW50Lmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRjb21tZW50czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=