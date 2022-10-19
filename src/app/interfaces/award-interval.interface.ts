export interface AwardInterval {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}

export interface AwardIntervalForProducers {
  min: AwardInterval[];
  max: AwardInterval[];
}
