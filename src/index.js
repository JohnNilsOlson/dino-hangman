import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Dino } from './dino';

function getElements(response) {

  let dino;
  
  if (response) {

    dino = new Dino((response[0][0]).toLowerCase());
    dino.splitDino();

    let alphabitArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    dino.nameArray.forEach(function(i) {
      $('#dino-output').append(`<span class="letter" data-letter="${i}">__  </span>`);
    
    });

    alphabitArray.forEach(function(i) {
      $('#keyboard-output').append(`<button type="button" class="btn btn-primary keyboard" id="${i}" value="${i}">${i}</button>`);
    });

    $('#error-output').text("");

  } else {
    $('#dino-output').text("");
    $('#error-output').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {

  let guess = true;
  let mistakes = 0;

  $('#generate').click(function() {

    $('.keyboard').remove();
    $('span').remove();

    fetch(`http://dinoipsum.herokuapp.com/api/?format=json`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
      .then(function(jsonifiedResponse) {
        getElements(jsonifiedResponse);
      });
  });

  $(document).on('click','.keyboard',function() {
    this.remove();

    let nameArray = [];
    let winCheckArray = [];

    Array.from(document.getElementsByClassName('letter')).forEach((i) => {
      nameArray.push(i.dataset.letter);
    });

    Array.from(document.getElementsByClassName('letter')).forEach((i) => {
      if (i.dataset.letter === this.value) {
        $(i).text(i.dataset.letter);  
      } 
    });

    Array.from(document.getElementsByClassName('letter')).forEach((i) => {
      winCheckArray.push(i.innerHTML);
    });

    if (nameArray.indexOf(this.value) < 0 ) {
      mistakes ++;
      $('#mistakes').append(`<span class="mistake"> X </span>`)
    }

    if (mistakes === 10) {
      $('#game-status').append(`<span class="game-status">Game Over!</span>`);
      $('.keyboard').remove()
    }

    if (winCheckArray.indexOf("__  ") === -1 ) {
      $('#game-status').append(`<span class="game-status">You win!</span>`);
      $('.keyboard').remove();
    }

  });
});