
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed94bn8D51Mt57sqqgqKgvE', 'AdManager');
// scripts/common/AdManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    androidLink: {
      "default": ''
    },
    iosLink: {
      "default": ''
    },
    defaultLink: {
      "default": ''
    }
  },
  openAdUrl: function openAdUrl() {
    console.log("open"); //google instant
    // cc.androidInstant.showInstallPrompt('https://play.google.com/store/apps/details?id=com.game.space.shooter2')

    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink;
    var adchanel = '{{__adv_channels_adapter__}}';

    if (window.openAdUrl) {
      console.log(adchanel);
      window.openAdUrl(adchanel);
    } else {
      window.open();
    }
  }
});

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNvbnNvbGUiLCJsb2ciLCJjbGlja1RhZyIsIndpbmRvdyIsImFkY2hhbmVsIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQTtBQVBMLEdBSFA7QUFlTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBRGlCLENBRWpCO0FBQ0E7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUMsSUFBQUEsTUFBTSxDQUFDUCxXQUFQLEdBQXFCLEtBQUtBLFdBQTFCO0FBQ0FPLElBQUFBLE1BQU0sQ0FBQ04sT0FBUCxHQUFpQixLQUFLQSxPQUF0QjtBQUNBTSxJQUFBQSxNQUFNLENBQUNMLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQSxRQUFJTSxRQUFRLEdBQUcsOEJBQWY7O0FBQ0EsUUFBR0QsTUFBTSxDQUFDSixTQUFWLEVBQXFCO0FBQ2pCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBWjtBQUNBRCxNQUFBQSxNQUFNLENBQUNKLFNBQVAsQ0FBaUJLLFFBQWpCO0FBRUgsS0FKRCxNQUlPO0FBQ0hELE1BQUFBLE1BQU0sQ0FBQ0UsSUFBUDtBQUNIO0FBQ0o7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhbmRyb2lkTGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW9zTGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdExpbms6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9wZW5BZFVybDogZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW5cIilcclxuICAgICAgICAvL2dvb2dsZSBpbnN0YW50XHJcbiAgICAgICAgLy8gY2MuYW5kcm9pZEluc3RhbnQuc2hvd0luc3RhbGxQcm9tcHQoJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZ2FtZS5zcGFjZS5zaG9vdGVyMicpXHJcbiAgICAgICAgdmFyIGNsaWNrVGFnID0gJyc7XHJcbiAgICAgICAgd2luZG93LmFuZHJvaWRMaW5rID0gdGhpcy5hbmRyb2lkTGluaztcclxuICAgICAgICB3aW5kb3cuaW9zTGluayA9IHRoaXMuaW9zTGluaztcclxuICAgICAgICB3aW5kb3cuZGVmYXVsdExpbmsgPSB0aGlzLmRlZmF1bHRMaW5rO1xyXG4gICAgICAgIGxldCBhZGNoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xyXG4gICAgICAgIGlmKHdpbmRvdy5vcGVuQWRVcmwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWRjaGFuZWwpO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbkFkVXJsKGFkY2hhbmVsKTtcclxuICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il19