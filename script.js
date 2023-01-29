//GameScreen section
let startScreen = document.querySelector(".startScreen");
let gameScreen = document.querySelector(".gameScreen");
startScreen.addEventListener("click", hideStartScreen);

let name = document.querySelector("#name")
let currentUser = localStorage.getItem('currentUserLoggedIn');

name.innerText = currentUser;


let player = {
    speed: 5,
    score: 0,
    start: false
}

// let img = document.createElement('img');
// img.src="https://www.pngfind.com/pngs/m/138-1380109_2d-car-hd-png-download.png"
// car.appendChild(img)
function hideStartScreen() {

    player.start = true;
    startScreen.classList.add("hide");
    gameScreen.classList.remove("hide");
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    
   
    player.x=car.offsetLeft;
    player.y=car.offsetTop;
    gameScreen.appendChild(car);
    requestAnimationFrame(start);
}

document.addEventListener("keyup", keyPressed);
document.addEventListener("keydown", keyReleased);

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

function keyPressed(event) {
    console.log(event.key+"pressed")
    if (keys[event.key]==false)
    {
        keys[event.key] = true;
    }
    
    console.log(keys)
}

function keyReleased(event) {
    console.log(event.key+"released")
    if (keys[event.key]==true)
    {
        keys[event.key] = false;
    }
       
        console.log(keys)
}

 let count=0;

function start() {
    console.log("car")
    let car = document.querySelector(".car")
    let road=gameScreen.getBoundingClientRect();
    let carRect=car.getBoundingClientRect();
    if(keys.ArrowUp&&player.y>road.top)
    {
        
        player.y= player.y-player.speed;
    }
    if(keys.ArrowDown&&player.y<road.bottom-carRect.height)
    {
        player.y= player.y+player.speed;
    }
    if(keys.ArrowLeft&&player.x>road.left)
    {
        player.x=player.x-player.speed;
    }
    if(keys.ArrowRight&&player.x<road.right)
    {
        player.x=player.x+player.speed;
    }
    if (player.start == true) {
    
        car.style.top = player.y+"px";
        car.style.left=player.x+"px";
        requestAnimationFrame(start);
    }

}


