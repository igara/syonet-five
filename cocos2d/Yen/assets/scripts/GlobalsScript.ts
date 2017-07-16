// declare global variable "GlobalVals"
window.GlobalVals = {
    // ゲームの状態を扱う
    GameStatus: 1,
    GameStatusGroup: {
        dead: 0,
        start: 1,
        restart: 2,
    },
    // 残機
    PlayerCount: 1,
    // 左の価格
    LeftYen: 0,
    // 右の価格
    RightYen: 0,
    // 価格の合計
    TotalYen: 0,
    // 5000兆円
    TyoYen: 5000000000000000,
    // 5000兆円出てくるブロックとの衝突あったとき一時的にtrue
    isTyoYenBlockCol: false,
};
