import { Service } from "../../back/index";
// import { AccountsDao } from "../dao/AccountsDao";
import { getEntityManager } from "typeorm";
import { Accounts } from "../entity/Accounts";
import { md5Util } from "../../utils/crypto";

@Service
export class AccountsService{

    constructor(){}

    getAccount(account : string) : Promise<Accounts>{
        let postRepository = getEntityManager().getRepository(Accounts);
        let posts = postRepository.findOneById(account);
        return posts
    }

    async setAccount(account : string, password : string){
        let postRepository = getEntityManager().getRepository(Accounts);
        let accountSave = new Accounts();
        accountSave.account = account;
        accountSave.password = md5Util(password);
        let res = postRepository.persist(accountSave);
        return res
    }

    /**
     * 校验账号是否存在
     * @param account 
     */
   async checkAccount(account : string){
        let postRepository = getEntityManager().getRepository(Accounts);
        let posts = await postRepository.findOneById(account);

        if (posts){
            return true
        }
        else{
            return false
        }
    }
}