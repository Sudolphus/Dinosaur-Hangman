import $ from 'jquery';

export function createDisplay(board) {
  const display = $("#display");

  let output = '';
  for (let i = 0; i < board.display.length; i++) {
    output += `<span id='displayIndex${i}'>_ </span>`;
  }

  display.html(output);
}

export function updateDisplay(board) {
  for (let i = 0; i < board.display.length; i++) {
    if (board.display[i]) {
      $(`span#displayIndex${i}`).html(`${board.display[i]} `);
    }
  }
}