
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
    } // endCard:cc.Node ,
    // listCard2:cc.Node

  },
  openAdUrl: function openAdUrl() {
    console.log("open"); //google instant
    // cc.androidInstant.showInstallPrompt('https://play.google.com/store/apps/details?id=com.game.space.shooter2')

    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink; // this.endCard.active=true
    // this.listCard2.active=false

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tbW9uXFxBZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNvbnNvbGUiLCJsb2ciLCJjbGlja1RhZyIsIndpbmRvdyIsImFkY2hhbmVsIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQSxLQVBMLENBVVI7QUFDQTs7QUFYUSxHQUhQO0FBaUJMQyxFQUFBQSxTQUFTLEVBQUUscUJBQVU7QUFDakJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFEaUIsQ0FFakI7QUFDQTs7QUFDQSxRQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBQyxJQUFBQSxNQUFNLENBQUNQLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQU8sSUFBQUEsTUFBTSxDQUFDTixPQUFQLEdBQWlCLEtBQUtBLE9BQXRCO0FBQ0FNLElBQUFBLE1BQU0sQ0FBQ0wsV0FBUCxHQUFxQixLQUFLQSxXQUExQixDQVBpQixDQVFqQjtBQUNBOztBQUNBLFFBQUlNLFFBQVEsR0FBRyw4QkFBZjs7QUFDQSxRQUFHRCxNQUFNLENBQUNKLFNBQVYsRUFBcUI7QUFDakJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxRQUFaO0FBQ0FELE1BQUFBLE1BQU0sQ0FBQ0osU0FBUCxDQUFpQkssUUFBakI7QUFFSCxLQUpELE1BSU87QUFDSEQsTUFBQUEsTUFBTSxDQUFDRSxJQUFQO0FBQ0g7QUFDSjtBQW5DSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFuZHJvaWRMaW5rOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpb3NMaW5rOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0TGluazoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZW5kQ2FyZDpjYy5Ob2RlICxcclxuICAgICAgICAvLyBsaXN0Q2FyZDI6Y2MuTm9kZVxyXG4gICAgfSxcclxuXHJcbiAgICBvcGVuQWRVcmw6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuXCIpXHJcbiAgICAgICAgLy9nb29nbGUgaW5zdGFudFxyXG4gICAgICAgIC8vIGNjLmFuZHJvaWRJbnN0YW50LnNob3dJbnN0YWxsUHJvbXB0KCdodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmdhbWUuc3BhY2Uuc2hvb3RlcjInKVxyXG4gICAgICAgIHZhciBjbGlja1RhZyA9ICcnO1xyXG4gICAgICAgIHdpbmRvdy5hbmRyb2lkTGluayA9IHRoaXMuYW5kcm9pZExpbms7XHJcbiAgICAgICAgd2luZG93Lmlvc0xpbmsgPSB0aGlzLmlvc0xpbms7XHJcbiAgICAgICAgd2luZG93LmRlZmF1bHRMaW5rID0gdGhpcy5kZWZhdWx0TGluaztcclxuICAgICAgICAvLyB0aGlzLmVuZENhcmQuYWN0aXZlPXRydWVcclxuICAgICAgICAvLyB0aGlzLmxpc3RDYXJkMi5hY3RpdmU9ZmFsc2VcclxuICAgICAgICBsZXQgYWRjaGFuZWwgPSAne3tfX2Fkdl9jaGFubmVsc19hZGFwdGVyX199fSdcclxuICAgICAgICBpZih3aW5kb3cub3BlbkFkVXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkY2hhbmVsKTtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW5BZFVybChhZGNoYW5lbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lm9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdfQ==