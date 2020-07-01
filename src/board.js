export class Board {
  constructor() {
    this.word;
    this.guessesRemaining = 10;
  }

  newWord(word) {
    this.word = word.toUpperCase().split('');
  }
}