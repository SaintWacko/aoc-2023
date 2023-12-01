import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        let lines = input.split('\n');
        let total = 0;
        for (let line of lines) {
            line = line.replace(/\D/g,'');
            if (line.length) {
                line = line[0] + line.slice(-1)
                total += parseInt(line);
            }
        }
        return total.toString();
    }

    solveForPartTwo(input: string): string {
        input = input.replace(/zero/g, 'ze0ro')
        input = input.replace(/one/g, 'o1ne')
        input = input.replace(/two/g, 't2wo')
        input = input.replace(/three/g, 'th3ree')
        input = input.replace(/four/g, 'fo4ur')
        input = input.replace(/five/g, 'fi5ve')
        input = input.replace(/six/g, 'si6x')
        input = input.replace(/seven/g, 'sev7en')
        input = input.replace(/eight/g, 'eig8ht')
        input = input.replace(/nine/g, 'ni9ne')
        let lines = input.split('\n');
        let total = 0;
        for (let line of lines) {
            line = line.replace(/\D/g,'');
            if (line.length) {
                line = line[0] + line.slice(-1)
                total += parseInt(line);
            }
        }
        return total.toString();
    }
}

export default new Day1;