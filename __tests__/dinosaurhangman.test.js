/* eslint-disable no-undef */
import { Board } from './../src/board';

describe("Dinosaur Hangman", ()=>{
  let board;

  beforeEach(()=>{
    board = new Board();
    board.newWord('stegosaurus');
  });

  test('should create a board object', ()=>{
    expect(board).toBeDefined();
  });

  test('should create a word object', ()=>{
    expect(board.word).toBeDefined();
  });

  test('should track the number of guesses remaining', ()=>{
    expect(board.guessesRemaining).toEqual(10);
  });

  test('should split the dinosaur word into its component letters', ()=>{
    board.newWord('stegosaurus');
    expect(board.word).toEqual(['S', 'T', 'E', 'G', 'O', 'S', 'A', 'U', 'R', 'U', 'S']);
  });

  test('should create a display object for showing to the user', ()=>{
    expect(board.display).toEqual([null, null, null, null, null, null, null, null, null, null, null]);
    board.newWord('diplodocus');
    expect(board.display.length).toEqual(board.word.length);
  });

  test('should find all letters in the word that match input', () => {
    const userInput = 'S';
    const doesNotExist = 'Q';
    expect(board.letterMatch(userInput)).toEqual([0, 5, 10]);
    expect(board.letterMatch(doesNotExist)).toEqual(false);
  });
});