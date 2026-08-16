
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
cc._RF.push(module, '8f337+j6dlK4oyeX5iPIsII', 'AdManager');
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
    //google instant
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNsaWNrVGFnIiwid2luZG93IiwiYWRjaGFuZWwiLCJjb25zb2xlIiwibG9nIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQTtBQVBMLEdBSFA7QUFlTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCO0FBQ0E7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBQyxJQUFBQSxNQUFNLENBQUNMLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQUssSUFBQUEsTUFBTSxDQUFDSixPQUFQLEdBQWlCLEtBQUtBLE9BQXRCO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0gsV0FBUCxHQUFxQixLQUFLQSxXQUExQjtBQUNBLFFBQUlJLFFBQVEsR0FBRyw4QkFBZjs7QUFDQSxRQUFHRCxNQUFNLENBQUNGLFNBQVYsRUFBcUI7QUFDakJJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0YsU0FBUCxDQUFpQkcsUUFBakI7QUFFSCxLQUpELE1BSU87QUFDSEQsTUFBQUEsTUFBTSxDQUFDSSxJQUFQO0FBQ0g7QUFDSjtBQTlCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhbmRyb2lkTGluazoge1xuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW9zTGluazoge1xuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdExpbms6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb3BlbkFkVXJsOiBmdW5jdGlvbigpe1xuICAgICAgICAvL2dvb2dsZSBpbnN0YW50XG4gICAgICAgIC8vIGNjLmFuZHJvaWRJbnN0YW50LnNob3dJbnN0YWxsUHJvbXB0KCdodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdhbWUuc3BhY2Uuc2hvb3RlcjInKVxuICAgICAgICB2YXIgY2xpY2tUYWcgPSAnJztcbiAgICAgICAgd2luZG93LmFuZHJvaWRMaW5rID0gdGhpcy5hbmRyb2lkTGluaztcbiAgICAgICAgd2luZG93Lmlvc0xpbmsgPSB0aGlzLmlvc0xpbms7XG4gICAgICAgIHdpbmRvdy5kZWZhdWx0TGluayA9IHRoaXMuZGVmYXVsdExpbms7XG4gICAgICAgIGxldCBhZGNoYW5lbCA9ICd7e19fYWR2X2NoYW5uZWxzX2FkYXB0ZXJfX319J1xuICAgICAgICBpZih3aW5kb3cub3BlbkFkVXJsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGNoYW5lbCk7XG4gICAgICAgICAgICB3aW5kb3cub3BlbkFkVXJsKGFkY2hhbmVsKTtcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19