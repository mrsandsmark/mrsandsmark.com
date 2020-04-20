var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
var numClosedDoors= 3;
var openDoor1;
var openDoor2;
var openDoor3;
var startButton = document.getElementById("start");
var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
var currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }
  else {return false;}
}
const isClicked = (door) => {
  if(door.src ===closedDoorPath){
    return false;
  }
  else {return true;}
}
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isBot(door)==true){
    gameOver();
  }
}
const randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 1){
     openDoor1 = botDoorPath;
     openDoor2 = beachDoorPath;
     openDoor3 = spaceDoorPath;
     }
  else if(choreDoor === 2){
     openDoor2 = botDoorPath;
     openDoor1 = beachDoorPath;
     openDoor3 = spaceDoorPath;
     }
   else if(choreDoor === 3){
     openDoor3 = botDoorPath;
     openDoor1 = beachDoorPath;
     openDoor2 = spaceDoorPath;
     }
}
var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
      doorImage1.src = openDoor1;
  }
  playDoor(door1);
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
     doorImage2.src = openDoor2;
  }
 playDoor(door2);
}
door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
  }
  playDoor(door3);
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

 startButton.onclick = () => {
 if(!currentlyPlaying){   
  startRound();
  }
}
const gameOver = (str) => {
  if(str === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else { startButton.innerHTML = 'Game over! Play     again?';
       }
 currentlyPlaying = false;
}
startRound();