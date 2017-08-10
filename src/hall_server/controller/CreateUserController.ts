import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";
import { UsersService } from "../service/UsersService";
import { Users } from "../entity/Users";

@Controller
@Route("/create_user")
class CreateUserController{
    constructor(
        private usersService : UsersService
    ){}

    @Get("/")
    @ResponseBody
    async create(req : Request ,res : Response, account : string, name : string ){

        let flag  = await this.usersService.checkUser(account)

        if (flag){
            return {
                erode: 6, 
                errs : "user existed",
            }
        }
        else{
            let nameBase64 = new Buffer(name).toString("base64");
            let sex = 0;
            let headimg = '';
            let lv = 1;
            let exp = 0;
            let coins = 100000;
            let gems = 100000;
            let roomid = '';
            let res = await this.usersService.setUser(account, nameBase64, sex, headimg, lv, exp, coins, gems, roomid)

            if (res){
                return {
                    erode: 0, 
                    errs : "ok",
                }
            }
            else{
                return {
                    erode: 7,
                    errs: "system err",
                }
            }
        }

        
    }
}