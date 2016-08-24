//back end
turnTotalArray = [];
overallTotalArray = [];



var rando = function () {
  return Math.floor(Math.random() * 6)
  + 1;
}



//front end
$(document).ready(function() {
  $("#roll1").click(function(event) {
    $(".currentRoll1").append(" " + rando() );
    turnTotalArray.push();



    event.preventDefault();
  })

});
