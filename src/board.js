export class Board {
  constructor() {
    this.word;
    this.display;
    this.guessesRemaining = 10;
  }

  newWord(word) {
    this.word = word.toUpperCase().split('');
    this.display = this.word.map(() => null);
  }

  letterMatch(input) {
    if(this.word.includes(input)) {
      const indices = [];
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === input) {
          indices.push(i);
        }
      }
      return indices;
    } else {
      return false;
    }
  }
}