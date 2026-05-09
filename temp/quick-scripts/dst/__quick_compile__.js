
(function () {
var scripts = [{"deps":{"./assets/HF/touch":1,"./assets/HF/GamePLay":60,"./assets/scripts/ICY_19":16,"./assets/scripts/YC_11":18,"./assets/scripts/YC_4":47,"./assets/scripts/YC_2":17,"./assets/scripts/YC_5":19,"./assets/scripts/YC_6":20,"./assets/scripts/YC_7":22,"./assets/scripts/anim":23,"./assets/scripts/animal":25,"./assets/scripts/arena":26,"./assets/scripts/barPeople":21,"./assets/scripts/bep":24,"./assets/scripts/car":27,"./assets/scripts/charScene3":28,"./assets/scripts/countDownTime":30,"./assets/scripts/game":31,"./assets/scripts/giaoBullet":29,"./assets/scripts/hand":44,"./assets/scripts/listFoood":35,"./assets/scripts/pop":33,"./assets/scripts/stick":34,"./assets/scripts/transer":36,"./assets/scripts/tree":37,"./assets/scripts/udBar":39,"./assets/scripts/APP/GameApp":38,"./assets/scripts/APP/GameDonut":43,"./assets/scripts/APP/guildText":2,"./assets/scripts/APP/listitem":32,"./assets/scripts/APP/mainGun":45,"./assets/scripts/APP/mainMusic":41,"./assets/scripts/APP/lock":40,"./assets/scripts/APP/volum":48,"./assets/scripts/APP/CC2":55,"./assets/scripts/CafeCream/Dia":7,"./assets/scripts/CafeCream/Banh":49,"./assets/scripts/Game28":42,"./assets/scripts/HF/cus":8,"./assets/scripts/ICY_14/Player":9,"./assets/scripts/card/card":46,"./assets/scripts/card/cardList":11,"./assets/scripts/card/bar":51,"./assets/scripts/common/JoyStick":50,"./assets/scripts/common/AdManager":10,"./assets/scripts/listener/rangeListener":12,"./assets/scripts/listener/treeListener":53,"./assets/scripts/listener/charListener":52,"./assets/scripts/pop/popFarm":15,"./assets/CakeAssembly/script/timeClock":3,"./assets/CakeAssembly/script/barCoin":54,"./assets/CakeAssembly/script/barTime":58,"./assets/Gym/Script/Gym3":57,"./assets/Gym/Script/cusGym":56,"./assets/Gym/Script/rep":4,"./assets/Gym/Script/Gym":59,"./assets/Gym/Gym2/Gym2":13,"./assets/HF/GamePlay2":14,"./assets/New Folder/Scripts/Item":5,"./assets/New Folder/Scripts/Ray":62,"./assets/cooking/ietm/cake2":6,"./assets/cooking/ietm/cusMission":63,"./assets/cooking/ietm/donut":61,"./assets/cooking/ietm/meat":65,"./assets/cooking/ietm/preBread":67,"./assets/cooking/ietm/cake":66,"./assets/cooking/ietm/buger":64},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/HF/touch.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/guildText.js"},{"deps":{},"path":"preview-scripts/assets/CakeAssembly/script/timeClock.js"},{"deps":{},"path":"preview-scripts/assets/Gym/Script/rep.js"},{"deps":{},"path":"preview-scripts/assets/New Folder/Scripts/Item.js"},{"deps":{},"path":"preview-scripts/assets/cooking/ietm/cake2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CafeCream/Dia.js"},{"deps":{},"path":"preview-scripts/assets/scripts/HF/cus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ICY_14/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/common/AdManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/card/cardList.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listener/rangeListener.js"},{"deps":{},"path":"preview-scripts/assets/Gym/Gym2/Gym2.js"},{"deps":{},"path":"preview-scripts/assets/HF/GamePlay2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop/popFarm.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ICY_19.js"},{"deps":{},"path":"preview-scripts/assets/scripts/YC_2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/YC_11.js"},{"deps":{},"path":"preview-scripts/assets/scripts/YC_5.js"},{"deps":{},"path":"preview-scripts/assets/scripts/YC_6.js"},{"deps":{},"path":"preview-scripts/assets/scripts/barPeople.js"},{"deps":{},"path":"preview-scripts/assets/scripts/YC_7.js"},{"deps":{},"path":"preview-scripts/assets/scripts/anim.js"},{"deps":{},"path":"preview-scripts/assets/scripts/bep.js"},{"deps":{},"path":"preview-scripts/assets/scripts/animal.js"},{"deps":{},"path":"preview-scripts/assets/scripts/arena.js"},{"deps":{},"path":"preview-scripts/assets/scripts/car.js"},{"deps":{},"path":"preview-scripts/assets/scripts/charScene3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/giaoBullet.js"},{"deps":{},"path":"preview-scripts/assets/scripts/countDownTime.js"},{"deps":{"./animal":25},"path":"preview-scripts/assets/scripts/game.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/listitem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/stick.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listFoood.js"},{"deps":{},"path":"preview-scripts/assets/scripts/transer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/tree.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/GameApp.js"},{"deps":{},"path":"preview-scripts/assets/scripts/udBar.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/lock.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/mainMusic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Game28.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/GameDonut.js"},{"deps":{},"path":"preview-scripts/assets/scripts/hand.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/mainGun.js"},{"deps":{},"path":"preview-scripts/assets/scripts/card/card.js"},{"deps":{},"path":"preview-scripts/assets/scripts/YC_4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/volum.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CafeCream/Banh.js"},{"deps":{},"path":"preview-scripts/assets/scripts/common/JoyStick.js"},{"deps":{},"path":"preview-scripts/assets/scripts/card/bar.js"},{"deps":{"./treeListener":53},"path":"preview-scripts/assets/scripts/listener/charListener.js"},{"deps":{},"path":"preview-scripts/assets/scripts/listener/treeListener.js"},{"deps":{},"path":"preview-scripts/assets/CakeAssembly/script/barCoin.js"},{"deps":{},"path":"preview-scripts/assets/scripts/APP/CC2.js"},{"deps":{},"path":"preview-scripts/assets/Gym/Script/cusGym.js"},{"deps":{},"path":"preview-scripts/assets/Gym/Script/Gym3.js"},{"deps":{},"path":"preview-scripts/assets/CakeAssembly/script/barTime.js"},{"deps":{},"path":"preview-scripts/assets/Gym/Script/Gym.js"},{"deps":{},"path":"preview-scripts/assets/HF/GamePLay.js"},{"deps":{},"path":"preview-scripts/assets/cooking/ietm/donut.js"},{"deps":{},"path":"preview-scripts/assets/New Folder/Scripts/Ray.js"},{"deps":{},"path":"preview-scripts/assets/cooking/ietm/cusMission.js"},{"deps":{},"path":"preview-scripts/assets/cooking/ietm/buger.js"},{"deps":{},"path":"preview-scripts/assets/cooking/ietm/meat.js"},{"deps":{},"path":"preview-scripts/assets/cooking/ietm/cake.js"},{"deps":{},"path":"preview-scripts/assets/cooking/ietm/preBread.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    