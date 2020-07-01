import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { wordGetter } from './wordGetterService';

$(document).ready(function() {
  $('#newGame').click(function() {
    const dinoWord = wordGetter();
    $("#wordOutput").html(`<p>${dinoWord}</p>`);
  });
});