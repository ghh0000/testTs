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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
/**
 * 账号
 *
 **/
let Rooms = class Rooms {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Rooms.prototype, "uuid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "base_info", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "create_time", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "num_of_turns", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "next_button", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "ip", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "port", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_id_0", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_icon_0", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_name_0", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_score_0", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_id_1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_icon_1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_name_1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_score_1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_id_2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_icon_2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_name_2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_score_2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_id_3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_icon_3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Rooms.prototype, "user_name_3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rooms.prototype, "user_score_3", void 0);
Rooms = __decorate([
    typeorm_1.Entity()
], Rooms);
exports.Rooms = Rooms;
