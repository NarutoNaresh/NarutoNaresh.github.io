// Custum made mouse pointer
function cont_disp(){
  document.querySelector('.procont-1').style.visibility="visible"
}

let curmov=document.querySelector('.cursor')
window.addEventListener('click',()=>{
  curmov.classList.add('cur_clk')

  setTimeout(()=>{
      curmov.classList.remove('cur_clk')
  },500)
})    
window.addEventListener('mousemove',(e)=>{
  curmov.style.top=e.pageY-10+"px";
  curmov.style.left=e.pageX-10+"px";
})


//Type writing effect in title
const texts=['Naresh','Coder','Naruto','NRG'];
let count=0;
let index=0;
let currentText="";
let letter="";
(function type(){
  if (count===texts.length){
      count=0;
  }
currentText=texts[count];
letter=currentText.slice(0,++index);
document.querySelector(".typing").textContent="I'm "+letter;
if (letter.length===currentText.length){
  count++;
  index=0;
}
setTimeout(type,350);
})();