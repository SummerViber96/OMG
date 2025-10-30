"use strict";
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