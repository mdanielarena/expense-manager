/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/roles.js":
/*!*************************************!*\
  !*** ./resources/js/pages/roles.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.updateRole = function (id, name, desc) {
  var html = '';
  html += "\n        <form>\n            <input type=\"hidden\" name=\"_token\" value=\"".concat(token, "\">\n            <input type=\"hidden\" id=\"id\" value=\"").concat(id, "\">\n            <div class=\"form-group\">\n                <label for=\"name\">Display Name:</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" value=\"").concat(name, "\" required>\n            </div>\n            <div class=\"form-group\">  \n                <label for=\"name\">Description:</label>\n                <input type=\"text\" class=\"form-control\" id=\"description\" value=\"").concat(desc, "\" required>\n            </div>            \n        </form>");
  var footer = '';
  footer += "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" onClick=\"roleDelete()\">Delete</button>";
  footer += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" onClick=\"roleClose()\">Cancel</button>";
  footer += "<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" onClick=\"roleUpdate()\">Update</button>";
  $("#modalHeader").html("<h4 class=\"modal-title\">UPDATE ROLE</h4>");
  $("#modalBody").html(html);
  $("#modalFooter").html(footer);
  $("#globalModal").modal('show');
};

window.roleClose = function () {
  return $("#globalModal").modal('hide');
};

window.roleUpdate = function () {
  var myurl = "".concat(url, "/role-update");
  var postData = {
    _token: token,
    id: $("#id").val(),
    name: $("#name").val(),
    description: $("#description").val()
  };
  $.post(myurl, postData, function (res) {
    var data = JSON.parse(Base64.decode(res));
    if (data.succ) window.location = "".concat(url, "/roles");
  }, 'json');
};

window.roleDelete = function () {
  var myurl = "".concat(url, "/role-delete");
  var postData = {
    _token: token,
    id: $("#id").val()
  };
  $.post(myurl, postData, function (res) {
    var data = JSON.parse(Base64.decode(res));
    if (data.succ) window.location = "".concat(url, "/roles");
  }, 'json');
};

window.roleAdd = function () {
  var html = '';
  html += "\n        <form>\n            <input type=\"hidden\" name=\"_token\" value=\"".concat(token, "\">\n            <div class=\"form-group\">\n                <label for=\"name\">Display Name:</label>\n                <input type=\"text\" class=\"form-control\" id=\"name\" required>\n            </div>\n            <div class=\"form-group\">  \n                <label for=\"name\">Description:</label>\n                <input type=\"text\" class=\"form-control\" id=\"description\" required>\n            </div>            \n        </form>");
  var footer = '';
  footer += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" onClick=\"roleClose()\">Cancel</button>";
  footer += "<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" onClick=\"roleSave()\">Save</button>";
  $("#modalHeader").html("<h4 class=\"modal-title\">ADD ROLE</h4>");
  $("#modalBody").html(html);
  $("#modalFooter").html(footer);
  $("#globalModal").modal('show');
};

window.roleSave = function () {
  var myurl = "".concat(url, "/role-add");
  var postData = {
    _token: token,
    name: $("#name").val(),
    description: $("#description").val()
  };
  $.post(myurl, postData, function (res) {
    var data = JSON.parse(Base64.decode(res));
    if (data.succ) window.location = "".concat(url, "/roles");
  }, 'json');
};

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./resources/js/pages/roles.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\new_laragon\laragon\www\expense_manager\resources\js\pages\roles.js */"./resources/js/pages/roles.js");


/***/ })

/******/ });