"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * All application routes.
 */
const Category_1 = require("./entity/Category");
const Post_1 = require("./entity/Post");
const Accounts_1 = require("./entity/Accounts");
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
