$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var str = $("input#sentence").val();

      if (str.length >= 3) {
      var strSplits = str.split(' ').reverse().join(' ');
      console.log(strSplits);
      $(".modSentence").text(strSplits);
      };
  });
});
