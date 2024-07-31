
const nav_menu =document.querySelector('.nav-menu')
const overlay= document.querySelector('.overlay')
const menu=document.querySelector('.control');

overlay.addEventListener("click", hideMenu)
function hideMenu(){
  nav_menu.style.left= "-100%";
  overlay.style.display = 'none';
  menu.classList.remove('close-menu')
}
 menu.addEventListener('click', show)
 var a;
 function show(){
  if (a==1){
    menu.classList.add("close-menu");
    nav_menu.style.left= 0;
    overlay.style.display = 'block';
    return a=0;
  }else{
    menu.classList.remove('close-menu')
    nav_menu.style.left='-100%';
    overlay.style.display = 'none';
    return a=1;
  }
 }  

 window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  if (window.scrollY > 80) { // Example scroll threshold
      header.classList.add('sticky');
  } else {
      header.classList.remove('sticky');
  }
});



window.addEventListener('scroll', reveal);
function reveal(){
  var reveals =document.querySelectorAll('.reveal');
  for(var i=0; i< reveals.length; i++){
    var windowheight=window.innerHeight;
    var revealtop =reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;
    if(revealtop < windowheight -revealpoint){
       reveals[i].classList.add('active');

    }else{
      reveals[i].classList.remove('active');
    }
  }
}

// function() {
//   this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition()
// }


let valueDisplays = document.querySelectorAll('.data-one');
let interval = 9000;

// console.log(valueDisplays)
valueDisplays.forEach(valueDisplay =>{
  let startValue = 0;
  let endValue =parseInt(valueDisplay.getAttribute("data-val"))
  // console.log(endValue)
  let duration = Math.floor(interval /endValue);
  let counter = setInterval(function(){
    startValue +=1;
    valueDisplay.textContent = startValue;
    if(startValue == endValue){
      clearInterval(counter);
    }
  }, duration)

})

const date=document.querySelector('.date');
date.innerHTML= new Date().getFullYear();

// nav-dropdown

const bts= document.querySelector('.home');

  // btn.forEach(function(btns){
  //   btns.addEventListener('click', function(e){
  //     let prent = e.currentTarget.parentElement
  //    console.log(prent)
  //    if(prent.classList.contains("show-drop")){
  //        prent.classList.remove("show-drop")
  //    }else{
  //     prent.classList.add("show-drop")
  //    }
  //   })
  // })

//  const drop = document.querySelector('.drop-down')
//   bts.addEventListener('click',shoe)

//   function shoe(e){
//     console.log('hello people')
//     if(drop.classList.contains("show-drop")){
//              drop.classList.remove("show-drop")
//          }else{
//           drop.classList.add("show-drop")
//          }
// }
  
