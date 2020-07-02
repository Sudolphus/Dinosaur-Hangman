import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Board } from './board';
import { wordGetter } from './wordGetterService';
import { createDisplay, updateDisplay } from './build-display';
import { winner, loser } from './game-over';

function clearDisplay() {
  $("#alphabetRow1").empty();
  $("#alphabetRow2").empty();
  $("#alphabetRow3").empty();
  $("#display").empty();
  $("#remainingGuesses").empty();
}

$(document).ready(function() {
  $('#newGame').click(function() {
    let board = new Board();
    (async ()=>{
      const dinoWord = await wordGetter();
      board.newWord(dinoWord);
      createDisplay(board);
    })();
    $("#gameOver").empty();
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

    $("#remainingGuesses").html(`<p>You have <span id='guesses'>${board.guessesRemaining}</span> guesses remaining until an asteroid hits the Earth</p>`);

    $(".alphaButton").click(function() {
      const letterToReplace = $(this).attr("id").slice(14);
      board.makeGuess(letterToReplace);
      updateDisplay(board);
      $("#guesses").text(board.guessesRemaining);
      if (board.gameStatus() === 'win') {
        winner();
        clearDisplay();
      } else if (board.gameStatus() === 'loss') {
        loser();
        clearDisplay();
      }
    });
  });
});