/**
 * 单例
 * room 管理
 */
class RoomMgr {
    constructor() {
        this._rooms = {};
    }
    RoomMgr() {
    }
    set(key, value) {
        this._rooms[key] = value;
        console.log(`set rooms with key: '${key}', value: '${value}'`);
    }
    get(key) {
        let value = this._rooms[key];
        console.log(`get rooms value: '${value}' with key: '${key}'`);
        return value;
    }
}
RoomMgr.Instance = new RoomMgr();
RoomMgr.Instance.set('name', 'ceshi');
RoomMgr.Instance.get('name');
