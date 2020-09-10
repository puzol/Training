const logoAndTitle = document.getElementById("logoAndTitle");
const logo = document.getElementById("logo");
const heroTitle = document.getElementById("heroTitle");
const navList = document.getElementById("navList");
const hamburger = document.getElementById("hamburger");
const hamburgerLine1 = document.getElementById("hamburgerLine1");
const hamburgerLine2 = document.getElementById("hamburgerLine2");
const hamburgerLine3 = document.getElementById("hamburgerLine3");
const navId = document.getElementById("navId");
let counter = 1;

// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });


const moveInLeft =(id)=>{
    id.style.left="50%";
}

const moveInRigth=(id)=>{
    id.style.marginRight="0";
}

const appear=(id1,id2)=>{
    id1.style.opacity="1";
    id2.style.opacity="1";
}

const brdrAndBck =(id)=>{
    id.style.background = "rgba(0,0,0,0.5)";
    id.style.border = "1px solid #C7AE58";
}

const respMenuOpen =()=>{
    navId.style.display="flex";
    navList.classList.remove("nav-list");
    navList.style.opacity="0"
    setTimeout(function(){
        navId.style.background="#C7AE58";
        navId.style.height="80vh";
        navList.classList.add("nav-list-resp");
    }, 300);
    setTimeout(function(){
        navList.style.opacity="1";
    },1000);
}

const respMenuClose =()=>{
    navList.style.opacity="0";
    setTimeout(function(){
        navId.style.height="0";
    }, 300);
    setTimeout(function(){
        navId.style.background="transparent";
        navList.classList.add("nav-list");
        navList.classList.remove("nav-list-resp");
        navId.style.display="none";
        navId.removeAttribute("style");
        navList.removeAttribute("style");
        navList.style.marginRight="0";
    },1000)
}

const hamburgerAnimation=()=>{

    if(counter == 1){
        hamburgerLine1.style.top="50%";
        hamburgerLine1.style.transform="translate(0, -50%) rotate(45deg)";
        hamburgerLine2.style.opacity="0";
        hamburgerLine3.style.top="50%";
        hamburgerLine3.style.transform="translate(0, -50%) rotate(-45deg)";
        respMenuOpen();
        counter = 2;
        console.log(counter);
    }else if(counter == 2){
        hamburgerLine1.style.top="16px";
        hamburgerLine1.style.transform="translate(0, 0) rotate(0)";
        hamburgerLine2.style.opacity="1";
        hamburgerLine3.style.top="40px";
        hamburgerLine3.style.transform="translate(0, 0) rotate(0)";
        respMenuClose();
        counter = 1;
        console.log(counter);
    }
}

window.onload = function(){
    setTimeout(function(){
        brdrAndBck(logoAndTitle)
    },800);
    setTimeout(function(){
        appear(logo, heroTitle)
    },1700);
    setTimeout(function(){
        moveInRigth(navList)
    },1700);
}

hamburger.onclick = function(){
    hamburgerAnimation();
}