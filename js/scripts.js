$(document).ready(function() {
  $("#stringInput").submit(function(event) {

  event.preventDefault();

  var s1 = $("#s1").val();
  console.log("value is: ", s1);

  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  $(s1).map(function(letter) {
    vowels.map(function(vowel) {
      if (letter === vowel){
        s1.replace("-");
        // FIND A WAY TO MAKE IT A DASH FROM HERE
      } else {
        // DO NOTHING
      }
    })
  })
  //  else {
  //   alert("please type a sentence to survive");
  // }

$("#space").text(s1);
console.log("value is: ", s1);

  });
});

// var s1 = $("#s1").val().split(" ");
