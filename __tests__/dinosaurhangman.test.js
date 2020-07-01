/* eslint-disable no-undef */
import { Board } from './../src/board';

describe("Dinosaur Hangman", ()=>{
  let board;
  let userInput;
  let doesNotExist;

  beforeEach(()=>{
    board = new Board();
    board.newWord('stegosaurus');
    userInput = 'S';
    doesNotExist = 'Q';
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
    expect(board.letterMatch(userInput)).toEqual([0, 5, 10]);
    expect(board.letterMatch(doesNotExist)).toEqual(false);
  });

  test('should replace all letters in display that match the user input', () => {
    const userInputIndices = board.letterMatch(userInput);
    const doesNotExistIndices = board.letterMatch(doesNotExist);
    board.replaceNull(userInput, userInputIndices);
    board.replaceNull(doesNotExist, doesNotExistIndices);
    expect(board.display).toEqual(['S', null, null, null, null, 'S', null, null, null, null, 'S']);
  });

  test('guess should reduce by 1 if wrong guess is entered', () => {
    board.makeGuess(doesNotExist);
    expect(board.guessesRemaining).toEqual(9);
    board.makeGuess(userInput);
    expect(board.guessesRemaining).toEqual(9);
  });

  test('should detect if a game is won', () => {
    board.display = ['S', 'T', 'E', 'G', 'O', 'S', 'A', 'U', 'R', 'U', 'S'];
    expect(board.gameStatus()).toEqual("win");
  });

  test('should detect if a game is lost', () => {
    board.guessesRemaining = 0;
    expect(board.gameStatus()).toEqual('loss');
  });
});