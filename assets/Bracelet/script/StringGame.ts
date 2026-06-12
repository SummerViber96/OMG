const { ccclass, property } = cc._decorator;

@ccclass
export default class StringGame extends cc.Component {

    @property(cc.Node)
    main: cc.Node = null;

    @property(cc.Node)
    plate: cc.Node = null;

    @property([cc.Node])
    strings: cc.Node[] = [];
    @property(cc.Node)
    listStringBot: cc.Node = null;
    @property(cc.Node)
    btnOk: cc.Node = null
    @property(cc.Node)
    hand: cc.Node = null

    private selectedString: cc.Node = null;
    private isDragging: boolean = false;
    private activeTouchId: number = -1;
    private originParent: cc.Node = null;
    private originPos: cc.Vec3 = null;
    private originSiblingIndex: number = 0;
    private touchStartPos: cc.Vec2 = null;
    private plateOriginPos: cc.Vec3 = null;
arrString=[]
    onLoad() {
        this.resolveReferences();
        this.initStrings();
        this.enableStringColliders();
        this.cachePlateOriginPos();
    }

    start() {
        const touchNode = cc.Canvas.instance.node;
        touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    private resolveReferences() {
        if (!this.main) {
            let node = this.node.parent;
            while (node) {
                if (node.name === 'main') {
                    this.main = node;
                    break;
                }
                node = node.parent;
            }
        }

        if (!this.plate && this.main) {
            const khay = this.main.getChildByName('khay');
            if (khay) {
                this.plate = khay.getChildByName('plate') || khay;
            }
        }
    }

    private initStrings() {
        if (this.strings.length > 0) return;

        if (this.node.name === 'string') {
            this.strings = this.node.children.filter(child => child.active);
            return;
        }

        const container = this.main && this.main.getChildByName('string');
        if (container) {
            this.strings = container.children.filter(child => child.active);
        }
    }

    private enableStringColliders() {
        this.strings.forEach(str => {
            const collider = str.getComponent(cc.BoxCollider);
            if (collider) collider.enabled = true;
        });
    }

    onTouchStart(event: cc.Event.EventTouch) {
        if (this.isDragging) return;

        this.activeTouchId = event.getID();
        this.touchStartPos = event.getLocation();

        const hitString = this.getStringAtScreenPos(this.touchStartPos);
        if (hitString) {
            this.selectString(hitString, this.getMainLocalPos(this.touchStartPos), event.getID());
        }
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if (event.getID() !== this.activeTouchId) return;

        const touchPos = event.getLocation();

        if (this.isDragging) {
            this.selectedString.setPosition(this.getMainLocalPos(touchPos));
            return;
        }

        const hitString = this.getStringAtScreenPos(touchPos);
        if (hitString) {
            this.selectString(hitString, this.getMainLocalPos(touchPos), event.getID());
        }
    }

    onTouchEnd(event: cc.Event.EventTouch) {
        if (event.getID() !== this.activeTouchId) return;

        if (!this.isDragging) {
            this.resetTouchState();
            return;
        }

        const localPos = this.getMainLocalPos(event.getLocation());
        this.selectedString.setPosition(localPos);

        if (this.isOnPlate(this.selectedString)) {
            this.onStringSelected(this.selectedString);
            this.hand.active = false
        } else {
            this.resetString(this.selectedString);
        }

        this.releaseDrag();
    }

    private getMainLocalPos(screenPos: cc.Vec2): cc.Vec3 {
        const parent = this.main || this.node.parent;
        return parent.convertToNodeSpaceAR(screenPos);
    }

    private getStringAtScreenPos(screenPos: cc.Vec2): cc.Node {
        for (let i = this.strings.length - 1; i >= 0; i--) {
            const str = this.strings[i];
            if (!str || !str.active) continue;
            if (this.isTouchInCollider(screenPos, str)) {
                return str;
            }
        }
        return null;
    }

    private isTouchInCollider(screenPos: cc.Vec2, node: cc.Node): boolean {
        const collider = node.getComponent(cc.BoxCollider);
        if (!collider || !collider.enabled) return false;

        const localPos = node.convertToNodeSpaceAR(screenPos);
        const rect = cc.rect(
            collider.offset.x - collider.size.width * 0.5,
            collider.offset.y - collider.size.height * 0.5,
            collider.size.width,
            collider.size.height
        );
        return rect.contains(localPos);
    }

    private getColliderWorldRect(node: cc.Node, collider: cc.BoxCollider): cc.Rect {
        const worldCenter = node.convertToWorldSpaceAR(collider.offset);
        const scale = this.getWorldScale(node);
        const width = collider.size.width * scale.x;
        const height = collider.size.height * scale.y;
        return cc.rect(
            worldCenter.x - width * 0.5,
            worldCenter.y - height * 0.5,
            width,
            height
        );
    }

    private getWorldScale(node: cc.Node): cc.Vec2 {
        let scaleX = 1;
        let scaleY = 1;
        let current = node;
        while (current) {
            scaleX *= current.scaleX;
            scaleY *= current.scaleY;
            current = current.parent;
        }
        return cc.v2(Math.abs(scaleX), Math.abs(scaleY));
    }

    private collidersOverlap(nodeA: cc.Node, nodeB: cc.Node): boolean {
        const colliderA = nodeA.getComponent(cc.BoxCollider);
        const colliderB = nodeB.getComponent(cc.BoxCollider);
        if (!colliderA || !colliderB) return false;

        const rectA = this.getColliderWorldRect(nodeA, colliderA);
        const rectB = this.getColliderWorldRect(nodeB, colliderB);
        return rectA.intersects(rectB);
    }

    private cachePlateOriginPos() {
        if (this.plate) {
            this.plateOriginPos = this.plate.position.clone();
        }
    }

    private movePlateUp() {
        if (!this.plate || !this.plateOriginPos) return;
        let newPos = this.plateOriginPos.add(cc.v3(0, 50))
        cc.tween(this.plate).to(0.3, { position: newPos }).start()
        // this.plate.setPosition(
        //     this.plateOriginPos.x,
        //     this.plateOriginPos.y + 10,
        //     this.plateOriginPos.z
        // );
    }

    private resetPlatePosition() {
        if (!this.plate || !this.plateOriginPos) return;
        this.plate.setPosition(this.plateOriginPos);
    }

    private selectString(stringNode: cc.Node, localPos: cc.Vec3, touchId: number) {
        this.isDragging = true;
        this.activeTouchId = touchId;
        this.selectedString = stringNode;
        this.movePlateUp();
        this.originParent = stringNode.parent;
        this.originPos = stringNode.position.clone();
        this.originSiblingIndex = stringNode.getSiblingIndex();

        const worldPos = stringNode.parent.convertToWorldSpaceAR(stringNode.position);
        const parent = this.main || this.node.parent;
        stringNode.parent = parent;
        stringNode.setPosition(parent.convertToNodeSpaceAR(worldPos));
        stringNode.setSiblingIndex(parent.childrenCount - 1);
        stringNode.setPosition(localPos);
    }

    private isOnPlate(stringNode: cc.Node): boolean {
        const plateNode = this.getPlateColliderNode();
        if (!plateNode) return false;
        const plateCollider = plateNode.getComponent(cc.BoxCollider);
        if (plateCollider) {
            return this.collidersOverlap(stringNode, plateNode);
        }
        const worldPos = stringNode.parent.convertToWorldSpaceAR(stringNode.position);
        return plateNode.getBoundingBoxToWorld().contains(worldPos);
    }

    private getPlateColliderNode(): cc.Node {
        if (!this.plate) return null;
        if (this.plate.getComponent(cc.BoxCollider)) return this.plate;
        const khay = this.plate.parent;
        if (khay && khay.getComponent(cc.BoxCollider)) return khay;
        return this.plate;
    }

    resetString(stringNode: cc.Node) {
        stringNode.parent = this.originParent;
        stringNode.setPosition(this.originPos);
        stringNode.setSiblingIndex(this.originSiblingIndex);
        stringNode.getComponent("ItemString").originSiblingIndex = this.originSiblingIndex
    }

    private releaseDrag() {
        this.resetPlatePosition();
        this.selectedString = null;
        this.isDragging = false;
        this.resetTouchState();
    }

    private resetTouchState() {
        this.activeTouchId = -1;
        this.touchStartPos = null;
    }
    isOldStringBot = null
    onStringSelected(stringNode: cc.Node) {
        const index = this.strings.indexOf(stringNode);
        for (let i = 0; i < this.listStringBot.children.length; i++) {

            this.listStringBot.children[i].active = false

        }
        if (index >= 0) {
            // console.log( this.strings[index]);
            // this.strings[index].active = false
            let id = this.strings[index].getComponent("ItemString").tag;
            globalThis.idString = id;
            this.strings[index].position = this.strings[index].getComponent("ItemString").localPos;
            this.strings[index].active = false
            this.strings[index].setSiblingIndex(this.strings[index].getComponent("ItemString").originSiblingIndex);

            // this.strings.splice(index, 1);

            this.listStringBot.children[id].active = true;
            if (this.isOldStringBot) {
                let indexOld = this.isOldStringBot.getComponent("ItemString").tag;
                console.log(indexOld);

                this.strings[indexOld].active = true

            }
            this.isOldStringBot = this.listStringBot.children[id]

            if (!this.isFirst) {
                this.isFirst = true;
                this.btnOk.scale = 0;
                this.btnOk.active = true
                cc.tween(this.btnOk).to(0.3, { scale: 1 }).start()
            }
        }
        this.node.emit('select-string', stringNode);
    }
    isFirst = false
    OffTOuch(){
        const touchNode = cc.Canvas.instance.node;
        touchNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        touchNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);   
    }
    offString(){
        for(let i=0;i<this.strings.length;i++){
            this.strings[i].active = false;
            this.strings[i].opacity = 0;
        }
    }
}
