import $ from 'jquery';
import { dinoWinnerGif, dinoLoserGif } from './dinoGIF';

export function winner() {
  $("#gameOver").html(`<div class="wrapper"><div class="endResult"><p>You Win!</p><span id='dinoGIF'></span></div></div>`);
  (async () => {
    const dinoGIF = await dinoWinnerGif();
    if (dinoGIF) {
      $('#dinoGIF').html(`<img src='${dinoGIF}' alt='A VICTORIOUS DINOSAUR'>`);
    }
  })();
}

export function loser() {
  $("#gameOver").html(`<div class="wrapper"><div class="endResult"><p>You Lose!</p><span id='meteorGIF'></span></div></div>`);
  (async () => {
    const meteorGIF = await dinoLoserGif();
    if (meteorGIF) {
      $('#meteorGIF').html(`<img src='${meteorGIF}' alt='YOU WENT EXTINCT'>`);
    }
  })();
}