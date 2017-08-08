/**
 * All application routes.
 * 开发环境配置数据
 */
import { ConnectionOptions } from "typeorm";
import { Users } from "./entity/Users";

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
export const connectionOptions : ConnectionOptions = {
    type: "mysql",
    host: "172.16.1.83",
    port: 3306,
    username: "root",
    password: "123456",
    database: "civilizationdb",
    entities: [
        Users
    ],
    autoSchemaSync: true,
}

let ACCOUNT_CLIENT_PORT = 9000
/**
 * 账号服配置
 */
export const hall_server = {
	HALL_IP:HALL_IP,
    HALL_CLIENT_PORT:HALL_CLIENT_PORT,
    FOR_ROOM_IP:LOCAL_IP,
    ROOM_PORT:HALL_ROOM_PORT,
    ACCOUNT_PRI_KEY:ACCOUNT_PRI_KEY,
    ROOM_PRI_KEY:ROOM_PRI_KEY
}
