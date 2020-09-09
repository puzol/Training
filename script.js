const logoAndTitle = document.getElementById("logoAndTitle");

const moveIn =()=>{
    logoAndTitle.style.left="50%";
    logoAndTitle.style.background = "rgba(0,0,0,0.3)";
    logoAndTitle.style.border = "1px solid #C7AE58";
}

window.onload = function(){
    setTimeout(function(){
        moveIn()
    },1000)
}