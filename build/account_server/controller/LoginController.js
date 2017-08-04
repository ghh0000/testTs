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
const AccountsService_1 = require("../service/AccountsService");
const crypto_1 = require("../../utils/crypto");
let uuid = require("uuid");
let LoginController = class LoginController {
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    /**
     *  账号登录
     *
     *  param:
     *      account string 账号
     *      password string 密码
     *
     **/
    auth(req, res, account, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let flag = yield this.accountsService.checkAccount(account); //判断账号是否已经存在
            if (flag) {
                let prefixAccount = "ChessAndCard_" + account;
                // TODO
                // 创建user
                return {
                    erode: 0,
                    errs: "ok",
                    account: prefixAccount,
                    sign: crypto_1.md5Util(prefixAccount + req.ip + index_1.Back.configs.set['ACCOUNT_PRI_KEY'])
                };
            }
            else {
                return { erode: 3, errs: "invalid account" };
            }
        });
    }
    guest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let guestAccount = uuid.v1();
            let password = '123456';
            let result = yield this.accountsService.setAccount(guestAccount, password);
            if (result) {
                let prefixAccount = "ChessAndCardGuest_" + guestAccount;
                // TODO
                // 创建user
                return {
                    erode: 0,
                    errs: "ok",
                    account: guestAccount,
                    sign: crypto_1.md5Util(prefixAccount + req.ip + index_1.Back.configs.set['ACCOUNT_PRI_KEY'])
                };
            }
            else {
                return { erode: 4, errs: "visitor account failed" };
            }
        });
    }
};
__decorate([
    index_1.Get("/auth"),
    index_1.ResponseBody,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.Request, index_1.Response, String, String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "auth", null);
__decorate([
    index_1.Get("/guest"),
    index_1.ResponseBody,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.Request, index_1.Response]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "guest", null);
LoginController = __decorate([
    index_1.Controller,
    index_1.Route("/login"),
    __metadata("design:paramtypes", [AccountsService_1.AccountsService])
], LoginController);
