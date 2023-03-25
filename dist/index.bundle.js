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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  background-color: bisque;\r\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n  background-color: #011811;\r\n  color: #b5c7d8;\r\n  font-size: 18px;\r\n  padding-right: 3rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 30px;\r\n  font-weight: 600;\r\n  padding-left: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\nnav li {\r\n  color: whitesmoke;\r\n  transition: ease-in-out 2s;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  color: whitesmoke;\r\n  transition: ease-in-out 2s;\r\n}\r\n\r\nnav li:hover {\r\n  transform: translateX(1.2);\r\n  color: #9ffa03;\r\n  font-size: 25px;\r\n}\r\n\r\n.logo {\r\n  /* background-image: url(); */\r\n  background-size: 80%;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border: 2px solid #003b08;\r\n  color: beige;\r\n  padding-right: 1rem;\r\n  position: relative;\r\n}\r\n\r\nspan#logo-text {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 15%;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #012218;\r\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\r\n}\r\n\r\n.image {\r\n  border: 5px solid #00704e;\r\n  border-radius: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin: 2.5rem auto 0 auto;\r\n  border-radius: 10%;\r\n}\r\n\r\n.moviesItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 1rem 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n}\r\n\r\n.likes-name {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n}\r\n\r\n.likes-count {\r\n  width: 230px;\r\n  text-align: right;\r\n  margin-top: 5px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.likes-count.transition {\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  color: green;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.comment-btn {\r\n  width: 80%;\r\n  border: 2px solid #4cfa02;\r\n  padding: 8px 0 8px 0;\r\n  color: #001007;\r\n  background-color: #d4c7d0;\r\n  font-weight: 600;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: #005135;\r\n  border-radius: 2rem;\r\n  width: 60%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\nh2 {\r\n  margin-left: 0;\r\n  padding-top: 30px;\r\n}\r\n\r\n.show-name {\r\n  font-size: 150%;\r\n  padding: 20px 0;\r\n  color: #000;\r\n}\r\n\r\n.comment-popup .show-name {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-popup table {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comments-list {\r\n  margin-left: 27%;\r\n  list-style-type: none;\r\n  text-indent: 1%;\r\n}\r\n\r\np.summary {\r\n  display: flex;\r\n  padding: 0 3rem;\r\n  font-size: 14px;\r\n  width: 80%;\r\n}\r\n\r\n.close-comment {\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n  font-weight: 900;\r\n  padding: 2% 0;\r\n  margin-left: 95%;\r\n  position: fixed;\r\n}\r\n\r\n.comment-holder {\r\n  text-align: center;\r\n  margin: 2%;\r\n  color: #000;\r\n}\r\n\r\n.form-title {\r\n  margin-left: 30%;\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 25%;\r\n}\r\n\r\n.comment-form input {\r\n  width: 300px;\r\n  border: 2px solid #000;\r\n  height: 35px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n}\r\n\r\n.submit-btn {\r\n  outline: none;\r\n  cursor: pointer;\r\n  border: 2px solid #9ffa03;\r\n  padding: 12px 0;\r\n  width: 200px !important;\r\n  color: whitesmoke;\r\n  font-weight: 600;\r\n  margin-right: 3rem;\r\n  background-color: #003b08;\r\n  transition: ease-out 2s;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n}\r\n\r\n.submit-btn:hover {\r\n  transform: scale(1.1);\r\n  background-color: #9ffa03;\r\n  color: #000;\r\n}\r\n\r\n\r\n\r\n.comment-form textarea {\r\n  width: 300px;\r\n  height: 100px;\r\n  border: 2px solid #000;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: #011811;\r\n  color: #fff;\r\n  height: 80px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 20px;\r\n  word-spacing: 3px;\r\n}\r\n\r\nfooter b {\r\n  font-style: italic;\r\n  color: #4cfa02;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie-wrapper {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto auto;\r\n  }\r\n\r\n  .likes-name {\r\n    display: flex;\r\n    width: 65%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-color: bisque;\r\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-bottom: 1rem;\r\n  background-color: #011811;\r\n  color: #b5c7d8;\r\n  font-size: 18px;\r\n  padding-right: 3rem;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 30px;\r\n  font-weight: 600;\r\n  padding-left: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\nnav li {\r\n  color: whitesmoke;\r\n  transition: ease-in-out 2s;\r\n}\r\n\r\n.nav a {\r\n  text-decoration: none;\r\n  color: whitesmoke;\r\n  transition: ease-in-out 2s;\r\n}\r\n\r\nnav li:hover {\r\n  transform: translateX(1.2);\r\n  color: #9ffa03;\r\n  font-size: 25px;\r\n}\r\n\r\n.logo {\r\n  /* background-image: url(); */\r\n  background-size: 80%;\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50%;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border: 2px solid #003b08;\r\n  color: beige;\r\n  padding-right: 1rem;\r\n  position: relative;\r\n}\r\n\r\nspan#logo-text {\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 15%;\r\n  text-align: center;\r\n  padding: 1rem;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #012218;\r\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\r\n}\r\n\r\n.image {\r\n  border: 5px solid #00704e;\r\n  border-radius: 2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.popup-img {\r\n  display: block;\r\n  margin: 2.5rem auto 0 auto;\r\n  border-radius: 10%;\r\n}\r\n\r\n.moviesItem {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 1rem 1rem;\r\n  color: #fff;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n}\r\n\r\n.likes-name {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 200px;\r\n}\r\n\r\n.likes-count {\r\n  width: 230px;\r\n  text-align: right;\r\n  margin-top: 5px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.likes-count.transition {\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n  color: green;\r\n  transition: all 0.8s ease-in-out;\r\n}\r\n\r\n.comment-btn {\r\n  width: 80%;\r\n  border: 2px solid #4cfa02;\r\n  padding: 8px 0 8px 0;\r\n  color: #001007;\r\n  background-color: #d4c7d0;\r\n  font-weight: 600;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.comment-popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: #005135;\r\n  border-radius: 2rem;\r\n  width: 60%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\nh2 {\r\n  margin-left: 0;\r\n  padding-top: 30px;\r\n}\r\n\r\n.show-name {\r\n  font-size: 150%;\r\n  padding: 20px 0;\r\n  color: #000;\r\n}\r\n\r\n.comment-popup .show-name {\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 10px 0;\r\n}\r\n\r\n.comment-popup table {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n  margin-left: 30%;\r\n}\r\n\r\n.comments-list {\r\n  margin-left: 27%;\r\n  list-style-type: none;\r\n  text-indent: 1%;\r\n}\r\n\r\np.summary {\r\n  display: flex;\r\n  padding: 0 3rem;\r\n  font-size: 14px;\r\n  width: 80%;\r\n}\r\n\r\n.close-comment {\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  font-size: 25px;\r\n  font-weight: 900;\r\n  padding: 2% 0;\r\n  margin-left: 95%;\r\n  position: fixed;\r\n}\r\n\r\n.comment-holder {\r\n  text-align: center;\r\n  margin: 2%;\r\n  color: #000;\r\n}\r\n\r\n.form-title {\r\n  margin-left: 30%;\r\n  margin-top: 10px;\r\n  color: #000;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  margin-bottom: 20px;\r\n  margin-left: 25%;\r\n}\r\n\r\n.comment-form input {\r\n  width: 300px;\r\n  border: 2px solid #000;\r\n  height: 35px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n}\r\n\r\n.submit-btn {\r\n  outline: none;\r\n  cursor: pointer;\r\n  border: 2px solid #9ffa03;\r\n  padding: 12px 0;\r\n  width: 200px !important;\r\n  color: whitesmoke;\r\n  font-weight: 600;\r\n  margin-right: 3rem;\r\n  background-color: #003b08;\r\n  transition: ease-out 2s;\r\n  border-radius: 5px;\r\n  font-size: 18px;\r\n}\r\n\r\n.submit-btn:hover {\r\n  transform: scale(1.1);\r\n  background-color: #9ffa03;\r\n  color: #000;\r\n}\r\n\r\n\r\n\r\n.comment-form textarea {\r\n  width: 300px;\r\n  height: 100px;\r\n  border: 2px solid #000;\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  background-color: #011811;\r\n  color: #fff;\r\n  height: 80px;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nfooter p {\r\n  font-size: 20px;\r\n  word-spacing: 3px;\r\n}\r\n\r\nfooter b {\r\n  font-style: italic;\r\n  color: #4cfa02;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie-wrapper {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    grid-template-rows: auto auto;\r\n  }\r\n\r\n  .likes-name {\r\n    display: flex;\r\n    width: 65%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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



const commentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DnTrjJoNQD9V1kXZAGcs/comments';

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


const displayComments = (getcommentsData, usercomment) => {
  usercomment.innerHTML = '';
  if (getcommentsData.length > 0) {
    getcommentsData.forEach((comment) => {
      const listlink = document.createElement('li');
      listlink.classList.add('commment-item');
      listlink.innerHTML = `${comment.creation_date} ${comment.username} : ${comment.comment}`;
      usercomment.appendChild(listlink);
    });
    const checkCount = document.querySelector('.comment-count');
    const commentCount = (0,_getCommentLength_js__WEBPACK_IMPORTED_MODULE_0__["default"])(getcommentsData);
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
const movies = [
  1, 2, 3, 4, 55, 6, 93, 8, 22, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 37, 38, 39, 40
];
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

async function getMovies() {
  const movielist = [];
  for (let z = 0; z < movies.length; z += 1) {
    const moviesId = baseUrl + showsUrl + movies[z];
    const promise = getData(moviesId);
    movielist.push(promise);
  }
  const movieData = await Promise.all(movielist);
  return { success: true, movieData };
}

async function getLikes() {
  const postLikeLink = aPiLink + addLike;
  const data = await getlikesCount(postLikeLink);
  return { success: true, data };
}

async function postLikes(id) {
  const postLikeLink = aPiLink + addLike;
  const data = await hitlikesApi(postLikeLink, id);
  return { success: true, data };
}



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
  const likesData = result.data || []; 
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
parentElement.addEventListener('click', async (e) => { 
  if (e.target.matches('.lni.lni-heart')) {
    const numberId = e.target.id;
    const result = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(numberId); 
    if (result.success) {
      const resultLike = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)(); 
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
  
  const getcommentsData = await (0,_retrieveComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(show.id);
  const usercomment = document.querySelector('.comments-list');
  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(getcommentsData, usercomment);

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
  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DnTrjJoNQD9V1kXZAGcs/comments?item_id=${showId}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLCtCQUErQiwrQkFBK0IscUdBQXFHLEtBQUssaUJBQWlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLDJCQUEyQixnQ0FBZ0MscUJBQXFCLHNCQUFzQiwwQkFBMEIsS0FBSyxjQUFjLG9CQUFvQix1QkFBdUIsZ0JBQWdCLHVCQUF1Qix5QkFBeUIsc0JBQXNCLEtBQUssb0JBQW9CLHdCQUF3QixpQ0FBaUMsS0FBSyxnQkFBZ0IsNEJBQTRCLHdCQUF3QixpQ0FBaUMsS0FBSyxzQkFBc0IsaUNBQWlDLHFCQUFxQixzQkFBc0IsS0FBSyxlQUFlLGtDQUFrQyw2QkFBNkIsa0JBQWtCLG1CQUFtQix5QkFBeUIsbUNBQW1DLGtDQUFrQyxnQ0FBZ0MsbUJBQW1CLDBCQUEwQix5QkFBeUIsS0FBSyx3QkFBd0IseUJBQXlCLGVBQWUsZ0JBQWdCLHlCQUF5QixvQkFBb0IsS0FBSyx3QkFBd0Isd0JBQXdCLG9CQUFvQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQ0FBZ0MsK0RBQStELEtBQUssZ0JBQWdCLGdDQUFnQywwQkFBMEIsdUJBQXVCLDBCQUEwQixpQkFBaUIsS0FBSyxvQkFBb0IscUJBQXFCLGlDQUFpQyx5QkFBeUIsS0FBSyxxQkFBcUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsd0JBQXdCLGtCQUFrQixLQUFLLGdCQUFnQixnQkFBZ0IsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsbUJBQW1CLEtBQUssc0JBQXNCLG1CQUFtQix3QkFBd0Isc0JBQXNCLHlCQUF5QixLQUFLLGlDQUFpQyxzQkFBc0IsdUJBQXVCLG1CQUFtQix1Q0FBdUMsS0FBSyxzQkFBc0IsaUJBQWlCLGdDQUFnQywyQkFBMkIscUJBQXFCLGdDQUFnQyx1QkFBdUIsMEJBQTBCLEtBQUssd0JBQXdCLHNCQUFzQixlQUFlLGdCQUFnQix1Q0FBdUMsd0JBQXdCLDBCQUEwQiwwQkFBMEIsaUJBQWlCLG1CQUFtQix5QkFBeUIsb0JBQW9CLG1CQUFtQixLQUFLLFlBQVkscUJBQXFCLHdCQUF3QixLQUFLLG9CQUFvQixzQkFBc0Isc0JBQXNCLGtCQUFrQixLQUFLLG1DQUFtQyx5QkFBeUIsa0JBQWtCLHFCQUFxQixLQUFLLDhCQUE4QixpQkFBaUIscUJBQXFCLDhCQUE4Qix1QkFBdUIsS0FBSyx3QkFBd0IsdUJBQXVCLDRCQUE0QixzQkFBc0IsS0FBSyxtQkFBbUIsb0JBQW9CLHNCQUFzQixzQkFBc0IsaUJBQWlCLEtBQUssd0JBQXdCLHFCQUFxQixrQkFBa0Isc0JBQXNCLHNCQUFzQix1QkFBdUIsb0JBQW9CLHVCQUF1QixzQkFBc0IsS0FBSyx5QkFBeUIseUJBQXlCLGlCQUFpQixrQkFBa0IsS0FBSyxxQkFBcUIsdUJBQXVCLHVCQUF1QixrQkFBa0IsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsMEJBQTBCLHVCQUF1QixLQUFLLDZCQUE2QixtQkFBbUIsNkJBQTZCLG1CQUFtQix5QkFBeUIsb0JBQW9CLEtBQUsscUJBQXFCLG9CQUFvQixzQkFBc0IsZ0NBQWdDLHNCQUFzQiw4QkFBOEIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsZ0NBQWdDLDhCQUE4Qix5QkFBeUIsc0JBQXNCLEtBQUssMkJBQTJCLDRCQUE0QixnQ0FBZ0Msa0JBQWtCLEtBQUssd0NBQXdDLG1CQUFtQixvQkFBb0IsNkJBQTZCLG9CQUFvQixtQkFBbUIsS0FBSyxnQkFBZ0Isb0JBQW9CLGdDQUFnQyxrQkFBa0IsbUJBQW1CLDhCQUE4QiwwQkFBMEIsS0FBSyxrQkFBa0Isc0JBQXNCLHdCQUF3QixLQUFLLGtCQUFrQix5QkFBeUIscUJBQXFCLEtBQUssOENBQThDLHNCQUFzQixzQkFBc0IsOENBQThDLHNDQUFzQyxPQUFPLHVCQUF1QixzQkFBc0IsbUJBQW1CLE9BQU8sS0FBSyx1QkFBdUI7QUFDdnRaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNicUI7QUFDK0I7QUFDSDs7QUFFakQ7QUFDQSxRQUFRLHFFQUFVO0FBQ2xCLEVBQUUsa0VBQVU7QUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZ0Q7QUFDRzs7QUFFbkQ7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2Q0FBNkM7QUFDN0MsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLGdFQUFXO0FBQ3hDO0FBQ0EsSUFBSSwrREFBZTtBQUNuQixHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDTHlCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsdUJBQXVCLEVBQUUsa0JBQWtCLElBQUksZ0JBQWdCO0FBQzdGO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGdFQUFhO0FBQ3RDLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNqQjlCO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRThEO0FBQ3hCOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQyxTQUFTLFVBQVU7QUFDbkY7QUFDQSw2QkFBNkIsVUFBVTtBQUN2Qyx5Q0FBeUMsUUFBUTtBQUNqRDtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBO0FBQ0EsZ0NBQWdDLFlBQVk7QUFDNUM7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBUztBQUNsQztBQUNBLCtCQUErQixxREFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFZTtBQUNVO0FBQ0g7O0FBRWhEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEMsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnRUFBVztBQUMzQztBQUNBLEVBQUUsK0RBQWU7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN2RGY7QUFDQTtBQUNBLCtJQUErSSxPQUFPO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvdW50SXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0Q29tbWVudExlbmd0aC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbW92ZWlEYXRhbG9hZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wV2luZG93LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXRyaWV2ZUNvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxyXFxuICBjb2xvcjogI2I1YzdkODtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5uYXYgbGkge1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMnM7XFxyXFxufVxcclxcblxcclxcbm5hdiBsaTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4yKTtcXHJcXG4gIGNvbG9yOiAjOWZmYTAzO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTsgKi9cXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xcclxcbiAgd2lkdGg6IDcwcHg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwM2IwODtcXHJcXG4gIGNvbG9yOiBiZWlnZTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbnNwYW4jbG9nby10ZXh0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTUlO1xcclxcbiAgbGVmdDogMTUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXdyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjIxODtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDExOSwgNDMsIDAuOTkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2Uge1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwNzA0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDIuNXJlbSBhdXRvIDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllc0l0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxcmVtIDFyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb3VudCB7XFxyXFxuICB3aWR0aDogMjMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvdW50LnRyYW5zaXRpb24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Y2ZhMDI7XFxyXFxuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcXHJcXG4gIGNvbG9yOiAjMDAxMDA3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YzdkMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDA1MTM1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCAuc2hvdy1uYW1lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHRhYmxlIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtaW5kZW50OiAxJTtcXHJcXG59XFxyXFxuXFxyXFxucC5zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmc6IDIlIDA7XFxyXFxuICBtYXJnaW4tbGVmdDogOTUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ob2xkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMzAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjOWZmYTAzO1xcclxcbiAgcGFkZGluZzogMTJweCAwO1xcclxcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYjA4O1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMnM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmZhMDM7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTgxMTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICM0Y2ZhMDI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubW92aWUtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmxpa2VzLW5hbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhGQUE4RjtBQUNoRzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixZQUFZO0VB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OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExODExO1xcclxcbiAgY29sb3I6ICNiNWM3ZDg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubmF2IGxpIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMnM7XFxyXFxufVxcclxcblxcclxcbi5uYXYgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDJzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgbGk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuMik7XFxyXFxuICBjb2xvcjogIzlmZmEwMztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7ICovXFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDNiMDg7XFxyXFxuICBjb2xvcjogYmVpZ2U7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuI2xvZ28tdGV4dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDE1JTtcXHJcXG4gIGxlZnQ6IDE1JTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyMTg7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCAycHggcmdiYSgwLCAxMTksIDQzLCAwLjk5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlIHtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDcwNGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAyLjVyZW0gYXV0byAwIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXNJdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY291bnQge1xcclxcbiAgd2lkdGg6IDIzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb3VudC50cmFuc2l0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNmYTAyO1xcclxcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxyXFxuICBjb2xvcjogIzAwMTAwNztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGM3ZDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYmFja2dyb3VuZDogIzAwNTEzNTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE1MCU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAgLnNob3ctbmFtZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB0YWJsZSB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNyU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB0ZXh0LWluZGVudDogMSU7XFxyXFxufVxcclxcblxcclxcbnAuc3VtbWFyeSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBwYWRkaW5nOiAyJSAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaG9sZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0biB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzlmZmEwMztcXHJcXG4gIHBhZGRpbmc6IDEycHggMDtcXHJcXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2IwODtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDJzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZmYTAzO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHAge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBiIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjNGNmYTAyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1vdmllLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5saWtlcy1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHNob3dNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL21vdmVpRGF0YWxvYWQuanMnO1xuaW1wb3J0IGNvdW50SXRlbXMgZnJvbSAnLi9tb2R1bGVzL2NvdW50SXRlbXMuanMnO1xuXG5jb25zdCBwcmVwYXJlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzaG93TW92aWVzKCk7XG4gIGNvdW50SXRlbXMoKTtcbn07XG5cbnByZXBhcmUoKTtcbiIsImltcG9ydCBnZXRjb21tZW50cyBmcm9tICcuL3JldHJpZXZlQ29tbWVudHMuanMnO1xuaW1wb3J0IGRpc3BsYXlDb21tZW50cyBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5cbmNvbnN0IGNvbW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRG5UcmpKb05RRDlWMWtYWkFHY3MvY29tbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYnV0dG9uLCB1c2VybmFtZSwgdGV4dCwgc2hvd0lkKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd0lkID0gc2hvd0lkLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjb21tZW50ID0gdGV4dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKG5hbWUgJiYgY29tbWVudCkge1xuICAgICAgYXdhaXQgZmV0Y2goY29tbWVudEFQSSwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IHNob3dJZCxcbiAgICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICB0ZXh0LnZhbHVlID0gJyc7XG5cbiAgICBjb25zdCBnZXRjb21tZW50ID0gYXdhaXQgZ2V0Y29tbWVudHMoc2hvd0lkKTtcbiAgICBjb25zdCB1c2VyY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0Jyk7XG4gICAgZGlzcGxheUNvbW1lbnRzKGdldGNvbW1lbnQsIHVzZXJjb21tZW50KTtcbiAgfSk7XG59OyIsImZ1bmN0aW9uIGNvdW50SXRlbXMoKSB7XG4gIGNvbnN0IGNvdW50TW92aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vdmllLXdyYXBwZXIgPiAqJyk7XG4gIHJldHVybiBjb3VudE1vdmllcy5sZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50SXRlbXM7IiwiaW1wb3J0IGNvdW50Q29tbWVudHMgZnJvbSAnLi9nZXRDb21tZW50TGVuZ3RoLmpzJztcblxuY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGdldGNvbW1lbnRzRGF0YSwgdXNlcmNvbW1lbnQpID0+IHtcbiAgdXNlcmNvbW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChnZXRjb21tZW50c0RhdGEubGVuZ3RoID4gMCkge1xuICAgIGdldGNvbW1lbnRzRGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBsaXN0bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0bGluay5jbGFzc0xpc3QuYWRkKCdjb21tbWVudC1pdGVtJyk7XG4gICAgICBsaXN0bGluay5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX0gOiAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgICAgdXNlcmNvbW1lbnQuYXBwZW5kQ2hpbGQobGlzdGxpbmspO1xuICAgIH0pO1xuICAgIGNvbnN0IGNoZWNrQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudCcpO1xuICAgIGNvbnN0IGNvbW1lbnRDb3VudCA9IGNvdW50Q29tbWVudHMoZ2V0Y29tbWVudHNEYXRhKTtcbiAgICBjaGVja0NvdW50LmlubmVySFRNTCA9IGAoJHtjb21tZW50Q291bnR9KWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50czsiLCJjb25zdCBjb3VudENvbW1lbnRzID0gKGdldGNvbW1lbnQpID0+IGdldGNvbW1lbnQubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgY291bnRDb21tZW50czsiLCJjb25zdCBtb3ZpZXMgPSBbXG4gIDEsIDIsIDMsIDQsIDU1LCA2LCA5MywgOCwgMjIsIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxOCwgMTksIDIwLCAyMSwgMjIsXG4gIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCA0MSwgNDIsIDM3LCAzOCwgMzksIDQwXG5dO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tJztcbmNvbnN0IHNob3dzVXJsID0gJy9zaG93cy8nO1xuY29uc3QgYVBpTGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuLy8gY29uc3QgQVBJX0tFWSA9ICc2alRIM2pPb3M3T3BuSHhDZzZseic7XG5jb25zdCBBUElfS0VZID0gJ0RuVHJqSm9OUUQ5VjFrWFpBR2NzJztcbmNvbnN0IGFkZExpa2UgPSBgL2FwcHMvJHtBUElfS0VZfS9saWtlcy9gO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCA9ICcnKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGdldGxpa2VzQ291bnQgPSBhc3luYyAodXJsID0gJycpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgaGl0bGlrZXNBcGkgPSBhc3luYyAodXJsID0gJycsIGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBBY2NlcHQ6ICd0ZXh0L3BsYWluJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1vdmllcygpIHtcbiAgY29uc3QgbW92aWVsaXN0ID0gW107XG4gIGZvciAobGV0IHogPSAwOyB6IDwgbW92aWVzLmxlbmd0aDsgeiArPSAxKSB7XG4gICAgY29uc3QgbW92aWVzSWQgPSBiYXNlVXJsICsgc2hvd3NVcmwgKyBtb3ZpZXNbel07XG4gICAgY29uc3QgcHJvbWlzZSA9IGdldERhdGEobW92aWVzSWQpO1xuICAgIG1vdmllbGlzdC5wdXNoKHByb21pc2UpO1xuICB9XG4gIGNvbnN0IG1vdmllRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKG1vdmllbGlzdCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1vdmllRGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRMaWtlcygpIHtcbiAgY29uc3QgcG9zdExpa2VMaW5rID0gYVBpTGluayArIGFkZExpa2U7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRsaWtlc0NvdW50KHBvc3RMaWtlTGluayk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdExpa2VzKGlkKSB7XG4gIGNvbnN0IHBvc3RMaWtlTGluayA9IGFQaUxpbmsgKyBhZGRMaWtlO1xuICBjb25zdCBkYXRhID0gYXdhaXQgaGl0bGlrZXNBcGkocG9zdExpa2VMaW5rLCBpZCk7XG4gIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGEgfTtcbn1cblxuZXhwb3J0IHsgZ2V0TW92aWVzLCBnZXRMaWtlcywgcG9zdExpa2VzIH07IiwiaW1wb3J0IHsgZ2V0TW92aWVzLCBnZXRMaWtlcywgcG9zdExpa2VzIH0gZnJvbSAnLi9nZXREYXRhLmpzJztcbmltcG9ydCBwb3B1cFdpbiBmcm9tICcuL3BvcFdpbmRvdy5qcyc7XG5cbmNvbnN0IG9iamVjdCA9IFtdO1xuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcblxuY29uc3QgYnVpbGREaXZFbGVtZW50ID0gKGxkTW92aWVzLCBzaG93KSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBtb3ZpZXNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vdmllc0l0ZW0uY2xhc3NMaXN0LmFkZCgnbW92aWVzSXRlbScpO1xuICBtb3ZpZXNJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgIDxpbWcgY2xhc3M9XCJpbWFnZVwiIHNyYz1cIiR7c2hvdy5pbWFnZSAmJiBzaG93LmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke3Nob3cubmFtZX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1uYW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7c2hvdy5uYW1lfTwvcD5cbiAgICAgICAgICA8aSBjbGFzcz1cImxuaSBsbmktaGVhcnRcIiBpZD1cIiR7c2hvdy5pZH1cIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwibGlrZXMtY291bnRcIj4ke3Nob3cubGlrZXN9IExpa2VzPC9wPmA7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NMaXN0ID0gJ2NvbW1lbnQtYnRuJztcbiAgYnRuLmlubmVySFRNTCA9ICdDb21tZW50cyc7XG4gIG1vdmllc0l0ZW0uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIHBvcHVwV2luKHNob3cpO1xuICB9KTtcbiAgbGRNb3ZpZXMuYXBwZW5kQ2hpbGQobW92aWVzSXRlbSk7XG59O1xuXG5jb25zdCBDcmVhdGVNb3ZpZUVsZW1lbnQgPSBhc3luYyAobG9hZE1vdmllLCBzaG93KSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5OdW1iZXInKTtcbiAgbG9hZE1vdmllLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCBsaWtlc0RhdGEgPSByZXN1bHQuZGF0YSB8fCBbXTsgXG4gIGNvbnN0IHVwZGF0ZWRNb3ZpZXMgPSBzaG93Lm1hcCgobW92aWUpID0+IHtcbiAgICBjb25zdCBsaWtlID0gbGlrZXNEYXRhLmZpbmQoKGxpa2UpID0+IHBhcnNlSW50KGxpa2UuaXRlbV9pZCwgMzYpID09PSBtb3ZpZS5pZCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgIGxpa2UgPyBtb3ZpZS5saWtlcyA9IGxpa2UubGlrZXMgOiBtb3ZpZS5saWtlcyA9IDA7XG4gICAgb2JqZWN0LnB1c2gobW92aWUpO1xuICAgIHJldHVybiBtb3ZpZTtcbiAgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZE1vdmllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ1aWxkRGl2RWxlbWVudChsb2FkTW92aWUsIHVwZGF0ZWRNb3ZpZXNbaV0pO1xuICB9XG4gIG51bWJlci50ZXh0Q29udGVudCA9IGBTaG93ICgke3Nob3cubGVuZ3RofSlgO1xufTtcblxuY29uc3Qgc2hvd01vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbG9hZE1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS13cmFwcGVyJyk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE1vdmllcygpO1xuICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICBhd2FpdCBDcmVhdGVNb3ZpZUVsZW1lbnQobG9hZE1vdmllcywgcmVzdWx0Lm1vdmllRGF0YSk7XG4gIH1cbn07XG5cbmNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtd3JhcHBlcicpO1xucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7IFxuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmxuaS5sbmktaGVhcnQnKSkge1xuICAgIGNvbnN0IG51bWJlcklkID0gZS50YXJnZXQuaWQ7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9zdExpa2VzKG51bWJlcklkKTsgXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICBjb25zdCByZXN1bHRMaWtlID0gYXdhaXQgZ2V0TGlrZXMoKTsgXG4gICAgICBjb25zdCBuZXdMaWtlcyA9IHJlc3VsdExpa2UuZGF0YS5maW5kKChuZXdsaWtlcykgPT4gbmV3bGlrZXMuaXRlbV9pZCA9PT0gbnVtYmVySWQpO1xuICAgICAgY29uc3QgbmV3UGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgYWRkTGlrZXMgPSBuZXdQYXJlbnQucXVlcnlTZWxlY3RvcignLmxpa2VzLWNvdW50Jyk7XG4gICAgICBhZGRMaWtlcy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uJyk7XG4gICAgICBhZGRMaWtlcy50ZXh0Q29udGVudCA9IGAke25ld0xpa2VzLmxpa2VzfSBMaWtlc2A7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYWRkTGlrZXMuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzaG93TW92aWVzO1xuIiwiaW1wb3J0IGFkZENvbW1lbnQgZnJvbSAnLi9hZGRDb21tZW50LmpzJztcbmltcG9ydCBkaXNwbGF5Q29tbWVudHMgZnJvbSAnLi9kaXNwbGF5Q29tbWVudHMuanMnO1xuaW1wb3J0IGdldGNvbW1lbnRzIGZyb20gJy4vcmV0cmlldmVDb21tZW50cy5qcyc7XG5cbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5cbmNvbnN0IHBvcHVwV2luID0gYXN5bmMgKHNob3cpID0+IHtcbiAgY29uc3QgY2xvc2VTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjbG9zZVNpZ24uaW5uZXJIVE1MID0gJ1gnO1xuICBjbG9zZVNpZ24uY2xhc3NMaXN0ID0gJ2Nsb3NlLWNvbW1lbnQnO1xuICBjb21tZW50UG9wdXAuYXBwZW5kQ2hpbGQoY2xvc2VTaWduKTtcbiAgY29tbWVudFBvcHVwLmlubmVySFRNTCArPSBgXG4gICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwicG9wdXAtaW1nXCI+XG4gICAgPGgzIGNsYXNzPVwic2hvdy1uYW1lXCI+JHtzaG93Lm5hbWV9PC9oMz5cbiAgICA8dGFibGU+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8Yj5MYW5ndWFnZTo8L2I+ICR7c2hvdy5sYW5ndWFnZX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxiPlR5cGU6PC9iPiAke3Nob3cudHlwZX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8UCBjbGFzcz1cInN1bW1hcnlcIj4ke3Nob3cuc3VtbWFyeX08L3A+XG4gICAgPGgzIGNsYXNzPVwiY29tbWVudC1ob2xkZXJcIj5cbiAgICAgIENvbW1lbnRzIDxzcGFuIGNsYXNzPVwiY29tbWVudC1jb3VudFwiPigwKTwvc3Bhbj5cbiAgICA8L2gzPlxuICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzLWxpc3RcIj5cblxuICAgIDwvdWw+XG4gICAgPGgyIGNsYXNzPVwiZm9ybS10aXRsZVwiPkFkZCBhIGNvbW1lbnQ8L2gyPlxuICAgIDxmb3JtIGNsYXNzPVwiY29tbWVudC1mb3JtXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgPHRleHRhcmVhIGlkPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiBuYW1lPVwiY29tbWVudFwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cIjFcIj48L3RleHRhcmVhPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1idG5cIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPmA7XG4gIFxuICBjb25zdCBnZXRjb21tZW50c0RhdGEgPSBhd2FpdCBnZXRjb21tZW50cyhzaG93LmlkKTtcbiAgY29uc3QgdXNlcmNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtbGlzdCcpO1xuICBkaXNwbGF5Q29tbWVudHMoZ2V0Y29tbWVudHNEYXRhLCB1c2VyY29tbWVudCk7XG5cbiAgY29uc3QgY29tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dGFyZWEnKTtcbiAgYWRkQ29tbWVudChjb21CdG4sIG5hbWUsIHRleHQsIHNob3cuaWQpO1xufTtcblxuY29tbWVudFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmNsb3NlLWNvbW1lbnQnKSkge1xuICAgIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbW1lbnRQb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVwV2luIiwiY29uc3QgZ2V0Y29tbWVudHMgPSBhc3luYyAoc2hvd0lkKSA9PiB7XG4gIHNob3dJZCA9IHNob3dJZC50b1N0cmluZygpO1xuICBjb25zdCBjb21tZW50ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0RuVHJqSm9OUUQ5VjFrWFpBR2NzL2NvbW1lbnRzP2l0ZW1faWQ9JHtzaG93SWR9YCk7XG4gIGNvbnN0IHJlc3VsdCA9IGNvbW1lbnQuanNvbigpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldGNvbW1lbnRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==