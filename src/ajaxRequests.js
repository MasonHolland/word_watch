var $ = require('jquery')
var api = 'https://wordwatch-api.herokuapp.com'

class AjaxRequests {
  // constuctor(apiUrl) {
  //   this.apiUrl = 'https://wordwatch-api.herokuapp.com'
  // }

  static retrieveTopWord() {
    debugger;
    $.get( api + '/api/v1/top_word');
    debugger;
  };
};

module.exports = AjaxRequests
