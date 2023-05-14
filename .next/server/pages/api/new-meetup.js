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
// api/new-meetup

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const { title , image , descriptoin , address  } = data;
        const client = new external_mongodb_namespaceObject.MongoClient("mongodb+srv://Justin:MongoDB12@cluster0.gi7kf.mongodb.net/?retryWrites=true&w=majority");
        await client.connect();
        const db = client.db("meetups");
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({
            message: "meetup inserted"
        });
    }
}
// import { MongoClient, ServerApiVersion } from 'mongodb'
// const uri = "mongodb+srv://Justin:MongoDB12@cluster0.gi7kf.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function handler() {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("meetups").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     // Ensures that the client will close when you finish/error
//     await client.close();
// }
// handler().catch(console.dir);
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