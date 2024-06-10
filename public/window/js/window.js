const project = document.querySelector('.project');
const project_img = document.querySelector('.project li img');
const project_title = document.querySelector('.project li .title');
const iframe = document.querySelector('iframe');
const iframe_title = document.querySelector('.iframe .title');
const chuangkou = document.querySelector('.iframe');
// 获取所有app
const appList = document.querySelectorAll('.desk ul li');
appList.forEach((i)=>{
    i.addEventListener('click',()=>{
        project.style.display = 'block';
        project_img.src = i.querySelector('img').src;
        iframe_title.innerHTML = i.querySelector("span").innerHTML;
        project_title.innerHTML = i.querySelector('span').innerText;
        chuangkou.style.display = 'block';
        iframe.src = i.querySelector('ifrSrc').innerHTML;
    });
});