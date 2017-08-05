import {Entity, PrimaryColumn, Column} from "typeorm";
/**
 * 账号
 * 
 **/
@Entity()
export class Accounts {

    @PrimaryColumn()
    account: string;

    @Column()
    password: string;
}