"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js
//  /api/mew-meetup

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        // const { title, image, address, description } = data;
        // #gBGBRM72931
        // storing data in database
        // mongodb+srv://RAJESH:<db_password>@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://RAJESH:%23gBGBRM72931@nextjs.1aijdyj.mongodb.net/?retryWrites=true&w=majority&appName=nextjs");
        const db = client.db("meetups");
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5940));
module.exports = __webpack_exports__;

})();