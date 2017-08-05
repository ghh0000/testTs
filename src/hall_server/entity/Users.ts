import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
/**
 * 账号
 * 
 **/
@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    uid: number;

    @Column()
    account: string;
    
    @Column()
    name: string;

    @Column()
    sex: number;

    @Column()
    headimg: string;

    @Column()
    lv: number;

    @Column()
    exp: number;

    @Column()
    coins: number;

    @Column()
    gems: number;

    @Column()
    roomid: string;
}