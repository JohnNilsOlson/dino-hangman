import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

function getElements(response) {
  if (response) {

    const dino = response[0][0];
    // const splicedResponse;

    // splicedResponse = repsonse.pop();
    // dino = splicedResponse[0][1];

    $('#dino-output').text(dino);
    $('#error-output').text("");
  } else {
    $('#dino-output').text("");
    $('#error-output').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#generate').click(function() {
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