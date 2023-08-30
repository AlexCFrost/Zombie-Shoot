const gameBody = document.getElementById("game-body");
// let zombies

// Iteration 1.2: Add shotgun sound
let shortgunsound = new Audio("./assets/shotgun.wav");
gameBody.onclick = () => {
  shortgunsound.pause();
  shortgunsound.currentTime = 0;
  shortgunsound.play();
};

// Iteration 1.3: Add background sound

let backgroundMusic = new Audio("./assets/bgm.mp3");
backgroundMusic.play();
backgroundMusic.loop = true;

//generateing zombies
let lives = 3
let zombieID = 0;
let zombie;
function generateZombies() {
  let num = generateUniqueNums(1, 7);
  gameBody.innerHTML += `<img src=./assets/zombie-${num}.png class = zombie-image id = zombie${zombieID}>`;

  zombie = document.getElementById(`zombie${zombieID}`);
  let seconds = generateUniqueNums(2, 7);
  zombie.style.animationDuration = `${seconds}s`;
  let viewwidth = generateUniqueNums(10, 90);
  zombie.style.transform = `translateX(${viewwidth}vw)`;

  zombie.onclick = () => {
    destroyZombie(zombie);
  };
}

generateZombies();

// RandomNumbers

function generateUniqueNums(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

//function to destroy zombie

function destroyZombie(tost) {
  tost.style.display = "none"
  zombieID++
  generateZombies()
}

//To check zombie crossed line
let time = 60
function zombieEscape(zombie){

    if(zombie.getBoundingClientRect().top<=0){
    lives--

if(lives<=0){
    location.href="game-over.html"
}else{
    destroyZombie(zombie)
}
    }
}
zombieEscape(zombie)

//timer function

setInterval(timer,1000)

function timer(){
if(time<=0){
    location.href="win.html"
}else{
    time--
    document.getElementById("timer").innerText = time
    zombieEscape(zombie)
}

}
