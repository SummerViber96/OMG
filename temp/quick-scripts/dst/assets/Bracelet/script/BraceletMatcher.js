
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Bracelet/script/BraceletMatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22a9bEuU6RJJIEj82n2vQmF', 'BraceletMatcher');
// Bracelet/script/BraceletMatcher.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcFullScore = exports.calcMatchPercent = exports.calcCharmMatchPercent = exports.SCORE_WEIGHT = void 0;
exports.SCORE_WEIGHT = {
    CORD: 30,
    CHARM: 50,
    KEYCHAIN: 20,
};
function calcCharmMatchPercent(expected, actual, positionTolerance) {
    if (expected.length === 0)
        return 0;
    var used = new Set();
    var matched = 0;
    for (var e = 0; e < expected.length; e++) {
        var exp = expected[e];
        var bestIdx = -1;
        var bestDist = Number.MAX_VALUE;
        for (var i = 0; i < actual.length; i++) {
            if (used.has(i))
                continue;
            var act = actual[i];
            var tagMatch = exp.tag <= 0 || act.tag === exp.tag;
            var colorMatch = exp.colorIndex <= 0 || act.colorIndex === exp.colorIndex;
            if (!tagMatch || act.side !== exp.side || !colorMatch)
                continue;
            var dist = Math.abs(act.pathDistance - exp.pathDistance);
            if (dist < bestDist) {
                bestDist = dist;
                bestIdx = i;
            }
        }
        if (bestIdx >= 0 && bestDist <= positionTolerance) {
            used.add(bestIdx);
            matched++;
        }
    }
    return Math.round((matched / expected.length) * 100);
}
exports.calcCharmMatchPercent = calcCharmMatchPercent;
/** @deprecated dùng calcFullScore */
function calcMatchPercent(expected, actual, positionTolerance) {
    return calcCharmMatchPercent(expected, actual, positionTolerance);
}
exports.calcMatchPercent = calcMatchPercent;
function calcFullScore(expectedCordId, actualCordId, expectedCharms, actualCharms, expectedKeychainIndex, actualKeychainIndex, positionTolerance) {
    var cordScore = expectedCordId === actualCordId ? exports.SCORE_WEIGHT.CORD : 0;
    var charmPercent = calcCharmMatchPercent(expectedCharms, actualCharms, positionTolerance);
    var charmScore = Math.round((charmPercent / 100) * exports.SCORE_WEIGHT.CHARM);
    var keychainScore = (actualKeychainIndex >= 0 && expectedKeychainIndex === actualKeychainIndex)
        ? exports.SCORE_WEIGHT.KEYCHAIN
        : 0;
    return {
        cordScore: cordScore,
        charmScore: charmScore,
        keychainScore: keychainScore,
        total: cordScore + charmScore + keychainScore,
        charmPercent: charmPercent,
    };
}
exports.calcFullScore = calcFullScore;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQnJhY2VsZXRcXHNjcmlwdFxcQnJhY2VsZXRNYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCYSxRQUFBLFlBQVksR0FBRztJQUN4QixJQUFJLEVBQUUsRUFBRTtJQUNSLEtBQUssRUFBRSxFQUFFO0lBQ1QsUUFBUSxFQUFFLEVBQUU7Q0FDTixDQUFDO0FBRVgsU0FBZ0IscUJBQXFCLENBQ2pDLFFBQXlCLEVBQ3pCLE1BQXVCLEVBQ3ZCLGlCQUF5QjtJQUV6QixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXBDLElBQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFDL0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRWhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3RDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBRWhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsU0FBUztZQUUxQixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3JELElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUM1RSxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVU7Z0JBQUUsU0FBUztZQUVoRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNELElBQUksSUFBSSxHQUFHLFFBQVEsRUFBRTtnQkFDakIsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUNmO1NBQ0o7UUFFRCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLGlCQUFpQixFQUFFO1lBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDYjtLQUNKO0lBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBckNELHNEQXFDQztBQUVELHFDQUFxQztBQUNyQyxTQUFnQixnQkFBZ0IsQ0FDNUIsUUFBeUIsRUFDekIsTUFBdUIsRUFDdkIsaUJBQXlCO0lBRXpCLE9BQU8scUJBQXFCLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFORCw0Q0FNQztBQUVELFNBQWdCLGFBQWEsQ0FDekIsY0FBc0IsRUFDdEIsWUFBb0IsRUFDcEIsY0FBK0IsRUFDL0IsWUFBNkIsRUFDN0IscUJBQTZCLEVBQzdCLG1CQUEyQixFQUMzQixpQkFBeUI7SUFFekIsSUFBTSxTQUFTLEdBQUcsY0FBYyxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsb0JBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxRSxJQUFNLFlBQVksR0FBRyxxQkFBcUIsQ0FDdEMsY0FBYyxFQUNkLFlBQVksRUFDWixpQkFBaUIsQ0FDcEIsQ0FBQztJQUNGLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLEdBQUcsb0JBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6RSxJQUFNLGFBQWEsR0FBRyxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxxQkFBcUIsS0FBSyxtQkFBbUIsQ0FBQztRQUM3RixDQUFDLENBQUMsb0JBQVksQ0FBQyxRQUFRO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUixPQUFPO1FBQ0gsU0FBUyxXQUFBO1FBQ1QsVUFBVSxZQUFBO1FBQ1YsYUFBYSxlQUFBO1FBQ2IsS0FBSyxFQUFFLFNBQVMsR0FBRyxVQUFVLEdBQUcsYUFBYTtRQUM3QyxZQUFZLGNBQUE7S0FDZixDQUFDO0FBQ04sQ0FBQztBQTdCRCxzQ0E2QkMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBCcmFjZWxldFNpZGUgPSAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFybVNsb3REYXRhIHtcclxuICAgIHRhZzogbnVtYmVyO1xyXG4gICAgY29sb3JJbmRleDogbnVtYmVyO1xyXG4gICAgc2lkZTogQnJhY2VsZXRTaWRlO1xyXG4gICAgcGF0aERpc3RhbmNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWF0Y2hTY29yZUJyZWFrZG93biB7XHJcbiAgICBjb3JkU2NvcmU6IG51bWJlcjtcclxuICAgIGNoYXJtU2NvcmU6IG51bWJlcjtcclxuICAgIGtleWNoYWluU2NvcmU6IG51bWJlcjtcclxuICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICBjaGFybVBlcmNlbnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNDT1JFX1dFSUdIVCA9IHtcclxuICAgIENPUkQ6IDMwLFxyXG4gICAgQ0hBUk06IDUwLFxyXG4gICAgS0VZQ0hBSU46IDIwLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNDaGFybU1hdGNoUGVyY2VudChcclxuICAgIGV4cGVjdGVkOiBDaGFybVNsb3REYXRhW10sXHJcbiAgICBhY3R1YWw6IENoYXJtU2xvdERhdGFbXSxcclxuICAgIHBvc2l0aW9uVG9sZXJhbmNlOiBudW1iZXJcclxuKTogbnVtYmVyIHtcclxuICAgIGlmIChleHBlY3RlZC5sZW5ndGggPT09IDApIHJldHVybiAwO1xyXG5cclxuICAgIGNvbnN0IHVzZWQgPSBuZXcgU2V0PG51bWJlcj4oKTtcclxuICAgIGxldCBtYXRjaGVkID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IGV4cGVjdGVkLmxlbmd0aDsgZSsrKSB7XHJcbiAgICAgICAgY29uc3QgZXhwID0gZXhwZWN0ZWRbZV07XHJcbiAgICAgICAgbGV0IGJlc3RJZHggPSAtMTtcclxuICAgICAgICBsZXQgYmVzdERpc3QgPSBOdW1iZXIuTUFYX1ZBTFVFO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdHVhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXNlZC5oYXMoaSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWN0ID0gYWN0dWFsW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB0YWdNYXRjaCA9IGV4cC50YWcgPD0gMCB8fCBhY3QudGFnID09PSBleHAudGFnO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvck1hdGNoID0gZXhwLmNvbG9ySW5kZXggPD0gMCB8fCBhY3QuY29sb3JJbmRleCA9PT0gZXhwLmNvbG9ySW5kZXg7XHJcbiAgICAgICAgICAgIGlmICghdGFnTWF0Y2ggfHwgYWN0LnNpZGUgIT09IGV4cC5zaWRlIHx8ICFjb2xvck1hdGNoKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLmFicyhhY3QucGF0aERpc3RhbmNlIC0gZXhwLnBhdGhEaXN0YW5jZSk7XHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3QpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0ID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RJZHggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVzdElkeCA+PSAwICYmIGJlc3REaXN0IDw9IHBvc2l0aW9uVG9sZXJhbmNlKSB7XHJcbiAgICAgICAgICAgIHVzZWQuYWRkKGJlc3RJZHgpO1xyXG4gICAgICAgICAgICBtYXRjaGVkKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChtYXRjaGVkIC8gZXhwZWN0ZWQubGVuZ3RoKSAqIDEwMCk7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCBkw7luZyBjYWxjRnVsbFNjb3JlICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjTWF0Y2hQZXJjZW50KFxyXG4gICAgZXhwZWN0ZWQ6IENoYXJtU2xvdERhdGFbXSxcclxuICAgIGFjdHVhbDogQ2hhcm1TbG90RGF0YVtdLFxyXG4gICAgcG9zaXRpb25Ub2xlcmFuY2U6IG51bWJlclxyXG4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGNhbGNDaGFybU1hdGNoUGVyY2VudChleHBlY3RlZCwgYWN0dWFsLCBwb3NpdGlvblRvbGVyYW5jZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjRnVsbFNjb3JlKFxyXG4gICAgZXhwZWN0ZWRDb3JkSWQ6IG51bWJlcixcclxuICAgIGFjdHVhbENvcmRJZDogbnVtYmVyLFxyXG4gICAgZXhwZWN0ZWRDaGFybXM6IENoYXJtU2xvdERhdGFbXSxcclxuICAgIGFjdHVhbENoYXJtczogQ2hhcm1TbG90RGF0YVtdLFxyXG4gICAgZXhwZWN0ZWRLZXljaGFpbkluZGV4OiBudW1iZXIsXHJcbiAgICBhY3R1YWxLZXljaGFpbkluZGV4OiBudW1iZXIsXHJcbiAgICBwb3NpdGlvblRvbGVyYW5jZTogbnVtYmVyXHJcbik6IE1hdGNoU2NvcmVCcmVha2Rvd24ge1xyXG4gICAgY29uc3QgY29yZFNjb3JlID0gZXhwZWN0ZWRDb3JkSWQgPT09IGFjdHVhbENvcmRJZCA/IFNDT1JFX1dFSUdIVC5DT1JEIDogMDtcclxuXHJcbiAgICBjb25zdCBjaGFybVBlcmNlbnQgPSBjYWxjQ2hhcm1NYXRjaFBlcmNlbnQoXHJcbiAgICAgICAgZXhwZWN0ZWRDaGFybXMsXHJcbiAgICAgICAgYWN0dWFsQ2hhcm1zLFxyXG4gICAgICAgIHBvc2l0aW9uVG9sZXJhbmNlXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2hhcm1TY29yZSA9IE1hdGgucm91bmQoKGNoYXJtUGVyY2VudCAvIDEwMCkgKiBTQ09SRV9XRUlHSFQuQ0hBUk0pO1xyXG5cclxuICAgIGNvbnN0IGtleWNoYWluU2NvcmUgPSAoYWN0dWFsS2V5Y2hhaW5JbmRleCA+PSAwICYmIGV4cGVjdGVkS2V5Y2hhaW5JbmRleCA9PT0gYWN0dWFsS2V5Y2hhaW5JbmRleClcclxuICAgICAgICA/IFNDT1JFX1dFSUdIVC5LRVlDSEFJTlxyXG4gICAgICAgIDogMDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvcmRTY29yZSxcclxuICAgICAgICBjaGFybVNjb3JlLFxyXG4gICAgICAgIGtleWNoYWluU2NvcmUsXHJcbiAgICAgICAgdG90YWw6IGNvcmRTY29yZSArIGNoYXJtU2NvcmUgKyBrZXljaGFpblNjb3JlLFxyXG4gICAgICAgIGNoYXJtUGVyY2VudCxcclxuICAgIH07XHJcbn1cclxuIl19