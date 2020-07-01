/* eslint-disable no-undef */
import { Board } from './../src/board';

describe("Dinosaur Hangman", ()=>{
  let board;

  beforeEach(()=>{
    board = new Board();
    board.word = 'Stegosaurus';
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
});