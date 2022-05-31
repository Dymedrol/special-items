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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _source_less_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source/less/index.less */ \"./source/less/index.less\");\n/* harmony import */ var _source_less_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_source_less_index_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _source_js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source/js/script.js */ \"./source/js/script.js\");\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./source/less/index.less":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/less-loader/dist/cjs.js!./source/less/index.less ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./source/less/index.less?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./source/js/cart.js":
/*!***************************!*\
  !*** ./source/js/cart.js ***!
  \***************************/
/*! exports provided: initCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCart\", function() { return initCart; });\nconst initCart = () => {\n  if (!$('cart-items').length) {\n    return;\n  }\n\n  var form = $('#cart');\n  form.change(function (event) {\n    var target = $(event.target);\n    var item = target.closest('.special-bag__item');\n    var line = item.index() + 1;\n\n    var updateProperties = function () {\n      var uploadedPic = item.find('input[name=\"attributes[upload]\"]').val();\n      var noteText = item.find('textarea[name=\"attributes[notes]\"]').val();\n      jQuery.post('/cart/change.js', {\n        'line': line,\n        'properties': {\n          'upload': uploadedPic,\n          'note': noteText\n        }\n      });\n    };\n\n    var checkUpload = function () {\n      var targertPicLoadingStatis = item.find('.filepond--file-status-main').text().toLowerCase();\n\n      if (targertPicLoadingStatis == 'upload complete') {\n        clearInterval(timer);\n        return true;\n      }\n    };\n\n    if (target.attr('name') == 'attributes[notes]') {\n      updateProperties();\n    }\n\n    if (target.attr('type') == 'file') {\n      var timer = setInterval(function () {\n        if (checkUpload()) {\n          updateProperties();\n        }\n      }, 500);\n    }\n  });\n};\n\n//# sourceURL=webpack:///./source/js/cart.js?");

/***/ }),

/***/ "./source/js/checkUpload.js":
/*!**********************************!*\
  !*** ./source/js/checkUpload.js ***!
  \**********************************/
/*! exports provided: initCheckUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCheckUpload\", function() { return initCheckUpload; });\nconst initCheckUpload = () => {\n  var uploadButton = $('#checkout');\n\n  var checkUpload = function () {\n    var trueCount = 0;\n    var statusBlocks = $('.filepond--file-status-main');\n    var itemsLength = $('.special-bag__item').length;\n\n    if (statusBlocks.length) {\n      statusBlocks.each(function (i) {\n        var status = $(this).text().toLowerCase();\n\n        if (status == 'upload complete') {\n          trueCount++;\n        }\n      });\n\n      if (trueCount == itemsLength) {\n        clearInterval(timer);\n        uploadButton.text('checkout');\n      }\n    }\n  };\n\n  if ($('#main-cart-items').length) {\n    var timer = setInterval(function () {\n      checkUpload();\n    }, 500);\n  }\n};\n\n//# sourceURL=webpack:///./source/js/checkUpload.js?");

/***/ }),

/***/ "./source/js/collection-page.js":
/*!**************************************!*\
  !*** ./source/js/collection-page.js ***!
  \**************************************/
/*! exports provided: initCollectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCollectionPage\", function() { return initCollectionPage; });\nconst initCollectionPage = () => {\n  var productWall = $('#special-product-wall');\n  var menu = $('.special-product-controls__menu');\n  var productWallItems = productWall.find('.special-product-wall__item');\n  var cartArray = [];\n\n  var changeProductInWishlist = function (productPath, item) {\n    wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n\n    if (!wishlistArray) {\n      wishlistArray = [];\n    }\n\n    var updateWishlist = function (wishlistArray, item) {\n      localStorage.setItem(\"wishlist\", JSON.stringify(wishlistArray));\n      $('.js-header-wishlist').html(wishlistArray.length);\n      item.toggleClass('special-product-wall__item-buttons-wishlist__in-wishlist');\n    };\n\n    if (jQuery.inArray(productPath, wishlistArray) >= 0) {\n      var wishlistArray = wishlistArray.filter(function (elem) {\n        return elem != productPath;\n      });\n      updateWishlist(wishlistArray, item);\n    } else {\n      wishlistArray.push(productPath);\n      updateWishlist(wishlistArray, item);\n    }\n  };\n\n  if (!productWall.length) {\n    return;\n  }\n\n  fetch(window.Shopify.routes.root + 'cart.js', {\n    method: 'get',\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(response => response.json()).then(result => {\n    var items = result.items;\n\n    for (var i = 0; i < items.length; i++) {\n      cartArray.push(items[i].id);\n    }\n\n    productWallItems.each(function () {\n      var item = $(this);\n      var itemID = item.attr('data-product-id');\n      itemID = parseInt(itemID);\n\n      if (jQuery.inArray(itemID, cartArray) >= 0) {\n        item.find('.bag-empty-item').addClass('hidden');\n        item.find('.bag-full-item').removeClass('hidden');\n      }\n    });\n  }).catch(error => {\n    console.error('Error:', error);\n  });\n  productWallItems.each(function () {\n    var item = $(this);\n    var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n\n    if (!wishlistArray) {\n      wishlistArray = [];\n    }\n\n    var url = item.attr('href');\n\n    if (jQuery.inArray(url, wishlistArray) >= 0) {\n      item.addClass('special-product-wall__item-buttons-wishlist__in-wishlist');\n    }\n  });\n  productWall.click(function (e) {\n    var target = $(e.target);\n\n    if (target.closest('.js-product-add-to-bag').length) {\n      e.preventDefault();\n      var item = target.closest('.special-product-wall__item');\n      var url = item.attr('href');\n      var id = item.attr('data-product-id');\n      id = parseInt(id, 10);\n      let formData = {\n        'items': [{\n          'id': id,\n          'quantity': 1\n        }]\n      };\n      fetch(window.Shopify.routes.root + 'cart/add.js', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      }).then(response => {\n        if (response.status === 200) {\n          var count = $('#header-cart-count').text();\n          count = parseInt(count, 10) + 1;\n          $('#header-cart-count').text(count);\n\n          if (count > 0) {\n            $('#header-cart-count-mobile').text(': ' + count);\n          } else {\n            $('#header-cart-count-mobile').text('');\n          }\n\n          $('.bag-full').removeClass('hidden');\n          $('.bag-empty').addClass('hidden');\n          item.find('.bag-empty-item').addClass('hidden');\n          item.find('.bag-full-item').removeClass('hidden');\n        } // console.log(response)\n\n\n        return response.json();\n      }).catch(error => {\n        console.error('Error:', error);\n      });\n    }\n\n    if (target.closest('.js-product-add-to-wishlist').length) {\n      e.preventDefault();\n      var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n\n      if (!wishlistArray) {\n        wishlistArray = [];\n      }\n\n      var item = target.closest('.special-product-wall__item');\n      var url = item.attr('href');\n      changeProductInWishlist(url, item);\n    }\n  });\n\n  var isEmpty = function () {\n    var total = productWall.find('.special-product-wall__item').length;\n\n    if (!total) {\n      var emptyHtml = '<div class=\"special-product-wall__item special-product-wall__item_empty\">';\n      emptyHtml += '<p>no items</p>';\n      emptyHtml += \"</div>\";\n      productWall.find('.special-product-wall__item').remove();\n      productWall.prepend(emptyHtml);\n    }\n  };\n\n  var loadingBlock = productWall.find('.special-product-wall__loading');\n  var filters = '';\n  var selectedCategorie = '';\n  var selectedColors = '';\n  var sectionId = productWall.attr('data-section-id');\n  var isLoading = false;\n  var isLast = false;\n  var page = 2;\n  var menuCategories = menu.find('.special-product-controls__menu-categories');\n  var menuCategoriesItems = menuCategories.find('.special-product-controls__menu-categories-item');\n  var menuColors = menu.find('.special-product-controls__menu-colors');\n  var menuColorsItems = menuCategories.find('.special-product-controls__menu-colors-item');\n  var applyButton = $('.special-product-controls__menu-apply');\n  var categoriesFilterSelected = 0;\n  var colorFilterSelected = 0;\n  var selectedCollection = window.location.pathname;\n  selectedCollection = selectedCollection.replace(\"/collections/\", \"\");\n\n  var changeButtonText = function () {\n    var count = categoriesFilterSelected + colorFilterSelected;\n    var text = '';\n\n    switch (count) {\n      case 0:\n        text = 'Apply No Filters';\n        break;\n\n      case 1:\n        text = 'Apply Filter';\n        break;\n\n      case 2:\n        text = 'Apply 2 Filters';\n        break;\n    }\n\n    applyButton.text(text);\n  };\n\n  $(window).scroll(function () {\n    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 200) {\n      if (isLoading || isLast) {\n        return;\n      }\n\n      isLoading = true;\n      loadingBlock.removeClass('hidden');\n\n      if (selectedColors) {\n        selectedColors = '/' + selectedColors + '/';\n      }\n\n      var url = '/collections/' + selectedCollection + '/';\n      fetch(url + selectedColors + \"?sections=\" + sectionId + '&page=' + page).then(response => response.json()).then(responce => {\n        page++;\n        var html = responce[Object.keys(responce)[0]];\n        var lastItem = productWall.find('.special-product-wall__item').last();\n        html = $.parseHTML(html);\n        html = $(html);\n        var items = $(html).find('.special-product-wall__item');\n\n        if (!items.length) {\n          isLast = true;\n        }\n\n        lastItem.after(items);\n        isLoading = false;\n        var productWallItems = productWall.find('.special-product-wall__item');\n        productWallItems.each(function () {\n          var item = $(this);\n          var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n\n          if (!wishlistArray) {\n            wishlistArray = [];\n          }\n\n          var url = item.attr('href');\n\n          if (jQuery.inArray(url, wishlistArray) >= 0) {\n            item.addClass('special-product-wall__item-buttons-wishlist__in-wishlist');\n          }\n\n          var itemID = item.attr('data-product-id');\n          itemID = parseInt(itemID);\n\n          if (jQuery.inArray(itemID, cartArray) >= 0) {\n            item.find('.bag-empty-item').addClass('hidden');\n            item.find('.bag-full-item').removeClass('hidden');\n          }\n        });\n        loadingBlock.addClass('hidden');\n        var total = productWall.find('.special-product-wall__item').length;\n        isEmpty();\n      }).catch(e => {\n        console.error(e);\n      });\n    }\n  });\n  menuCategories.click(function (e) {\n    var selectedItem = $(e.target);\n\n    var checkActiveItems = function () {\n      categoriesFilterSelected = 0;\n\n      if (menuCategories.find('.special-product-controls__menu-categories-item_active').length) {\n        categoriesFilterSelected = 1;\n      }\n\n      changeButtonText();\n    };\n\n    if (!selectedItem.hasClass('special-product-controls__menu-categories-item')) {\n      return;\n    }\n\n    if (selectedItem.hasClass('special-product-controls__menu-categories-item_active')) {\n      selectedCategorie = '';\n      selectedItem.removeClass('special-product-controls__menu-categories-item_active');\n      checkActiveItems();\n      return;\n    }\n\n    selectedCategorie = selectedItem.attr('data-collection-url');\n    selectedCategorie = selectedCategorie.replace('/collections/', '');\n    menuCategoriesItems.removeClass('special-product-controls__menu-categories-item_active');\n    selectedItem.addClass('special-product-controls__menu-categories-item_active');\n    checkActiveItems();\n  });\n  menuColors.click(function (e) {\n    var selectedItem = $(e.target);\n\n    if (!selectedItem.hasClass('special-product-controls__menu-colors-item')) {\n      return;\n    }\n\n    if (selectedItem.hasClass('special-product-controls__menu-colors-item-color_active')) {\n      selectedItem.removeClass('special-product-controls__menu-colors-item-color_active');\n    } else {\n      selectedItem.addClass('special-product-controls__menu-colors-item-color_active');\n    }\n\n    var selectedColorItems = menuColors.find('.special-product-controls__menu-colors-item-color_active');\n    selectedColors = '';\n    selectedColorItems.each(function (index) {\n      if (index == 0) {\n        selectedColors = selectedColors + $(this).attr('data-color');\n      } else {\n        selectedColors = selectedColors + '+' + $(this).attr('data-color');\n      }\n    });\n    colorFilterSelected = 0;\n\n    if (menuColors.find('.special-product-controls__menu-colors-item-color_active').length) {\n      colorFilterSelected = 1;\n    }\n\n    changeButtonText();\n  });\n  applyButton.click(function () {\n    menu.toggle('slide');\n    var path = selectedCategorie;\n    selectedCollection = selectedCategorie;\n\n    if (!selectedCollection) {\n      selectedCollection = 'all-product';\n    }\n\n    if (!selectedCategorie) {\n      path = window.location.pathname;\n    }\n\n    if (selectedColors) {\n      selectedColors = '/' + selectedColors + '/';\n    }\n\n    page = 1;\n    var url = path + selectedColors + \"?sections=\" + sectionId + '&page=' + page + '/';\n    fetch(url).then(response => response.json()).then(responce => {\n      page = 2;\n      var html = responce[Object.keys(responce)[0]];\n      html = $.parseHTML(html);\n      html = $(html);\n      var items = $(html).find('.special-product-wall__item');\n\n      if (!items.length) {\n        isLast = true;\n      }\n\n      productWall.find('.special-product-wall__item').remove();\n      productWall.prepend(items);\n      var productWallItems = productWall.find('.special-product-wall__item');\n      productWallItems.each(function () {\n        var item = $(this);\n        var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n\n        if (!wishlistArray) {\n          wishlistArray = [];\n        }\n\n        var url = item.attr('href');\n\n        if (jQuery.inArray(url, wishlistArray) >= 0) {\n          item.addClass('special-product-wall__item-buttons-wishlist__in-wishlist');\n        }\n      });\n      var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n\n      if (!wishlistArray) {\n        wishlistArray = [];\n      }\n\n      if (jQuery.inArray(url, wishlistArray) >= 0) {\n        item.addClass('special-product-wall__item-buttons-wishlist__in-wishlist');\n      }\n\n      isLoading = false;\n      isLast = false;\n      loadingBlock.addClass('hidden');\n      isEmpty();\n    }).catch(e => {\n      console.error(e);\n    });\n  });\n};\n\n//# sourceURL=webpack:///./source/js/collection-page.js?");

/***/ }),

/***/ "./source/js/mobileMenuAccordion.js":
/*!******************************************!*\
  !*** ./source/js/mobileMenuAccordion.js ***!
  \******************************************/
/*! exports provided: initMobileMenuAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMobileMenuAccordion\", function() { return initMobileMenuAccordion; });\nconst initMobileMenuAccordion = () => {\n  var accordionTop = $('.js-mobilemenu-accordion');\n\n  if (!accordionTop.length) {\n    return;\n  }\n\n  accordionTop.click(function () {\n    var top = $(this);\n    var bottom = $(this).next('.special-menu__mobile-accordion-inner');\n    bottom.toggleClass('hidden');\n    top.toggleClass('open');\n  });\n};\n\n//# sourceURL=webpack:///./source/js/mobileMenuAccordion.js?");

/***/ }),

/***/ "./source/js/productPage.js":
/*!**********************************!*\
  !*** ./source/js/productPage.js ***!
  \**********************************/
/*! exports provided: initProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initProductPage\", function() { return initProductPage; });\nconst initProductPage = () => {\n  var productPage = $('.special-pdp');\n\n  if (!productPage.length) {\n    return;\n  }\n\n  var productId = productPage.attr('data-product-id');\n  const submitButton = productPage.find('[type=\"submit\"]'); // console.log(productId);\n\n  fetch(window.Shopify.routes.root + 'cart.js', {\n    method: 'get',\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(response => response.json()).then(result => {\n    // console.log(result.items)\n    var items = result.items;\n    var isInCart = false;\n\n    for (var i = 0; i < items.length; i++) {\n      if (items[i].product_id == productId) {\n        isInCart = true;\n        break;\n      }\n    }\n\n    if (isInCart) {\n      const goToCartButton = $('.special-pdp-product__info-controls-go-to-bag');\n      goToCartButton.removeClass('hidden');\n      $('.loading-overlay__spinner').addClass('hidden');\n      submitButton.remove();\n    } else {\n      $('.loading-overlay__spinner').addClass('hidden');\n      submitButton.removeClass('loading');\n    }\n  }).catch(error => {\n    console.error('Error:', error);\n  });\n};\n\n//# sourceURL=webpack:///./source/js/productPage.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./source/js/wishlist.js\");\n/* harmony import */ var _checkUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkUpload */ \"./source/js/checkUpload.js\");\n/* harmony import */ var _productPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productPage */ \"./source/js/productPage.js\");\n/* harmony import */ var _collection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection-page */ \"./source/js/collection-page.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ \"./source/js/cart.js\");\n/* harmony import */ var _mobileMenuAccordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobileMenuAccordion */ \"./source/js/mobileMenuAccordion.js\");\n\n\n\n\n\n\n$(document).ready(function () {\n  Object(_wishlist__WEBPACK_IMPORTED_MODULE_0__[\"initWishList\"])();\n  Object(_checkUpload__WEBPACK_IMPORTED_MODULE_1__[\"initCheckUpload\"])();\n  Object(_productPage__WEBPACK_IMPORTED_MODULE_2__[\"initProductPage\"])();\n  Object(_cart__WEBPACK_IMPORTED_MODULE_4__[\"initCart\"])();\n  Object(_collection_page__WEBPACK_IMPORTED_MODULE_3__[\"initCollectionPage\"])();\n  Object(_mobileMenuAccordion__WEBPACK_IMPORTED_MODULE_5__[\"initMobileMenuAccordion\"])();\n  $(\".special-categories-mobile\").owlCarousel({\n    margin: 1,\n    loop: true,\n    autoWidth: true\n  });\n  $('.special-list-mobile').owlCarousel({\n    margin: 1,\n    loop: true,\n    autoWidth: true\n  });\n  $('.special-pdp-slider').slick({\n    slidesToShow: 1,\n    infinite: true,\n    swipeToSlide: true\n  });\n  var menu = $('.special-product-controls__menu');\n  $('#plus').click(function () {\n    $('.special-menu__mobile').show();\n  });\n  $('.special-menu__mobile-close').click(function () {\n    $('.special-menu__mobile').hide();\n  });\n  $('.special-product-controls__filters').click(function () {\n    menu.animate({\n      width: 'toggle'\n    }, 250);\n  });\n  $('.special-product-controls__menu-close').click(function () {\n    menu.animate({\n      width: 'toggle'\n    }, 250);\n  });\n  var bagInner = $('.special-bag-inner');\n\n  if (bagInner.length) {\n    var minHeight = $('#MainContent').height();\n    bagInner.css('min-height', minHeight);\n    $(window).resize(function () {\n      minHeight = $('#MainContent').height();\n      bagInner.css('min-height', minHeight);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ }),

/***/ "./source/js/wishlist.js":
/*!*******************************!*\
  !*** ./source/js/wishlist.js ***!
  \*******************************/
/*! exports provided: initWishList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initWishList\", function() { return initWishList; });\nconst initWishList = () => {\n  var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n  var wishlistBlock = $('#wishlist');\n\n  if (!wishlistArray) {\n    wishlistArray = [];\n  }\n\n  for (var i = 0; i < wishlistArray.length; i++) {\n    var product = wishlistArray[i];\n    jQuery.getJSON(wishlistArray[i] + '.js', function (product) {}).fail(function (error) {\n      if (error.status == 404) {\n        var array = wishlistArray.filter(function (elem) {\n          return elem != product;\n        });\n        localStorage.setItem(\"wishlist\", JSON.stringify(array));\n        $('.js-header-wishlist').html(array.length);\n\n        if (wishlistArray.length) {\n          var text = ': ' + wishlistArray.length;\n          $('.js-header-wishlist-mobile').html(text);\n        } else {\n          $('.js-header-wishlist-mobile').html('');\n        }\n      }\n    });\n  } // console.log(wishlistArray);\n\n\n  $('.js-header-wishlist').html(wishlistArray.length);\n\n  if (wishlistArray.length) {\n    var text = ': ' + wishlistArray.length;\n    $('.js-header-wishlist-mobile').html(text);\n  } else {\n    $('.js-header-wishlist-mobile').html('');\n  }\n\n  var addToWishlist = $('#add-to-wishlist');\n\n  var changeProductInWishlist = function (productPath) {\n    wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n\n    if (!wishlistArray) {\n      wishlistArray = [];\n    }\n\n    var updateWishlist = function (wishlistArray) {\n      localStorage.setItem(\"wishlist\", JSON.stringify(wishlistArray));\n      $('.js-header-wishlist').html(wishlistArray.length);\n\n      if (wishlistArray.length) {\n        var text = ': ' + wishlistArray.length;\n        $('.js-header-wishlist-mobile').html(text);\n      } else {\n        $('.js-header-wishlist-mobile').html('');\n      }\n\n      addToWishlist.toggleClass('special-pdp-product__info-controls-add-to-fav_added');\n    };\n\n    if (jQuery.inArray(productPath, wishlistArray) >= 0) {\n      var wishlistArray = wishlistArray.filter(function (elem) {\n        return elem != productPath;\n      });\n      updateWishlist(wishlistArray);\n    } else {\n      wishlistArray.push(productPath);\n      updateWishlist(wishlistArray);\n    }\n  };\n\n  if (addToWishlist.length) {\n    var productPath = window.location.pathname;\n\n    if (jQuery.inArray(productPath, wishlistArray) >= 0) {\n      addToWishlist.addClass('special-pdp-product__info-controls-add-to-fav_added');\n    }\n\n    addToWishlist.click(function () {\n      changeProductInWishlist(productPath);\n    });\n  }\n\n  if (wishlistBlock.length) {\n    var template = $('#wishlist-template');\n    var wishlistWrapper = $('#wishlist-wrapper');\n    var cartList;\n\n    var renderWishlistItems = function () {\n      for (var i = 0; i < wishlistArray.length; i++) {\n        jQuery.getJSON(wishlistArray[i] + '.js', function (product) {\n          var item = template.html();\n          var isInCart = false;\n          item = $(item);\n          item.attr('data-url', product.url);\n          item.find('.wishlist-link').attr('href', product.url);\n          item.attr('data-id', product.variants[0].id);\n          item.find('.item-designer').html(product.vendor);\n          item.find('.item-title').html(product.title);\n          var price = product.price.toString();\n          var xx = price.length - 2;\n          price = price.substring(0, xx) + \".\" + price.substring(xx, price.length);\n          item.find('.item-price').html('$' + price);\n          item.find('.special-bag__item-col1 img').attr('src', product.images[0] + '&width=248');\n          item.appendTo(wishlistWrapper);\n          item.find('.special-bag__item-close').click(function () {\n            var wish = item.attr('data-url');\n            var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n            var wishlistArray = wishlistArray.filter(function (elem) {\n              return elem != wish;\n            });\n            localStorage.setItem(\"wishlist\", JSON.stringify(wishlistArray));\n            $('.js-header-wishlist').html(wishlistArray.length);\n\n            if (wishlistArray.length) {\n              var text = ': ' + wishlistArray.length;\n              $('.js-header-wishlist-mobile').html(text);\n            } else {\n              $('.js-header-wishlist-mobile').html('');\n            }\n\n            $(this).closest('.special-bag__item').remove();\n          }); // console.log(cartList);\n          // console.log(product);\n\n          for (var i = 0; i < cartList.length; i++) {\n            if (cartList[i].id == product.variants[0].id) {\n              isInCart = true;\n              break;\n            }\n          }\n\n          if (isInCart) {\n            item.find('.wishlist-button').hide();\n            item.find('.wishlist-button').next().show();\n          }\n\n          item.find('.wishlist-button').click(function () {\n            var id = $(this).closest('.special-bag__item').attr('data-id');\n            id = parseInt(id, 10);\n            let formData = {\n              'items': [{\n                'id': id,\n                'quantity': 1\n              }]\n            };\n            fetch(window.Shopify.routes.root + 'cart/add.js', {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify(formData)\n            }).then(response => {\n              if (response.status === 200) {\n                $(this).hide();\n                $(this).next().show(); // var wish = $(this).closest('.special-bag__item').attr('data-url');\n                // var wishlistArray = JSON.parse(localStorage.getItem(\"wishlist\"));\n                // var wishlistArray = wishlistArray.filter(function(elem){\n                //    return elem != wish;\n                // });\n                // localStorage.setItem(\"wishlist\", JSON.stringify(wishlistArray));\n                // $('.js-header-wishlist').html(wishlistArray.length)\n                // $(this).closest('.special-bag__item').remove();\n\n                var count = $('#header-cart-count').text();\n                count = parseInt(count, 10) + 1;\n                $('#header-cart-count').text(count);\n\n                if (count > 0) {\n                  $('#header-cart-count-mobile').text(': ' + count);\n                } else {\n                  $('#header-cart-count-mobile').text('');\n                }\n\n                $('.bag-full').removeClass('hidden');\n                $('.bag-empty').addClass('hidden');\n              }\n\n              if (response.status === 422) {\n                $(this).html('SOLD OUT');\n                $(this).css('background', '#000');\n                $(this).attr('disabled', true);\n              } // console.log(response)\n\n\n              return response.json();\n            }).catch(error => {\n              console.error('Error:', error);\n            });\n          }); // console.log(product)\n        });\n      }\n    };\n\n    fetch(window.Shopify.routes.root + 'cart.js', {\n      method: 'get',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(response => response.json()).then(result => {\n      cartList = result.items;\n      renderWishlistItems();\n    }).catch(error => {\n      console.error('Error:', error);\n    });\n\n    if (!wishlistArray.length) {\n      $('#empty').show();\n    }\n  }\n};\n\n//# sourceURL=webpack:///./source/js/wishlist.js?");

/***/ }),

/***/ "./source/less/index.less":
/*!********************************!*\
  !*** ./source/less/index.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./source/less/index.less\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./source/less/index.less?");

/***/ })

/******/ });