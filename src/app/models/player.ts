export class PlayerClass implements Player {
  goals: number;
  name: string;
  number: number;
  wounded: boolean;
  constructor(
    number: number,
    name: string,
    goals: number,
    wounded: boolean
  ) {
  }
}


export interface Player {
  number: number;
  name: string;
  goals: number;
  wounded: boolean;
}
