import { Day } from '../day';

const MAX : {[key: string]: number} = {
  red: 12,
  green: 13,
  blue: 14,
};

type DrawInfo = {
  [key: string]: number;
};

type GameInfo = {
  id: number;
  draws: DrawInfo[];
};

type Minimums = {
  red: number;
  green: number;
  blue: number;
}

class Day2 extends Day {
  constructor() {
    super(2);
  }

  parse(input: string): GameInfo {
    const data = input.split(': ');
    const id = data[0].split(' ')[1];
    const draws = data[1].split('; ').map(
      (dat : string) => Object.fromEntries(dat.split(', ').map(
        (da : string) => da.split(' ').reverse(),
      )),
    );
    return {
      id: parseInt(id),
      draws,
    };
  }

  solveForPartOne(input: string): string {
    const data = input.split('\n').map((dat : string): GameInfo => this.parse(dat));
    return data.reduce((total : number, game : GameInfo): number => {
      if (game.draws.every(
        (draw : DrawInfo) : boolean => Object.keys(draw).every(
          (key : string) : boolean => draw[key] <= MAX[key],
        ),
      )) {
        return total + game.id;
      }
      return total;
    }, 0).toString();
  }

  solveForPartTwo(input: string): string {
    const data = input.split('\n').map((dat : string): GameInfo => this.parse(dat));
    return data.reduce((total: number, game: GameInfo) : number => {
      const minimums = game.draws.reduce((mins: Minimums, draw: DrawInfo): Minimums => ({
        red: Math.max(mins.red, draw.red || 0),
        green: Math.max(mins.green, draw.green || 0),
        blue: Math.max(mins.blue, draw.blue || 0),
      }), { red: 0, green: 0, blue: 0 });
      return total + (minimums.red * minimums.blue * minimums.green);
    }, 0).toString();
  }
}

export default new Day2();
