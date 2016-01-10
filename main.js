////////////////////////////////////////////////
//              Lotto Generator               //
////////////////////////////////////////////////

var ballArray = [];
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

function drawWhiteBalls() {
  for (var i = 1; i < 5 + 1; i++) {
    currentBallArray = ballArray.length
    num = Math.floor(Math.random() * (currentBallArray - 1 + 1)) + 1;
    ballsDrawn.push(num);
    ballArray = jQuery.grep(ballArray, function( a ) {
      return a !== num;
    });
  };
};

function getPowerballNum() {
  return Math.floor(Math.random() * (26 - 1 + 1)) + 1;
}

function drawPowerball() {
  powerball = getPowerballNum();
  ballsDrawn.push(powerball);
}

function showWinningNums(element, index, array) {
  $('.winning-numbers ul:last-of-type').append('<li>' +  element +'</li>');
}

$('button').click( function() {
  drawWhiteBalls()
  console.log(ballsDrawn);
  drawPowerball()
  var winningNumbers = ballsDrawn.toString();
  console.log('The winning powerball numbers are: ' + winningNumbers);
  $('.winning-numbers').append('<ul></ul>');
  ballsDrawn.forEach(showWinningNums);
  ballArray = [];
  createWhiteBallPool();
  ballsDrawn = [];
});

















