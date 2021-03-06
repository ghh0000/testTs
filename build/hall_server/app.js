"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const bodyParser = require("body-parser");
// import { AppRoutes } from "./routes";
const index_1 = require("../back/index");
/**
 * 导入 控制器 controller
 */
require("./controller/LoginController");
require("./controller/CreateUserController");
/**
 * 配置加载
 * dev 使用 ./optionsDev
 *
 */
const BackApplication_1 = require("../back/BackApplication");
let config = require(process.argv[2]);
let application = BackApplication_1.BackApplication({ use: [], set: config.hall_server });
application.call(this);
// create connection with database
// note that its not active database connection
// TypeORM creates you connection pull to uses connections from pull on your requests
typeorm_1.createConnection(config.connectionOptions).then((connection) => __awaiter(this, void 0, void 0, function* () {
    // create express app
    const app = index_1.Back.express();
    app.set('config', config);
    app.use(bodyParser.json());
    index_1.Back.prepare(app);
    // run app
    let port = config.hall_server.HALL_CLIENT_PORT;
    app.listen(port);
    console.log("Express application < hall server > is up and running on port " + port);
})).catch(error => console.log("TypeORM connection error: ", error));
