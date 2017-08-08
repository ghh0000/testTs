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
const typeorm_1 = require("typeorm");
const Users_1 = require("../entity/Users");
let UsersService = class UsersService {
    constructor() { }
    getUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            let postRepository = typeorm_1.getEntityManager().getRepository(Users_1.Users);
            let user = postRepository.findOneById(uid);
            return user;
        });
    }
    getUserByAccount(account) {
        let postRepository = typeorm_1.getEntityManager().getRepository(Users_1.Users);
        let user = postRepository
            .createQueryBuilder("getUserByAccount") // QueryBuilder 别名
            .where("account=" + account)
            .getOne();
        return user;
    }
    setUser(uid, account, name, sex, headimg, lv, exp, coins, gems, roomid) {
        return __awaiter(this, void 0, void 0, function* () {
            let postRepository = typeorm_1.getEntityManager().getRepository(Users_1.Users);
            let userSave = new Users_1.Users();
            userSave.uid = uid;
            userSave.account = account;
            userSave.name = name;
            userSave.sex = sex;
            userSave.headimg = headimg;
            userSave.lv = lv;
            userSave.exp = exp;
            userSave.coins = coins;
            userSave.gems = gems;
            userSave.roomid = roomid;
            let res = postRepository.persist(userSave);
            return res;
        });
    }
    /**
     * 校验user是否存在 查询条件account
     * @param account
     */
    checkUser(account) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.getUserByAccount(account);
            if (user) {
                return true;
            }
            else {
                return false;
            }
        });
    }
};
UsersService = __decorate([
    index_1.Service,
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
