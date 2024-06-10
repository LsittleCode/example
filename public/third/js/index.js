addEventListener("DOMContentLoaded",function(){
// 展示该照片
// 遮罩层
const layer = document.querySelector(".layer");
 // 事件委托给A标签
 const ul_pics = document.querySelector(".ul_pics");
 ul_pics.addEventListener('click',function(e){
    if(e.target.tagName == "A"){
         const url = e.target.previousElementSibling.src;
         layer.style.display = 'block';
         layer.style.background = `url(${url})no-repeat center / 100% 100%`;
         document.addEventListener('dblclick',function(){
                 layer.style.display = 'none';
         })
    }
 })
 
})




const app = new Vue({
    el:'#container-box',
    data:{
        pics_url:[
            "../uploads/daisy/d1.jpg",
            "../uploads/daisy/d2.jpg",
            "../uploads/daisy/d3.jpg",
            "../uploads/daisy/daisies.jpg",
            "../uploads/ab_1.jpg",
            "../uploads/bg1.webp",
            "../uploads/bg2.webp",
            "../uploads/bg3.webp",
            "../uploads/bg4.webp",
            "../uploads/bg5.jpg",
            "../uploads/bg6.webp",
            "../uploads/bg7.webp",
            "../uploads/bg8.webp",
        ],
    },
    methods:{
        
    }
})