import { Day } from '../day';

class Day1 extends Day {
  constructor() {
    super(1);
  }

  solveForPartOne(input: string): string {
    const lines = input.split('\n');
    let total = 0;
    lines.forEach((line) => {
      let numericLine = line.replace(/\D/g, '');
      if (line.length) {
        numericLine = line[0] + line.slice(-1);
        total += parseInt(numericLine);
      }
    });
    return total.toString();
  }

  solveForPartTwo(input: string): string {
    let lines = input.replace(/zero/g, 'ze0ro');
    lines = lines.replace(/one/g, 'o1ne');
    lines = lines.replace(/two/g, 't2wo');
    lines = lines.replace(/three/g, 'th3ree');
    lines = lines.replace(/four/g, 'fo4ur');
    lines = lines.replace(/five/g, 'fi5ve');
    lines = lines.replace(/six/g, 'si6x');
    lines = lines.replace(/seven/g, 'sev7en');
    lines = lines.replace(/eight/g, 'eig8ht');
    lines = lines.replace(/nine/g, 'ni9ne');
    const lineArray = lines.split('\n');
    let total = 0;
    lineArray.forEach((line) => {
      let numericLine = line.replace(/\D/g, '');
      if (numericLine.length) {
        numericLine = line[0] + line.slice(-1);
        total += parseInt(numericLine);
      }
    });
    return total.toString();
  }
}

export default new Day1();
