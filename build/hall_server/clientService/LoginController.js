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
const index_1 = require("../../back/index");
const UsersService_1 = require("../service/UsersService");
let uuid = require("uuid");
let LoginController = class LoginController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    /**
     *  账号登录
     *
     *  param:
     *      account string 账号
     *      password string 密码
     *
     **/
    auth(req, res, account, sign) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag = yield this.usersService.checkUser(account); //判断账号是否已经存在
            if (flag) {
                return {
                    erode: 0,
                    errs: "ok",
                };
            }
            else {
                return {
                    erode: 0,
                    errs: "ok",
                };
            }
        });
    }
};
__decorate([
    index_1.Get("/"),
    index_1.ResponseBody,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.Request, index_1.Response, String, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "auth", null);
LoginController = __decorate([
    index_1.Controller,
    index_1.Route("/login"),
    __metadata("design:paramtypes", [UsersService_1.UsersService])
], LoginController);
