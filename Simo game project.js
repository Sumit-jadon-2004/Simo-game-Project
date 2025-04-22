let gameseq = [];
let userseq = [];
let btns = ['red', 'yellow', 'purple' , 'green'];
let start = false;
let hightscore = 0;
let level = 0;

let h3 = document.querySelector("h3");
let h2 = document.querySelector('h2');

document.addEventListener("keypress" , function(){
    if (start == false){
        console.log("game was started");
        start= true;
        levelup();
    }
});

function getflash(btn){
  btn.classList.add("flash");
  setTimeout( function (){
    btn.classList.remove("flash")
  },250)
}

function levelup(){
  userseq=[];
    level++;
    h3.innerText = `level ${level}`

      if (level > hightscore){
          hightscore = level;
          h2.innerText=`Your high score : ${hightscore}`;
      }

    let randomindx = Math.floor(Math.random()*4);
    let randomcolor = btns[randomindx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq)
    getflash(randombtn)
}
function checkAns(idx){

  if (userseq[idx] === gameseq[idx]){
    if(userseq.length==gameseq.length){
      setTimeout(levelup , 1000);
    }
  }else{
    h3.innerHTML=`game over ! your Score is <b> ${level}<b>  <br> Try again press any keys`;
    reset();
    document.querySelector('body').style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector('body').style.backgroundColor="white";
    },150);
  }
}
function btnpress(){
  console.log(this)
  let btn = this;
   getflash(btn);
  usercolor = btn.getAttribute("id")
  userseq.push(usercolor);
  checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(let btn of allbtns){
  btn.addEventListener("click" , btnpress);
}

function reset(){
  start = false;
  level =0 ;
  gameseq= [];
  userseq =[];
}