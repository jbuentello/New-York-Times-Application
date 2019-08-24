const API_KEY = 'kJOiAvWAUX8EQeuLZVl9PP1vXBYxhkIw'

let searchTerm = $('#searchTerm');
let numbersToRetrive = $('#recordsToRetrieve');
let startYear = $('#startYear');
let endYear = $('#endYear');

const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${API_KEY}`;

function clearTheInputs() {
  searchTerm = '';
  numbersToRetrive = '';
  startYear = '',
  endYear = ''
};

function searchForResults() {
// Testing for Inputs
  console.log(searchTerm);
  console.log(numbersToRetrive);
  console.log(startYear);
  console.log(endYear);
// ------------------------
// Ajax parameters for api call.
  let options = {
    url: queryURL,
    method: 'GET'
  }

 // Actual Ajax call 
  $.ajax(options).then(function(response){
    console.log(response);
  });
}



$('#search').on('click', searchForResults);
$('#clear').on('click', clearTheInputs);