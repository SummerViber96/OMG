
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
    { id: "vikings", title: "Vikings" },
    { id: "army", title: "Army" },
];
/** Thứ tự mission spawn sau khi hoàn thành 4/4 (lặp vòng) */
exports.SPAWN_MISSION_QUEUE = [
    "football",
    "airplane",
    "vikings",
    "army"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU29ydCBQdXp6bGVcXHNjcmlwdHNcXE1pc3Npb25Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7R0FHRzs7O0FBU0gsc0NBQXNDO0FBQ3pCLFFBQUEsWUFBWSxHQUFpQjtJQUV0QyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRTtJQUN4QyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUNsQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUNwQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO0lBRTFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0lBQ3JDLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0lBQ25DLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0NBR2hDLENBQUM7QUFFRiw2REFBNkQ7QUFDaEQsUUFBQSxtQkFBbUIsR0FBYTtJQUN6QyxVQUFVO0lBQ1YsVUFBVTtJQUNWLFNBQVM7SUFDVCxNQUFNO0NBQ1QsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUErQixFQUFFLENBQUM7QUFFbkQsS0FBYyxVQUFZLEVBQVosaUJBQUEsb0JBQVksRUFBWiwwQkFBWSxFQUFaLElBQVksRUFBRTtJQUF2QixJQUFJLENBQUMscUJBQUE7SUFDTixXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN6QjtBQUVELFNBQWdCLGFBQWE7SUFDekIsT0FBTyxvQkFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEVBQUosQ0FBSSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUZELHNDQUVDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLEVBQVU7SUFDdEMsT0FBTyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN4RCxDQUFDO0FBRkQsMENBRUM7QUFFRCxTQUFnQixjQUFjLENBQUMsRUFBVTtJQUNyQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUZELHdDQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQy9CLFNBQWlCLEVBQ2pCLFVBQWtCO0lBR2xCLElBQUksS0FBSyxHQUFHLDJCQUFtQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBRWpFLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDcEIsS0FBSyxHQUFHLGFBQWEsRUFBRSxDQUFDO0tBQzNCO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFFbkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMxQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEIsSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFO1lBQ2pCLE9BQU87Z0JBQ0gsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ3JCLENBQUM7U0FDTDtLQUNKO0lBRUQsSUFBSSxRQUFRLEdBQUcsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxJQUFJLFNBQVMsRUFBZixDQUFlLENBQUMsQ0FBQztJQUUzRCxPQUFPO1FBQ0gsU0FBUyxFQUFFLFFBQVEsSUFBSSxTQUFTO1FBQ2hDLFNBQVMsRUFBRSxVQUFVO0tBQ3hCLENBQUM7QUFDTixDQUFDO0FBOUJELGtEQThCQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDEkOG7i25oIG5naMSpYSB04bqldCBj4bqjIG1pc3Npb24gdOG6oWkgxJHDonkuXHJcbiAqIFRow6ptIG1pc3Npb24gbeG7m2k6IGNvcHkgMSBkw7JuZyB0cm9uZyBBTExfTUlTU0lPTlMsIHRow6ptIHNwcml0ZSBhcnJheSB0cm9uZyBHYW1lTWFuYWdlciAoRWRpdG9yKS5cclxuICovXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pc3Npb25EZWYge1xyXG4gICAgLyoqIGlkIGTDuW5nIHRyb25nIGxldmVsRGF0YSAvIGNhcmQudHlwZSDigJQgdmnhur90IHRoxrDhu51uZywga2jDtG5nIGThuqV1ICovXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgLyoqIFTDqm4gaGnhu4NuIHRo4buLIHRyw6puIHNsb3QgKi9cclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBEYW5oIHPDoWNoIG1pc3Npb24gY8OzIHRyb25nIGdhbWUgKi9cclxuZXhwb3J0IGNvbnN0IEFMTF9NSVNTSU9OUzogTWlzc2lvbkRlZltdID0gW1xyXG5cclxuICAgIHsgaWQ6IFwiYXN0cm9uYXV0XCIsIHRpdGxlOiBcIkFzdHJvbmF1dHNcIiB9LFxyXG4gICAgeyBpZDogXCJmYXJtZXJcIiwgdGl0bGU6IFwiRmFybWVyc1wiIH0sXHJcbiAgICB7IGlkOiBcInNpbmdlclwiLCB0aXRsZTogXCJQb3Agc3RhcnNcIiB9LFxyXG4gICAgeyBpZDogXCJwb2xpY2VcIiwgdGl0bGU6IFwiUHVibGljIHNlcnZhbnRzXCIgfSxcclxuXHJcbiAgICB7IGlkOiBcImZvb3RiYWxsXCIsIHRpdGxlOiBcIkZvb3RiYWxsXCIgfSxcclxuICAgIHsgaWQ6IFwiYWlycGxhbmVcIiwgdGl0bGU6IFwiQWlycGxhbmVcIiB9LFxyXG4gICAgeyBpZDogXCJ2aWtpbmdzXCIsIHRpdGxlOiBcIlZpa2luZ3NcIiB9LFxyXG4gICAgeyBpZDogXCJhcm15XCIsIHRpdGxlOiBcIkFybXlcIiB9LFxyXG5cclxuICAgIC8vIHsgaWQ6IFwiZXNwb3J0XCIsIHRpdGxlOiBcIkVzcG9ydFwiIH0sXHJcbl07XHJcblxyXG4vKiogVGjhu6kgdOG7sSBtaXNzaW9uIHNwYXduIHNhdSBraGkgaG/DoG4gdGjDoG5oIDQvNCAobOG6t3AgdsOybmcpICovXHJcbmV4cG9ydCBjb25zdCBTUEFXTl9NSVNTSU9OX1FVRVVFOiBzdHJpbmdbXSA9IFtcclxuICAgIFwiZm9vdGJhbGxcIixcclxuICAgIFwiYWlycGxhbmVcIixcclxuICAgIFwidmlraW5nc1wiLFxyXG4gICAgXCJhcm15XCJcclxuXTtcclxuXHJcbmNvbnN0IG1pc3Npb25CeUlkOiBSZWNvcmQ8c3RyaW5nLCBNaXNzaW9uRGVmPiA9IHt9O1xyXG5cclxuZm9yIChsZXQgbSBvZiBBTExfTUlTU0lPTlMpIHtcclxuICAgIG1pc3Npb25CeUlkW20uaWRdID0gbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pc3Npb25JZHMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIEFMTF9NSVNTSU9OUy5tYXAobSA9PiBtLmlkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pc3Npb25UaXRsZShpZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBtaXNzaW9uQnlJZFtpZF0gPyBtaXNzaW9uQnlJZFtpZF0udGl0bGUgOiBpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRNaXNzaW9uKGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIW1pc3Npb25CeUlkW2lkXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTcGF3bk1pc3Npb24oXHJcbiAgICBleGNsdWRlSWQ6IHN0cmluZyxcclxuICAgIHF1ZXVlSW5kZXg6IG51bWJlclxyXG4pOiB7IG1pc3Npb25JZDogc3RyaW5nOyBuZXh0SW5kZXg6IG51bWJlciB9IHtcclxuXHJcbiAgICBsZXQgcXVldWUgPSBTUEFXTl9NSVNTSU9OX1FVRVVFLmZpbHRlcihpZCA9PiBpc1ZhbGlkTWlzc2lvbihpZCkpO1xyXG5cclxuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBxdWV1ZSA9IGdldE1pc3Npb25JZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIGxldCBpZHggPSAocXVldWVJbmRleCArIGkpICUgcXVldWUubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpZCA9IHF1ZXVlW2lkeF07XHJcblxyXG4gICAgICAgIGlmIChpZCAhPSBleGNsdWRlSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1pc3Npb25JZDogaWQsXHJcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXg6IGlkeCArIDFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZhbGxiYWNrID0gZ2V0TWlzc2lvbklkcygpLmZpbmQoaWQgPT4gaWQgIT0gZXhjbHVkZUlkKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pc3Npb25JZDogZmFsbGJhY2sgfHwgZXhjbHVkZUlkLFxyXG4gICAgICAgIG5leHRJbmRleDogcXVldWVJbmRleFxyXG4gICAgfTtcclxufVxyXG4iXX0=