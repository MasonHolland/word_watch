var $ = require('jquery')
var api = 'https://wordwatch-api.herokuapp.com'

function retrieveTopWord() {
  $.get( api + '/api/v1/top_word', function( data ) {
    debugger;
    var key   = Object.keys(data.word[0]);
    var value = Object.values(data.word[0]);
    $('.top-word > h3')
    .append(
      '<span>' + key + '(' + value +')' + '</span>' );
  });
}

module.exports = retrieveTopWord
