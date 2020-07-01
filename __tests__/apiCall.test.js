/* eslint-disable no-undef */
import { WordGetterService } from './../src/wordGetterService';

describe('API Call Testing', ()=>{
  let wordGetter;

  beforeEach(()=>{
    wordGetter = new WordGetterService();
  });

  test('should recieve a dinosaur word from the Word Getter', ()=>{
    jest.setTimeout(30000);
    const dinoWord = wordGetter.wordGetter();
    expect(dinoWord).toBeDefined();
  });
});