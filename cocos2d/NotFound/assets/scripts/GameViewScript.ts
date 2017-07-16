const {ccclass, property} = cc._decorator;

/**
 * ゲームの部分を表示されている箇所のComponent
 * @extends {cc.Component}
 */
@ccclass
export default class GameViewScript extends cc.Component {

    /**
     * サボテンの移動速度
     * @type {Number} cactaceaeSpeed
     */
    @property({default: 0})
    cactaceaeSpeed: Number = 0;

    /**
     * サボテンの移動するX座標値
     * @type {Number} cactaceaeX
     */
    @property({default: 0})
    cactaceaeX: Number = 0;
    
    /**
     * サボテンのデフォルトのX座標値
     * @type {Number} defaultCactaceaeX
     */
    @property({default: 0})
    defaultCactaceaeX: Number = 0;
    
    /**
     * サボテン画像
     * @type {cc.Node} cactaceae
     */
    @property(cc.Node)
    cactaceae: cc.Node;

    /**
     * ジャンプボタン
     * @type {cc.Button} jumpButton
     */
    @property(cc.Button)
    jumpButton: cc.Button;

    /**
     * ジャンプの高さ
     * @type {Number} jumpHeight
     */
    @property({default: 0})
    jumpHeight: Number = 0;

    /**
     * ジャンプの滞空時間(ms)
     * @type {Number} jumpTime
     */
    @property({default: 0})
    jumpTime: Number = 0;

    /**
     * ジャンプ音
     * @type {cc.AudioClip} jumpSe
     */
    @property(cc.AudioClip)
    jumpSe: cc.AudioClip;

    /**
     * 棒人間
     * @type {cc.Node} runMan
     */
    @property(cc.Node)
    runMan: cc.Node;

    /**
     * 点数
     * @type {cc.Label} score
     */
    @property(cc.Label)
    score: cc.Label

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
        if (GlobalVals.GameStatus === GlobalVals.GameStatusGroup.start) {
            // サボテンを移動させる
            this._moveCactaceae(dt);
            // 点数のカウントを行う
            GlobalVals.Score += 1;
            this.score.string = GlobalVals.Score;
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
     * サボテンを移動させる
     * @param {float} dt 経過時間
     * @private
     */
    private _moveCactaceae(dt) {
        let x = this.cactaceae.x;
        // 加速度と時間をかけて距離を出す
        x += this.cactaceaeSpeed * dt;
        // 新しいX座標が左端より小さい地点にある場合
        if (x <= this.cactaceaeX) {
            // 新しいX座標を左に移す
            x -= this.cactaceaeX;
        }
        // 左端である時
        if (x <= -this.defaultCactaceaeX) {
            // サボテンの座標を右端に戻す
            this.cactaceae.x = this.defaultCactaceaeX;
        } else {
            // サボテンの位置を左に更新する
            this.cactaceae.x = x;
        }
    }

    /**
     * ジャンプボタンを押下したときの処理
     */
    onClickJumpButton() {
        // ジャンプ音の再生
        const se = new cc.AudioSource();
        se.clip = this.jumpSe;
        se.play();

        this.runMan.y += this.jumpHeight;
        setTimeout(() => {
            // 数秒後に着地する
            this.runMan.y -= this.jumpHeight;
        }, this.jumpTime);
    }
}
