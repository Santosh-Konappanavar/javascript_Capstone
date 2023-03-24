(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --tenne-tawny: #d65108;\r\n  --tenne-tawny-dark: #b54507;\r\n}\r\n\r\nbody {\r\n  font-weight: 300;\r\n  font-size: 1.05rem;\r\n  line-height: 1.6;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.btn {\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.text {\r\n  opacity: 0.8;\r\n}\r\n\r\n.title {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.container {\r\n  min-height: 100vh;\r\n  background-color: bisque;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  margin: 2.4rem 0;\r\n  padding: 2rem;\r\n  background-color: darkcyan;\r\n  text-align: center;\r\n}\r\n\r\n#movie {\r\n  margin: 2.4rem 0;\r\n}\r\n\r\n.movie-item-wrapper {\r\n  background-color: wheat;\r\n}\r\n\r\n.movie-item {\r\n  border-radius: 1rem;\r\n  -webkit-border-radius: 1rem;\r\n  -moz-border-radius: 1rem;\r\n  -ms-border-radius: 1rem;\r\n  -o-border-radius: 1rem;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  margin: 2.5rem 0;\r\n  position: relative;\r\n}\r\n\r\n.movie-img img {\r\n  border-radius: 2rem;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.movie-name {\r\n  padding: 0.5rem 0.5rem;\r\n}\r\n\r\n.movie-name h3 {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.likeholder {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px 1rem;\r\n}\r\n\r\n.likeholder h5 {\r\n  padding-top: 3px;\r\n}\r\n\r\n.comment-btn {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: var(--tenne-tawny);\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n  padding: 0.75rem 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin: 1rem auto;\r\n  border-radius: 2rem;\r\n  -webkit-border-radius: 2rem;\r\n  -moz-border-radius: 2rem;\r\n  -ms-border-radius: 2rem;\r\n  -o-border-radius: 2rem;\r\n  transition: all 0.4s linear;\r\n  -webkit-transition: all 0.4s linear;\r\n  -moz-transition: all 0.4s linear;\r\n  -ms-transition: all 0.4s linear;\r\n  -o-transition: all 0.4s linear;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: var(--tenne-tawny-dark);\r\n}\r\n\r\n/* Media Queries */\r\n@media screen and (min-width: 600px) {\r\n  .movie-search-box {\r\n    width: 540px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n\r\n.movie-details {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: darkcyan;\r\n  border-radius: 2rem;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\n.show-details-content {\r\n  margin: 5px 2rem;\r\n}\r\n\r\n.movie-show-img img {\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 10px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.movie-details .movie-show-img img {\r\n  width: 40%;\r\n  height: 20%;\r\n  border-radius: 30%;\r\n}\r\n\r\n.comment-holder {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.comment-holder li {\r\n  list-style: none;\r\n  font-size: 16px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  margin: 10px 10rem;\r\n  flex: 1;\r\n}\r\n\r\n.submit-btn {\r\n  padding: 15px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: 2s;\r\n}\r\n\r\n.save-msg {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #00ff1a;\r\n  margin-top: -20px;\r\n}\r\n\r\n.submit-btn:hover {\r\n  background-color: darkcyan;\r\n  color: whitesmoke;\r\n  transform: scale(1);\r\n}\r\n\r\nform input {\r\n  padding: 15px;\r\n  font-size: 18px;\r\n}\r\n\r\n.showmovie {\r\n  display: block;\r\n}\r\n\r\n\r\n.show-details-content p:not(.show-category) {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.movie-close-btn {\r\n  position: absolute;\r\n  right: 2rem;\r\n  top: 2rem;\r\n  font-size: 1.8rem;\r\n  background: #fff;\r\n  border: none;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0.9;\r\n}\r\n\r\n.movie-title {\r\n  letter-spacing: 1px;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.show-category {\r\n  font-weight: 600;\r\n  color: wheat;\r\n  display: inline-block;\r\n  padding: -15px 2rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n\r\n\r\n.summary {\r\n  text-align: justify;\r\n  padding-top: -12px;\r\n  font-size: 14px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  #movie {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 2rem;\r\n  }\r\n\r\n  .movie-item {\r\n    margin: 0;\r\n  }\r\n\r\n  .movie-details {\r\n    width: 700px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  #movie {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --tenne-tawny: #d65108;\r\n  --tenne-tawny-dark: #b54507;\r\n}\r\n\r\nbody {\r\n  font-weight: 300;\r\n  font-size: 1.05rem;\r\n  line-height: 1.6;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n.btn {\r\n  font-family: inherit;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  font-size: 1.05rem;\r\n}\r\n\r\n.text {\r\n  opacity: 0.8;\r\n}\r\n\r\n.title {\r\n  font-size: 2rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.container {\r\n  min-height: 100vh;\r\n  background-color: bisque;\r\n}\r\n\r\n.movie-wrapper {\r\n  max-width: 1280px;\r\n  margin: 2.4rem 0;\r\n  padding: 2rem;\r\n  background-color: darkcyan;\r\n  text-align: center;\r\n}\r\n\r\n#movie {\r\n  margin: 2.4rem 0;\r\n}\r\n\r\n.movie-item-wrapper {\r\n  background-color: wheat;\r\n}\r\n\r\n.movie-item {\r\n  border-radius: 1rem;\r\n  -webkit-border-radius: 1rem;\r\n  -moz-border-radius: 1rem;\r\n  -ms-border-radius: 1rem;\r\n  -o-border-radius: 1rem;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  margin: 2.5rem 0;\r\n  position: relative;\r\n}\r\n\r\n.movie-img img {\r\n  border-radius: 2rem;\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.movie-name {\r\n  padding: 0.5rem 0.5rem;\r\n}\r\n\r\n.movie-name h3 {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.likeholder {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 10px 1rem;\r\n}\r\n\r\n.likeholder h5 {\r\n  padding-top: 3px;\r\n}\r\n\r\n.comment-btn {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: var(--tenne-tawny);\r\n  font-weight: 500;\r\n  font-size: 1.1rem;\r\n  padding: 0.75rem 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin: 1rem auto;\r\n  border-radius: 2rem;\r\n  -webkit-border-radius: 2rem;\r\n  -moz-border-radius: 2rem;\r\n  -ms-border-radius: 2rem;\r\n  -o-border-radius: 2rem;\r\n  transition: all 0.4s linear;\r\n  -webkit-transition: all 0.4s linear;\r\n  -moz-transition: all 0.4s linear;\r\n  -ms-transition: all 0.4s linear;\r\n  -o-transition: all 0.4s linear;\r\n}\r\n\r\n.comment-btn:hover {\r\n  background: var(--tenne-tawny-dark);\r\n}\r\n\r\n/* Media Queries */\r\n@media screen and (min-width: 600px) {\r\n  .movie-search-box {\r\n    width: 540px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n}\r\n\r\n.movie-details {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: whitesmoke;\r\n  background: darkcyan;\r\n  border-radius: 2rem;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  display: none;\r\n  padding: 0 0;\r\n}\r\n\r\n.show-details-content {\r\n  margin: 5px 2rem;\r\n}\r\n\r\n.movie-show-img img {\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 10px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.movie-details .movie-show-img img {\r\n  width: 40%;\r\n  height: 20%;\r\n  border-radius: 30%;\r\n}\r\n\r\n.comment-holder {\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.comment-holder li {\r\n  list-style: none;\r\n  font-size: 16px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  margin: 10px 10rem;\r\n  flex: 1;\r\n}\r\n\r\n.submit-btn {\r\n  padding: 15px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  transition: 2s;\r\n}\r\n\r\n.save-msg {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: #00ff1a;\r\n  margin-top: -20px;\r\n}\r\n\r\n.submit-btn:hover {\r\n  background-color: darkcyan;\r\n  color: whitesmoke;\r\n  transform: scale(1);\r\n}\r\n\r\nform input {\r\n  padding: 15px;\r\n  font-size: 18px;\r\n}\r\n\r\n.showmovie {\r\n  display: block;\r\n}\r\n\r\n\r\n.show-details-content p:not(.show-category) {\r\n  padding: 1rem 0;\r\n}\r\n\r\n.movie-close-btn {\r\n  position: absolute;\r\n  right: 2rem;\r\n  top: 2rem;\r\n  font-size: 1.8rem;\r\n  background: #fff;\r\n  border: none;\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0.9;\r\n}\r\n\r\n.movie-title {\r\n  letter-spacing: 1px;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.show-category {\r\n  font-weight: 600;\r\n  color: wheat;\r\n  display: inline-block;\r\n  padding: -15px 2rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n\r\n\r\n.summary {\r\n  text-align: justify;\r\n  padding-top: -12px;\r\n  font-size: 14px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  #movie {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 2rem;\r\n  }\r\n\r\n  .movie-item {\r\n    margin: 0;\r\n  }\r\n\r\n  .movie-details {\r\n    width: 700px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  #movie {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");

const commentFunctionality = __webpack_require__(/*! ./modules/comm-Functionality */ "./src/modules/comm-Functionality");

const movieList = document.querySelector('#movie');
const movieclosebtn = document.querySelector('.movie-close-btn');
let showDetailsContent = document.querySelector('.show-details-content');

function getMealList() {
  let moviewrapper = document.querySelector('.movie-wrapper')
  fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((shows) => {
      if (shows) {
        shows.forEach((show, index) => {
          moviewrapper.id = index;
          document.querySelector('.list-count').innerHTML = movieList.children.length;
          movieList.innerHTML += `
            <div class="movie-item-wrapper" data-id="${show.id}">
              <div class="movie-item">
                <div class="movie-img">
                  <img src="${show.image.medium}" alt="food">
                </div>
                <div class="movie-name">
                  <div class="likeholder">
                    <h3>${show.name}</h3>
                    <h5>Like</h5>
                  </div>
                  <a href="#" class="comment-btn">Comments</a>
                </div>
              </div>
            </div>
          `;
        });
      } 
    });
}

function getmovieshow(e) {
  e.preventDefault();
  if (e.target.classList.contains('comment-btn')) {
    let movieItem = e.target.parentElement.parentElement.parentElement;
    fetch(`https://api.tvmaze.com/shows/${movieItem.dataset.id}`)
      .then(response => response.json())
      .then(data => movieShow(data))
      .catch(error => console.log(error));
  }
}

function movieShow(show) { 
  console.log(show);
      let html = `
        <div class="movie-show-img">
          <img src="${show.image.medium}" alt="${show.name}">
        </div>
        <h2 class="movie-title">${show.name}</h2>
        <p class="show-category">Language: ${show.language}</p>
        <p class="show-category">Type: ${show.type}</p>
        <p class="summary">${show.summary}</p>
        <div class="comment-holder">
          <h3>Add Comment (<span class="comment-count"></span>)</h3>
          <ul class="comment-list">
           
          </ul>
        </div>
        <form class="comment-form" data-item-id="start1">
          <input type="text" placeholder="Your Name" id="name">
          <textarea name="comments" id="comment" cols="30" rows="10" placeholder="Your comments"></textarea>
          <button class="submit-btn" type="submit">Submit</button>
          <p class="save-msg"></p>
        </form>
      `;
      showDetailsContent.innerHTML = html;
      showDetailsContent.parentElement.classList.add('showmovie');
  
}

movieclosebtn.addEventListener('click',()=>{
  showDetailsContent.parentElement.classList.remove('showmovie')
})

commentFunctionality()

document.addEventListener('DOMContentLoaded', () => {
  getMealList();
});

movieList.addEventListener('click', getmovieshow);

/***/ }),

/***/ "./src/modules/comm-Functionality":
/*!****************************************!*\
  !*** ./src/modules/comm-Functionality ***!
  \****************************************/
/***/ ((module) => {

const commentFunctionality =()=> {
    const API_KEY = 'AIzaSyCg5Z6LE0AZTB2VdYxs';
      function submitComment(event) {
        event.preventDefault();
        const formel = Array.from(document.querySelectorAll('form')).indexOf(event.target);
        const username = event.target.querySelector('#username').value;
        const comment = event.target.querySelector('#comment').value;
        const itemId = formel + 1;
        const payload = {
          item_id: itemId,
          username: username,
          comment: comment,
        };
        fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
        })
        .then(response => response.text())
        .then(data => {
          console.log(data);
          const saveMsg = document.querySelector('.save-msg');
          saveMsg.innerText = 'Comment saved';
          setTimeout(() => {
            saveMsg.innerText = '';
          }, 3000);
          event.target.querySelector('#username').value = '';
          event.target.querySelector('#comment').value = '';
          displayComments();
        })
        .catch(error => console.log(error));
      }
    
      async function displayComments() {
        const commentsLists = document.querySelectorAll('.comment-list');
        commentsLists.forEach(async (commentsList, index) => {
          const itemId = `item${index + 1}`;
          const commentCountElement = document.querySelectorAll('.comment-count')[index];
    
          try {
            const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_KEY}/comments?item_id=${itemId}`);
    
            if (!response.ok) {
              throw new Error(`Failed to fetch comments for item ${itemId}.`);
            }
    
            const comments = await response.json();
            commentsList.innerHTML = '';
            comments.forEach((comment) => {
              const li = document.createElement('li');
              li.textContent = `${comment.creation_date} ${comment.username}_:  ${comment.comment}`;
              commentsList.appendChild(li);
            });
            commentCountElement.innerHTML = `${comments.length}`;
          } catch (error) {
          }
        });
      }
    
      let commentForm = document.querySelectorAll('form');
      commentForm.forEach((form) => {
        form.addEventListener('submit', ()=>{
        //   e.stopPropagation()
          submitComment()
        });
      });
      displayComments();
    }
module.exports = commentFunctionality;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxpQkFBaUIsZ0JBQWdCLDZCQUE2QixLQUFLLGVBQWUsNkJBQTZCLGtDQUFrQyxLQUFLLGNBQWMsdUJBQXVCLHlCQUF5Qix1QkFBdUIsMkNBQTJDLEtBQUssY0FBYywyQkFBMkIsc0JBQXNCLGlCQUFpQix5QkFBeUIsS0FBSyxlQUFlLG1CQUFtQixLQUFLLGdCQUFnQixzQkFBc0IsMEJBQTBCLEtBQUssb0JBQW9CLHdCQUF3QiwrQkFBK0IsS0FBSyx3QkFBd0Isd0JBQXdCLHVCQUF1QixvQkFBb0IsaUNBQWlDLHlCQUF5QixLQUFLLGdCQUFnQix1QkFBdUIsS0FBSyw2QkFBNkIsOEJBQThCLEtBQUsscUJBQXFCLDBCQUEwQixrQ0FBa0MsK0JBQStCLDhCQUE4Qiw2QkFBNkIsdUJBQXVCLHlCQUF5Qix1REFBdUQsdUJBQXVCLHlCQUF5QixLQUFLLHdCQUF3QiwwQkFBMEIsa0JBQWtCLHFCQUFxQixLQUFLLHFCQUFxQiw2QkFBNkIsS0FBSyx3QkFBd0Isd0JBQXdCLEtBQUsscUJBQXFCLG9CQUFvQixxQ0FBcUMseUJBQXlCLEtBQUssd0JBQXdCLHVCQUF1QixLQUFLLHNCQUFzQiw0QkFBNEIsa0JBQWtCLHFDQUFxQyx1QkFBdUIsd0JBQXdCLHlCQUF5QixxQkFBcUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsa0NBQWtDLCtCQUErQiw4QkFBOEIsNkJBQTZCLGtDQUFrQywwQ0FBMEMsdUNBQXVDLHNDQUFzQyxxQ0FBcUMsS0FBSyw0QkFBNEIsMENBQTBDLEtBQUsscUVBQXFFLHlCQUF5QixxQkFBcUIsMEJBQTBCLDJCQUEyQixPQUFPLEtBQUssd0JBQXdCLHNCQUFzQixlQUFlLGdCQUFnQix1Q0FBdUMsd0JBQXdCLDJCQUEyQiwwQkFBMEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsb0JBQW9CLG1CQUFtQixLQUFLLCtCQUErQix1QkFBdUIsS0FBSyw2QkFBNkIsaUJBQWlCLGtCQUFrQiwwQkFBMEIscUJBQXFCLHFCQUFxQixLQUFLLDRDQUE0QyxpQkFBaUIsa0JBQWtCLHlCQUF5QixLQUFLLHlCQUF5QiwwQkFBMEIsS0FBSyw0QkFBNEIsdUJBQXVCLHNCQUFzQixLQUFLLGNBQWMsb0JBQW9CLDhCQUE4Qiw2QkFBNkIsZ0JBQWdCLHlCQUF5QixjQUFjLEtBQUsscUJBQXFCLG9CQUFvQixzQkFBc0IsdUJBQXVCLHFCQUFxQixLQUFLLG1CQUFtQixzQkFBc0IsdUJBQXVCLHFCQUFxQix3QkFBd0IsS0FBSywyQkFBMkIsaUNBQWlDLHdCQUF3QiwwQkFBMEIsS0FBSyxvQkFBb0Isb0JBQW9CLHNCQUFzQixLQUFLLG9CQUFvQixxQkFBcUIsS0FBSyx5REFBeUQsc0JBQXNCLEtBQUssMEJBQTBCLHlCQUF5QixrQkFBa0IsZ0JBQWdCLHdCQUF3Qix1QkFBdUIsbUJBQW1CLGtCQUFrQixtQkFBbUIseUJBQXlCLG9CQUFvQiwwQkFBMEIsOEJBQThCLG1CQUFtQixLQUFLLHNCQUFzQiwwQkFBMEIsNkJBQTZCLEtBQUssd0JBQXdCLHVCQUF1QixtQkFBbUIsNEJBQTRCLDBCQUEwQiw0QkFBNEIsS0FBSywwQkFBMEIsMEJBQTBCLHlCQUF5QixzQkFBc0IsS0FBSyw4Q0FBOEMsY0FBYyxzQkFBc0IsOENBQThDLGtCQUFrQixPQUFPLHVCQUF1QixrQkFBa0IsT0FBTywwQkFBMEIscUJBQXFCLE9BQU8sS0FBSyw4Q0FBOEMsY0FBYyw4Q0FBOEMsT0FBTyxLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLFFBQVE7QUFDakc7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxvSEFBb0gsUUFBUSxvQkFBb0IsT0FBTztBQUN2SjtBQUNBO0FBQ0EsbUVBQW1FLE9BQU87QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVCQUF1QixFQUFFLGlCQUFpQixNQUFNLGdCQUFnQjtBQUNsRztBQUNBLGFBQWE7QUFDYiwrQ0FBK0MsZ0JBQWdCO0FBQy9ELFlBQVk7QUFDWjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tLUZ1bmN0aW9uYWxpdHkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLXRlbm5lLXRhd255OiAjZDY1MTA4O1xcclxcbiAgLS10ZW5uZS10YXdueS1kYXJrOiAjYjU0NTA3O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcclxcbiAgbWFyZ2luOiAyLjRyZW0gMDtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21vdmllIHtcXHJcXG4gIG1hcmdpbjogMi40cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pdGVtLXdyYXBwZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pdGVtIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtbXMtYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMjFweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xcclxcbiAgbWFyZ2luOiAyLjVyZW0gMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltZyBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1uYW1lIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZWhvbGRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZWhvbGRlciBoNSB7XFxyXFxuICBwYWRkaW5nLXRvcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG4ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZW5uZS10YXdueSk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjc1cmVtIDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcXHJcXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZW5uZS10YXdueS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcmllcyAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxyXFxuICAubW92aWUtc2VhcmNoLWJveCB7XFxyXFxuICAgIHdpZHRoOiA1NDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWRldGFpbHMge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgYmFja2dyb3VuZDogZGFya2N5YW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcGFkZGluZzogMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1kZXRhaWxzLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiA1cHggMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNob3ctaW1nIGltZyB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWRldGFpbHMgLm1vdmllLXNob3ctaW1nIGltZyB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhvbGRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ob2xkZXIgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDEwcmVtO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0cmFuc2l0aW9uOiAycztcXHJcXG59XFxyXFxuXFxyXFxuLnNhdmUtbXNnIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzAwZmYxYTtcXHJcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvd21vdmllIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2hvdy1kZXRhaWxzLWNvbnRlbnQgcDpub3QoLnNob3ctY2F0ZWdvcnkpIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNsb3NlLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMnJlbTtcXHJcXG4gIHRvcDogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAzNXB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDAuOTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jYXRlZ29yeSB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHdoZWF0O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogLTE1cHggMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIHBhZGRpbmctdG9wOiAtMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICNtb3ZpZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1pdGVtIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllLWRldGFpbHMge1xcclxcbiAgICB3aWR0aDogNzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAjbW92aWUge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7Ozs7QUFJQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS10ZW5uZS10YXdueTogI2Q2NTEwODtcXHJcXG4gIC0tdGVubmUtdGF3bnktZGFyazogI2I1NDUwNztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtd3JhcHBlciB7XFxyXFxuICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIG1hcmdpbjogMi40cmVtIDA7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZSB7XFxyXFxuICBtYXJnaW46IDIuNHJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaXRlbS13cmFwcGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaXRlbSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAtby1ib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcXHJcXG4gIG1hcmdpbjogMi41cmVtIDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWcgaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbmFtZSB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbmFtZSBoMyB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Vob2xkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Vob2xkZXIgaDUge1xcclxcbiAgcGFkZGluZy10b3A6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVubmUtdGF3bnkpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgcGFkZGluZzogMC43NXJlbSAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgLW8tYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGxpbmVhcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cyBsaW5lYXI7XFxyXFxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tdGVubmUtdGF3bnktZGFyayk7XFxyXFxufVxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcclxcbiAgLm1vdmllLXNlYXJjaC1ib3gge1xcclxcbiAgICB3aWR0aDogNTQwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJhY2tncm91bmQ6IGRhcmtjeWFuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctZGV0YWlscy1jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogNXB4IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1zaG93LWltZyBpbWcge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1kZXRhaWxzIC5tb3ZpZS1zaG93LWltZyBpbWcge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ob2xkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaG9sZGVyIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIG1hcmdpbjogMTBweCAxMHJlbTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogMnM7XFxyXFxufVxcclxcblxcclxcbi5zYXZlLW1zZyB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICMwMGZmMWE7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2N5YW47XFxyXFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dtb3ZpZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNob3ctZGV0YWlscy1jb250ZW50IHA6bm90KC5zaG93LWNhdGVnb3J5KSB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jbG9zZS1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDJyZW07XFxyXFxuICB0b3A6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMzVweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY2F0ZWdvcnkge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB3aGVhdDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IC0xNXB4IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICBwYWRkaW5nLXRvcDogLTEycHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjbW92aWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWUtaXRlbSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gICAgd2lkdGg6IDcwMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgI21vdmllIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5jb25zdCBjb21tZW50RnVuY3Rpb25hbGl0eSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9jb21tLUZ1bmN0aW9uYWxpdHknKTtcclxuXHJcbmNvbnN0IG1vdmllTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZScpO1xyXG5jb25zdCBtb3ZpZWNsb3NlYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLWNsb3NlLWJ0bicpO1xyXG5sZXQgc2hvd0RldGFpbHNDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctZGV0YWlscy1jb250ZW50Jyk7XHJcblxyXG5mdW5jdGlvbiBnZXRNZWFsTGlzdCgpIHtcclxuICBsZXQgbW92aWV3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXdyYXBwZXInKVxyXG4gIGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKHNob3dzKSA9PiB7XHJcbiAgICAgIGlmIChzaG93cykge1xyXG4gICAgICAgIHNob3dzLmZvckVhY2goKHNob3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBtb3ZpZXdyYXBwZXIuaWQgPSBpbmRleDtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvdW50JykuaW5uZXJIVE1MID0gbW92aWVMaXN0LmNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgIG1vdmllTGlzdC5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaXRlbS13cmFwcGVyXCIgZGF0YS1pZD1cIiR7c2hvdy5pZH1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7c2hvdy5pbWFnZS5tZWRpdW19XCIgYWx0PVwiZm9vZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4ke3Nob3cubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5MaWtlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJjb21tZW50LWJ0blwiPkNvbW1lbnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgYDtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRtb3ZpZXNob3coZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50LWJ0bicpKSB7XHJcbiAgICBsZXQgbW92aWVJdGVtID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke21vdmllSXRlbS5kYXRhc2V0LmlkfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiBtb3ZpZVNob3coZGF0YSkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW92aWVTaG93KHNob3cpIHsgXHJcbiAgY29uc29sZS5sb2coc2hvdyk7XHJcbiAgICAgIGxldCBodG1sID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1zaG93LWltZ1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke3Nob3cuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7c2hvdy5uYW1lfVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzcz1cIm1vdmllLXRpdGxlXCI+JHtzaG93Lm5hbWV9PC9oMj5cclxuICAgICAgICA8cCBjbGFzcz1cInNob3ctY2F0ZWdvcnlcIj5MYW5ndWFnZTogJHtzaG93Lmxhbmd1YWdlfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInNob3ctY2F0ZWdvcnlcIj5UeXBlOiAke3Nob3cudHlwZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJzdW1tYXJ5XCI+JHtzaG93LnN1bW1hcnl9PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWhvbGRlclwiPlxyXG4gICAgICAgICAgPGgzPkFkZCBDb21tZW50ICg8c3BhbiBjbGFzcz1cImNvbW1lbnQtY291bnRcIj48L3NwYW4+KTwvaDM+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50LWxpc3RcIj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJjb21tZW50LWZvcm1cIiBkYXRhLWl0ZW0taWQ9XCJzdGFydDFcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRzXCIgaWQ9XCJjb21tZW50XCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnRzXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJzYXZlLW1zZ1wiPjwvcD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIGA7XHJcbiAgICAgIHNob3dEZXRhaWxzQ29udGVudC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICBzaG93RGV0YWlsc0NvbnRlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93bW92aWUnKTtcclxuICBcclxufVxyXG5cclxubW92aWVjbG9zZWJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICBzaG93RGV0YWlsc0NvbnRlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bW92aWUnKVxyXG59KVxyXG5cclxuY29tbWVudEZ1bmN0aW9uYWxpdHkoKVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBnZXRNZWFsTGlzdCgpO1xyXG59KTtcclxuXHJcbm1vdmllTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldG1vdmllc2hvdyk7IiwiY29uc3QgY29tbWVudEZ1bmN0aW9uYWxpdHkgPSgpPT4ge1xyXG4gICAgY29uc3QgQVBJX0tFWSA9ICdBSXphU3lDZzVaNkxFMEFaVEIyVmRZeHMnO1xyXG4gICAgICBmdW5jdGlvbiBzdWJtaXRDb21tZW50KGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBmb3JtZWwgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKSkuaW5kZXhPZihldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBpdGVtSWQgPSBmb3JtZWwgKyAxO1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgICBpdGVtX2lkOiBpdGVtSWQsXHJcbiAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICBjb21tZW50OiBjb21tZW50LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7QVBJX0tFWX0vY29tbWVudHNgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICBjb25zdCBzYXZlTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtbXNnJyk7XHJcbiAgICAgICAgICBzYXZlTXNnLmlubmVyVGV4dCA9ICdDb21tZW50IHNhdmVkJztcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzYXZlTXNnLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJykudmFsdWUgPSAnJztcclxuICAgICAgICAgIGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudCcpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICBkaXNwbGF5Q29tbWVudHMoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgYXN5bmMgZnVuY3Rpb24gZGlzcGxheUNvbW1lbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnRzTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1saXN0Jyk7XHJcbiAgICAgICAgY29tbWVudHNMaXN0cy5mb3JFYWNoKGFzeW5jIChjb21tZW50c0xpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtSWQgPSBgaXRlbSR7aW5kZXggKyAxfWA7XHJcbiAgICAgICAgICBjb25zdCBjb21tZW50Q291bnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtY291bnQnKVtpbmRleF07XHJcbiAgICBcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7QVBJX0tFWX0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gZmV0Y2ggY29tbWVudHMgZm9yIGl0ZW0gJHtpdGVtSWR9LmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfV86ICAke2NvbW1lbnQuY29tbWVudH1gO1xyXG4gICAgICAgICAgICAgIGNvbW1lbnRzTGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb21tZW50Q291bnRFbGVtZW50LmlubmVySFRNTCA9IGAke2NvbW1lbnRzLmxlbmd0aH1gO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGxldCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKTtcclxuICAgICAgY29tbWVudEZvcm0uZm9yRWFjaCgoZm9ybSkgPT4ge1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCk9PntcclxuICAgICAgICAvLyAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgIHN1Ym1pdENvbW1lbnQoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGxheUNvbW1lbnRzKCk7XHJcbiAgICB9XHJcbm1vZHVsZS5leHBvcnRzID0gY29tbWVudEZ1bmN0aW9uYWxpdHk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9