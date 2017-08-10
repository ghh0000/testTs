import {Entity, PrimaryColumn, Column} from "typeorm";
/**
 * 账号
 * 
 **/
@Entity()
export class Rooms {

    @PrimaryColumn()
    uuid : string;

    @Column()
    id : string;

    @Column()
    base_info : string;

    @Column()
    create_time : number;

    @Column()
    num_of_turns : number;

    @Column()
    next_button : number;

    @Column()
    ip : string;

    @Column()
    port : number;

    @Column()
    user_id_0 : number;

    @Column()
    user_icon_0 : string;

    @Column()
    user_name_0 : string;

    @Column()
    user_score_0 : number;

    @Column()
    user_id_1 : number;

    @Column()
    user_icon_1 : string;

    @Column()
    user_name_1 : string;

    @Column()
    user_score_1 : number;

    @Column()
    user_id_2 : number;

    @Column()
    user_icon_2 : string;

    @Column()
    user_name_2 : string;

    @Column()
    user_score_2 : number;

    @Column()
    user_id_3 : number;

    @Column()
    user_icon_3 : string;

    @Column()
    user_name_3 : string;

    @Column()
    user_score_3 : number;


}