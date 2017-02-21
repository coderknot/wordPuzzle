$(document).ready(function() {
  $("#puzzleForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var userArray = userInput.split(" ");
    var puzzleString = [];

    for(var index = 0; index < userArray.length; index += 1) {
      var word = userArray[index];
      var wordArray = word.split("");

      for(var j = 0; j < wordArray.length; j +=1) {
      	var character = "";
      	if(wordArray[j] === 'a' ||wordArray[j] === 'e' || wordArray[j] === 'i' || wordArray[j] === 'o' || wordArray[j] === 'u') {
        	character = "-";
        } else {
        	character = wordArray[j];
        }
        puzzleString.push(character);
      }
      puzzleString.push(" ");
      };
      var output = puzzleString.join("");

      $("#output").text(output);
      $("#output").show();
      $("#showAnswer").show();
      $("#puzzleForm").hide();
  });

  $("#showAnswer button").click(function() {
    $("#puzzleForm").show();
  });
});
