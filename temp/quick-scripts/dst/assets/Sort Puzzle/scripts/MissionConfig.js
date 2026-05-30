
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Sort Puzzle/scripts/MissionConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9Tb3J0IFB1enpsZS9zY3JpcHRzL01pc3Npb25Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7R0FHRzs7O0FBU0gsc0NBQXNDO0FBQ3pCLFFBQUEsWUFBWSxHQUFpQjtJQUV0QyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtJQUN4QyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNsQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUNwQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO0lBRTFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0NBQ3BDLENBQUM7QUFFRiw2REFBNkQ7QUFDaEQsUUFBQSxtQkFBbUIsR0FBYTtJQUN6QyxVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7Q0FDWCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQStCLEVBQUUsQ0FBQztBQUVuRCxLQUFjLFVBQVksRUFBWixpQkFBQSxvQkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO0lBQXZCLElBQUksQ0FBQyxxQkFBQTtJQUNOLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3pCO0FBRUQsU0FBZ0IsYUFBYTtJQUN6QixPQUFPLG9CQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRkQsc0NBRUM7QUFFRCxTQUFnQixlQUFlLENBQUMsRUFBVTtJQUN0QyxPQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3hELENBQUM7QUFGRCwwQ0FFQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxFQUFVO0lBQ3JDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRkQsd0NBRUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FDL0IsU0FBaUIsRUFDakIsVUFBa0I7SUFHbEIsSUFBSSxLQUFLLEdBQUcsMkJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFFakUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixLQUFLLEdBQUcsYUFBYSxFQUFFLENBQUM7S0FDM0I7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUVuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixJQUFJLEVBQUUsSUFBSSxTQUFTLEVBQUU7WUFDakIsT0FBTztnQkFDSCxTQUFTLEVBQUUsRUFBRTtnQkFDYixTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDckIsQ0FBQztTQUNMO0tBQ0o7SUFFRCxJQUFJLFFBQVEsR0FBRyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLElBQUksU0FBUyxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBRTNELE9BQU87UUFDSCxTQUFTLEVBQUUsUUFBUSxJQUFJLFNBQVM7UUFDaEMsU0FBUyxFQUFFLFVBQVU7S0FDeEIsQ0FBQztBQUNOLENBQUM7QUE5QkQsa0RBOEJDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDEkOG7i25oIG5naMSpYSB04bqldCBj4bqjIG1pc3Npb24gdOG6oWkgxJHDonkuXG4gKiBUaMOqbSBtaXNzaW9uIG3hu5tpOiBjb3B5IDEgZMOybmcgdHJvbmcgQUxMX01JU1NJT05TLCB0aMOqbSBzcHJpdGUgYXJyYXkgdHJvbmcgR2FtZU1hbmFnZXIgKEVkaXRvcikuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBNaXNzaW9uRGVmIHtcbiAgICAvKiogaWQgZMO5bmcgdHJvbmcgbGV2ZWxEYXRhIC8gY2FyZC50eXBlIOKAlCB2aeG6v3QgdGjGsOG7nW5nLCBraMO0bmcgZOG6pXUgKi9cbiAgICBpZDogc3RyaW5nO1xuICAgIC8qKiBUw6puIGhp4buDbiB0aOG7iyB0csOqbiBzbG90ICovXG4gICAgdGl0bGU6IHN0cmluZztcbn1cblxuLyoqIERhbmggc8OhY2ggbWlzc2lvbiBjw7MgdHJvbmcgZ2FtZSAqL1xuZXhwb3J0IGNvbnN0IEFMTF9NSVNTSU9OUzogTWlzc2lvbkRlZltdID0gW1xuXG4gICAgeyBpZDogXCJhc3Ryb25hdXRcIiwgdGl0bGU6IFwiQXN0cm9uYXV0c1wiIH0sXG4gICAgeyBpZDogXCJmYXJtZXJcIiwgdGl0bGU6IFwiRmFybWVyc1wiIH0sXG4gICAgeyBpZDogXCJzaW5nZXJcIiwgdGl0bGU6IFwiUG9wIHN0YXJzXCIgfSxcbiAgICB7IGlkOiBcInBvbGljZVwiLCB0aXRsZTogXCJQdWJsaWMgc2VydmFudHNcIiB9LFxuXG4gICAgeyBpZDogXCJmb290YmFsbFwiLCB0aXRsZTogXCJGb290YmFsbFwiIH0sXG4gICAgeyBpZDogXCJhaXJwbGFuZVwiLCB0aXRsZTogXCJBaXJwbGFuZVwiIH0sXG4gICAgeyBpZDogXCJlc3BvcnRcIiwgdGl0bGU6IFwiRXNwb3J0XCIgfSxcbl07XG5cbi8qKiBUaOG7qSB04buxIG1pc3Npb24gc3Bhd24gc2F1IGtoaSBob8OgbiB0aMOgbmggNC80IChs4bq3cCB2w7JuZykgKi9cbmV4cG9ydCBjb25zdCBTUEFXTl9NSVNTSU9OX1FVRVVFOiBzdHJpbmdbXSA9IFtcbiAgICBcImZvb3RiYWxsXCIsXG4gICAgXCJhaXJwbGFuZVwiLFxuICAgIFwiZXNwb3J0XCIsXG5dO1xuXG5jb25zdCBtaXNzaW9uQnlJZDogUmVjb3JkPHN0cmluZywgTWlzc2lvbkRlZj4gPSB7fTtcblxuZm9yIChsZXQgbSBvZiBBTExfTUlTU0lPTlMpIHtcbiAgICBtaXNzaW9uQnlJZFttLmlkXSA9IG07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaXNzaW9uSWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gQUxMX01JU1NJT05TLm1hcChtID0+IG0uaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlzc2lvblRpdGxlKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBtaXNzaW9uQnlJZFtpZF0gPyBtaXNzaW9uQnlJZFtpZF0udGl0bGUgOiBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRNaXNzaW9uKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFtaXNzaW9uQnlJZFtpZF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U3Bhd25NaXNzaW9uKFxuICAgIGV4Y2x1ZGVJZDogc3RyaW5nLFxuICAgIHF1ZXVlSW5kZXg6IG51bWJlclxuKTogeyBtaXNzaW9uSWQ6IHN0cmluZzsgbmV4dEluZGV4OiBudW1iZXIgfSB7XG5cbiAgICBsZXQgcXVldWUgPSBTUEFXTl9NSVNTSU9OX1FVRVVFLmZpbHRlcihpZCA9PiBpc1ZhbGlkTWlzc2lvbihpZCkpO1xuXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBxdWV1ZSA9IGdldE1pc3Npb25JZHMoKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgbGV0IGlkeCA9IChxdWV1ZUluZGV4ICsgaSkgJSBxdWV1ZS5sZW5ndGg7XG4gICAgICAgIGxldCBpZCA9IHF1ZXVlW2lkeF07XG5cbiAgICAgICAgaWYgKGlkICE9IGV4Y2x1ZGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtaXNzaW9uSWQ6IGlkLFxuICAgICAgICAgICAgICAgIG5leHRJbmRleDogaWR4ICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBmYWxsYmFjayA9IGdldE1pc3Npb25JZHMoKS5maW5kKGlkID0+IGlkICE9IGV4Y2x1ZGVJZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtaXNzaW9uSWQ6IGZhbGxiYWNrIHx8IGV4Y2x1ZGVJZCxcbiAgICAgICAgbmV4dEluZGV4OiBxdWV1ZUluZGV4XG4gICAgfTtcbn1cbiJdfQ==