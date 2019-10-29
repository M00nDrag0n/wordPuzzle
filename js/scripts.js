$(document).ready(function() {
  $("#stringInput").submit(function(event) {

  event.preventDefault();

  var s1 = $("#s1").val();
  console.log("value is: ", s1);
  

  let vowels = ["a", "e", "i", "o", "u"];


  // for( var i = 0; i )
  if (s1 === vowels) {
    vowels = "-";
  } else {
    alert("please type a sentence to survive");
  }

$("#space").text(s1);
console.log("value is: ", s1);

  });
});

// var s1 = $("#s1").val().split(" ");
