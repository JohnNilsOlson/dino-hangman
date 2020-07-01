import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Dino } from './dino';

function getElements(response) {
  
  let dino;
  
  if (response) {

    dino = new Dino(response[0][0]);
    dino.splitDino();

    let alphabitArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    dino.nameArray.forEach(function(i) {
      $('#dino-output').append(`<span class="letter" id="${i}">__  </span>`);
    });

    alphabitArray.forEach(function(i) {
      $('#keyboard-output').append(`<button type="button" class="btn keyboard btn-primary" id="${i}">${i}</button>`)
    });

    $('#error-output').text("");

  } else {
    $('#dino-output').text("");
    $('#error-output').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
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
});