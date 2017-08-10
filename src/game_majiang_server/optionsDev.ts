/**
 * All application routes.
 * 开发环境配置数据
 */
import { ConnectionOptions } from "typeorm";
import { Rooms } from "./entity/Rooms";

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
export const connectionOptions: ConnectionOptions = {
    type: "mysql",
    host: "172.16.1.83",
    port: 3306,
    username: "root",
    password: "123456",
    database: "civilizationdb",
    entities: [
        Rooms
    ],
    autoSchemaSync: true,
}

let HTTP_PORT = 9003;
let HTTP_TICK_TIME = 5000;
let CLIENT_PORT = 10000;
let SERVER_ID = "001"
/**
 * 游戏（麻将）服配置
 */
export const game_server = {
    SERVER_ID: SERVER_ID,

    //暴露给大厅服的HTTP端口号
    HTTP_PORT: HTTP_PORT,
    //HTTP TICK的间隔时间，用于向大厅服汇报情况
    HTTP_TICK_TIME: HTTP_TICK_TIME,
    //大厅服IP
    HALL_IP: LOCAL_IP,
    FOR_HALL_IP: LOCAL_IP,
    //大厅服端口
    HALL_PORT: HALL_ROOM_PORT,
    //与大厅服协商好的通信加密KEY
    ROOM_PRI_KEY: ROOM_PRI_KEY,

    //暴露给客户端的接口
    CLIENT_IP: HALL_IP,
    CLIENT_PORT: CLIENT_PORT,
}