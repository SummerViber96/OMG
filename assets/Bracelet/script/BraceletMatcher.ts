export type BraceletSide = 'left' | 'right';

export interface CharmSlotData {
    tag: number;
    colorIndex: number;
    side: BraceletSide;
    pathDistance: number;
}

export interface MatchScoreBreakdown {
    cordScore: number;
    charmScore: number;
    keychainScore: number;
    total: number;
    charmPercent: number;
}

export const SCORE_WEIGHT = {
    CORD: 30,
    CHARM: 50,
    KEYCHAIN: 20,
} as const;

export function calcCharmMatchPercent(
    expected: CharmSlotData[],
    actual: CharmSlotData[],
    positionTolerance: number
): number {
    if (expected.length === 0) return 0;

    const used = new Set<number>();
    let matched = 0;

    for (let e = 0; e < expected.length; e++) {
        const exp = expected[e];
        let bestIdx = -1;
        let bestDist = Number.MAX_VALUE;

        for (let i = 0; i < actual.length; i++) {
            if (used.has(i)) continue;

            const act = actual[i];
            const tagMatch = exp.tag <= 0 || act.tag === exp.tag;
            const colorMatch = exp.colorIndex <= 0 || act.colorIndex === exp.colorIndex;
            if (!tagMatch || act.side !== exp.side || !colorMatch) continue;

            const dist = Math.abs(act.pathDistance - exp.pathDistance);
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

/** @deprecated dùng calcFullScore */
export function calcMatchPercent(
    expected: CharmSlotData[],
    actual: CharmSlotData[],
    positionTolerance: number
): number {
    return calcCharmMatchPercent(expected, actual, positionTolerance);
}

export function calcFullScore(
    expectedCordId: number,
    actualCordId: number,
    expectedCharms: CharmSlotData[],
    actualCharms: CharmSlotData[],
    expectedKeychainIndex: number,
    actualKeychainIndex: number,
    positionTolerance: number
): MatchScoreBreakdown {
    const cordScore = expectedCordId === actualCordId ? SCORE_WEIGHT.CORD : 0;

    const charmPercent = calcCharmMatchPercent(
        expectedCharms,
        actualCharms,
        positionTolerance
    );
    const charmScore = Math.round((charmPercent / 100) * SCORE_WEIGHT.CHARM);

    const keychainScore = (actualKeychainIndex >= 0 && expectedKeychainIndex === actualKeychainIndex)
        ? SCORE_WEIGHT.KEYCHAIN
        : 0;

    return {
        cordScore,
        charmScore,
        keychainScore,
        total: cordScore + charmScore + keychainScore,
        charmPercent,
    };
}
