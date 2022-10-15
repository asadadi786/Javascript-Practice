//Runs the if block
let alien_color = 'green';
printAlienPointsOnColorBase()

alien_color='yellow'
printAlienPointsOnColorBase()

alien_color='red'
printAlienPointsOnColorBase()

function printAlienPointsOnColorBase() {
  if (alien_color == "green") {
    console.log('alien_color = '+alien_color +". The player just earned 5 points for shooting the alien.");
  } else if (alien_color == "yellow") {
    console.log('alien_color = '+alien_color +". The player just earned 10 points for shooting the alien.");
  } else if (alien_color == "red") {
    console.log('alien_color = '+alien_color +". The player just earned 15 pointsfor shooting the alien.");
  }
}