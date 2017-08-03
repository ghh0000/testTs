import { Service } from "../../back/index";
// import { AccountsDao } from "../dao/AccountsDao";
import { getEntityManager } from "typeorm";
import { Accounts } from "../entity/Accounts";

@Service
export class AccountsService{

    constructor(){}

    getAccount(account : string) : Promise<Accounts>{
        let postRepository = getEntityManager().getRepository(Accounts);
        let posts = postRepository.findOneById(account);
        return posts
    }

    setAccount(account : string, password : string){
        let postRepository = getEntityManager().getRepository(Accounts);

    }

}