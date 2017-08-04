let md5 = require("md5")

export const md5Util = function (content) {
    console.log(content)
    let data = md5(content)
    return data
};