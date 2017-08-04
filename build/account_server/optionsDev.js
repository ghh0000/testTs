"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("./entity/Category");
const Post_1 = require("./entity/Post");
const Accounts_1 = require("./entity/Accounts");
/**
 * 基础配置
 */
let HALL_IP = "127.0.0.1";
let HALL_CLIENT_PORT = 9001;
let HALL_ROOM_PORT = 9002;
let ACCOUNT_PRI_KEY = "^&*#$%()@";
let ROOM_PRI_KEY = "~!@#$(*&^%$&";
let LOCAL_IP = '127.0.0.1';
/**
 * 数据库连接配置
 *
 */
exports.connectionOptions = {
    type: "mysql",
    host: "172.16.1.83",
    port: 3306,
    username: "root",
    password: "123456",
    database: "civilizationdb",
    entities: [
        Category_1.Category, Post_1.Post, Accounts_1.Accounts,
    ],
    autoSchemaSync: true,
};
/**
 * 账号服配置
 */
exports.account_server = {
    ACCOUNT_PRI_KEY: ACCOUNT_PRI_KEY,
    VERSION: "00.00.01",
    HALL_IP: HALL_IP,
    HALL_CLIENT_PORT: HALL_CLIENT_PORT
};
