import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
// import { AppRoutes } from "./routes";
import { Back, Request, Response, Controller, Get, Route } from "../back/index";

/**
 * 导入 实体 entity
 */

/**
 * 导入 控制器 controller
 */


/**
 * 配置加载
 * dev 使用 ./optionsDev
 * 
 */
import { BackApplication } from "../back/BackApplication";
let config = require(process.argv[2])
let application = BackApplication({use: [], set: config.account_server})
application.call(this)

// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests
createConnection(config.connectionOptions).then(async connection => {

    // create express app
    const app = Back.express();
    app.set('config', config)
    app.use(bodyParser.json());
    Back.prepare(app)
    // run app
    app.listen(3000);

    console.log("Express application < account server > is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));