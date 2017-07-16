const {ccclass, property} = cc._decorator;

// 衝突を扱う
const manager = cc.director.getCollisionManager();
// デフォルトfalseになっているのをtrueにして衝突検知をOnにする
manager.enabled = true;

/**
 * 画面外のComponent
 * @extends {cc.Component}
 */
@ccclass
export default class TyoYenScript extends cc.Component {

    /**
     * lifecycle method
     * Nodeが有効になった時に呼び出されるメソッド
     * @see {cc.Component.onEnable}
     */
    onEnable() {
    }

    /**
     * lifecycle method
     * Nodeをが読み込まれたら呼び出される
     * @see {cc.Component.onLoad}
     */
    onLoad() {
    }

    /**
     * lifecycle method
     * onLoad後に呼び出すメソッド
     * @see {cc.Component.start}
     */
    start() {
    }

    /**
     * lifecycle method
     * フレームをレンダリングを行う度に呼び出しされるメソッド
     * @param {float} dt 経過時間
     * @see {cc.Component.update}
     */
    update(dt) {
    }

    /**
     * lifecycle method
     * updateメソッドを行った後に呼び出されるメソッド
     * @param {float} dt 経過時間
     * @see {cc.Component.lateUpdate}
     */
    lateUpdate(dt) {
    }

    /**
     * lifecycle method
     * Nodeが無効になった時に呼び出されるメソッド
     * @see {cc.Component.onDisable}
     */
    onDisable() {
    }

    /**
     * lifecycle method
     * Nodeが破棄された時に呼び出されるメソッド
     * @see {cc.Component.onDestroy}
     */
    onDestroy() {
    }

    /**
     * 衝突開始した時に呼び出されるメソッド
     * @param {{}} other 衝突したNode
     * @param {{}} self 自身のNode
     */
    onCollisionEnter(other, self) {
        GlobalVals.TotalYen = GlobalVals.TyoYen;
        GlobalVals.isTyoYenBlockCol = true;
    }

    /**
     * 衝突中に呼び出されるメソッド
     * @param {{}} other 衝突したNode
     * @param {{}} self 自身のNode
     */
    onCollisionStay(other, self) {
    }

    /**
     * 衝突が解除される時に呼び出されるメソッド
     * @param {{}} other 衝突したNode
     * @param {{}} self 自身のNode
     */
    onCollisionExit(other, self) {
    }
}
