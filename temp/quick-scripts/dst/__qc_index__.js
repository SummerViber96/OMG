
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
require('./assets/scripts/KF_2/Char');
require('./assets/scripts/KF_2/CharListener');
require('./assets/scripts/KF_2/Customer');
require('./assets/scripts/KF_2/GamePlay');
require('./assets/scripts/KF_2/JoyStick');
require('./assets/scripts/KF_2/MR_4');
require('./assets/scripts/KF_2/anim');
require('./assets/scripts/MR_23');
require('./assets/scripts/MR_Decor');
require('./assets/scripts/banGhe');
require('./assets/scripts/common/AdManager');
require('./assets/scripts/common/PlatformBrandIcon');
require('./assets/scripts/common/PlayAudio');
require('./assets/scripts/cus');
require('./assets/scripts/game');

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