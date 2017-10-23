var wordEvents = require('./wordEvents')
var $          = require('jquery')

document.addEventListener("DOMContentLoaded", () => {
  wordEvents.retrieveAndAppendTopWord()

  $(':button').click(function() {
    var textBlock = $('textarea').val();
    wordEvents.breakDown(textBlock);
  })
})
