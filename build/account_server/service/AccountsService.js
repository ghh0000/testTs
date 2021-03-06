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
// import { AccountsDao } from "../dao/AccountsDao";
const typeorm_1 = require("typeorm");
const Accounts_1 = require("../entity/Accounts");
const crypto_1 = require("../../utils/crypto");
let AccountsService = class AccountsService {
    constructor() { }
    getAccount(account) {
        let postRepository = typeorm_1.getEntityManager().getRepository(Accounts_1.Accounts);
        let posts = postRepository.findOneById(account);
        return posts;
    }
    setAccount(account, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let postRepository = typeorm_1.getEntityManager().getRepository(Accounts_1.Accounts);
            let accountSave = new Accounts_1.Accounts();
            accountSave.account = account;
            accountSave.password = crypto_1.md5Util(password);
            let res = postRepository.persist(accountSave);
            return res;
        });
    }
    /**
     * 校验账号是否存在
     * @param account
     */
    checkAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            let postRepository = typeorm_1.getEntityManager().getRepository(Accounts_1.Accounts);
            let posts = yield postRepository.findOneById(account);
            if (posts) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
AccountsService = __decorate([
    index_1.Service,
    __metadata("design:paramtypes", [])
], AccountsService);
exports.AccountsService = AccountsService;
