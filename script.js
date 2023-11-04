const btn = document.querySelectorAll("button");
const main = document.querySelector('main');

function computerplay(){
  const choices = ["rock","paper","scissor"]
  const rand = Math.floor(Math.random()*choices.length);
  // console.log(choices[rand])
  return choices[rand];
}

let humscore = 0;
let compscore = 0;
let p = document.createElement('h3');
let f = document.createElement('h2');
p.style.textAlign = 'center'
p.style.margin ='30px'

btn.forEach((bn)=>{
bn.addEventListener('click',()=>{
  const result = playgame(bn.id , computerplay());
  // console.log(bn.id);
  return result;
})
})
function playgame(personpla , computerplay){

  if(personpla === computerplay){
    p.innerHTML = ` its a Tie!!!`
    main.appendChild(p);
  }
  else if(personpla === 'rock' && computerplay === 'scissor' || 
  personpla === 'scissor' && computerplay === 'paper'||
  personpla === 'paper' && computerplay === 'rock'){
    p.innerHTML = `you win and computer loss!!! `
    main.appendChild(p);
    humscore++
  
  }
  else{
    p.innerHTML = `computer win and you loss!!! `
    main.appendChild(p);
    compscore = compscore+1;
  }
  f.innerHTML = `Computer score is ${compscore} and Human score is ${humscore}`
    main.appendChild(f);
}
