var  database;
var gameState,playerCount


function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  game=new Game()
  game.getState()
  game.start()
}

function draw(){
  
  
}



