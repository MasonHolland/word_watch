var $ = require('jquery')
var api = 'https://wordwatch-api.herokuapp.com'

class AjaxRequests {

  static postWordCount(wordOccurence) {
    $.post( api + '/api/v1/words', { word: { value: wordOccurence } })
  }
};

module.exports = AjaxRequests
