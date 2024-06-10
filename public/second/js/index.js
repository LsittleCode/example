        //video
        const video  = document.querySelector(".video_box").querySelector("video");
        
        //判断视频播放状态
       let isPlay = false;
        
        // 渲染视频列表
        const video_list = new Vue({
            el:".video_list",
            data:{
                video_src:[{
                    src:'../video/syc.mp4',img:'../video/syc.jpg',song_name:'沈艺诚串烧'
                },{
                    src:'../video/qifengle.mp4',img:'../video/qf.jpg',song_name:'起风了'
                },{
                    src:'../video/mwhm.mp4',img:'../video/mwhm.jpg',song_name:'末闻花名'
                },{
                    src:'../video/zlxk.mp4',img:'../video/zlxk.jpg',song_name:'坠落星空'
                },{
                    src:'../video/qmd.mp4',img:'../video/qmd.jpg',song_name:'凄美地'
                },{
                    src:'../video/sxj.mp4',img:'../video/sxj.jpg',song_name:'水星记'
                }]
            },
            methods:{
                play_video:function(e){
                  const address = e.target.parentNode.querySelector('img');
                  video.poster = address.src;
                  video.src = address.getAttribute('link');
                  document.querySelector(".button").classList.remove('play_stop');
                  isPlay = false;
                }
            }
        });




       //监听进度
       let jindu = document.querySelector("#jindu");
       //jindutiao
       let current_time = document.querySelector(".current_time");
    
       function listen_time_fun(){
        if(video.currentTime == video.duration){
            bt.classList.remove("play_stop");
            isPlay = false;
            jindu.style.width = 0 + "%";
        }
        jindu.style.width = (video.currentTime.toFixed(2) / video.duration).toFixed(2) * 100   + "%";
        current_time.innerHTML = `${parseInt(video.currentTime)}s\t/\t${parseInt(video.duration)}s`;
       }

        //时钟初始化
        let listen_time = null;
        //按钮
        const bt = document.querySelector(".button");
        bt.onclick = function(){
            listen_time = null;
            if( !isPlay ){
                video.play();
                isPlay = true;
                listen_time = setInterval(listen_time_fun,300)
            }else{
                video.pause();
                isPlay = false;
                clearInterval(listen_time);
            }
            this.classList.toggle("play_stop")
        } 
