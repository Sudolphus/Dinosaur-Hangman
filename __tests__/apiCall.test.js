/* eslint-disable no-undef */
import { wordGetter } from './../src/wordGetterService';

describe('API Call Testing', ()=>{
  const dinoWord = wordGetter();

  test('should recieve a dinosaur word from the Word Getter', ()=>{
    jest.setTimeout(30000);
    expect(dinoWord).toBeDefined();
  });
});