$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // function splitString(stringToSplit, ' ') {
    //   var arrayOfStrings = stringToSplit.split(separator);
    // }
    // var inputString = $("input#sentence").val();
    //
    //
    // console.log(splitString(inputString, space));

    var str = $("input#sentence").val();


      if (str.length >= 3) {
      var strSplits = str.split(' ').reverse().join(' ');
      console.log(strSplits);
    // });

    // var strSplits = str.split(' ');

};

  // if (str.length >= 3) {
  //   str.map(function(str) {
  //     var joinedStr = str.re
  //   })
  //  }
});
});
