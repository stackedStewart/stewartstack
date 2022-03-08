let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';

let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';

let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";


let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);

  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else { (choreDoor === 2) 
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
 }
}


const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
 }
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('Win!');
 } else if(isBot(door)=== true){
    gameOver('Loser!');
 }
}

let numClosedDoors = 3; 

let openDoor1;
let openDoor2;
let openDoor3;


doorImage1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(door1);
  }
}

doorImage2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(door2);
  }
}

doorImage3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(door3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
  startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'CLICK ME!'
  currentlyPlaying = true; {
    randomChoreDoorGenerator();
  }
}


const gameOver = (status) => { 
  if (status === 'Win!') {
  startButton.innerHTML = 'You win! Play again?';
  } else { (status === 'Loser!')
  startButton.innerHTML = 'Game over! Play again?'
}
 currentlyPlaying = false;
}

let currentlyPlaying = true;


startRound();