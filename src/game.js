import $ from "jquery";
import { Dino } from './../src/dino.js'

export class Game {
  constructor() {
    this.mistakes = 0;
    this.nameArray = [];
    this.winCheckArray = [];
  }

  buildBoard() {
    dino.nameArray.forEach(function(i) {
      $('#dino-output').append(`<span class="letter" data-letter="${i}">__  </span>`);
    });
  }

  getElements(response) {

    let dino;
    
    if (response) {
  
      dino = new Dino((response[0][0]).toLowerCase());
      $('#error-output').text("");
  
    } else {
      $('#dino-output').text("");
      $('#error-output').text(`There was an error: ${response.message}`);
    }
  }

  getDino() {
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
  }

  buildKeyboard() {
    let alphabitArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alphabitArray.forEach(function(i) {
      $('#keyboard-output').append(`<button type="button" class="btn btn-primary keyboard" id="${i}" value="${i}">${i}</button>`);
    });
  }

  guessLetter() {
    Array.from(document.getElementsByClassName('letter')).forEach((i) => {
      this.nameArray.push(i.dataset.letter);
    });

    Array.from(document.getElementsByClassName('letter')).forEach((i) => {
      if (i.dataset.letter === this.value) {
        $(i).text(i.dataset.letter);  
      } 
    });

    Array.from(document.getElementsByClassName('letter')).forEach((i) => {
      this.winCheckArray.push(i.innerHTML);
    });

    if (this.nameArray.indexOf(this.value) < 0 ) {
      this.mistakes ++;
      $('#mistakes').append(`<span class="mistake"> X </span>`)
    }

    if (this.mistakes === 10) {
      $('#game-status').append(`<span class="game-status">Game Over!</span>`);
      $('.keyboard').remove()
    }

    if (this.winCheckArray.indexOf("__  ") === -1 ) {
      $('#game-status').append(`<span class="game-status">You win!</span>`);
      $('.keyboard').remove();
    }
  }
}