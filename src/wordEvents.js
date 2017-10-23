var $ = require('jquery')
var Ajax    = require('./ajaxRequests')
var api = 'https://wordwatch-api.herokuapp.com'


class HtmlHelper {
  static retrieveAndAppendTopWord() {
    $.get( api + '/api/v1/top_word', function( data ) {
      var topWord       = Object.keys(data.word)[0]
      var topWordCount  = Object.values(data.word)[0]
      $('.top-word > h3').append(topWord + ' (' + topWordCount +')');
   })
  }
}

module.exports = HtmlHelper
