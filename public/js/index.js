window.onload = function(){
    //vue渲染banner图片
    const banner_list = new Vue({
        el:"#banner",
        data:{
            pics_url:[
                    "./uploads/daisy/d1.jpg",
                    "./uploads/daisy/d2.jpg",
                    "./uploads/daisy/d3.jpg",
                    "./uploads/daisy/daisies.jpg",
                    "./uploads/ab_1.jpg",
                    "./uploads/bg1.webp",
                    "./uploads/bg2.webp",
                    "./uploads/bg3.webp",
                    "./uploads/bg4.webp",
                    "./uploads/bg5.jpg",
                    "./uploads/bg6.webp",
                    "./uploads/bg7.webp",
                    "./uploads/bg8.webp",
                    "./火影忍者/images/big_bj.jpg",
                ],
        },
        methods:{},
    });


    //自适应设置banner-box的宽度--------------------------------------------------------
    function setBannerBoxWidth(){
        let html_fontsize = document.documentElement.clientWidth / 15;
        let  banner_box = document.querySelector(".banner-box");
        let li_width = banner_box.querySelector("li").clientWidth;
        let width_sum = banner_box.querySelectorAll("li").length * li_width;
        banner_box.style.width = (width_sum / html_fontsize)+ 1 + "rem";
    }
   setBannerBoxWidth();
   //监听窗口宽度的变化
   window.addEventListener("resize",setBannerBoxWidth);
    //-----------------------------------------------------------------------------------------------
   
   
    //banner区域轮播图
   function AutoBanner(){
        const banner_box = document.querySelector(".banner-box");
        const b_b_li = banner_box.querySelectorAll("li");
        const all_li_width = b_b_li[0].clientWidth * (b_b_li.length-1);
    


/*---------------------------------------------------------------------------------------------------------------- */
        //封装移动                                                                                                //
        let AutoShow = null;
        function move_pics(){                                                                                      //
            if(parseInt(banner_box.style.left) !=  -all_li_width){                                                 //
                banner_box.style.left = parseInt(banner_box.style.left) - b_b_li[0].clientWidth + "px";            //
            }else{                                                                                                 //
                                                                                                                   //
                banner_box.style.left = 0 + "px";                                                                  //
            }                                                                                                      //
        }                                                                                                          //
        //调用                                                                                                     //
        AutoShow = setInterval(move_pics,3000)                                                                //
/*---------------------------------------------------------------------------------------------------------------*/


        //两个按钮调用
        const a_p = document.querySelector(".a_p");
        const a_n = document.querySelector(".a_n");
        
        a_n.onclick = function(){
            clearInterval(AutoShow);
            if(parseInt(banner_box.style.left) !=  -all_li_width){
                banner_box.style.left = parseInt(banner_box.style.left) - b_b_li[0].clientWidth + "px";
            }else{
                banner_box.style.left = 0 + "px";
            }
            AutoShow = setInterval(move_pics,3000)
        }
        a_p.onclick = function(){
            clearInterval(AutoShow);
            if(parseInt(banner_box.style.left) !=  0){
                banner_box.style.left = parseInt(banner_box.style.left) + b_b_li[0].clientWidth + "px";
            }else{
                banner_box.style.left = -all_li_width + "px";
            }
            AutoShow = setInterval(move_pics,3000)
        }
    }
    AutoBanner();


        //背景改变的控件
        //vue 生成内容
        const pics_box = new Vue({
            el:"#control_box",
            data:{
                pics_url:[
                    "./uploads/daisy/d1.jpg",
                    "./uploads/daisy/d2.jpg",
                    "./uploads/daisy/d3.jpg",
                    "./uploads/daisy/daisies.jpg",
                    "./uploads/ab_1.jpg",
                    "./uploads/bg1.webp",
                    "./uploads/bg2.webp",
                    "./uploads/bg3.webp",
                    "./uploads/bg4.webp",
                    "./uploads/bg5.jpg",
                    "./uploads/bg6.webp",
                    "./uploads/bg7.webp",
                    "./uploads/bg8.webp",
                ],
            },
            methods:{

            }
        });
         //外部大盒子
         const control_box = document.querySelector(".control_box");
         //弹出按钮
         const hover_out = document.querySelector(".hover_out");
         hover_out.onclick = function(){
            control_box.style.transform = "translateX(2%)";
            this.style.display = "none";
         }

         //关闭按钮
         const close_win = document.querySelector(".close_win");
         close_win.onclick = function(){
            control_box.style.transform = "translateX(-100%)";
            hover_out.style.display = "block"
         }

         //给所有img附加功能
         const all_img = document.querySelectorAll(".control_box_list li");
         const header_b = document.querySelector(".header-bg");
         all_img.forEach(function(e,i){
            e.onclick = function(){
                const img_url = e.querySelector("img").getAttribute("src");
                console.log(img_url);
                header_b.style.backgroundImage = `url(${img_url})`;
                header_b.style.backgroundRepeat = "no-repeat";
                header_b.style.backgroundSize = "cover";
                header_b.style.backgroundPosition = "30%";
            }
         });


        //section区域的图片加载
        const content_box = new Vue({
            el:"#content_box",
            data:{
                pics_url:[
                    "./uploads/daisy/d1.jpg",
                    "./uploads/daisy/d2.jpg",
                    "./uploads/daisy/d3.jpg",
                    "./uploads/daisy/daisies.jpg",
                    "./uploads/ab_1.jpg",
                    "./uploads/bg1.webp",
                    "./uploads/bg2.webp",
                    "./uploads/bg3.webp",
                    "./uploads/bg4.webp",
                    "./uploads/bg5.jpg",
                    "./uploads/bg6.webp",
                    "./uploads/bg7.webp",
                    "./uploads/bg8.webp",
                ],
            },
            methods:{},
        });



        // 点击头像进入到登陆页面
        const logoin = document.querySelector(".logoin");
        logoin.addEventListener('click',function(){
            location.href = "./houtai/logoin.html";
        })
    }
