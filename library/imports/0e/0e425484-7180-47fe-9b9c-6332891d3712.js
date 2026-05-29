"use strict";
cc._RF.push(module, '0e425SEcYBH/pucYzKJHTcS', 'MissionConfig');
// Sort Puzzle/scripts/MissionConfig.ts

"use strict";
/**
 * Định nghĩa tất cả mission tại đây.
 * Thêm mission mới: copy 1 dòng trong ALL_MISSIONS, thêm sprite array trong GameManager (Editor).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextSpawnMission = exports.isValidMission = exports.getMissionTitle = exports.getMissionIds = exports.SPAWN_MISSION_QUEUE = exports.ALL_MISSIONS = void 0;
/** Danh sách mission có trong game */
exports.ALL_MISSIONS = [
    { id: "astronaut", title: "Astronauts" },
    { id: "farmer", title: "Farmers" },
    { id: "singer", title: "Pop stars" },
    { id: "police", title: "Public servants" },
    { id: "football", title: "Football" },
    { id: "airplane", title: "Airplane" },
    { id: "esport", title: "Esport" },
];
/** Thứ tự mission spawn sau khi hoàn thành 4/4 (lặp vòng) */
exports.SPAWN_MISSION_QUEUE = [
    "football",
    "airplane",
    "esport",
];
var missionById = {};
for (var _i = 0, ALL_MISSIONS_1 = exports.ALL_MISSIONS; _i < ALL_MISSIONS_1.length; _i++) {
    var m = ALL_MISSIONS_1[_i];
    missionById[m.id] = m;
}
function getMissionIds() {
    return exports.ALL_MISSIONS.map(function (m) { return m.id; });
}
exports.getMissionIds = getMissionIds;
function getMissionTitle(id) {
    return missionById[id] ? missionById[id].title : id;
}
exports.getMissionTitle = getMissionTitle;
function isValidMission(id) {
    return !!missionById[id];
}
exports.isValidMission = isValidMission;
function getNextSpawnMission(excludeId, queueIndex) {
    var queue = exports.SPAWN_MISSION_QUEUE.filter(function (id) { return isValidMission(id); });
    if (queue.length === 0) {
        queue = getMissionIds();
    }
    for (var i = 0; i < queue.length; i++) {
        var idx = (queueIndex + i) % queue.length;
        var id = queue[idx];
        if (id != excludeId) {
            return {
                missionId: id,
                nextIndex: idx + 1
            };
        }
    }
    var fallback = getMissionIds().find(function (id) { return id != excludeId; });
    return {
        missionId: fallback || excludeId,
        nextIndex: queueIndex
    };
}
exports.getNextSpawnMission = getNextSpawnMission;

cc._RF.pop();