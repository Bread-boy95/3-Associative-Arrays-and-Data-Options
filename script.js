// Lesson 3: Associative Arrays & Data Options

//. Ex 1. English grades

// let lastNames = ["McDavid", "Nougent-Hopkins", "Draisaitl"];
// let englGrades = [73, 91, 85];
// let writingDiploma = [true, false, false];
// // put data in alphabetical order using array methods(e.g. push/pop/splice, etc);
// lastNames.unshift(lastNames.pop());
// englGrades.unshift(englGrades.pop());
// writingDiploma.unshift(writingDiploma.pop());

// console.table([lastNames, englGrades, writingDiploma]);

// Ex 2. rectangles

// var rectangles = [
//   [100, 150, 20, 200],
//   [220, 200, 130, 45],
//   [150, 300, 75, 75],
// ];
// ctx.fillStyle = "green";
// ctx.fillRect(
//   rectangles[0][0],
//   rectangles[0][1],
//   rectangles[0][2],
//   rectangles[0][3]
// );
// console.log(rectangles[1][2]); // 130

// // build other rectangles, perferrably using loop
// for (let i = 0; i < rectangles.length; i++) {
//   ctx.fillRect(
//     rectangles[i][0],
//     rectangles[i][1],
//     rectangles[i][2],
//     rectangles[i][3]
//   );
// }

// // Push another rectangle
// var aRectangle = [20, 300, 45, 75];
// rectangles.push(aRectangle);

// // change 2nd rectangle
// rectangles[1][2] = 200;

// // EXCIRCISE 1
// var firstNames = ["Bones", "Welma", "Frank", "Han", "Jack"];
// var lastNames = ["Smith", "Seger", "Mathers", "Solo", "Jackles"];
// var heights = [158, 169, 172, 183, 201];
// let first = prompt("Please enter your first name");
// let last = prompt("Please enter your last name");
// let promptheight = parseInt(prompt("Please enter your height"));

// for (let i = 0; i < heights.length; i++) {
//   if (promptheight < heights[i]) {
//     firstNames.splice(i, 0, first);
//     lastNames.splice(i, 0, last);
//     heights.splice(i, 0, promptheight);
//     break;
//   }
// }
// console.table([firstNames, lastNames, heights]);

// EXAMPLE 2
// var tictactoeBoard = [
//   ["x", "x", "o"],
//   ["", "x", "o"],
//   ["", "", ""],
// ];
// let playerX1 = parseInt(
//   prompt("you are playing as X, please list a colomn using numbers 0, 1, or 2.")
// );
// let playerX2 = parseInt(
//   prompt("you are playing as X, please list a row using numbers 0, 1, or 2.")
// );

// function displayBoard() {
//   if (playerX1 > -1 && playerX1 < 3 && playerX2 > -1 && playerX2 < 3) {
//     tictactoeBoard[playerX2].splice(playerX2, playerX1, `x`);
//   } else if (playerO1 > -1 && playerO1 < 3 && playerO2 > -1 && playerO2 < 3) {
//     tictactoeBoard[playerO2].splice(playerO2, playerO1, `o`);
//   }
// }
// console.table(tictactoeBoard);
// console.log(
//   "If your piece does not show up on the board, try entering a number from 1 to 3"
// );

// let playerO1 = parseInt(
//   prompt("you are playing as O, please list a colomn using numbers 0, 1, or 2.")
// );
// let playerO2 = parseInt(
//   prompt("you are playing as O, please list a row using numbers 0, 1, or 2.")
// );

// Example 3.
let dragon = {
  Health: 100,
  atkString: ">",
  attakPwr: 15,
};
let player = {
  Health: 100, //Math.random() * 100 + 80,
  atkString: "?",
  attakPwr: 17,
};
battle(dragon, player);
attack(player);
function attack(actor) {
  var attackstring = "";
  for (let i = 0; i < actor.attakPwr; i++) {
    attackstring += actor.atkString;
  }
  console.log(attackstring);
}
// console.log(dragon);
function battle(goon, hero) {
  console.log("The dragon attacks");
  hero.Health -= goon.attakPwr;
  console.log("Player has taken 15 damage, 85 health remaining");
  console.log("The player attacks");
  goon.Health -= hero.attakPwr;
  console.log("Dragon took 17 damage, 83 health remaining");
  console.log(hero);
  console.log(goon);
}
