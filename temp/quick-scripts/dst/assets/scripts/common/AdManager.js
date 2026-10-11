
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNsaWNrVGFnIiwid2luZG93IiwiYWRjaGFuZWwiLCJjb25zb2xlIiwibG9nIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQTtBQVBMLEdBSFA7QUFlTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCO0FBQ0E7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBQyxJQUFBQSxNQUFNLENBQUNMLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQUssSUFBQUEsTUFBTSxDQUFDSixPQUFQLEdBQWlCLEtBQUtBLE9BQXRCO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0gsV0FBUCxHQUFxQixLQUFLQSxXQUExQjtBQUNBLFFBQUlJLFFBQVEsR0FBRyw4QkFBZjs7QUFDQSxRQUFHRCxNQUFNLENBQUNGLFNBQVYsRUFBcUI7QUFDakJJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0YsU0FBUCxDQUFpQkcsUUFBakI7QUFFSCxLQUpELE1BSU87QUFDSEQsTUFBQUEsTUFBTSxDQUFDSSxJQUFQO0FBQ0g7QUFDSjtBQTlCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFuZHJvaWRMaW5rOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpb3NMaW5rOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0TGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb3BlbkFkVXJsOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vZ29vZ2xlIGluc3RhbnRcclxuICAgICAgICAvLyBjYy5hbmRyb2lkSW5zdGFudC5zaG93SW5zdGFsbFByb21wdCgnaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5nYW1lLnNwYWNlLnNob290ZXIyJylcclxuICAgICAgICB2YXIgY2xpY2tUYWcgPSAnJztcclxuICAgICAgICB3aW5kb3cuYW5kcm9pZExpbmsgPSB0aGlzLmFuZHJvaWRMaW5rO1xyXG4gICAgICAgIHdpbmRvdy5pb3NMaW5rID0gdGhpcy5pb3NMaW5rO1xyXG4gICAgICAgIHdpbmRvdy5kZWZhdWx0TGluayA9IHRoaXMuZGVmYXVsdExpbms7XHJcbiAgICAgICAgbGV0IGFkY2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXHJcbiAgICAgICAgaWYod2luZG93Lm9wZW5BZFVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhZGNoYW5lbCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQWRVcmwoYWRjaGFuZWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXX0=