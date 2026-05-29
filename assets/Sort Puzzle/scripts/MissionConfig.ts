/**
 * Định nghĩa tất cả mission tại đây.
 * Thêm mission mới: copy 1 dòng trong ALL_MISSIONS, thêm sprite array trong GameManager (Editor).
 */

export interface MissionDef {
    /** id dùng trong levelData / card.type — viết thường, không dấu */
    id: string;
    /** Tên hiển thị trên slot */
    title: string;
}

/** Danh sách mission có trong game */
export const ALL_MISSIONS: MissionDef[] = [

    { id: "astronaut", title: "Astronauts" },
    { id: "farmer", title: "Farmers" },
    { id: "singer", title: "Pop stars" },
    { id: "police", title: "Public servants" },

    { id: "football", title: "Football" },
    { id: "airplane", title: "Airplane" },
    { id: "esport", title: "Esport" },
];

/** Thứ tự mission spawn sau khi hoàn thành 4/4 (lặp vòng) */
export const SPAWN_MISSION_QUEUE: string[] = [
    "football",
    "airplane",
    "esport",
];

const missionById: Record<string, MissionDef> = {};

for (let m of ALL_MISSIONS) {
    missionById[m.id] = m;
}

export function getMissionIds(): string[] {
    return ALL_MISSIONS.map(m => m.id);
}

export function getMissionTitle(id: string): string {
    return missionById[id] ? missionById[id].title : id;
}

export function isValidMission(id: string): boolean {
    return !!missionById[id];
}

export function getNextSpawnMission(
    excludeId: string,
    queueIndex: number
): { missionId: string; nextIndex: number } {

    let queue = SPAWN_MISSION_QUEUE.filter(id => isValidMission(id));

    if (queue.length === 0) {
        queue = getMissionIds();
    }

    for (let i = 0; i < queue.length; i++) {

        let idx = (queueIndex + i) % queue.length;
        let id = queue[idx];

        if (id != excludeId) {
            return {
                missionId: id,
                nextIndex: idx + 1
            };
        }
    }

    let fallback = getMissionIds().find(id => id != excludeId);

    return {
        missionId: fallback || excludeId,
        nextIndex: queueIndex
    };
}
