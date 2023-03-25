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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: bisque;\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 1rem;\n  background-color: #011811;\n  color: #b5c7d8;\n  font-size: 18px;\n  padding-right: 3rem;\n}\n\n.nav {\n  display: flex;\n  list-style: none;\n  gap: 30px;\n  font-weight: 600;\n  padding-left: 1rem;\n  cursor: pointer;\n}\n\nnav li {\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\n.nav a {\n  text-decoration: none;\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\nnav li:hover {\n  transform: scale(1.2);\n  color: #9ffa03;\n  font-size: 25px;\n}\n\n.logo {\n  /* background-image: url(); */\n  background-size: 80%;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: 2px solid #003b08;\n  color: beige;\n  padding-right: 1rem;\n  position: relative;\n}\n\nspan#logo-text {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  text-align: center;\n  padding: 1rem;\n}\n\n.movie-wrapper {\n  max-width: 1280px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #012218;\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\n}\n\n.image {\n  border: 5px solid #00704e;\n  border-radius: 2rem;\n  margin-top: 1rem;\n  margin-bottom: 10px;\n  width: 80%;\n}\n\n.popup-img {\n  display: block;\n  margin: 2.5rem auto 0 auto;\n  border-radius: 10%;\n}\n\n.moviesItem {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 1rem;\n  color: #fff;\n}\n\n.title {\n  margin: 0;\n}\n\n.likes-name {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 200px;\n}\n\n.likes-count {\n  width: 230px;\n  text-align: right;\n  margin-top: 5px;\n  margin-right: 15px;\n}\n\n.likes-count.transition {\n  font-size: 25px;\n  font-weight: 600;\n  color: green;\n  transition: all 0.8s ease-in-out;\n}\n\n.comment-btn {\n  width: 80%;\n  border: 2px solid #4cfa02;\n  padding: 8px 0 8px 0;\n  color: #001007;\n  background-color: #d4c7d0;\n  font-weight: 600;\n  border-radius: 1rem;\n}\n\n.comment-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: whitesmoke;\n  background: #005135;\n  border-radius: 2rem;\n  width: 60%;\n  height: 100%;\n  overflow-y: scroll;\n  display: none;\n  padding: 0 0;\n}\n\nh2 {\n  margin-left: 0;\n  padding-top: 30px;\n}\n\n.show-name {\n  font-size: 150%;\n  padding: 20px 0;\n  color: #000;\n}\n\n.comment-popup .show-name {\n  text-align: center;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.comment-popup table {\n  width: 50%;\n  margin: 0 auto;\n  justify-content: center;\n  margin-left: 30%;\n}\n\n.comments-list {\n  margin-left: 27%;\n  list-style-type: none;\n  text-indent: 1%;\n}\n\np.summary {\n  display: flex;\n  padding: 0 3rem;\n  font-size: 14px;\n  width: 80%;\n}\n\n.close-comment {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n  font-size: 25px;\n  font-weight: 900;\n  padding: 2% 0;\n  margin-left: 95%;\n  position: fixed;\n}\n\n.comment-holder {\n  text-align: center;\n  margin: 2%;\n  color: #000;\n}\n\n.form-title {\n  margin-left: 30%;\n  margin-top: 10px;\n  color: #000;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 20px;\n  margin-left: 25%;\n}\n\n.comment-form input {\n  width: 300px;\n  border: 2px solid #000;\n  height: 35px;\n  padding-left: 15px;\n  outline: none;\n}\n\n.submit-btn {\n  outline: none;\n  cursor: pointer;\n  border: 2px solid #9ffa03;\n  padding: 12px 0;\n  width: 200px !important;\n  color: whitesmoke;\n  font-weight: 600;\n  margin-right: 3rem;\n  background-color: #003b08;\n  transition: ease-out 2s;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.submit-btn:hover {\n  transform: scale(1.1);\n  background-color: #9ffa03;\n  color: #000;\n}\n\n.comment-form textarea {\n  width: 300px;\n  height: 100px;\n  border: 2px solid #000;\n  outline: none;\n  padding: 5px;\n}\n\nfooter {\n  display: flex;\n  background-color: #011811;\n  color: #fff;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter p {\n  font-size: 20px;\n  word-spacing: 3px;\n}\n\nfooter b {\n  font-style: italic;\n  color: #4cfa02;\n}\n\n@media screen and (min-width: 768px) {\n  .movie-wrapper {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    grid-template-rows: auto auto;\n  }\n\n  .likes-name {\n    display: flex;\n    width: 65%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: bisque;\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 1rem;\n  background-color: #011811;\n  color: #b5c7d8;\n  font-size: 18px;\n  padding-right: 3rem;\n}\n\n.nav {\n  display: flex;\n  list-style: none;\n  gap: 30px;\n  font-weight: 600;\n  padding-left: 1rem;\n  cursor: pointer;\n}\n\nnav li {\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\n.nav a {\n  text-decoration: none;\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\nnav li:hover {\n  transform: scale(1.2);\n  color: #9ffa03;\n  font-size: 25px;\n}\n\n.logo {\n  /* background-image: url(); */\n  background-size: 80%;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: 2px solid #003b08;\n  color: beige;\n  padding-right: 1rem;\n  position: relative;\n}\n\nspan#logo-text {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  text-align: center;\n  padding: 1rem;\n}\n\n.movie-wrapper {\n  max-width: 1280px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #012218;\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\n}\n\n.image {\n  border: 5px solid #00704e;\n  border-radius: 2rem;\n  margin-top: 1rem;\n  margin-bottom: 10px;\n  width: 80%;\n}\n\n.popup-img {\n  display: block;\n  margin: 2.5rem auto 0 auto;\n  border-radius: 10%;\n}\n\n.moviesItem {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 1rem;\n  color: #fff;\n}\n\n.title {\n  margin: 0;\n}\n\n.likes-name {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 200px;\n}\n\n.likes-count {\n  width: 230px;\n  text-align: right;\n  margin-top: 5px;\n  margin-right: 15px;\n}\n\n.likes-count.transition {\n  font-size: 25px;\n  font-weight: 600;\n  color: green;\n  transition: all 0.8s ease-in-out;\n}\n\n.comment-btn {\n  width: 80%;\n  border: 2px solid #4cfa02;\n  padding: 8px 0 8px 0;\n  color: #001007;\n  background-color: #d4c7d0;\n  font-weight: 600;\n  border-radius: 1rem;\n}\n\n.comment-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: whitesmoke;\n  background: #005135;\n  border-radius: 2rem;\n  width: 60%;\n  height: 100%;\n  overflow-y: scroll;\n  display: none;\n  padding: 0 0;\n}\n\nh2 {\n  margin-left: 0;\n  padding-top: 30px;\n}\n\n.show-name {\n  font-size: 150%;\n  padding: 20px 0;\n  color: #000;\n}\n\n.comment-popup .show-name {\n  text-align: center;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.comment-popup table {\n  width: 50%;\n  margin: 0 auto;\n  justify-content: center;\n  margin-left: 30%;\n}\n\n.comments-list {\n  margin-left: 27%;\n  list-style-type: none;\n  text-indent: 1%;\n}\n\np.summary {\n  display: flex;\n  padding: 0 3rem;\n  font-size: 14px;\n  width: 80%;\n}\n\n.close-comment {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n  font-size: 25px;\n  font-weight: 900;\n  padding: 2% 0;\n  margin-left: 95%;\n  position: fixed;\n}\n\n.comment-holder {\n  text-align: center;\n  margin: 2%;\n  color: #000;\n}\n\n.form-title {\n  margin-left: 30%;\n  margin-top: 10px;\n  color: #000;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 20px;\n  margin-left: 25%;\n}\n\n.comment-form input {\n  width: 300px;\n  border: 2px solid #000;\n  height: 35px;\n  padding-left: 15px;\n  outline: none;\n}\n\n.submit-btn {\n  outline: none;\n  cursor: pointer;\n  border: 2px solid #9ffa03;\n  padding: 12px 0;\n  width: 200px !important;\n  color: whitesmoke;\n  font-weight: 600;\n  margin-right: 3rem;\n  background-color: #003b08;\n  transition: ease-out 2s;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.submit-btn:hover {\n  transform: scale(1.1);\n  background-color: #9ffa03;\n  color: #000;\n}\n\n.comment-form textarea {\n  width: 300px;\n  height: 100px;\n  border: 2px solid #000;\n  outline: none;\n  padding: 5px;\n}\n\nfooter {\n  display: flex;\n  background-color: #011811;\n  color: #fff;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter p {\n  font-size: 20px;\n  word-spacing: 3px;\n}\n\nfooter b {\n  font-style: italic;\n  color: #4cfa02;\n}\n\n@media screen and (min-width: 768px) {\n  .movie-wrapper {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    grid-template-rows: auto auto;\n  }\n\n  .likes-name {\n    display: flex;\n    width: 65%;\n  }\n}\n"],"sourceRoot":""}]);
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
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 37, 38, 39, 40,
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
    const like = likesData.find((like) => Number(like.item_id, 36) === movie.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUss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O0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQiwwQkFBMEI7QUFDNUM7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVM7QUFDbEM7QUFDQSwrQkFBK0IscURBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRWU7QUFDVTtBQUNIOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxnRUFBVztBQUMzQztBQUNBLEVBQUUsK0RBQWU7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3ZEdkI7QUFDQTtBQUNBLCtJQUErSSxPQUFPO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvdW50SXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0Q29tbWVudExlbmd0aC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbW92ZWlEYXRhbG9hZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wV2luZG93LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXRyaWV2ZUNvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxuICBjb2xvcjogI2I1YzdkODtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgbGkge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcXG59XFxuXFxuLm5hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMnM7XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjb2xvcjogIzlmZmEwMztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDNiMDg7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5zcGFuI2xvZ28tdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1JTtcXG4gIGxlZnQ6IDE1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tb3ZpZS13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyMTg7XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCAycHggcmdiYSgwLCAxMTksIDQzLCAwLjk5KTtcXG59XFxuXFxuLmltYWdlIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDcwNGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAyLjVyZW0gYXV0byAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5tb3ZpZXNJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5saWtlcy1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubGlrZXMtY291bnQge1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5saWtlcy1jb3VudC50cmFuc2l0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogZ3JlZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNmYTAyO1xcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxuICBjb2xvcjogIzAwMTAwNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGM3ZDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZDogIzAwNTEzNTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMDtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLnNob3ctbmFtZSB7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNvbW1lbnQtcG9wdXAgLnNob3ctbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB0YWJsZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcblxcbi5jb21tZW50cy1saXN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNyU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWluZGVudDogMSU7XFxufVxcblxcbnAuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmNsb3NlLWNvbW1lbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAyJSAwO1xcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmNvbW1lbnQtaG9sZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMiU7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzlmZmEwMztcXG4gIHBhZGRpbmc6IDEycHggMDtcXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2IwODtcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDJzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZmYTAzO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogODBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxufVxcblxcbmZvb3RlciBiIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjNGNmYTAyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1vdmllLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIH1cXG5cXG4gIC5saWtlcy1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw4RkFBOEY7QUFDaEc7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtF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RSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZiwgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTgxMTtcXG4gIGNvbG9yOiAjYjVjN2Q4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiBsaSB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDJzO1xcbn1cXG5cXG4ubmF2IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcXG59XFxuXFxubmF2IGxpOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGNvbG9yOiAjOWZmYTAzO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTsgKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwM2IwODtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnNwYW4jbG9nby10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTUlO1xcbiAgbGVmdDogMTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1vdmllLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjIxODtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDExOSwgNDMsIDAuOTkpO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwNzA0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wb3B1cC1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDIuNXJlbSBhdXRvIDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLm1vdmllc0l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxpa2VzLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5saWtlcy1jb3VudCB7XFxuICB3aWR0aDogMjMwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmxpa2VzLWNvdW50LnRyYW5zaXRpb24ge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Y2ZhMDI7XFxuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcXG4gIGNvbG9yOiAjMDAxMDA3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YzdkMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kOiAjMDA1MTM1O1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMCAwO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uc2hvdy1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCAuc2hvdy1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5jb21tZW50LXBvcHVwIHRhYmxlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtaW5kZW50OiAxJTtcXG59XFxuXFxucC5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uY2xvc2UtY29tbWVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDIlIDA7XFxuICBtYXJnaW4tbGVmdDogOTUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uY29tbWVudC1ob2xkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyJTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5jb21tZW50LWZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMzVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjOWZmYTAzO1xcbiAgcGFkZGluZzogMTJweCAwO1xcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYjA4O1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMnM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmZhMDM7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTgxMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3b3JkLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuZm9vdGVyIGIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICM0Y2ZhMDI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubW92aWUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgfVxcblxcbiAgLmxpa2VzLW5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgcmVuZGVyTW92aWVzIGZyb20gJy4vbW9kdWxlcy9tb3ZlaURhdGFsb2FkLmpzJztcbmltcG9ydCBjb3VudEl0ZW1zIGZyb20gJy4vbW9kdWxlcy9jb3VudEl0ZW1zLmpzJztcblxuY29uc3QgcHJlcGFyZSA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcmVuZGVyTW92aWVzKCk7XG4gIGNvdW50SXRlbXMoKTtcbn07XG5cbnByZXBhcmUoKTtcbiIsImltcG9ydCBnZXRjb21tZW50cyBmcm9tICcuL3JldHJpZXZlQ29tbWVudHMuanMnO1xuaW1wb3J0IGRpc3BsYXlDb21tZW50cyBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5cbmNvbnN0IGNvbW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRG5UcmpKb05RRDlWMWtYWkFHY3MvY29tbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoYnV0dG9uLCB1c2VybmFtZSwgdGV4dCwgc2hvd0lkKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd0lkID0gc2hvd0lkLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjb21tZW50ID0gdGV4dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKG5hbWUgJiYgY29tbWVudCkge1xuICAgICAgYXdhaXQgZmV0Y2goY29tbWVudEFQSSwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IHNob3dJZCxcbiAgICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgICBjb21tZW50LFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICB0ZXh0LnZhbHVlID0gJyc7XG5cbiAgICBjb25zdCBnZXRjb21tZW50ID0gYXdhaXQgZ2V0Y29tbWVudHMoc2hvd0lkKTtcbiAgICBjb25zdCB1c2VyY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0Jyk7XG4gICAgZGlzcGxheUNvbW1lbnRzKGdldGNvbW1lbnQsIHVzZXJjb21tZW50KTtcbiAgfSk7XG59OyIsImZ1bmN0aW9uIGNvdW50SXRlbXMoKSB7XG4gIGNvbnN0IGNvdW50TW92aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vdmllLXdyYXBwZXIgPiAqJyk7XG4gIHJldHVybiBjb3VudE1vdmllcy5sZW5ndGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50SXRlbXM7IiwiaW1wb3J0IGNvdW50Q29tbWVudHMgZnJvbSAnLi9nZXRDb21tZW50TGVuZ3RoLmpzJztcblxuY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGdldGNvbW1lbnRzRGF0YSwgdXNlcmNvbW1lbnQpID0+IHtcbiAgdXNlcmNvbW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChnZXRjb21tZW50c0RhdGEubGVuZ3RoID4gMCkge1xuICAgIGdldGNvbW1lbnRzRGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICBjb25zdCBsaXN0bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaXN0bGluay5jbGFzc0xpc3QuYWRkKCdjb21tbWVudC1pdGVtJyk7XG4gICAgICBsaXN0bGluay5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX0gOiAke2NvbW1lbnQuY29tbWVudH1gO1xuICAgICAgdXNlcmNvbW1lbnQuYXBwZW5kQ2hpbGQobGlzdGxpbmspO1xuICAgIH0pO1xuICAgIGNvbnN0IGNoZWNrQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudCcpO1xuICAgIGNvbnN0IGNvbW1lbnRDb3VudCA9IGNvdW50Q29tbWVudHMoZ2V0Y29tbWVudHNEYXRhKTtcbiAgICBjaGVja0NvdW50LmlubmVySFRNTCA9IGAoJHtjb21tZW50Q291bnR9KWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50czsiLCJjb25zdCBjb3VudENvbW1lbnRzID0gKGdldGNvbW1lbnQpID0+IGdldGNvbW1lbnQubGVuZ3RoO1xuZXhwb3J0IGRlZmF1bHQgY291bnRDb21tZW50czsiLCJjb25zdCBtb3ZpZXMgPSBbXG4gIDEsIDIsIDMsIDQsIDU1LCA2LCA5MywgOCwgMjIsIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxOCwgMTksIDIwLCAyMSwgMjIsXG4gIDIzLCAyNCwgMjUsIDI2LCAyNywgMjgsIDI5LCAzMCwgMzEsIDMyLCAzMywgMzQsIDM1LCA0MSwgNDIsIDM3LCAzOCwgMzksIDQwLFxuXTtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG5jb25zdCBzaG93c1VybCA9ICcvc2hvd3MvJztcbmNvbnN0IGFQaUxpbmsgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcbi8vIGNvbnN0IEFQSV9LRVkgPSAnNmpUSDNqT29zN09wbkh4Q2c2bHonO1xuY29uc3QgQVBJX0tFWSA9ICdEblRyakpvTlFEOVYxa1haQUdjcyc7XG5jb25zdCBhZGRMaWtlID0gYC9hcHBzLyR7QVBJX0tFWX0vbGlrZXMvYDtcblxuY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwgPSAnJykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBnZXRsaWtlc0NvdW50ID0gYXN5bmMgKHVybCA9ICcnKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGhpdGxpa2VzQXBpID0gYXN5bmMgKHVybCA9ICcnLCBpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgQWNjZXB0OiAndGV4dC9wbGFpbicsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXRNb3ZpZXMoKSB7XG4gIGNvbnN0IG1vdmllbGlzdCA9IFtdO1xuICBmb3IgKGxldCB6ID0gMDsgeiA8IG1vdmllcy5sZW5ndGg7IHogKz0gMSkge1xuICAgIGNvbnN0IG1vdmllc0lkID0gYmFzZVVybCArIHNob3dzVXJsICsgbW92aWVzW3pdO1xuICAgIGNvbnN0IHByb21pc2UgPSBnZXREYXRhKG1vdmllc0lkKTtcbiAgICBtb3ZpZWxpc3QucHVzaChwcm9taXNlKTtcbiAgfVxuICBjb25zdCBtb3ZpZURhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChtb3ZpZWxpc3QpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtb3ZpZURhdGEgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGlrZXMoKSB7XG4gIGNvbnN0IHBvc3RMaWtlTGluayA9IGFQaUxpbmsgKyBhZGRMaWtlO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0bGlrZXNDb3VudChwb3N0TGlrZUxpbmspO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RMaWtlcyhpZCkge1xuICBjb25zdCBwb3N0TGlrZUxpbmsgPSBhUGlMaW5rICsgYWRkTGlrZTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGhpdGxpa2VzQXBpKHBvc3RMaWtlTGluaywgaWQpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhIH07XG59XG5cbmV4cG9ydCB7IGdldE1vdmllcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9OyIsImltcG9ydCB7IGdldE1vdmllcywgZ2V0TGlrZXMsIHBvc3RMaWtlcyB9IGZyb20gJy4vZ2V0RGF0YS5qcyc7XG5pbXBvcnQgcG9wdXBXaW4gZnJvbSAnLi9wb3BXaW5kb3cuanMnO1xuXG5jb25zdCBvYmplY3QgPSBbXTtcbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5cbmNvbnN0IGJ1aWxkRGl2RWxlbWVudCA9IChsZE1vdmllcywgc2hvdykgPT4ge1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbW92aWVzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb3ZpZXNJdGVtLmNsYXNzTGlzdC5hZGQoJ21vdmllc0l0ZW0nKTtcbiAgbW92aWVzSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCIke3Nob3cuaW1hZ2UgJiYgc2hvdy5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHtzaG93Lm5hbWV9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlrZXMtbmFtZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj4ke3Nob3cubmFtZX08L3A+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsbmkgbG5pLWhlYXJ0XCIgaWQ9XCIke3Nob3cuaWR9XCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cImxpa2VzLWNvdW50XCI+JHtzaG93Lmxpa2VzfSBMaWtlczwvcD5gO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLmNsYXNzTGlzdCA9ICdjb21tZW50LWJ0bic7XG4gIGJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICBtb3ZpZXNJdGVtLmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb21tZW50UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICBwb3B1cFdpbihzaG93KTtcbiAgfSk7XG4gIGxkTW92aWVzLmFwcGVuZENoaWxkKG1vdmllc0l0ZW0pO1xufTtcblxuY29uc3QgQ3JlYXRlTW92aWVFbGVtZW50ID0gYXN5bmMgKGxvYWRNb3ZpZSwgc2hvdykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTnVtYmVyJyk7XG4gIGxvYWRNb3ZpZS5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgY29uc3QgbGlrZXNEYXRhID0gcmVzdWx0LmRhdGEgfHwgW107XG4gIGNvbnN0IHVwZGF0ZWRNb3ZpZXMgPSBzaG93Lm1hcCgobW92aWUpID0+IHtcbiAgICBjb25zdCBsaWtlID0gbGlrZXNEYXRhLmZpbmQoKGxpa2UpID0+IE51bWJlcihsaWtlLml0ZW1faWQsIDM2KSA9PT0gbW92aWUuaWQpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICBsaWtlID8gbW92aWUubGlrZXMgPSBsaWtlLmxpa2VzIDogbW92aWUubGlrZXMgPSAwO1xuICAgIG9iamVjdC5wdXNoKG1vdmllKTtcbiAgICByZXR1cm4gbW92aWU7XG4gIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWRNb3ZpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWlsZERpdkVsZW1lbnQobG9hZE1vdmllLCB1cGRhdGVkTW92aWVzW2ldKTtcbiAgfVxuICBudW1iZXIudGV4dENvbnRlbnQgPSBgU2hvdyAoJHtzaG93Lmxlbmd0aH0pYDtcbn07XG5cbmNvbnN0IHNob3dNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvYWRNb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtd3JhcHBlcicpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRNb3ZpZXMoKTtcbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgYXdhaXQgQ3JlYXRlTW92aWVFbGVtZW50KGxvYWRNb3ZpZXMsIHJlc3VsdC5tb3ZpZURhdGEpO1xuICB9XG59O1xuXG5jb25zdCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXdyYXBwZXInKTtcbnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmxuaS5sbmktaGVhcnQnKSkge1xuICAgIGNvbnN0IG51bWJlcklkID0gZS50YXJnZXQuaWQ7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcG9zdExpa2VzKG51bWJlcklkKTtcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IHJlc3VsdExpa2UgPSBhd2FpdCBnZXRMaWtlcygpO1xuICAgICAgY29uc3QgbmV3TGlrZXMgPSByZXN1bHRMaWtlLmRhdGEuZmluZCgobmV3bGlrZXMpID0+IG5ld2xpa2VzLml0ZW1faWQgPT09IG51bWJlcklkKTtcbiAgICAgIGNvbnN0IG5ld1BhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGFkZExpa2VzID0gbmV3UGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWtlcy1jb3VudCcpO1xuICAgICAgYWRkTGlrZXMuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbicpO1xuICAgICAgYWRkTGlrZXMudGV4dENvbnRlbnQgPSBgJHtuZXdMaWtlcy5saWtlc30gTGlrZXNgO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGFkZExpa2VzLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb24nKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd01vdmllcztcbiIsImltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkQ29tbWVudC5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcbmltcG9ydCBnZXRjb21tZW50cyBmcm9tICcuL3JldHJpZXZlQ29tbWVudHMuanMnO1xuXG5jb25zdCBjb21tZW50UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1wb3B1cCcpO1xuXG5jb25zdCBwb3B1cFdpbiA9IGFzeW5jIChzaG93KSA9PiB7XG4gIGNvbnN0IGNsb3NlU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2xvc2VTaWduLmlubmVySFRNTCA9ICdYJztcbiAgY2xvc2VTaWduLmNsYXNzTGlzdCA9ICdjbG9zZS1jb21tZW50JztcbiAgY29tbWVudFBvcHVwLmFwcGVuZENoaWxkKGNsb3NlU2lnbik7XG4gIGNvbW1lbnRQb3B1cC5pbm5lckhUTUwgKz0gYFxuICAgIDxpbWcgc3JjPVwiJHtzaG93LmltYWdlLm1lZGl1bX1cIiBjbGFzcz1cInBvcHVwLWltZ1wiPlxuICAgIDxoMyBjbGFzcz1cInNob3ctbmFtZVwiPiR7c2hvdy5uYW1lfTwvaDM+XG4gICAgPHRhYmxlPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGI+TGFuZ3VhZ2U6PC9iPiAke3Nob3cubGFuZ3VhZ2V9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8Yj5UeXBlOjwvYj4gJHtzaG93LnR5cGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPFAgY2xhc3M9XCJzdW1tYXJ5XCI+JHtzaG93LnN1bW1hcnl9PC9wPlxuICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtaG9sZGVyXCI+XG4gICAgICBDb21tZW50cyA8c3BhbiBjbGFzcz1cImNvbW1lbnQtY291bnRcIj4oMCk8L3NwYW4+XG4gICAgPC9oMz5cbiAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1saXN0XCI+XG5cbiAgICA8L3VsPlxuICAgIDxoMiBjbGFzcz1cImZvcm0tdGl0bGVcIj5BZGQgYSBjb21tZW50PC9oMj5cbiAgICA8Zm9ybSBjbGFzcz1cImNvbW1lbnQtZm9ybVwiPlxuICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbmFtZT1cImNvbW1lbnRcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnRuXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5gO1xuXG4gIGNvbnN0IGdldGNvbW1lbnRzRGF0YSA9IGF3YWl0IGdldGNvbW1lbnRzKHNob3cuaWQpO1xuICBjb25zdCB1c2VyY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0Jyk7XG4gIGRpc3BsYXlDb21tZW50cyhnZXRjb21tZW50c0RhdGEsIHVzZXJjb21tZW50KTtcblxuICBjb25zdCBjb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0YXJlYScpO1xuICBhZGRDb21tZW50KGNvbUJ0biwgbmFtZSwgdGV4dCwgc2hvdy5pZCk7XG59O1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2xvc2UtY29tbWVudCcpKSB7XG4gICAgY29tbWVudFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29tbWVudFBvcHVwLmlubmVySFRNTCA9ICcnO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wdXBXaW47IiwiY29uc3QgZ2V0Y29tbWVudHMgPSBhc3luYyAoc2hvd0lkKSA9PiB7XG4gIHNob3dJZCA9IHNob3dJZC50b1N0cmluZygpO1xuICBjb25zdCBjb21tZW50ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0RuVHJqSm9OUUQ5VjFrWFpBR2NzL2NvbW1lbnRzP2l0ZW1faWQ9JHtzaG93SWR9YCk7XG4gIGNvbnN0IHJlc3VsdCA9IGNvbW1lbnQuanNvbigpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldGNvbW1lbnRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==