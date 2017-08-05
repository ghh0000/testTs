import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";
import { AccountsService } from "../service/AccountsService";
import { Accounts } from "../entity/Accounts";
import { md5Util } from "../../utils/crypto";
let uuid = require("uuid")

@Controller
@Route("/login")
class LoginController{
    constructor(
        private accountsService : AccountsService
    ){}

    /**
     *  账号登录
     * 
     *  param: 
     *      account string 账号
     *      password string 密码
     * 
     **/
    @Get("/auth")
    @ResponseBody
    async auth(req : Request ,res : Response, account : string, password : string ){
        let flag  = await this.accountsService.checkAccount(account); //判断账号是否已经存在
        if (flag) {
            let prefixAccount : string = "ChessAndCard_" + account
            // TODO
            // 创建user
            return {
                erode: 0, 
                errs : "ok", 
                account: prefixAccount, 
                sign : md5Util(prefixAccount + req.ip + Back.configs.set['ACCOUNT_PRI_KEY']),
                hallAddr: Back.configs.set['HALL_IP'] + ":" + Back.configs.set['HALL_IP']
            }
            
        } else {
            return {erode : 3, errs : "invalid account"};
        }
    }

    @Get("/guest")
    @ResponseBody
    async guest(req : Request ,res : Response,){
        let guestAccount : string = uuid.v1()
        let password : string = '123456'

        let result = await this.accountsService.setAccount(guestAccount, password);

        if (result){
             let prefixAccount : string = "ChessAndCardGuest_" + guestAccount
            // TODO
            // 创建user
            return {
                erode: 0, 
                errs : "ok", 
                account: guestAccount, 
                sign : md5Util(prefixAccount + req.ip + Back.configs.set['ACCOUNT_PRI_KEY']),
                hallAddr: Back.configs.set['HALL_IP'] + ":" + Back.configs.set['HALL_IP']
            }
            }
        else{
            return {erode : 4, errs : "visitor account failed"};
        }
    }
}
