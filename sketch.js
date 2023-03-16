let coin;
let score;
let timeRemaining;

function setup() {
  createCanvas(500, 600);
  coin = {x:150, y:300};
  score = 0;
  timeRemaining = 1000;
}

function draw() {
  background(220);
  //coin
  ellipse(coin.x,coin.y,20)
  //collector
  ellipse(mouseX,mouseY,20)

  //CHECK OVERLAP CIRCLES
  if(collideCircleCircle(coin.x,coin.y,20,mouseX,mouseY,20)){
    // console.log("The circles overlap!")
    coin.x = random(width);
    coin.y = random(height);
    score++;
    // console.log("Your new score is "+ score + "!");
  }
  
  text("Your score is " + score, 10, 20)

  if(timeRemaining > 0){
    timeRemaining--;
  }  
  text("Time remaining: "+ timeRemaining, 10,40)

  if(timeRemaining === 0){
    text("Game Over", 10, 60)
  }
}

