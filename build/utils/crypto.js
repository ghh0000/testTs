"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let md5 = require("md5");
exports.md5Util = function (content) {
    let data = md5(content);
    console.log(data);
    return data;
};
