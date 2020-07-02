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

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const row1 = $("#alphabetRow1");
    const row2 = $("#alphabetRow2");
    const row3 = $("#alphabetRow3");
    let row1HTML = `<div class='row'>`;
    for (let i=0; i < 12; i++) {
      row1HTML += `<div class='col-md-1'><button class="btn btn-info alphaButton" id='alphabetButton${alphabet[i]}'>${alphabet[i]}</button></div>`;
    }
    row1HTML += `</div>`;
    let row2HTML = `<div class='row'>`;
    for (let i=12; i < 24; i++) {
      row2HTML += `<div class='col-md-1'><button class="btn btn-info alphaButton" id='alphabetButton${alphabet[i]}'>${alphabet[i]}</button></div>`;
    }
    row2HTML += '</div>';
    let row3HTML = '<div class="row">';
    for (let i = 24; i < 26; i++) {
      row3HTML += `<div class='col-md-1'><button class="btn btn-info alphaButton" id='alphabetButton${alphabet[i]}'>${alphabet[i]}</button></div>`;
    }
    row3HTML += '</div>';
    row1.html(row1HTML);
    row2.html(row2HTML);
    row3.html(row3HTML);

    $(".alphaButton").click(function() {
      alert($(this).attr("id").slice(14));
    });
  });
});