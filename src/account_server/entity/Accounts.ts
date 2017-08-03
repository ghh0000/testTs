import {Entity, PrimaryColumn, Column, ManyToMany, JoinTable} from "typeorm";
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