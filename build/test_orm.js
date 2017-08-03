"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mysql = require("mysql");
const typeorm_1 = require("typeorm");
const Photo_1 = require("./entity/Photo");
let connection = mysql.createConnection({
    type: "mysql",
    host: "172.16.1.83",
    port: 3306,
    username: "root",
    password: "123456",
    database: "civilizationdb",
    entities: [
        Photo_1.Photo
    ],
    autoSchemaSync: true,
});
console.log(connection);
typeorm_1.createConnection(connection).then(connection => {
    // Here you can start to work with your entities
}).catch(error => console.log(error));
