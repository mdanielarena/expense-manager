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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/users.js":
/*!*************************************!*\
  !*** ./resources/js/pages/users.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.updateUser = function (id, username, email, data) {
  var roles = JSON.parse(Base64.decode(data));
  var html = '';
  html += "\n        <form>\n            <input type=\"hidden\" name=\"_token\" value=\"".concat(token, "\">\n            <input type=\"hidden\" id=\"id\" value=\"").concat(id, "\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name:</label>\n                <input type=\"text\" class=\"form-control\" id=\"username\" value=\"").concat(username, "\" required>\n            </div>\n            <div class=\"form-group\">  \n                <label for=\"name\">Email Address:</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" value=\"").concat(email, "\" required>\n            </div>\n            ");
  html += "\n            <div class=\"form-group\">\n                <label for=\"sel1\">Select Role:</label>\n                <select class=\"form-control\" id=\"role\">";

  for (var x = 0; x < roles.length; x++) {
    html += "<option value=\"".concat(roles[x]['id'], "\">").concat(roles[x]['name'], "</option>");
  }

  html += "\n                </select>\n           </div>\n        </form>";
  var footer = '';
  footer += "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" onClick=\"userDelete()\">Delete</button>";
  footer += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" onClick=\"userClose()\">Cancel</button>";
  footer += "<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" onClick=\"userUpdate()\">Update</button>";
  $("#modalHeader").html("<h4 class=\"modal-title\">UPDATE USER</h4>");
  $("#modalBody").html(html);
  $("#modalFooter").html(footer);
  $("#globalModal").modal('show');
};

window.userClose = function () {
  return $("#globalModal").modal('hide');
};

window.userUpdate = function () {
  var myurl = "".concat(url, "/user-update");
  var postData = {
    _token: token,
    id: $("#id").val(),
    username: $("#username").val(),
    email: $("#email").val(),
    role: $("#role").val()
  };
  $.post(myurl, postData, function (res) {
    var data = JSON.parse(Base64.decode(res));
    if (data.succ) window.location = "".concat(url, "/users");
  }, 'json');
};

window.userDelete = function () {
  var myurl = "".concat(url, "/user-delete");
  var postData = {
    _token: token,
    id: $("#id").val()
  };
  $.post(myurl, postData, function (res) {
    var data = JSON.parse(Base64.decode(res));
    if (data.succ) window.location = "".concat(url, "/users");
  }, 'json');
};

window.userAdd = function (data) {
  var roles = JSON.parse(Base64.decode(data));
  var html = '';
  html += "\n        <form>\n            <input type=\"hidden\" name=\"_token\" value=\"".concat(token, "\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name:</label>\n                <input type=\"text\" class=\"form-control\" id=\"username\" required>\n            </div>\n            <div class=\"form-group\">  \n                <label for=\"name\">Email Address:</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" required>\n            </div>\n            <div class=\"form-group\">  \n                <label for=\"name\">Password:</label>\n                <input type=\"password\" class=\"form-control\" id=\"password\" required>\n            </div>");
  html += "\n            <div class=\"form-group\">\n                <label for=\"sel1\">Select Role:</label>\n                <select class=\"form-control\" id=\"role\">";

  for (var x = 0; x < roles.length; x++) {
    html += "<option value=\"".concat(roles[x]['id'], "\">").concat(roles[x]['name'], "</option>");
  }

  html += "\n                </select>\n           </div>\n        </form>";
  var footer = '';
  footer += "<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" onClick=\"userClose()\">Cancel</button>";
  footer += "<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" onClick=\"userSave()\">Save</button>";
  $("#modalHeader").html("<h4 class=\"modal-title\">ADD USER</h4>");
  $("#modalBody").html(html);
  $("#modalFooter").html(footer);
  $("#globalModal").modal('show');
};

window.userSave = function () {
  var myurl = "".concat(url, "/user-add");
  var postData = {
    _token: token,
    username: $("#username").val(),
    email: $("#email").val(),
    role: $("#role").val(),
    password: $("#password").val()
  };
  $.post(myurl, postData, function (res) {
    var data = JSON.parse(Base64.decode(res));
    if (data.succ) window.location = "".concat(url, "/users");
  }, 'json');
};

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/pages/users.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\new_laragon\laragon\www\expense_manager\resources\js\pages\users.js */"./resources/js/pages/users.js");


/***/ })

/******/ });