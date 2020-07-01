import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { WordGetterService } from './wordGetterService';

$(document).ready(function() {
  $('#newGame').click(function() {
    let wordGetterService = new WordGetterService();
    const dinoWord = wordGetterService.wordGetter();
    $("#wordOutput").html(`<p>${dinoWord}</p>`);
  });
});