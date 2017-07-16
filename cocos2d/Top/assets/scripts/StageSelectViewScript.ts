const {ccclass, property} = cc._decorator;

/**
 * ゲーム選択表示されている箇所のComponent
 * @extends {cc.Component}
 */
@ccclass
export default class StageSelectViewScript extends cc.Component {

    /**
     * ￥ボタン
     * @type {cc.Button} yenButton
     */
    @property(cc.Button)
    yenButton: cc.Button;

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
     * ￥ボタンを押下したときの処理
     */
    onClickYenButton() {
        location.href = "/game/yen/";
    }

    /**
     * ○ボタンを押下したときの処理
     */
    onClickBallButton() {
        location.href = "/game/ball/";
    }
}
