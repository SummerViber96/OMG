
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXE1pc3Npb25Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7R0FHRzs7O0FBU0gsc0NBQXNDO0FBQ3pCLFFBQUEsWUFBWSxHQUFpQjtJQUV0QyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtJQUN4QyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNsQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUNwQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO0lBRTFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0NBQ3BDLENBQUM7QUFFRiw2REFBNkQ7QUFDaEQsUUFBQSxtQkFBbUIsR0FBYTtJQUN6QyxVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7Q0FDWCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQStCLEVBQUUsQ0FBQztBQUVuRCxLQUFjLFVBQVksRUFBWixpQkFBQSxvQkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO0lBQXZCLElBQUksQ0FBQyxxQkFBQTtJQUNOLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3pCO0FBRUQsU0FBZ0IsYUFBYTtJQUN6QixPQUFPLG9CQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsRUFBSixDQUFJLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRkQsc0NBRUM7QUFFRCxTQUFnQixlQUFlLENBQUMsRUFBVTtJQUN0QyxPQUFPLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3hELENBQUM7QUFGRCwwQ0FFQztBQUVELFNBQWdCLGNBQWMsQ0FBQyxFQUFVO0lBQ3JDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRkQsd0NBRUM7QUFFRCxTQUFnQixtQkFBbUIsQ0FDL0IsU0FBaUIsRUFDakIsVUFBa0I7SUFHbEIsSUFBSSxLQUFLLEdBQUcsMkJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFFakUsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixLQUFLLEdBQUcsYUFBYSxFQUFFLENBQUM7S0FDM0I7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUVuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQixJQUFJLEVBQUUsSUFBSSxTQUFTLEVBQUU7WUFDakIsT0FBTztnQkFDSCxTQUFTLEVBQUUsRUFBRTtnQkFDYixTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDckIsQ0FBQztTQUNMO0tBQ0o7SUFFRCxJQUFJLFFBQVEsR0FBRyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLElBQUksU0FBUyxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBRTNELE9BQU87UUFDSCxTQUFTLEVBQUUsUUFBUSxJQUFJLFNBQVM7UUFDaEMsU0FBUyxFQUFFLFVBQVU7S0FDeEIsQ0FBQztBQUNOLENBQUM7QUE5QkQsa0RBOEJDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIMSQ4buLbmggbmdoxKlhIHThuqV0IGPhuqMgbWlzc2lvbiB04bqhaSDEkcOieS5cclxuICogVGjDqm0gbWlzc2lvbiBt4bubaTogY29weSAxIGTDsm5nIHRyb25nIEFMTF9NSVNTSU9OUywgdGjDqm0gc3ByaXRlIGFycmF5IHRyb25nIEdhbWVNYW5hZ2VyIChFZGl0b3IpLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWlzc2lvbkRlZiB7XHJcbiAgICAvKiogaWQgZMO5bmcgdHJvbmcgbGV2ZWxEYXRhIC8gY2FyZC50eXBlIOKAlCB2aeG6v3QgdGjGsOG7nW5nLCBraMO0bmcgZOG6pXUgKi9cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICAvKiogVMOqbiBoaeG7g24gdGjhu4sgdHLDqm4gc2xvdCAqL1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqIERhbmggc8OhY2ggbWlzc2lvbiBjw7MgdHJvbmcgZ2FtZSAqL1xyXG5leHBvcnQgY29uc3QgQUxMX01JU1NJT05TOiBNaXNzaW9uRGVmW10gPSBbXHJcblxyXG4gICAgeyBpZDogXCJhc3Ryb25hdXRcIiwgdGl0bGU6IFwiQXN0cm9uYXV0c1wiIH0sXHJcbiAgICB7IGlkOiBcImZhcm1lclwiLCB0aXRsZTogXCJGYXJtZXJzXCIgfSxcclxuICAgIHsgaWQ6IFwic2luZ2VyXCIsIHRpdGxlOiBcIlBvcCBzdGFyc1wiIH0sXHJcbiAgICB7IGlkOiBcInBvbGljZVwiLCB0aXRsZTogXCJQdWJsaWMgc2VydmFudHNcIiB9LFxyXG5cclxuICAgIHsgaWQ6IFwiZm9vdGJhbGxcIiwgdGl0bGU6IFwiRm9vdGJhbGxcIiB9LFxyXG4gICAgeyBpZDogXCJhaXJwbGFuZVwiLCB0aXRsZTogXCJBaXJwbGFuZVwiIH0sXHJcbiAgICB7IGlkOiBcImVzcG9ydFwiLCB0aXRsZTogXCJFc3BvcnRcIiB9LFxyXG5dO1xyXG5cclxuLyoqIFRo4bupIHThu7EgbWlzc2lvbiBzcGF3biBzYXUga2hpIGhvw6BuIHRow6BuaCA0LzQgKGzhurdwIHbDsm5nKSAqL1xyXG5leHBvcnQgY29uc3QgU1BBV05fTUlTU0lPTl9RVUVVRTogc3RyaW5nW10gPSBbXHJcbiAgICBcImZvb3RiYWxsXCIsXHJcbiAgICBcImFpcnBsYW5lXCIsXHJcbiAgICBcImVzcG9ydFwiLFxyXG5dO1xyXG5cclxuY29uc3QgbWlzc2lvbkJ5SWQ6IFJlY29yZDxzdHJpbmcsIE1pc3Npb25EZWY+ID0ge307XHJcblxyXG5mb3IgKGxldCBtIG9mIEFMTF9NSVNTSU9OUykge1xyXG4gICAgbWlzc2lvbkJ5SWRbbS5pZF0gPSBtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlzc2lvbklkcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gQUxMX01JU1NJT05TLm1hcChtID0+IG0uaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlzc2lvblRpdGxlKGlkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG1pc3Npb25CeUlkW2lkXSA/IG1pc3Npb25CeUlkW2lkXS50aXRsZSA6IGlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZE1pc3Npb24oaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhbWlzc2lvbkJ5SWRbaWRdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNwYXduTWlzc2lvbihcclxuICAgIGV4Y2x1ZGVJZDogc3RyaW5nLFxyXG4gICAgcXVldWVJbmRleDogbnVtYmVyXHJcbik6IHsgbWlzc2lvbklkOiBzdHJpbmc7IG5leHRJbmRleDogbnVtYmVyIH0ge1xyXG5cclxuICAgIGxldCBxdWV1ZSA9IFNQQVdOX01JU1NJT05fUVVFVUUuZmlsdGVyKGlkID0+IGlzVmFsaWRNaXNzaW9uKGlkKSk7XHJcblxyXG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHF1ZXVlID0gZ2V0TWlzc2lvbklkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgbGV0IGlkeCA9IChxdWV1ZUluZGV4ICsgaSkgJSBxdWV1ZS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IGlkID0gcXVldWVbaWR4XTtcclxuXHJcbiAgICAgICAgaWYgKGlkICE9IGV4Y2x1ZGVJZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWlzc2lvbklkOiBpZCxcclxuICAgICAgICAgICAgICAgIG5leHRJbmRleDogaWR4ICsgMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmFsbGJhY2sgPSBnZXRNaXNzaW9uSWRzKCkuZmluZChpZCA9PiBpZCAhPSBleGNsdWRlSWQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWlzc2lvbklkOiBmYWxsYmFjayB8fCBleGNsdWRlSWQsXHJcbiAgICAgICAgbmV4dEluZGV4OiBxdWV1ZUluZGV4XHJcbiAgICB9O1xyXG59XHJcbiJdfQ==