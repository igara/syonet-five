const {ccclass, property} = cc._decorator;

// 物理演算を扱う
const physicsManager = cc.director.getPhysicsManager();
physicsManager.enabled = true;

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
     * 左の価格
     * @type {cc.Sprite} leftYen
     */
    @property(cc.Sprite)
    leftYen: cc.Sprite;

    /**
     * 右の価格
     * @type {cc.Sprite} rightYen
     */
    @property(cc.Sprite)
    rightYen: cc.Sprite;

    /**
     * 0
     * @type {cc.Sprite} zero
     */
    @property(cc.Sprite)
    zero: cc.Sprite;

    /**
     * 1
     * @type {cc.Sprite} one
     */
    @property(cc.Sprite)
    one: cc.Sprite;

    /**
     * 2
     * @type {cc.Sprite} two
     */
    @property(cc.Sprite)
    two: cc.Sprite;

    /**
     * 3
     * @type {cc.Sprite} three
     */
    @property(cc.Sprite)
    three: cc.Sprite;

    /**
     * 4
     * @type {cc.Sprite} four
     */
    @property(cc.Sprite)
    four: cc.Sprite;

    /**
     * 5
     * @type {cc.Sprite} five
     */
    @property(cc.Sprite)
    five: cc.Sprite;

    /**
     * 6
     * @type {cc.Sprite} six
     */
    @property(cc.Sprite)
    six: cc.Sprite;

    /**
     * 7
     * @type {cc.Sprite} seven
     */
    @property(cc.Sprite)
    seven: cc.Sprite;

    /**
     * 8
     * @type {cc.Sprite} eight
     */
    @property(cc.Sprite)
    eight: cc.Sprite;

    /**
     * 9
     * @type {cc.Sprite} nine
     */
    @property(cc.Sprite)
    nine: cc.Sprite;

    /**
     * 5000兆円
     * @type {cc.Node} tyoYen
     */
    @property(cc.Node)
    tyoYen: cc.Node;

    /**
     * @type {Number: cc.Sprite.spriteFrame} 数字のSpriteFrame
     */
    numSpriteFrame = {};

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
        this.numSpriteFrame = {
            0: this.zero.spriteFrame,
            1: this.one.spriteFrame,
            2: this.two.spriteFrame,
            3: this.three.spriteFrame,
            4: this.four.spriteFrame,
            5: this.five.spriteFrame,
            6: this.six.spriteFrame,
            7: this.seven.spriteFrame,
            8: this.eight.spriteFrame,
            9: this.nine.spriteFrame,
        };
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
        if (GlobalVals.GameStatus !== GlobalVals.GameStatusGroup.dead) {
            if (GlobalVals.TotalYen > 0) {
                GlobalVals.TotalYen -= 1;
                GlobalVals.RightYen += 1;
                if (GlobalVals.RightYen > 9) {
                    GlobalVals.RightYen = 0;
                    this.rightYen.spriteFrame = this.numSpriteFrame[GlobalVals.RightYen];
                    GlobalVals.LeftYen += 1;
                    if (GlobalVals.LeftYen > 9) {
                        GlobalVals.LeftYen = 0;
                        this.leftYen.spriteFrame = this.numSpriteFrame[GlobalVals.LeftYen];
                        GlobalVals.PlayerCount += 1;
                    } else {
                        this.leftYen.spriteFrame = this.numSpriteFrame[GlobalVals.LeftYen];
                    }
                } else {
                    this.rightYen.spriteFrame = this.numSpriteFrame[GlobalVals.RightYen];
                }
            }
        }
        if (GlobalVals.isTyoYenBlockCol === true) {
            this.tyoYen.y = 300;
            this.tyoYen.x = 0;
            GlobalVals.isTyoYenBlockCol = false;
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
