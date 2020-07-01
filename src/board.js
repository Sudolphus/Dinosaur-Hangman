export class Board {
  constructor() {
    this.word;
    this.display;
    this.guessesRemaining = 10;
  }

  newWord(word) {
    this.word = word.toUpperCase().split('');
    this.display = this.word.map(() => (null));
  }
}