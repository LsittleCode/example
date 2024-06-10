const hidde_w = document.querySelector(".hidde-w");
const section_header_xs = document.querySelector("#section_header_xs");


const mroe = document.querySelector(".more");
mroe.addEventListener("click",function(){
    section_header_xs.style.left = '50%';
})


hidde_w.addEventListener('click',function(){
    section_header_xs.style.left = '-50%';
}) 


