//back end
var roll = function () {
  return Math.floor(Math.random() * 6)
  + 1;

}

overalltotal = [];
player1TurnRolls = [];

var turns = function() {
  var total = 0;
  player1TurnRolls.forEach(function(data) {
  total += data;
});

return total;
}

var totaltotal = function() {
  var total2 = 0;
  overalltotal.forEach(function(data) {
  total2 += data;
});

return total2;
}



//front end
$(document).ready(function() {
  $("#roll1").click(function(event) {
    event.preventDefault();
    player1TurnRolls.push(roll());
    p1reversed = player1TurnRolls.reverse();
    if (p1reversed[0] === 1) {
      alert("you rolled a 1 sucker, your turn over!")
      player1TurnRolls = [];
}


    $(".currentRoll1").text("Rolls: " + player1TurnRolls + ",");
    $(".turnTotal1").text("turn total: " + turns())



  })
    $("#hold1").click(function(event) {
      overalltotal.push(turns());
    $(".overalltotal1").text("Overall total: " + totaltotal());
    alert("you held, your turn is now over!")
    player1TurnRolls = [];


})

});
