import $ from 'jquery';

export function winner() {
  $("#gameOver").html(`<p>You Win!</p>`);
}

export function loser() {
  $("#gameOver").html(`<p>You Lose!</p>`);
}