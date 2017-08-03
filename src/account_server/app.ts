import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
// import { AppRoutes } from "./routes";
import { Back, Request, Response, Controller, Get, Route } from "../back/index";
import { Category } from "./entity/Category";
import { Post } from "./entity/Post";
import { connectionOptions } from "./options";
import "./controller/PostGetAllAction";
import "./controller/AccountController";


// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests

createConnection(connectionOptions).then(async connection => {

    // create express app
    const app = Back.express();
    app.use(bodyParser.json());
    Back.prepare(app)
    console.log(app.param)
    // run app
    app.listen(3000);

    console.log("Express application < account server > is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));