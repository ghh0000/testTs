"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Post_1 = require("../entity/Post");
const index_1 = require("../../back/index");
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
let HomeController = class HomeController {
    constructor() { }
    greet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log("hello World");
            const postRepository = typeorm_1.getEntityManager().getRepository(Post_1.Post);
            const posts = yield postRepository.find();
            res.send(posts);
        });
    }
    anotherGreet(req, res) {
        console.log("another hello World");
        res.send("another hello World");
    }
};
__decorate([
    index_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.Request, index_1.Response]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "greet", null);
__decorate([
    index_1.Get("/greet"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.Request, index_1.Response]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "anotherGreet", null);
HomeController = __decorate([
    index_1.Controller,
    index_1.Route("/"),
    __metadata("design:paramtypes", [])
], HomeController);
