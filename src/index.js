import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

import { Dino } from './dino';
import { Game } from './game';

$(document).ready(function() {
  $('#generate').click(function() {
    $('.keyboard').remove();
    $('span').remove();

    let game = new Game();
    game.getDino();
    game.getElements();
    game.buildBoard();
    game.buildKeyboard();
  });

  $(document).on('click','.keyboard',function() {
    this.remove();
    game.guessLetter();
  });
});