export interface Player {
    id: number;
    shortName: string;
    role: string;
    gender: string;
    countryId: number;
    jersey: string;
    birthDate: string;
    height: number;
    image: {
        url: string;
    };
    metaInformation: {
        duels?: string;
        height?: string;
        skills?: string;
        status?: string;
        average?: string;
        defence?: string;
        passing?: string;
        physical?: string;
        position?: string;
        shooting?: string;
        lastSplit?: string;
        websiteUrl?: string;
        dominantFoot?: string;
        currentLeague?: string;
        diving?: string;
        injury?: string;
        kicking?: string;
        handling?: string;
        reflexes?: string;
        anticipation?: string;
        goalkeeperPassing?: string;
        matchLink?: string;
        videoLink?: string;
        draftJersey?: string;
        draftOrigin?: string;
    };
    category: string;
    marketValue?: number;
} 