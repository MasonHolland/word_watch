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

  static filterBlock(blockOfText) {
    var noPunctuation = blockOfText.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    var allWords = noPunctuation.split(" ").map(function(word) {
      return word.toLowerCase();
    })
    return allWords
  }

  static breakDown(data) {
    var allWords = WatchEvents.filterBlock(data)
    var wordCounts = {};
    allWords.forEach(function(word) {
      if (wordCounts[word] !== undefined) {
        wordCounts[word]++;
        Ajax.postWordCount(word);
      } else {
        wordCounts[word] = 1;
        Ajax.postWordCount(word);
      }
    })
    WatchEvents.createWordMap(wordCounts);
    // $.post( api + '/api/v1/words', { word: wordCounts })
  }

  static createWordMap(wordCounts) {
    Object.entries(wordCounts).forEach(function(wordCount) {
      $('.word-count')
      .append(
        "<p style='font-size:"
        + wordCount[1]
        + "em'>"
        + wordCount[0]
        + "</p>")
    })
  }
}

module.exports = WatchEvents
