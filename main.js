////////////////////////////////////////////////
//              Lotto Generator               //
////////////////////////////////////////////////

var playArray = [];
var ballArray = [];
var ballsDrawn = [];
var powerball;
var playNumber = 0;
var plays = [];

function createWhiteBallPool() {
  for (var i = 1; i < 69 + 1; i++) {
    ballArray.push(i);
  }
}

createWhiteBallPool();

function drawWhiteBalls() {
  for (var i = 1; i < 5 + 1; i++) {
    var currentBallArray = ballArray.length
    var index = Math.floor(Math.random() * currentBallArray);
    var num = ballArray[index];
    ballsDrawn.push(num);
    ballArray = jQuery.grep(ballArray, function( a ) {
      return a !== num;
    });
  };
};

function drawPowerball() {
  powerball = Math.floor(Math.random() * (26)) + 1;
  ballsDrawn.push(powerball);
}

function showYourNums(element, index, array) {
  $('.your-numbers div:last-of-type ul').append('<li>' +  element +'</li>');
}

function generateTickets() {
  playNumber += 1;

  drawWhiteBalls()
  drawPowerball()

  $('div.your-numbers').append('<div class="play"><ul></ul><div>');

  ballsDrawn.forEach(showYourNums);

  var redBallDrawn = ballsDrawn.pop();

  var playObj = {
    id: 'play' + playNumber,
    whiteBallsDrawn: ballsDrawn,
    redBallDrawn: redBallDrawn
  };

  plays.push(playObj);

  $('div.play:last-of-type').attr('id', 'play' + playNumber);
  $('div.play:last-of-type').prepend('<label>Play #' + playNumber + ':</label>');
  window.scrollTo(0,document.body.scrollHeight);

  if (ballArray.length !== 64) {
    alert('ERROR: Two of the same number');
  };

  ballArray = [];
  createWhiteBallPool();
  ballsDrawn = [];
};

$('.generate button:first-of-type').click(generateTickets);


// for (var i = 0; i < 100; i++) {
//   generateTickets();
// }


function arrayCompare(myArray, myPowerball, winArray, winPowerball, divId) {
  var divId = 'div#' + divId;

  var winWhiteCounter = 0;
  var winPowerballCounter = 0;

  for (var i = 0; i < myArray.length; i++) {
    var drawnNumberIndex = jQuery.inArray( myArray[i], winArray )
    if (drawnNumberIndex !== -1) {
      winWhiteCounter += 1;
      $('.your-numbers').find(divId).find('li').eq(i).addClass('drawn-number');
    }
  }

  if (myPowerball === winPowerball) {
    winPowerballCounter += 1;
    $('.your-numbers').find(divId).find('li:last-of-type').addClass('drawn-number');
  }

  $('.your-numbers').find(divId).append('<div class="outcome"></div>');

  var $outcome = $(divId).find('.outcome')
  var outcomeText;

  if (winPowerballCounter) {
    if (winWhiteCounter === 1) {
      outcomeText = '<p>You matched 1 white ball and the powerball. <span class="win">You won $4!</span></p>';
    } else if (winWhiteCounter === 2) {
      outcomeText = '<p>You matched 2 white balls and the powerball. <span class="win">You won $7!</span></p>';
    } else if (winWhiteCounter === 3) {
      outcomeText = '<p>You matched 3 white balls and the powerball. <span class="win">You won $100!</span></p>';
    } else if (winWhiteCounter === 4) {
      outcomeText = '<p>You matched 4 white balls and the powerball. <span class="win">You won $50,000!</span></p>';
    } else if (winWhiteCounter === 5) {
      outcomeText = '<p>JACKPOT!!! <span class="win">You won the GRAND PRIZE!!!</span></p>';
    } else {
      outcomeText = '<p>You matched the powerball. <span class="win">You won $4!</span></p>';
    }
  } else if (winWhiteCounter === 1) {
    outcomeText = '<p>You matched 1 white ball. <span>No winnings.</span></p>';
  } else if (winWhiteCounter === 2) {
    outcomeText = '<p>You matched 2 white balls. <span>No winnings.</span></p>';
  } else if (winWhiteCounter === 3) {
    outcomeText = '<p>You matched 3 white balls. <span class="win">You won $7!</span></p>';
  } else if (winWhiteCounter === 4) {
    outcomeText = '<p>You matched 4 white balls. <span class="win">You won $100!</span></p>';
  } else if (winWhiteCounter === 5) {
    outcomeText = '<p>You matched 5 white balls. <span class="win">You won $1,000,000!</span></p>';
  } else {
    outcomeText = '<p>No matches</p>';
  }

  $outcome.append(outcomeText);
}

function drawWinning() {
  drawWhiteBalls()
  drawPowerball()

  var winningPowerball = ballsDrawn.pop();

  console.log('winning white balls drawn: ' + ballsDrawn + '. Winning powerball: ' + winningPowerball);

  for (var i = 0; i < plays.length; i++) {
    var playsObj = plays[i];
    var playsObjBallsDrawn = playsObj['whiteBallsDrawn'];
    var playsObjPowerball = playsObj['redBallDrawn'];
    var playsObjId = playsObj['id'];
    arrayCompare(playsObjBallsDrawn, playsObjPowerball, ballsDrawn, winningPowerball, playsObjId)
  }
}

$('.draw button:first-of-type').click(drawWinning)

// TODO:
// On draw hide button panel by sliding up
// Scroll to top of body
// Show winning numbers above all the tickets, cetered on white bg
// Show reset button ("Play again") with winning numbers
// On reset erase all tickets, hide winning numbers, show button panel
// Add tooltip on ball input hover to display rules for that type of ball
//   Ex: "White balls must be between 1 and 69"


// plays = [
//   {
//     id: 'play1',
//     ballsDrawn: [59, 9, 24, 13, 12],
//     whiteBallsDrawn: [59, 9, 24, 13],
//     redBallDrawn: 12
//   },
//   {
//     id: 'play2',
//     ballsDrawn: [11, 49, 38, 17, 56],
//     whiteBallsDrawn: [11, 49, 38, 17],
//     redBallDrawn: 12
//   },
//   {
//     id: 'play3',
//     ballsDrawn: [15, 69, 8, 3, 23],
//     whiteBallsDrawn: [15, 69, 8, 3],
//     redBallDrawn: 23
//   } 
// ];









