let favorite_fruits = ["Mango", "Cherry", "PineApple"];

favorite_fruits.forEach(CheckFruitExist);

function CheckFruitExist(value, index, array) {
  if (value == "Mango") {
    console.log(" You really like Mango!");
  }
  if (value == "Cherry") {
    console.log(" You really like Cherry!");
  }
  if (value == "PineApple") {
    console.log(" You really like PineApple!");
  }
  if (value == "Orange") {
    console.log(" You really like Orange!");
  }
  if (value == "Bannana") {
    console.log(" You really like Bannana!");
  }
  
}
