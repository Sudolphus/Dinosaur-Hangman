import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Board } from './board';
import { wordGetter } from './wordGetterService';

$(document).ready(function() {
  $('#newGame').click(function() {
    let board = new Board();
    (async ()=>{
      const dinoWord = await wordGetter();
      board.newWord(dinoWord);
    })();
  });
});