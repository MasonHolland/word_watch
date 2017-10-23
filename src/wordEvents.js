var $ = require('jquery')
var Ajax    = require('./ajaxRequests')
var api = 'https://wordwatch-api.herokuapp.com'


class WatchEvents {
  static retrieveAndAppendTopWord() {
    $.get( api + '/api/v1/top_word', function( data ) {
      var topWord       = Object.keys(data.word)[0]
      var topWordCount  = Object.values(data.word)[0]
      $('.top-word > h3').append(topWord + ' (' + topWordCount +')');
   })
  }

  static breakDown(data) {
    var noPunctuation = data.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    var allWords = noPunctuation.split(" ");
    var wordCounts = {};
    allWords.forEach(function(word) {
      var filtered = word.toLowerCase();
      if (wordCounts[filtered] !== undefined) {
        wordCounts[filtered]++;
      } else {
        wordCounts[filtered] = 1;
      }
    })
    debugger;
  }
}

module.exports = WatchEvents
