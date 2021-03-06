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
const RoomsService_1 = require("../service/RoomsService");
const crypto_1 = require("../../utils/crypto");
/**
 * 创建房间
 */
let CreateRoomController = class CreateRoomController {
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    create(req, res, uid, sign, gems, conf) {
        return __awaiter(this, void 0, void 0, function* () {
            let needStr = uid + conf + gems + index_1.Back.configs.set["ROOM_PRI_KEY"]; //生成sign的拼接字符串
            // console.log(needStr)
            let flag = this.checkSign(sign, needStr);
            console.log(flag);
            if (flag) {
                conf = JSON.parse(conf);
            }
            else {
                return {
                    erode: 8,
                    errs: "sign failed",
                };
            }
        });
    }
    checkSign(sign, needStr) {
        /**
         * 校验sign
         */
        if (crypto_1.md5Util(needStr) != sign) {
            return false;
        }
        else {
            return true;
        }
    }
};
__decorate([
    index_1.Get("/"),
    index_1.ResponseBody,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_1.Request,
        index_1.Response, Number, String, Number, String]),
    __metadata("design:returntype", Promise)
], CreateRoomController.prototype, "create", null);
CreateRoomController = __decorate([
    index_1.Controller,
    index_1.Route("/create_room"),
    __metadata("design:paramtypes", [RoomsService_1.RoomsService])
], CreateRoomController);
