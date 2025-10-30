
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/HF/GamePLay');
require('./assets/HF/GamePlay2');
require('./assets/HF/touch');
require('./assets/scripts/APP/GameApp');
require('./assets/scripts/APP/mainGun');
require('./assets/scripts/APP/mainMusic');
require('./assets/scripts/APP/volum');
require('./assets/scripts/Game28');
require('./assets/scripts/HF/cus');
require('./assets/scripts/ICY_14/Player');
require('./assets/scripts/ICY_19');
require('./assets/scripts/YC_11');
require('./assets/scripts/YC_2');
require('./assets/scripts/YC_4');
require('./assets/scripts/YC_5');
require('./assets/scripts/YC_6');
require('./assets/scripts/YC_7');
require('./assets/scripts/anim');
require('./assets/scripts/animal');
require('./assets/scripts/arena');
require('./assets/scripts/barPeople');
require('./assets/scripts/bep');
require('./assets/scripts/car');
require('./assets/scripts/card/bar');
require('./assets/scripts/card/card');
require('./assets/scripts/card/cardList');
require('./assets/scripts/charScene3');
require('./assets/scripts/common/AdManager');
require('./assets/scripts/common/JoyStick');
require('./assets/scripts/game');
require('./assets/scripts/giaoBullet');
require('./assets/scripts/hand');
require('./assets/scripts/listFoood');
require('./assets/scripts/listener/charListener');
require('./assets/scripts/listener/rangeListener');
require('./assets/scripts/listener/treeListener');
require('./assets/scripts/pop');
require('./assets/scripts/pop/popFarm');
require('./assets/scripts/stick');
require('./assets/scripts/transer');
require('./assets/scripts/tree');
require('./assets/scripts/udBar');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();