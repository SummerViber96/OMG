// import { Constant } from "../../Constant_1_1";
// import Bullet from "../../tower/Bullet";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }
    shoot(enemy, tower) {
        // this.data = tower.data;
        this.shootCustom(enemy, tower);
    }
    shootCustom(enemy, tower) {
        // cc.Canvas.instance.node.emit(Constant.EVENT.ARCHER_SHOOT);
        // this.node.zIndex = Constant.TOWER_FRONT_BULLET_ZINDEX;

        this.node.setPosition(cc.v3(0, 90));
        this.node.zIndex = (tower.isFront) ? 4 : 0;

        let enemyNode = enemy;
        let ePosW = enemyNode.parent.convertToWorldSpaceAR(enemyNode.position);
        let ePos = this.node.parent.convertToNodeSpaceAR(ePosW);

        // move
        let tPos = cc.v2(this.node.position.x, this.node.position.y);
        let middlePosX = (ePos.x - this.node.position.x) / 2;

        let rotateParam = (this.node.parent.x < enemyNode.x) ? 1 : -1;
        this.node.angle = (this.node.parent.x < enemyNode.x) ? 50 : 130;

        this.getRotateAngle(enemy, tower);

        this.node.runAction(cc.sequence(cc.spawn(cc.bezierTo(0.6, [tPos, tPos.add(cc.v2(middlePosX, this.getShootHeight(enemy, tower))), ePos.add(cc.v3(0, 30))]),
            cc.rotateBy(0.6, this.getRotateAngle(enemy, tower) * rotateParam)
        ),
            cc.callFunc(function () {
                if (enemy.isValid) {
                    // enemy.attacked(this.data.attackDamage, this.data.attackType);
                }
                this.node.destroy();
            }.bind(this))));
    }

    getShootHeight(enemy, tower) {
        let ePos = enemy.position;
        let tPos = tower.node.position;
        let distance = Math.abs(Math.abs(ePos.x) - Math.abs(tPos.x));
        if (distance < 30) {
            return 10;
        } else if (distance < 50) {
            return 30;
        } else if (distance < 100) {
            return 60;
        } else if (distance < 150) {
            return 80;
        }
        return 100;
    }

    getRotateAngle(enemy, tower) {
        let ePos = enemy.position;
        let tPos = tower.node.position;
        let distance = Math.abs(Math.abs(ePos.x) - Math.abs(tPos.x));
        if (tower.isFront) {
            if (distance < 50) {
                return 140;
            } else if (distance < 100) {
                return 130;
            } else if (distance < 150) {
                return 120;
            }
            return 60;
        }
        return 50;
    }

    getDistance(destination) {
        return destination.sub(this.node.position).mag();
    }

    getStartPos(tower) {
        let anim = tower.anim.node;
        let anim2 = tower.anim2.node;
        let addPos = cc.v3();
        if (anim.name == anim2.name) {
            addPos = cc.v3(-4, 59);
        } else {
            addPos = cc.v3(26, 64);
        }
        return this.node.position.add(addPos);
    }

    // update (dt) {}
}
