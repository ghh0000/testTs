import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";
import { RoomsService } from "../service/RoomsService";
import { Rooms } from "../entity/Rooms";
import { md5Util } from "../../utils/crypto";
/**
 * 创建房间
 */
@Controller
@Route("/create_room")
class CreateRoomController {
    constructor(
        private roomsService: RoomsService
    ) { }

    @Get("/")
    @ResponseBody
    async create(req: Request,
        res: Response,
        uid: number,
        sign: string,
        gems: number,
        conf: string) {

        let needStr = uid + conf + gems + Back.configs.set["ROOM_PRI_KEY"] //生成sign的拼接字符串
        // console.log(needStr)
        let flag = this.checkSign(sign, needStr)
        console.log(flag)

        if (flag) {//校验成功
            conf = JSON.parse(conf);
        }
        else {//校验失败
            return {
                erode: 8,
                errs: "sign failed",
            }
        }

    }

    private checkSign(sign: string, needStr: string): boolean {
        /**
         * 校验sign
         */
        if (md5Util(needStr) != sign) {
            return false
        }
        else {
            return true;
        }
    }
}