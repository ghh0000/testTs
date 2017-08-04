import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";
import { AccountsService } from "../service/AccountsService";
import { Accounts } from "../entity/Accounts";

/**
 *  账号注册
 * 
 *  param: 
 *      account string 账号
 *      password string 密码
 * 
 **/
@Controller
@Route("/register")
class RegisterController{

    constructor(
           private accountsService : AccountsService
       ){}

    @Get("/")
    @ResponseBody
    async register(req : Request ,res : Response, account : string, password : string ) {
        let flag  = await this.accountsService.checkAccount(account); //判断账号是否已经存在
        if (flag){
            return {erode : 1, errs : "account has been used."};
        }
        else{
            let result = await this.accountsService.setAccount(account, password);
            if (result){
                return {erode : 0, errs : "ok"};
            }
            else{
                return {erode : 2, errs : "account save failed."}
            }
            
        }
    }
}