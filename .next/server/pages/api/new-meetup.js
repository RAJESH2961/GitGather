"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//  /api/mew-meetup\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // const { title, image, address, description } = data;\n        // #gBGBRM72931\n        // storing data in database\n        // mongodb+srv://RAJESH:<db_password>@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://RAJESH:%23gBGBRM72931@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs\");\n        const db = client.db(\"meetups\");\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQkFBbUI7QUFDbUI7QUFDdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QixJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdEIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFDckIsdURBQXVEO1FBQ25ELGVBQWU7UUFDbkIsMkJBQTJCO1FBQzNCLDRHQUE0RztRQUNwSCxNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQ3RDLDRHQUE0RyxDQUM3RztRQUNPLE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLENBQUMsU0FBUyxDQUFDO1FBRS9CLE1BQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDbEQsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFTLENBQUNSLElBQUksQ0FBQztRQUN0RFMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDO1FBRWZiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFFLGtCQUFrQjtTQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0wsQ0FBQztBQUVELGlFQUFlbEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gIC9hcGkvbWV3LW1lZXR1cFxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG4gICAgICAgIC8vIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcbiAgICAgICAgICAgIC8vICNnQkdCUk03MjkzMVxuICAgICAgICAvLyBzdG9yaW5nIGRhdGEgaW4gZGF0YWJhc2VcbiAgICAgICAgLy8gbW9uZ29kYitzcnY6Ly9SQUpFU0g6PGRiX3Bhc3N3b3JkPkBuZXh0anMuMWFpamR5ai5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9bmV4dGpzXG5jb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAnbW9uZ29kYitzcnY6Ly9SQUpFU0g6JTIzZ0JHQlJNNzI5MzFAbmV4dGpzLjFhaWpkeWoubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPW5leHRqcydcbik7XG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCdtZWV0dXBzJyk7XG5cbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogJ01lZXR1cCBpbnNlcnRlZCEnfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();