////////////////////////////////////////////////
//              Lotto Generator               //
////////////////////////////////////////////////

var ballArray = [];
console.log(ballArray);
var ballsDrawn = [];
var currentBallArray;
var num;
var powerball;

function createWhiteBallPool() {
  for (var i = 1; i < 69 + 1; i++) {
    ballArray.push(i);
  }
}

createWhiteBallPool();
console.log(ballArray);

function drawWhiteBalls() {
  for (var i = 1; i < 5 + 1; i++) {
    currentBallArray = ballArray.length
    num = Math.floor(Math.random() * (currentBallArray - 1 + 1)) + 1;
    ballsDrawn.push(num);
    ballArray = jQuery.grep(ballArray, function( a ) {
      return a !== num;
    });
    console.log(ballArray.length);
  };
};

drawWhiteBalls()
console.log(ballsDrawn);

function getPowerballNum() {
  return Math.floor(Math.random() * (26 - 1 + 1)) + 1;
}

function drawPowerball() {
  powerball = getPowerballNum();
  ballsDrawn.push(powerball);
}

drawPowerball()

var winningNumbers = ballsDrawn.toString();
console.log('The winning powerball numbers are: ' + winningNumbers);

function showWinningNums(element, index, array) {
  $('.winning-numbers').append('<li>' +  element +'</li>');
}

$('button').click( function() {
  ballsDrawn.forEach(showWinningNums);
});

















