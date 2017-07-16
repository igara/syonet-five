const {ccclass, property} = cc._decorator;

// 物理演算を扱う
const physicsManager = cc.director.getPhysicsManager();
physicsManager.enabled = true;

/**
 * ゲーム箇所のComponent
 * @extends {cc.Component}
 */
@ccclass
export default class GameScript extends cc.Component {

    /**
     * バー
     * @type {cc.Node} bar
     */
    @property(cc.Node)
    bar: cc.Node;

    /**
     * 出力されるボールをまとめて管理しているNode
     * @type {cc.Node} outballs
     */
    @property(cc.Node)
    outballs: cc.Node;

    /**
     * 青ボール
     * @type {cc.Node} blueball
     */
    @property(cc.Node)
    blueball: cc.Node;

    /**
     * 緑ボール
     * @type {cc.Node} greenball
     */
    @property(cc.Node)
    greenball: cc.Node;

    /**
     * 赤ボール
     * @type {cc.Node} redball
     */
    @property(cc.Node)
    redball: cc.Node;

    /**
     * 黄ボール
     * @type {cc.Node} yellowball
     */
    @property(cc.Node)
    yellowball: cc.Node;

    /**
     * ボールの種類をまとめる
     * @type {any} balls
     */
    balls: any;

    /**
     * ↑ボタン
     * @type {cc.Button} upButton
     */
    @property(cc.Button)
    upButton: cc.Button;

    /**
     * ↓ボタン
     * @type {cc.Button} downButton
     */
    @property(cc.Button)
    downButton: cc.Button;

    /**
     * 時間をカウント
     * @type {Number} time
     */
	time: Number = 0;

    /**
     * 秒数をカウント
     * @type {Number} sec
     */
	sec: Number = 0;

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
        this.balls = [
            this.blueball,
            this.greenball,
            this.redball,
            this.yellowball,
        ];
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
		// ボールを生成
        const ball = cc.instantiate(this.random(this.balls, 1));
        ball.x = 0;
        ball.y = 0;
        // 新しく追加したノードを親ノードの下に置く
        this.outballs.addChild(ball);
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
     * ↑ボタンを押下したときの処理
     */
    onClickUpButton() {
        if (-10 > this.bar.rotation && this.bar.rotation > -90) {
            this.bar.rotation += 10;
        }
    }

    /**
     * ↓ボタンを押下したときの処理
     */
    onClickDownButton() {
        if (0 > this.bar.rotation && this.bar.rotation > -80) {
            this.bar.rotation -= 10;
        }
    }

    /**
     * 配列からランダムに値を取得する
     * @param {[]} i_ary
     * @return {any} r ランダム値
     */
    random(i_ary) {
        // 添字を全て取得
        var aryKeys = Object.keys(i_ary);
        // 対象の添字をランダムに取得
        var index = aryKeys[Math.floor(Math.random() * aryKeys.length)];
        return i_ary[index];
    }
}
