let md5 = require("md5")

export const md5Util = function (content) {
    let data = md5(content)
    console.log(data)
    return data
};