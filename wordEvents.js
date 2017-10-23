var $ = require('jquery')
var api = 'https://wordwatch-api.herokuapp.com'

function retrieveTopWord() {
  $.get( api + '/api/v1/top_word', function( data ) {
    console.log(data)
    // $('.top-word').append( data );
    // console.log( data + 'successfully appended to top word' );
  });
}

module.exports = retrieveTopWord
