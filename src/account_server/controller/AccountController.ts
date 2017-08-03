import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";
import { AccountsService } from "../service/AccountsService";
import { Accounts } from "../entity/Accounts";


@Controller
@Route("/register")
class RegisterController{

    constructor(
           private accountsService : AccountsService
       ){}

    @Get("/")
    @ResponseBody
    async register(req : Request ,res : Response, account : string, password : string ) {
        let dataPromise  = await this.accountsService.getAccount(account); //判断账号是否已经存在
        if (dataPromise){
            //存在
            return {erode : 1, errs : "account has been used."};
        }
        else{
            this.accountsService.setAccount(account, password);
        }
    }




}