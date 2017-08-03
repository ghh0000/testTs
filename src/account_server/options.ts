/**
 * All application routes.
 */
import { Category } from "./entity/Category";
import { Post } from "./entity/Post";
import { ConnectionOptions } from "typeorm";
import { Accounts } from "./entity/Accounts";

export const connectionOptions : ConnectionOptions = {
    type: "mysql",
    host: "172.16.1.83",
    port: 3306,
    username: "root",
    password: "123456",
    database: "civilizationdb",
    entities: [
        Category, Post, Accounts,
    ],
    autoSchemaSync: true,
};