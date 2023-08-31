//Dealing with impporting pieces and board

let board = document.querySelector('.board');
let diceAudio = document.getElementById('diceSound');
let moveSound = document.getElementById('Move');
let killedSound = document.getElementById('Killed');
let lastSound = document.getElementById('Last');
let outroSound = document.getElementById('Outro');

 function playSound(){
   openAudio.play();
 }
function render()
for (let i = 1; i <= 4; i++) {
      const box = document.getElementById(`in-r-${i}`);
      const img = document.createElement("img");
      img.src = "/asset/images/Red.png";
      box.appendChild(img);
}
for (let i = 1; i <= 4; i++) {
      const box = document.getElementById(`in-Y-${i}`);
      const img = document.createElement("img");
      img.src = "/asset/images/Yellow.png";
      box.appendChild(img);
}
for (let i = 1; i <= 4; i++) {
      const box = document.getElementById(`in-g-${i}`);
      const img = document.createElement("img");
      img.src = "/asset/images/Red.png";
      box.appendChild(img);
}
for (let i = 1; i <= 4; i++) {
      const box = document.getElementById(`in-B-${i}`);
      const img = document.createElement("img");
      img.src = "/asset/images/Red.png";
      box.appendChild(img);
}