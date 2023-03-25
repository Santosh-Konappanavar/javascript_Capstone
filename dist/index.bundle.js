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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: bisque;\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 1rem;\n  background-color: #011811;\n  color: #b5c7d8;\n  font-size: 18px;\n  padding-right: 3rem;\n}\n\n.nav {\n  display: flex;\n  list-style: none;\n  gap: 30px;\n  font-weight: 600;\n  padding-left: 1rem;\n  cursor: pointer;\n}\n\n\nnav li {\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\n.nav a {\n  text-decoration: none;\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\nnav li:hover {\n  transform: translateX(1.2);\n  color: #9ffa03;\n  font-size: 25px;\n}\n\n.logo {\n  /* background-image: url(); */\n  background-size: 80%;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: 2px solid #003b08;\n  color: beige;\n  padding-right: 1rem;\n  position: relative;\n}\n\nspan#logo-text {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  text-align: center;\n  padding: 1rem;\n}\n\n.movie-wrapper {\n  max-width: 1280px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #012218;\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\n}\n\n.image {\n  border: 5px solid #00704e;\n  border-radius: 2rem;\n  margin-top: 1rem;\n  margin-bottom: 10px;\n  width: 80%;\n}\n\n.popup-img {\n  display: block;\n  margin: 2.5rem auto 0 auto;\n  border-radius: 10%;\n}\n\n.moviesItem {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 1rem;\n  color: #fff;\n}\n\n.title {\n  margin: 0;\n}\n\n.likes-name {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 200px;\n}\n\n.likes-count {\n  width: 230px;\n  text-align: right;\n  margin-top: 5px;\n  margin-right: 15px;\n}\n\n.likes-count.transition {\n  font-size: 25px;\n  font-weight: 600;\n  color: green;\n  transition: all 0.8s ease-in-out;\n}\n\n.comment-btn {\n  width: 80%;\n  border: 2px solid #4cfa02;\n  padding: 8px 0 8px 0;\n  color: #001007;\n  background-color: #d4c7d0;\n  font-weight: 600;\n  border-radius: 1rem;\n}\n\n.comment-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: whitesmoke;\n  background: #005135;\n  border-radius: 2rem;\n  width: 60%;\n  height: 100%;\n  overflow-y: scroll;\n  display: none;\n  padding: 0 0;\n}\n\nh2 {\n  margin-left: 0;\n  padding-top: 30px;\n}\n\n.show-name {\n  font-size: 150%;\n  padding: 20px 0;\n  color: #000;\n}\n\n.comment-popup .show-name {\n  text-align: center;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.comment-popup table {\n  width: 50%;\n  margin: 0 auto;\n  justify-content: center;\n  margin-left: 30%;\n}\n\n.comments-list {\n  margin-left: 27%;\n  list-style-type: none;\n  text-indent: 1%;\n}\n\np.summary {\n  display: flex;\n  padding: 0 3rem;\n  font-size: 14px;\n  width: 80%;\n}\n\n.close-comment {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n  font-size: 25px;\n  font-weight: 900;\n  padding: 2% 0;\n  margin-left: 95%;\n  position: fixed;\n}\n\n.comment-holder {\n  text-align: center;\n  margin: 2%;\n  color: #000;\n}\n\n.form-title {\n  margin-left: 30%;\n  margin-top: 10px;\n  color: #000;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 20px;\n  margin-left: 25%;\n}\n\n.comment-form input {\n  width: 300px;\n  border: 2px solid #000;\n  height: 35px;\n  padding-left: 15px;\n  outline: none;\n}\n\n.submit-btn {\n  outline: none;\n  cursor: pointer;\n  border: 2px solid #9ffa03;\n  padding: 12px 0;\n  width: 200px !important;\n  color: whitesmoke;\n  font-weight: 600;\n  margin-right: 3rem;\n  background-color: #003b08;\n  transition: ease-out 2s;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.submit-btn:hover {\n  transform: scale(1.1);\n  background-color: #9ffa03;\n  color: #000;\n}\n\n\n\n.comment-form textarea {\n  width: 300px;\n  height: 100px;\n  border: 2px solid #000;\n  outline: none;\n  padding: 5px;\n}\n\nfooter {\n  display: flex;\n  background-color: #011811;\n  color: #fff;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter p {\n  font-size: 20px;\n  word-spacing: 3px;\n}\n\nfooter b {\n  font-style: italic;\n  color: #4cfa02;\n}\n\n@media screen and (min-width: 768px) {\n  .movie-wrapper {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    grid-template-rows: auto auto;\n  }\n\n  .likes-name {\n    display: flex;\n    width: 65%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-color: bisque;\n  font-family: 'Gill Sans', 'Times New Roman', Times, serif, Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 1rem;\n  background-color: #011811;\n  color: #b5c7d8;\n  font-size: 18px;\n  padding-right: 3rem;\n}\n\n.nav {\n  display: flex;\n  list-style: none;\n  gap: 30px;\n  font-weight: 600;\n  padding-left: 1rem;\n  cursor: pointer;\n}\n\n\nnav li {\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\n.nav a {\n  text-decoration: none;\n  color: whitesmoke;\n  transition: ease-in-out 2s;\n}\n\nnav li:hover {\n  transform: translateX(1.2);\n  color: #9ffa03;\n  font-size: 25px;\n}\n\n.logo {\n  /* background-image: url(); */\n  background-size: 80%;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  border: 2px solid #003b08;\n  color: beige;\n  padding-right: 1rem;\n  position: relative;\n}\n\nspan#logo-text {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  text-align: center;\n  padding: 1rem;\n}\n\n.movie-wrapper {\n  max-width: 1280px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #012218;\n  box-shadow: inset 2px 2px 2px 2px rgba(0, 119, 43, 0.99);\n}\n\n.image {\n  border: 5px solid #00704e;\n  border-radius: 2rem;\n  margin-top: 1rem;\n  margin-bottom: 10px;\n  width: 80%;\n}\n\n.popup-img {\n  display: block;\n  margin: 2.5rem auto 0 auto;\n  border-radius: 10%;\n}\n\n.moviesItem {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 1rem;\n  color: #fff;\n}\n\n.title {\n  margin: 0;\n}\n\n.likes-name {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 200px;\n}\n\n.likes-count {\n  width: 230px;\n  text-align: right;\n  margin-top: 5px;\n  margin-right: 15px;\n}\n\n.likes-count.transition {\n  font-size: 25px;\n  font-weight: 600;\n  color: green;\n  transition: all 0.8s ease-in-out;\n}\n\n.comment-btn {\n  width: 80%;\n  border: 2px solid #4cfa02;\n  padding: 8px 0 8px 0;\n  color: #001007;\n  background-color: #d4c7d0;\n  font-weight: 600;\n  border-radius: 1rem;\n}\n\n.comment-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: whitesmoke;\n  background: #005135;\n  border-radius: 2rem;\n  width: 60%;\n  height: 100%;\n  overflow-y: scroll;\n  display: none;\n  padding: 0 0;\n}\n\nh2 {\n  margin-left: 0;\n  padding-top: 30px;\n}\n\n.show-name {\n  font-size: 150%;\n  padding: 20px 0;\n  color: #000;\n}\n\n.comment-popup .show-name {\n  text-align: center;\n  width: 100%;\n  margin: 10px 0;\n}\n\n.comment-popup table {\n  width: 50%;\n  margin: 0 auto;\n  justify-content: center;\n  margin-left: 30%;\n}\n\n.comments-list {\n  margin-left: 27%;\n  list-style-type: none;\n  text-indent: 1%;\n}\n\np.summary {\n  display: flex;\n  padding: 0 3rem;\n  font-size: 14px;\n  width: 80%;\n}\n\n.close-comment {\n  display: block;\n  width: 100%;\n  cursor: pointer;\n  font-size: 25px;\n  font-weight: 900;\n  padding: 2% 0;\n  margin-left: 95%;\n  position: fixed;\n}\n\n.comment-holder {\n  text-align: center;\n  margin: 2%;\n  color: #000;\n}\n\n.form-title {\n  margin-left: 30%;\n  margin-top: 10px;\n  color: #000;\n}\n\n.comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 20px;\n  margin-left: 25%;\n}\n\n.comment-form input {\n  width: 300px;\n  border: 2px solid #000;\n  height: 35px;\n  padding-left: 15px;\n  outline: none;\n}\n\n.submit-btn {\n  outline: none;\n  cursor: pointer;\n  border: 2px solid #9ffa03;\n  padding: 12px 0;\n  width: 200px !important;\n  color: whitesmoke;\n  font-weight: 600;\n  margin-right: 3rem;\n  background-color: #003b08;\n  transition: ease-out 2s;\n  border-radius: 5px;\n  font-size: 18px;\n}\n\n.submit-btn:hover {\n  transform: scale(1.1);\n  background-color: #9ffa03;\n  color: #000;\n}\n\n\n\n.comment-form textarea {\n  width: 300px;\n  height: 100px;\n  border: 2px solid #000;\n  outline: none;\n  padding: 5px;\n}\n\nfooter {\n  display: flex;\n  background-color: #011811;\n  color: #fff;\n  height: 80px;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter p {\n  font-size: 20px;\n  word-spacing: 3px;\n}\n\nfooter b {\n  font-style: italic;\n  color: #4cfa02;\n}\n\n@media screen and (min-width: 768px) {\n  .movie-wrapper {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    grid-template-rows: auto auto;\n  }\n\n  .likes-name {\n    display: flex;\n    width: 65%;\n  }\n}\n"],"sourceRoot":""}]);
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



const movieWrapper = document.querySelector('.movie-wrapper');
const commentPopup = document.querySelector('.comment-popup');
const number = document.querySelector('.Number');

async function renderMovies() {
  const { success, movieData } = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getMovies)();
  if (success) {
    const likesData = (await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)()).data || [];
    movieWrapper.innerHTML = '';
    number.textContent = `Show (${movieData.length})`;
    movieData.forEach((movie) => {
      const like = likesData.find((like) => parseInt(like.item_id, 36) === movie.id);
      const likes = like ? like.likes : 0;
      const movieItem = document.createElement('div');
      movieItem.classList.add('moviesItem');
      movieItem.innerHTML = `
        <img class="image" src="${movie.image && movie.image.medium}" alt="${movie.name}">
        <div class="likes-name">
          <p class="title">${movie.name}</p>
          <i class="lni lni-heart" id="${movie.id}"></i>
        </div>
        <p class="likes-count">${likes} Likes</p>
        <button class="comment-btn">Comments</button>`;
      movieWrapper.appendChild(movieItem);
      movieItem.querySelector('.comment-btn').addEventListener('click', () => {
        commentPopup.style.display = 'grid';
        (0,_popWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(movie);
      });
      movieItem.querySelector('.lni-heart').addEventListener('click', async () => {
        const { success } = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(movie.id);
        if (success) {
          const { data } = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
          const newLikes = data.find((newlikes) => newlikes.item_id === movie.id);
          const likesCount = movieItem.querySelector('.likes-count');
          likesCount.classList.add('transition');
          likesCount.textContent = `${newLikes.likes} Likes`;
          setTimeout(() => likesCount.classList.remove('transition'), 100);
        }
      });
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovies);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUss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QUNBO0FBQ0EsUUFBUSx5REFBUTtBQUNoQixPQUFPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVSxRQUFRLHNEQUFTO0FBQzNDO0FBQ0Esa0JBQWtCLE9BQU8sUUFBUSxxREFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2E7QUFDVTtBQUNIOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixhQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxnRUFBVztBQUMzQztBQUNBLEVBQUUsK0RBQWU7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3ZEdkI7QUFDQTtBQUNBLCtJQUErSSxPQUFPO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvdW50SXRlbXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0Q29tbWVudExlbmd0aC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvbW92ZWlEYXRhbG9hZC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2NhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wV2luZG93LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRfY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9yZXRyaWV2ZUNvbW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxuICBjb2xvcjogI2I1YzdkODtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5uYXYgbGkge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAycztcXG59XFxuXFxuLm5hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMnM7XFxufVxcblxcbm5hdiBsaTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4yKTtcXG4gIGNvbG9yOiAjOWZmYTAzO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4ubG9nbyB7XFxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTsgKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogODAlO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwM2IwODtcXG4gIGNvbG9yOiBiZWlnZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnNwYW4jbG9nby10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTUlO1xcbiAgbGVmdDogMTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1vdmllLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjIxODtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDExOSwgNDMsIDAuOTkpO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwNzA0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5wb3B1cC1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDIuNXJlbSBhdXRvIDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLm1vdmllc0l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxpa2VzLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5saWtlcy1jb3VudCB7XFxuICB3aWR0aDogMjMwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuXFxuLmxpa2VzLWNvdW50LnRyYW5zaXRpb24ge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Y2ZhMDI7XFxuICBwYWRkaW5nOiA4cHggMCA4cHggMDtcXG4gIGNvbG9yOiAjMDAxMDA3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0YzdkMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kOiAjMDA1MTM1O1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMCAwO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uc2hvdy1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCAuc2hvdy1uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5jb21tZW50LXBvcHVwIHRhYmxlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Qge1xcbiAgbWFyZ2luLWxlZnQ6IDI3JTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtaW5kZW50OiAxJTtcXG59XFxuXFxucC5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDNyZW07XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uY2xvc2UtY29tbWVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDIlIDA7XFxuICBtYXJnaW4tbGVmdDogOTUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uY29tbWVudC1ob2xkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAyJTtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5jb21tZW50LWZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMzVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjOWZmYTAzO1xcbiAgcGFkZGluZzogMTJweCAwO1xcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYjA4O1xcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMnM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5zdWJtaXQtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmZhMDM7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuXFxuXFxuLmNvbW1lbnQtZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTgxMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3b3JkLXNwYWNpbmc6IDNweDtcXG59XFxuXFxuZm9vdGVyIGIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICM0Y2ZhMDI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubW92aWUtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgfVxcblxcbiAgLmxpa2VzLW5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNjUlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhGQUE4RjtBQUNoRzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIs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e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExODExO1xcbiAgY29sb3I6ICNiNWM3ZDg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxubmF2IGxpIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMnM7XFxufVxcblxcbi5uYXYgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDJzO1xcbn1cXG5cXG5uYXYgbGk6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuMik7XFxuICBjb2xvcjogIzlmZmEwMztcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7ICovXFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDNiMDg7XFxuICBjb2xvcjogYmVpZ2U7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5zcGFuI2xvZ28tdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1JTtcXG4gIGxlZnQ6IDE1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tb3ZpZS13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTIyMTg7XFxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDJweCAycHggcmdiYSgwLCAxMTksIDQzLCAwLjk5KTtcXG59XFxuXFxuLmltYWdlIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDcwNGU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAyLjVyZW0gYXV0byAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5tb3ZpZXNJdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5saWtlcy1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubGlrZXMtY291bnQge1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcblxcbi5saWtlcy1jb3VudC50cmFuc2l0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogZ3JlZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNmYTAyO1xcbiAgcGFkZGluZzogOHB4IDAgOHB4IDA7XFxuICBjb2xvcjogIzAwMTAwNztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGM3ZDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNvbW1lbnQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZDogIzAwNTEzNTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDAgMDtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLnNob3ctbmFtZSB7XFxuICBmb250LXNpemU6IDE1MCU7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNvbW1lbnQtcG9wdXAgLnNob3ctbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB0YWJsZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxufVxcblxcbi5jb21tZW50cy1saXN0IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNyU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWluZGVudDogMSU7XFxufVxcblxcbnAuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAzcmVtO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmNsb3NlLWNvbW1lbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAyJSAwO1xcbiAgbWFyZ2luLWxlZnQ6IDk1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLmNvbW1lbnQtaG9sZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMiU7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzlmZmEwMztcXG4gIHBhZGRpbmc6IDEycHggMDtcXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2IwODtcXG4gIHRyYW5zaXRpb246IGVhc2Utb3V0IDJzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZmYTAzO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcblxcblxcbi5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MTE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogODBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd29yZC1zcGFjaW5nOiAzcHg7XFxufVxcblxcbmZvb3RlciBiIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjNGNmYTAyO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1vdmllLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIH1cXG5cXG4gIC5saWtlcy1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDY1JTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHJlbmRlck1vdmllcyBmcm9tICcuL21vZHVsZXMvbW92ZWlEYXRhbG9hZC5qcyc7XG5pbXBvcnQgY291bnRJdGVtcyBmcm9tICcuL21vZHVsZXMvY291bnRJdGVtcy5qcyc7XG5cbmNvbnN0IHByZXBhcmUgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHJlbmRlck1vdmllcygpO1xuICBjb3VudEl0ZW1zKCk7XG59O1xuXG5wcmVwYXJlKCk7XG4iLCJpbXBvcnQgZ2V0Y29tbWVudHMgZnJvbSAnLi9yZXRyaWV2ZUNvbW1lbnRzLmpzJztcbmltcG9ydCBkaXNwbGF5Q29tbWVudHMgZnJvbSAnLi9kaXNwbGF5Q29tbWVudHMuanMnO1xuXG5jb25zdCBjb21tZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0RuVHJqSm9OUUQ5VjFrWFpBR2NzL2NvbW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgKGJ1dHRvbiwgdXNlcm5hbWUsIHRleHQsIHNob3dJZCkgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNob3dJZCA9IHNob3dJZC50b1N0cmluZygpO1xuICAgIGNvbnN0IG5hbWUgPSB1c2VybmFtZS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY29tbWVudCA9IHRleHQudmFsdWUudHJpbSgpO1xuICAgIGlmIChuYW1lICYmIGNvbW1lbnQpIHtcbiAgICAgIGF3YWl0IGZldGNoKGNvbW1lbnRBUEksIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBzaG93SWQsXG4gICAgICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICAgICAgY29tbWVudCxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHVzZXJuYW1lLnZhbHVlID0gJyc7XG4gICAgdGV4dC52YWx1ZSA9ICcnO1xuXG4gICAgY29uc3QgZ2V0Y29tbWVudCA9IGF3YWl0IGdldGNvbW1lbnRzKHNob3dJZCk7XG4gICAgY29uc3QgdXNlcmNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtbGlzdCcpO1xuICAgIGRpc3BsYXlDb21tZW50cyhnZXRjb21tZW50LCB1c2VyY29tbWVudCk7XG4gIH0pO1xufTsiLCJmdW5jdGlvbiBjb3VudEl0ZW1zKCkge1xuICBjb25zdCBjb3VudE1vdmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZpZS13cmFwcGVyID4gKicpO1xuICByZXR1cm4gY291bnRNb3ZpZXMubGVuZ3RoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3VudEl0ZW1zOyIsImltcG9ydCBjb3VudENvbW1lbnRzIGZyb20gJy4vZ2V0Q29tbWVudExlbmd0aC5qcyc7XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChnZXRjb21tZW50c0RhdGEsIHVzZXJjb21tZW50KSA9PiB7XG4gIHVzZXJjb21tZW50LmlubmVySFRNTCA9ICcnO1xuICBpZiAoZ2V0Y29tbWVudHNEYXRhLmxlbmd0aCA+IDApIHtcbiAgICBnZXRjb21tZW50c0RhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgY29uc3QgbGlzdGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGlzdGxpbmsuY2xhc3NMaXN0LmFkZCgnY29tbW1lbnQtaXRlbScpO1xuICAgICAgbGlzdGxpbmsuaW5uZXJIVE1MID0gYCR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnQudXNlcm5hbWV9IDogJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICAgIHVzZXJjb21tZW50LmFwcGVuZENoaWxkKGxpc3RsaW5rKTtcbiAgICB9KTtcbiAgICBjb25zdCBjaGVja0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY291bnQnKTtcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBjb3VudENvbW1lbnRzKGdldGNvbW1lbnRzRGF0YSk7XG4gICAgY2hlY2tDb3VudC5pbm5lckhUTUwgPSBgKCR7Y29tbWVudENvdW50fSlgO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29tbWVudHM7IiwiY29uc3QgY291bnRDb21tZW50cyA9IChnZXRjb21tZW50KSA9PiBnZXRjb21tZW50Lmxlbmd0aDtcbmV4cG9ydCBkZWZhdWx0IGNvdW50Q29tbWVudHM7IiwiY29uc3QgbW92aWVzID0gW1xuICAxLCAyLCAzLCA0LCA1NSwgNiwgOTMsIDgsIDIyLCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTgsIDE5LCAyMCwgMjEsIDIyLFxuICAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgNDEsIDQyLCAzNywgMzgsIDM5LCA0MCxcbl07XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20nO1xuY29uc3Qgc2hvd3NVcmwgPSAnL3Nob3dzLyc7XG5jb25zdCBhUGlMaW5rID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XG4vLyBjb25zdCBBUElfS0VZID0gJzZqVEgzak9vczdPcG5IeENnNmx6JztcbmNvbnN0IEFQSV9LRVkgPSAnRG5UcmpKb05RRDlWMWtYWkFHY3MnO1xuY29uc3QgYWRkTGlrZSA9IGAvYXBwcy8ke0FQSV9LRVl9L2xpa2VzL2A7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsID0gJycpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgZ2V0bGlrZXNDb3VudCA9IGFzeW5jICh1cmwgPSAnJykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5jb25zdCBoaXRsaWtlc0FwaSA9IGFzeW5jICh1cmwgPSAnJywgaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIEFjY2VwdDogJ3RleHQvcGxhaW4nLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQgfSksXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TW92aWVzKCkge1xuICBjb25zdCBtb3ZpZWxpc3QgPSBbXTtcbiAgZm9yIChsZXQgeiA9IDA7IHogPCBtb3ZpZXMubGVuZ3RoOyB6ICs9IDEpIHtcbiAgICBjb25zdCBtb3ZpZXNJZCA9IGJhc2VVcmwgKyBzaG93c1VybCArIG1vdmllc1t6XTtcbiAgICBjb25zdCBwcm9taXNlID0gZ2V0RGF0YShtb3ZpZXNJZCk7XG4gICAgbW92aWVsaXN0LnB1c2gocHJvbWlzZSk7XG4gIH1cbiAgY29uc3QgbW92aWVEYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwobW92aWVsaXN0KTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbW92aWVEYXRhIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExpa2VzKCkge1xuICBjb25zdCBwb3N0TGlrZUxpbmsgPSBhUGlMaW5rICsgYWRkTGlrZTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldGxpa2VzQ291bnQocG9zdExpa2VMaW5rKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0TGlrZXMoaWQpIHtcbiAgY29uc3QgcG9zdExpa2VMaW5rID0gYVBpTGluayArIGFkZExpa2U7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBoaXRsaWtlc0FwaShwb3N0TGlrZUxpbmssIGlkKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YSB9O1xufVxuXG5leHBvcnQgeyBnZXRNb3ZpZXMsIGdldExpa2VzLCBwb3N0TGlrZXMgfTsiLCJpbXBvcnQgeyBnZXRNb3ZpZXMsIGdldExpa2VzLCBwb3N0TGlrZXMgfSBmcm9tICcuL2dldERhdGEuanMnO1xuaW1wb3J0IHBvcHVwV2luIGZyb20gJy4vcG9wV2luZG93LmpzJztcblxuY29uc3QgbW92aWVXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXdyYXBwZXInKTtcbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5jb25zdCBudW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTnVtYmVyJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlck1vdmllcygpIHtcbiAgY29uc3QgeyBzdWNjZXNzLCBtb3ZpZURhdGEgfSA9IGF3YWl0IGdldE1vdmllcygpO1xuICBpZiAoc3VjY2Vzcykge1xuICAgIGNvbnN0IGxpa2VzRGF0YSA9IChhd2FpdCBnZXRMaWtlcygpKS5kYXRhIHx8IFtdO1xuICAgIG1vdmllV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICBudW1iZXIudGV4dENvbnRlbnQgPSBgU2hvdyAoJHttb3ZpZURhdGEubGVuZ3RofSlgO1xuICAgIG1vdmllRGF0YS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgICAgY29uc3QgbGlrZSA9IGxpa2VzRGF0YS5maW5kKChsaWtlKSA9PiBwYXJzZUludChsaWtlLml0ZW1faWQsIDM2KSA9PT0gbW92aWUuaWQpO1xuICAgICAgY29uc3QgbGlrZXMgPSBsaWtlID8gbGlrZS5saWtlcyA6IDA7XG4gICAgICBjb25zdCBtb3ZpZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1vdmllSXRlbS5jbGFzc0xpc3QuYWRkKCdtb3ZpZXNJdGVtJyk7XG4gICAgICBtb3ZpZUl0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiBzcmM9XCIke21vdmllLmltYWdlICYmIG1vdmllLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke21vdmllLm5hbWV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1uYW1lXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7bW92aWUubmFtZX08L3A+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsbmkgbG5pLWhlYXJ0XCIgaWQ9XCIke21vdmllLmlkfVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwibGlrZXMtY291bnRcIj4ke2xpa2VzfSBMaWtlczwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnQtYnRuXCI+Q29tbWVudHM8L2J1dHRvbj5gO1xuICAgICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKG1vdmllSXRlbSk7XG4gICAgICBtb3ZpZUl0ZW0ucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICBwb3B1cFdpbihtb3ZpZSk7XG4gICAgICB9KTtcbiAgICAgIG1vdmllSXRlbS5xdWVyeVNlbGVjdG9yKCcubG5pLWhlYXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3VjY2VzcyB9ID0gYXdhaXQgcG9zdExpa2VzKG1vdmllLmlkKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgICAgICAgY29uc3QgbmV3TGlrZXMgPSBkYXRhLmZpbmQoKG5ld2xpa2VzKSA9PiBuZXdsaWtlcy5pdGVtX2lkID09PSBtb3ZpZS5pZCk7XG4gICAgICAgICAgY29uc3QgbGlrZXNDb3VudCA9IG1vdmllSXRlbS5xdWVyeVNlbGVjdG9yKCcubGlrZXMtY291bnQnKTtcbiAgICAgICAgICBsaWtlc0NvdW50LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24nKTtcbiAgICAgICAgICBsaWtlc0NvdW50LnRleHRDb250ZW50ID0gYCR7bmV3TGlrZXMubGlrZXN9IExpa2VzYDtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxpa2VzQ291bnQuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbicpLCAxMDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNb3ZpZXM7XG4iLCJpbXBvcnQgYWRkQ29tbWVudCBmcm9tICcuL2FkZENvbW1lbnQuanMnO1xuaW1wb3J0IGRpc3BsYXlDb21tZW50cyBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5pbXBvcnQgZ2V0Y29tbWVudHMgZnJvbSAnLi9yZXRyaWV2ZUNvbW1lbnRzLmpzJztcblxuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcblxuY29uc3QgcG9wdXBXaW4gPSBhc3luYyAoc2hvdykgPT4ge1xuICBjb25zdCBjbG9zZVNpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNsb3NlU2lnbi5pbm5lckhUTUwgPSAnWCc7XG4gIGNsb3NlU2lnbi5jbGFzc0xpc3QgPSAnY2xvc2UtY29tbWVudCc7XG4gIGNvbW1lbnRQb3B1cC5hcHBlbmRDaGlsZChjbG9zZVNpZ24pO1xuICBjb21tZW50UG9wdXAuaW5uZXJIVE1MICs9IGBcbiAgICA8aW1nIHNyYz1cIiR7c2hvdy5pbWFnZS5tZWRpdW19XCIgY2xhc3M9XCJwb3B1cC1pbWdcIj5cbiAgICA8aDMgY2xhc3M9XCJzaG93LW5hbWVcIj4ke3Nob3cubmFtZX08L2gzPlxuICAgIDx0YWJsZT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxiPkxhbmd1YWdlOjwvYj4gJHtzaG93Lmxhbmd1YWdlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGI+VHlwZTo8L2I+ICR7c2hvdy50eXBlfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDxQIGNsYXNzPVwic3VtbWFyeVwiPiR7c2hvdy5zdW1tYXJ5fTwvcD5cbiAgICA8aDMgY2xhc3M9XCJjb21tZW50LWhvbGRlclwiPlxuICAgICAgQ29tbWVudHMgPHNwYW4gY2xhc3M9XCJjb21tZW50LWNvdW50XCI+KDApPC9zcGFuPlxuICAgIDwvaDM+XG4gICAgPHVsIGNsYXNzPVwiY29tbWVudHMtbGlzdFwiPlxuXG4gICAgPC91bD5cbiAgICA8aDIgY2xhc3M9XCJmb3JtLXRpdGxlXCI+QWRkIGEgY29tbWVudDwvaDI+XG4gICAgPGZvcm0gY2xhc3M9XCJjb21tZW50LWZvcm1cIj5cbiAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICA8dGV4dGFyZWEgaWQ9XCJ0ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIG5hbWU9XCJjb21tZW50XCIgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMVwiPjwvdGV4dGFyZWE+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+YDtcblxuICBjb25zdCBnZXRjb21tZW50c0RhdGEgPSBhd2FpdCBnZXRjb21tZW50cyhzaG93LmlkKTtcbiAgY29uc3QgdXNlcmNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtbGlzdCcpO1xuICBkaXNwbGF5Q29tbWVudHMoZ2V0Y29tbWVudHNEYXRhLCB1c2VyY29tbWVudCk7XG5cbiAgY29uc3QgY29tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dGFyZWEnKTtcbiAgYWRkQ29tbWVudChjb21CdG4sIG5hbWUsIHRleHQsIHNob3cuaWQpO1xufTtcblxuY29tbWVudFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLmNsb3NlLWNvbW1lbnQnKSkge1xuICAgIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbW1lbnRQb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvcHVwV2luOyIsImNvbnN0IGdldGNvbW1lbnRzID0gYXN5bmMgKHNob3dJZCkgPT4ge1xuICBzaG93SWQgPSBzaG93SWQudG9TdHJpbmcoKTtcbiAgY29uc3QgY29tbWVudCA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9EblRyakpvTlFEOVYxa1haQUdjcy9jb21tZW50cz9pdGVtX2lkPSR7c2hvd0lkfWApO1xuICBjb25zdCByZXN1bHQgPSBjb21tZW50Lmpzb24oKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRjb21tZW50czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=