(function(win,doc){
    let docE = document.documentElement;
    //set html   /15
    function setHtmlRem(){
        let doceW = docE.clientWidth / 15;
        if(docE){
            docE.style.fontSize = doceW + "px";
        }else{
            window.addEventListener("DOMContentLoaded",setHtmlRem);
        }
    }
    setHtmlRem()

    //set body-fontsize
    function setBodysize(){
        let dpr = window.devicePixelRatio || 1;
        if(document.body){
           document.documentElement.style.fontSize = 14 * dpr + "px";
        }else{
            window.addEventListener("DOMContentLoaded",setBodysize);
        }
        
    }
    setBodysize()

    window.addEventListener("resize",setHtmlRem);
    window.addEventListener("pageshow",function(e){
        if(e.isTrusted){
            setBodysize();
            setHtmlRem();
        }
    })





   function changeIcon(){
        const icon = document.querySelector(".icon-taiyang");
        if(icon){
            let isD = "icon-taiyang";
            icon.onclick = function(){
                if(isD == "icon-taiyang"){
                    this.classList.replace(isD,"icon-yueliang");
                    isD = "icon-yueliang";
                }else{
                    this.classList.replace("icon-yueliang","icon-taiyang");
                    isD = "icon-taiyang";
                }
            }
        }else{
            window.addEventListener("DOMContentLoaded",changBodyCOlor)
        }
    }
   changeIcon();


    //随机文案
    const header_bg_title = doc.querySelector(".header-bg .title");
    const title_arrys = [
        "烟火起 照人间 举杯敬此年",
        "谢谢你 在这世界的角落 发现了我",
        "风月都好看，人间也浪漫",
        "星星温柔泛滥，人间始终至善。",
        "遇事不决，可问春风，春风不语，即随本心。",
        "听山河把春风酿成千言万语，吹过旧人故里。"
    ];
    let x = Math.ceil(Math.random() * title_arrys.length-1);
    header_bg_title.innerHTML = title_arrys[x];
}(window,document))