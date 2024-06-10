// 页面加载三秒之后关闭window-load
const window_load = document.querySelector(".window-load");
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        window_load.style.opacity = 0;
        window_load.style.display = 'none';
    },3000)
});





// bottom-time
const time = document.querySelector(".time");
function show_time(){
    time.innerHTML = new Date().toLocaleString();
}
setInterval(show_time,1000);


// 鼠标右击事件
const change_bg = document.querySelector(".change_bg");
//为 change_bg渲染图片
const pics = change_bg.querySelector(".pics");
function xuanran(){
    const imgs = [
        "./window/bg/bg0.jpg",
        "./window/bg/bg1.webp",
        "./window/bg/bg2.webp",
        "./window/bg/bg3.webp",
        "./window/bg/bg4.webp",
        "./window/bg/bg5.jpg",
        "./window/bg/bg6.webp",
        "./window/bg/bg7.webp",
        "./window/bg/bg8.webp",
        "./window/bg/d1.jpg",
        "./window/bg/d2.jpg",
        "./window/bg/d3.jpg",
        "./liuyan/uploads/xk.gif",
        "./火影忍者/images/big_bj.jpg",

    ];
    let box = "";
    imgs.forEach((e)=>{
        box += `
        <li><a><img src="${e}" alt=""></a></li>
        `;
    });
    pics.innerHTML = box;
}
xuanran();
// pics图片悬浮事件
const show_pic = document.querySelector(".show_pic");
const mouse_over_pics = pics.querySelectorAll('li img');
mouse_over_pics.forEach((e)=>{
    e.addEventListener('mouseover',(t)=>{
        show_pic.style.display = 'block';
        show_pic.style.backgroundImage = `url(${t.target.src})`;
    });
});
show_pic.addEventListener('mouseleave',()=>{
    show_pic.style.display = 'none';
    show_pic.style.backgroundImage = ``;
});
show_pic.addEventListener('click',function(){
    container.style.backgroundImage = show_pic.style.backgroundImage;
})


const container = document.querySelector(".container");
container.addEventListener('mouseup',function(e){
    e.preventDefault();
    if(e.button == 2 && e.target.tagName == "DIV"){
        change_bg.style.display= 'block';
        change_bg.style.left = e.clientX + 'px';
        change_bg.style.top = e.clientY + 'px';
    }
    if(e.target.tagName != 'IMG' && e.button == 0 || e.button == 1){
        change_bg.style.display= 'none';
    }
});




const iframes = document.querySelector('.iframe');
// iframe窗口事件
const close = document.querySelector(".close");
const big_change = document.querySelector(".big");
const small_change = document.querySelector(".small");
const restart = document.querySelector(".restart");
close.addEventListener('click',()=>{
    iframes.style.display = 'none';
    document.querySelector('.project').style.display='none';
    iframes.querySelector('iframe').src = '';
});
big_change.addEventListener('click',()=>{
    iframes.style.width = '100%';
    iframes.style.height = '100%';
});
small_change.addEventListener('click',()=>{
    iframes.style.width = '1200px';
    iframes.style.height = '90%';
});
restart.addEventListener('click',()=>{
    iframes.querySelector('iframe').src = iframes.querySelector('iframe').src;
})