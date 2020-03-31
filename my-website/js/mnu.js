//  hamburgur menu rotation
b= document.querySelector(".cont")
c= document.querySelector("#m")
b.addEventListener("mouseover",()=>{
    document.querySelector(".cont").style.transform="rotate(180deg)"

})
b.addEventListener("mouseout",()=>{
    document.querySelector(".cont").style.transform="rotate(0deg)"

})

// Side bar open action
function menuopen(){
    document.querySelector(".sb").style.width="17%";
    document.querySelector(".sb").style.overflow="hidden";
    //overflow-x: hidden;
    // document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".main").style.marginLeft = "15%";
}

//Side bar close action
function menuclose(){
    // document.querySelector(".menu").style.visibility="visible";
      document.querySelector(".sb").style.width="0px";
      document.querySelector(".sb").style.overflow="hidden";
      // document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".main").style.marginLeft = "0px";

}
  
// hamburgur menu inside animation
var i =0
function mnopn(){
  if(i==0){
      document.querySelector(".m2").style.transform = "rotate(45deg)"
      document.querySelector(".m4").style.transform = "rotate(-45deg)"
      document.querySelector(".m1").style.visibility = "hidden"
      document.querySelector(".m3").style.visibility = "hidden"
      // c.classList.toggle(mnclose())
      menuopen()
      
      i += 1
  } else {
      document.querySelector(".m2").style.transform = "rotate(0deg)"
      document.querySelector(".m4").style.transform = "rotate(0deg)"
      document.querySelector(".m1").style.visibility = "visible"
      document.querySelector(".m3").style.visibility = "visible"
      menuclose()
      i -= 1
  }
}
