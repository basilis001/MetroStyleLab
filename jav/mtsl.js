/* variabelen */

var nav = document.querySelector("nav");
var sticky = header.offsetTop;

// functies
function swipey() {
  if (window.pageYOffset > sticky) {
    header.style.display = "sticky";;
  } else {
    header.classList.remove("sticky");
  }
}

// Eventslisteners
window.addEventListener('scroll', fadey);
window.addEventListener('scroll', swipey);

if (window.pageYOffset > sticky) {

    //giftes verdwijnen
    header.style.display = "sticky";
    counter.style.display = ("none");
    bitchSaidWhat.style.display = "none"



var start = document.querySelector("#intro");





function SugarMood (){
  console.log("are we ready");
  GiftScore = GiftScore+1;
  GiftscoreCijfer.textContent=GiftScore;

  if (OveralScore==6) {
      console.log("Loss");
   Tekstoe.textContent = "Come here, baby. I'm all yours..";
  }
 else if(OveralScore=0){
      Tekstoe.textContent = "You're a real loser, honey. I'm out!";
      Sugarbby.src = ("images/output/winner.png");
  }
};







// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}}

