$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
    }
    var inputString = $("input#sentence").val();
    var space = ' ';

    splitString(inputString, space);
  });
});
