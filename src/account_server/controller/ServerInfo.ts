import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";

@Controller
@Route("/serverinfo")
class ServerInfoController{

    constructor(){}

    @Get("/")
    @ResponseBody
    async ServerInfo(req : Request ,res : Response,) {
        return {
            erode : 0, 
            errs : "ok",
            ver: Back.configs.set['VERSION'],
            hall: Back.configs.set['HALL_IP']  + ":" + Back.configs.set['HALL_CLIENT_PORT']
        }
    }
} 