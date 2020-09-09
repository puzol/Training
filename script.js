const logoAndTitle = document.getElementById("logoAndTitle");
const logo = document.getElementById("logo");
const heroTitle = document.getElementById("heroTitle");


const moveIn =(id)=>{
    id.style.left="50%";
}

const appear=(id1,id2)=>{
    id1.style.opacity="1";
    id2.style.opacity="1";
}

const brdrAndBck =(id)=>{
    id.style.background = "rgba(0,0,0,0.3)";
    id.style.border = "1px solid #C7AE58";
}

window.onload = function(){
    setTimeout(function(){
        brdrAndBck(logoAndTitle)
    },800);
    setTimeout(function(){
        appear(logo, heroTitle)
    },1700);
}