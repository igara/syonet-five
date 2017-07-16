const {ccclass, property} = cc._decorator;

// 物理演算を扱う
const physicsManager = cc.director.getPhysicsManager();
physicsManager.enabled = true;

// 衝突を扱う
const manager = cc.director.getCollisionManager();
// デフォルトfalseになっているのをtrueにして衝突検知をOnにする
manager.enabled = true;

/**
 * ゲーム箇所のComponent
 * @extends {cc.Component}
 */
@ccclass
export default class GameViewScript extends cc.Component {

    /**
     * プレイヤー
     * @type {cc.Node} player
     */
    @property(cc.Node)
    player: cc.Node;

    /**
     * 残機
     * @type {cc.Label} playerCount
     */
    @property(cc.Label)
    playerCount: cc.Label;

    /**
     * ↑ボタン
     * @type {cc.Button} upButton
     */
    @property(cc.Button)
    upButton: cc.Button;

    /**
     * ジャンプの高さ
     * @type {Number} upHeight
     */
    @property({default: 0})
    upHeight: Number = 0;

    /**
     * ←ボタン
     * @type {cc.Button} leftButton
     */
    @property(cc.Button)
    leftButton: cc.Button;

    /**
     * →ボタン
     * @type {cc.Button} rightButton
     */
    @property(cc.Button)
    rightButton: cc.Button;

    /**
     * ←→ボタン押下したときの移動量
     * @type {Number} leftOrRightWidth
     */
    @property({default: 0})
    leftOrRightWidth: Number = 0;

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
        this.playerCount.string = GlobalVals.PlayerCount;
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
        this.playerCount.string = GlobalVals.PlayerCount;
        if (GlobalVals.GameStatus === GlobalVals.GameStatusGroup.restart) {
            GlobalVals.GameStatus = GlobalVals.GameStatusGroup.start;
            this.player.x = 0;
            this.player.y = 110;
        }
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
        GlobalVals.GameStatus = GlobalVals.GameStatusGroup.dead;
    }

    /**
     * ↑ボタンを押下したときの処理
     */
    onClickUpButton() {
        this.player.y += this.upHeight;
    }

    /**
     * ←ボタンを押下したときの処理
     */
    onClickLeftButton() {
        this.player.x -= this.leftOrRightWidth;
    }

    /**
     * →ボタンを押下したときの処理
     */
    onClickRightButton() {
        this.player.x += this.leftOrRightWidth;
    }
}
