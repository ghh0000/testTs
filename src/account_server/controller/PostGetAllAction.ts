import {getEntityManager} from "typeorm";
import {Post} from "../entity/Post";
import { Back, Request, Response, Controller, Get, Route } from "../../back/index";
/**
 * Loads all posts from the database.
 */
// export async function postGetAllAction(request: Request, response: Response) {

//     // get a post repository to perform operations with post
//     const postRepository = getEntityManager().getRepository(Post);

//     // load a post by a given post id
//     const posts = await postRepository.find();

//     // return loaded posts
//     response.send(posts);
// }
@Controller
@Route("/")
class HomeController{

    constructor(){}

    @Get("/")
    async greet(req : Request ,res : Response) {
        await console.log("hello World");
        const postRepository = getEntityManager().getRepository(Post);
        const posts = await postRepository.find();
        res.send(posts);
    }
    
    @Get("/greet")
    anotherGreet(req : Request ,res : Response) {
        console.log("another hello World");
        res.send("another hello World");
    }
}
