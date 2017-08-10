import { Service } from "../../back/index";
import { getEntityManager } from "typeorm";
import { Users } from "../entity/Users";

@Service
export class UsersService{

    constructor(){}

    async getUser(uid : number) : Promise<Users>{
        let postRepository = getEntityManager().getRepository(Users);
        let user = postRepository.findOneById(uid);
        return user
    }

    getUserByAccount(account: string) : Promise<Users>{
        let postRepository = getEntityManager().getRepository(Users);
        let user = postRepository
                    .createQueryBuilder("getUserByAccount") // QueryBuilder 别名
                    .where("account="+ account)
                    .getOne();

        return user
                    
    }

    async setUser(account : string, 
                  name: string, 
                  sex: number, 
                  headimg: string, 
                  lv: number, 
                  exp: number, 
                  coins: number, 
                  gems: number, 
                  roomid: string){

        let postRepository = getEntityManager().getRepository(Users);

        let userSave = new Users();
        userSave.account = account;
        userSave.name = name;
        userSave.sex = sex;
        userSave.headimg = headimg;
        userSave.lv = lv;
        userSave.exp = exp;
        userSave.coins = coins;
        userSave.gems = gems;
        userSave.roomid = roomid;
        let res = postRepository.persist(userSave);

        return res
    }

    /**
     * 校验user是否存在 查询条件account
     * @param account 
     */
   async checkUser(account : string){
       let user = await this.getUserByAccount(account)
        if (user){
            return true
        }
        else{
            return false
        }
    }
}