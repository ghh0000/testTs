import { Back, Request, Response, Controller, Get, Route, RequestBody, ResponseBody } from "../../back/index";

@Controller
@Route("/version")
class ServerVersionController{

    constructor(){}

    @Get("/")
    @ResponseBody
    async version(req : Request ,res : Response,) {
        return {
            erode : 0, 
            errs : "ok",
            ver: Back.configs.set['VERSION']
        }
    }
} 