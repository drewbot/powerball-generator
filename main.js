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

// this function isn't actually removing the number every time. 
// Should be pulling the number at the random index of ballArray
// instead of pulling from the length of the array
// because a number already picked can still exist in the length of the array
function drawWhiteBalls() {
  for (var i = 1; i < 5 + 1; i++) {
    currentBallArray = ballArray.length
    num = Math.floor(Math.random() * (currentBallArray - 1 + 1)) + 1;
    ballsDrawn.push(num);
    ballArray = jQuery.grep(ballArray, function( a ) {
      return a !== num;
    });
    console.log(ballArray.length)
    console.log(ballArray)
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
  $('.winning-numbers div:last-of-type ul').append('<li>' +  element +'</li>');
}

var playNumber = 0;

$('button').click( function() {
  drawWhiteBalls()
  console.log(ballsDrawn);
  drawPowerball()
  var winningNumbers = ballsDrawn.toString();
  console.log('The winning powerball numbers are: ' + winningNumbers);
  $('.winning-numbers').append('<div class="play"><ul></ul><div>');
  ballsDrawn.forEach(showWinningNums);
  playNumber += 1;
  $('.winning-numbers .play:last-of-type').prepend('<p>Play #' + playNumber + ':</p>');
  if (ballArray.length !== 64) {
    alert('ERROR: Two of the same number');
  };
  ballArray = [];
  createWhiteBallPool();
  ballsDrawn = [];
});

















