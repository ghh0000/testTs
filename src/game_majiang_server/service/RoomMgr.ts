/**
 * 单例
 * room 管理 
 */
class RoomMgr{
    public static readonly Instance: RoomMgr = new RoomMgr();
    private _rooms: {[key: string]: string} = {};
    private RoomMgr(){
    }

    public set(key: string, value: string){
        this._rooms[key] = value;
        console.log(`set rooms with key: '${key}', value: '${value}'`);
    }

    public get(key: string): string{
        let value = this._rooms[key];
        console.log(`get rooms value: '${value}' with key: '${key}'`);
        return value;
    }
}


RoomMgr.Instance.set('name', 'ceshi')
RoomMgr.Instance.get('name')
