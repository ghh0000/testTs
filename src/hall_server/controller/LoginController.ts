import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";
import { UsersService } from "../service/UsersService";
import { Users } from "../entity/Users";

@Controller
@Route("/login")
class LoginController{
    constructor(
        private usersService : UsersService
    ){}

    /**
     *  账号登录
     * 
     *  param: 
     *      account string 账号
     *      password string 密码
     * 
     **/
    @Get("/")
    @ResponseBody
    async login(req : Request ,res : Response, account : string, sign : string ){
        let flag  = await this.usersService.checkUser(account); //判断账号是否已经存在
        if (flag) {
            let user = await this.usersService.getUserByAccount(account)
            // TODO
            // 还是否存在房间
            return {
                erode: 0, 
                errs : "ok",
                // user info 
                uid: user.uid,
                account: user.account,
                name: user.name,
                lv: user.lv,
                exp: user.exp,
                coins: user.coins,
                gems: user.gems,
                sex: user.sex,
            }
        } else {
            return {
                erode: 5, 
                errs : "not init user",
            }
        }
    }
}
