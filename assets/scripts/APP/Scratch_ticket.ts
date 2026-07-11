const { ccclass, property } = cc._decorator;
const CALC_RECT_WIDTH = 40;
const CLEAR_LINE_WIDTH = 40;
import GamePlay from './CC2'
@ccclass
export default class Scratch_ticket extends cc.Component {
  @property(cc.Node)
  maskNode: cc.Node = null;
  @property(cc.Camera)
  camera: cc.Camera = null;
  @property(cc.Node)
  ticketNode: cc.Node = null;

  @property(cc.Float)
  lineWidth = 0;
  @property(cc.Node)
  ham: cc.Node = null
  @property(cc.Node)
  tutHam: cc.Node = null
  @property(cc.AudioClip)
  soundCao: cc.AudioClip = null
  @property(cc.Node)
  listBun: cc.Node[] = []
  @property(sp.Skeleton)
  anim: sp.Skeleton = null
  @property(cc.Node)

  listXaphong: cc.Node[] = []
  @property(cc.Label)
  text: cc.Label = null
  @property(cc.Node)
  egg: cc.Node = null
  progerss = 0;

  gamePlay = null;

  onLoad() {
    // this.reset();
    this.gamePlay = cc.Canvas.instance.node.getComponent(GamePlay);
    // this.addEvent()
  }

  addEvent() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
  }

  beforeDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.touchStartEvent, this);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.touchEndEvent, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEndEvent, this);
  }

  touchStartEvent(event) {
    let pos = event.getLocation()
    pos = this.camera.getScreenToWorldPoint(pos);
    let point = this.node.parent.convertToNodeSpaceAR(pos);
    // let isNew = this.clearMask(point);
    this.node.opacity = 255
    this.tutHam.active = false
    if (this.isIdCao) {
      cc.audioEngine.stop(this.isIdCao)
      this.isIdCao = cc.audioEngine.play(this.soundCao, false, 2)
      this.isDelaySound = true;
      this.scheduleOnce(() => {
        this.isDelaySound = false
      }, 0.2)
    }

    let pos2 = event.getLocation()
    pos2 = this.camera.getScreenToWorldPoint(pos2);
    let posHam = this.node.convertToNodeSpaceAR(pos2)
    this.node.position = posHam.add(cc.v3(0, -50))
    // this.gamePlay.handSwipe.active = false;
    // this.gamePlay.handSwipe2.active = false;
  }
  isDelaySound = false
  isIdCao = null
  touchMoveEvent(event) {


    let pos = event.getLocation()
    pos = this.camera.getScreenToWorldPoint(pos);
    let posHam = this.node.parent.convertToNodeSpaceAR(pos)

    this.node.position = posHam.add(cc.v3(0, -50))
    this.checkItem()
    if (!this.isDelaySound) {
      this.isDelaySound = true;
      cc.audioEngine.play(this.soundCao, false, 2)
      this.scheduleOnce(() => {
        this.isDelaySound = false
      }, 0.1)
    }

  }
  checkItem() {
    for (let i = 0; i < this.listBun.length; i++) {
      // console.log(this.node.position.sub(pos).mag())

      if (this.listBun[i].active) {
        let pos = this.listBun[i].position;
        pos = this.listBun[i].parent.convertToWorldSpaceAR(pos);
        pos = this.node.parent.convertToNodeSpaceAR(pos);
        if (this.node.position.sub(pos).mag() < 50) {
          this.listBun[i].active = false
          this.listXaphong[i].active = true
          this.checkEndStep()
          return true
        }
      }
    }
    return false
  }
  isCountStep = 0
  checkEndStep() {
    this.isCountStep++
    console.log(this.isCountStep)
    if (this.isCountStep == 4) {
      this.endStep()
    }
    if (this.isCountStep == 2) {
      // this.anim.setAnimation(0, "Pet_Caring", true)

    }
    if (this.isCountStep == 3) {
      // this.text.string="Great!"
      this.anim.node.parent.position=cc.v3(49,-17)

      this.anim.setAnimation(0, "Pet_FurDrying", true)

    }
  }
  endStep() {
    this.gamePlay.step3()
    
      for (let child of this.listXaphong) {
        cc.tween(child).to(0.5, { opacity: 0 }).call(() => {
          child.active = false
        }).start();
      }
  
    this.node.active = false
  
  }
  touchEndEvent() {
    if (this.isIdCao) {
      cc.audioEngine.stop(this.isIdCao)

    }
    // this.tempDrawPoints = [];
    // this.calcProgress();
  }

  calcDebugger: boolean = false; // 辅助开关，开启则会绘制划开涂层所属的小格子
  calcProgress() {
    let hitItemCount = 0;
    let ctx = this.ticketNode.getComponent(cc.Graphics);
    this.polygonPointsList.forEach((item) => {
      if (!item.isHit) return;
      hitItemCount += 1;

      if (!this.calcDebugger) return;
      ctx.rect(item.rect.x, item.rect.y, item.rect.width, item.rect.height);
      ctx.fillColor = cc.color(216, 18, 18, 255);
      ctx.fill();
    });

    this.progerss = Math.ceil((hitItemCount / this.polygonPointsList.length) * 100);
    // console.log(this.progerss);
    if (this.progerss > 5) {
      this.tutHam.active = false
    }
    if (this.progerss >= 50) {
      this.beforeDestroy();
      this.ham.active = false
      this.scheduleOnce(() => {
        this.gamePlay.completeScene();

      }, 0.4)
      cc.tween(this.node).to(0.3, { opacity: 0 }).call(() => {
      }).start();
    }
  }

  tempDrawPoints: cc.Vec2[] = [];
  clearMask(pos) {
    let mask: any = this.maskNode.getComponent(cc.Mask);
    let stencil = mask._graphics;
    const len = this.tempDrawPoints.length;
    this.tempDrawPoints.push(pos);
    let isNewScratch = false; // 👈 quan trọng

    if (len <= 1) {
      // 只有一个点，用圆来清除涂层
      stencil.circle(pos.x, pos.y, CLEAR_LINE_WIDTH * this.lineWidth);
      stencil.fill();

      // 记录点所在的格子
      this.polygonPointsList.forEach((item) => {
        if (item.isHit) return;
        const xFlag = pos.x > item.rect.x && pos.x < item.rect.x + item.rect.width;
        const yFlag = pos.y > item.rect.y && pos.y < item.rect.y + item.rect.height;
        if (xFlag && yFlag) {
          isNewScratch = true; // ✅ có cạo mới
          item.isHit = true;
        }
      });
    } else {
      // 存在多个点，用线段来清除涂层
      let prevPos = this.tempDrawPoints[len - 2];
      let curPos = this.tempDrawPoints[len - 1];

      stencil.moveTo(prevPos.x, prevPos.y);
      stencil.lineTo(curPos.x, curPos.y);
      stencil.lineWidth = CLEAR_LINE_WIDTH * 2 * this.lineWidth;
      stencil.lineCap = cc.Graphics.LineCap.ROUND;
      stencil.lineJoin = cc.Graphics.LineJoin.ROUND;
      stencil.strokeColor = cc.color(255, 255, 255, 255);
      stencil.stroke();

      // 记录线段经过的格子
      this.polygonPointsList.forEach((item) => {
        // item.isHit = item.isHit || cc.Intersection.lineRect(prevPos, curPos, item.rect);
        if (item.isHit) return;

        if (cc.Intersection.lineRect(prevPos, curPos, item.rect)) {
          item.isHit = true;
          isNewScratch = true; // ✅ có cạo mới
        }
      });
    }
    return isNewScratch;

  }

  polygonPointsList: { rect: cc.Rect; isHit: boolean }[] = [];
  reset() {
    let mask: any = this.maskNode.getComponent(cc.Mask);
    mask._graphics.clear();

    this.tempDrawPoints = [];
    this.polygonPointsList = [];
    this.progerss = 0;
    this.ticketNode.getComponent(cc.Graphics).clear();

    // 生成小格子，用来辅助统计涂层的刮开比例
    for (let x = 0; x < 250; x += CALC_RECT_WIDTH) {
      for (let y = 0; y < 270; y += CALC_RECT_WIDTH) {
        this.polygonPointsList.push({
          rect: cc.rect(x - 250 / 2, y - 270 / 2, CALC_RECT_WIDTH, CALC_RECT_WIDTH),
          isHit: false
        });
      }
    }
  }
}
