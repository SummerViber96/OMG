
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
    },
    endCard: cc.Node,
    listCard2: cc.Node
  },
  openAdUrl: function openAdUrl() {
    console.log("open"); //google instant
    // cc.androidInstant.showInstallPrompt('https://play.google.com/store/apps/details?id=com.game.space.shooter2')

    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink;
    this.endCard.active = true;
    this.listCard2.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsImVuZENhcmQiLCJOb2RlIiwibGlzdENhcmQyIiwib3BlbkFkVXJsIiwiY29uc29sZSIsImxvZyIsImNsaWNrVGFnIiwid2luZG93IiwiYWN0aXZlIiwiYWRjaGFuZWwiLCJvcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQSxLQURMO0FBSVJDLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTO0FBREosS0FKRDtBQU9SQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUztBQURBLEtBUEw7QUFVUkMsSUFBQUEsT0FBTyxFQUFDUCxFQUFFLENBQUNRLElBVkg7QUFXUkMsSUFBQUEsU0FBUyxFQUFDVCxFQUFFLENBQUNRO0FBWEwsR0FIUDtBQWlCTEUsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBRGlCLENBRWpCO0FBQ0E7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUMsSUFBQUEsTUFBTSxDQUFDVixXQUFQLEdBQXFCLEtBQUtBLFdBQTFCO0FBQ0FVLElBQUFBLE1BQU0sQ0FBQ1QsT0FBUCxHQUFpQixLQUFLQSxPQUF0QjtBQUNBUyxJQUFBQSxNQUFNLENBQUNSLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQSxTQUFLQyxPQUFMLENBQWFRLE1BQWIsR0FBb0IsSUFBcEI7QUFDQSxTQUFLTixTQUFMLENBQWVNLE1BQWYsR0FBc0IsS0FBdEI7QUFDQSxRQUFJQyxRQUFRLEdBQUcsOEJBQWY7O0FBQ0EsUUFBR0YsTUFBTSxDQUFDSixTQUFWLEVBQXFCO0FBQ2pCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNBRixNQUFBQSxNQUFNLENBQUNKLFNBQVAsQ0FBaUJNLFFBQWpCO0FBRUgsS0FKRCxNQUlPO0FBQ0hGLE1BQUFBLE1BQU0sQ0FBQ0csSUFBUDtBQUNIO0FBQ0o7QUFuQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhbmRyb2lkTGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW9zTGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVmYXVsdExpbms6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZENhcmQ6Y2MuTm9kZSAsXHJcbiAgICAgICAgbGlzdENhcmQyOmNjLk5vZGVcclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkFkVXJsOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3BlblwiKVxyXG4gICAgICAgIC8vZ29vZ2xlIGluc3RhbnRcclxuICAgICAgICAvLyBjYy5hbmRyb2lkSW5zdGFudC5zaG93SW5zdGFsbFByb21wdCgnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nYW1lLnNwYWNlLnNob290ZXIyJylcclxuICAgICAgICB2YXIgY2xpY2tUYWcgPSAnJztcclxuICAgICAgICB3aW5kb3cuYW5kcm9pZExpbmsgPSB0aGlzLmFuZHJvaWRMaW5rO1xyXG4gICAgICAgIHdpbmRvdy5pb3NMaW5rID0gdGhpcy5pb3NMaW5rO1xyXG4gICAgICAgIHdpbmRvdy5kZWZhdWx0TGluayA9IHRoaXMuZGVmYXVsdExpbms7XHJcbiAgICAgICAgdGhpcy5lbmRDYXJkLmFjdGl2ZT10cnVlXHJcbiAgICAgICAgdGhpcy5saXN0Q2FyZDIuYWN0aXZlPWZhbHNlXHJcbiAgICAgICAgbGV0IGFkY2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICAgICAgaWYod2luZG93Lm9wZW5BZFVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGNoYW5lbCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQWRVcmwoYWRjaGFuZWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXX0=