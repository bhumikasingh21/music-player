const playy = document.getElementById("play");
console.log(playy);

const pausee = document.getElementById("pause");
console.log(pausee);

const song = document.getElementById("song");
console.log(song);

playy.onclick=()=>{
    console.log("play");
    song.play();
}

pausee.onclick=()=>{
    console.log("pause");
    song.pause();
}

//for song 2
const play1 = document.getElementById("play1");
console.log(play1);

const pause1 = document.getElementById("pause1");
console.log(pause1);

const song1 = document.getElementById("song1");
console.log(song1);

play1.onclick=()=>{
    console.log("play1");
    song1.play();
}

pause1.onclick=()=>{
    console.log("pause1");
    song1.pause();
}

//for 3
const play2 = document.getElementById("play2");
console.log(play2);

const pause2 = document.getElementById("pause2");
console.log(pause2);

const song2 = document.getElementById("song2");
console.log(song2);

play2.onclick=()=>{
    console.log("play2");
    song2.play();
}

pause2.onclick=()=>{
    console.log("pause2");
    song2.pause();
}