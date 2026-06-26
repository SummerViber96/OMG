"use strict";
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