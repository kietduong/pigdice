//back end
var roll = function () {
  return Math.floor(Math.random() * 6)
  + 1;

}

overalltotal1 = [];
player1TurnRolls = [];


var turns = function() {
  var total = 0;
  player1TurnRolls.forEach(function(data) {
  total += data;
});

return total;
}



//front end
$(document).ready(function() {
  $("#roll1").click(function(event) {
    player1TurnRolls.push(roll());
    p1reversed = player1TurnRolls.reverse();
    if (p1reversed[0] === 1) {
      alert("your turn over!")
      player1TurnRolls = [];

}
    console.log(player1TurnRolls)


    $(".currentRoll1").text("Rolls: " + player1TurnRolls + ",");

    $(".turnTotal1").text("turn total: " + turns())

    event.preventDefault();

  })
    $("#hold1").click(function(event) {
      overalltotal1.push(turns());
    $(".overalltotal1").text("Overall total: " + overalltotal1);
    player1TurnRolls = [];
})

});

// turnTotal = roll1 + roll2 + roll3 + roll4...ect
// Overall Total = turnTotal1 + turnTotal2 + turnTotal3....ect

// if (turn total >= "100") {
//   alert("You won!");
// }
// if(itemInput.length === 0){
//   alert("Please enter something");
//   return;
// roll();
// 6
// player1TurnRolls = [];
// []
// player1TurnRolls.push(roll());
// 1
// player1TurnRolls.push(roll());
// 2
// player1TurnRolls.push(roll());
// 3
// player1TurnRolls.push(roll());
// 4
// player1TurnRolls.push(roll());
// 5
// player1TurnRolls;
// [1, 4, 4, 2, 6]
// player1TurnRolls.join();
// "1,4,4,2,6"
