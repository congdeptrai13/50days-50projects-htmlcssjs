const nav = document.querySelector("#nav");
const icon = document.querySelector(".icon");

icon.addEventListener("click",function(){
    nav.classList.toggle("active");
})