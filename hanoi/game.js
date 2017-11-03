const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor () {
    this.towers = [[3, 2, 1], [], []];
  }

  display () {
    console.log(`${this.towers}`);
  }

  gameOver () {
    reader.close();
  }

  moveDisc (start, end) {
    if (this.validMove(start, end)) {
      let disc = this.towers[start].pop;
      this.towers[end].push(disc);
    }
  }

  validMove (start, end) {
    if (this.towers[end].length === 0) {
      return true;
    }

    let startDisc = this.towers[start][this.towers[start].length - 1];
    let endDisc = this.towers[end][this.towers[end].length - 1];
    if (endDisc > startDisc) {
      return true;
    }

    return false;
  }

  getInput () {
    let start, end;
    reader.question('Pick a start and end: ', function(res) {
      //object = Game
      //argument = res
      //function = parseInput
      // parseInput.bind()
      // this.handleInput(this.parseInput(res));
      let start = res[0];
      let end = res[res.length - 1];
      this.moveDisc(start, end);
      // return [start, end];
    });
  }

  parseInput(input) {
    let start = input[0];
    let end = input[input.length - 1];
    return [start, end];
  }

  handleInput (move) {
    this.moveDisc(move[0], move[1]);
  }
}
const game = new Game();

const getInput = function() {

};

// const boundGetInput =
