
const info_src = 'https://api.vvhan.com/api/visitor.info';
// 信息接口
const muban_info = document.querySelector(".info");
const xhp = new XMLHttpRequest();
xhp.open('get',info_src);
xhp.onreadystatechange = function(){
    if(xhp.readyState == 4 && xhp.status == 200){
        const info = JSON.parse(xhp.responseText);
        const {ip,location:loc,fl,high,low,tip,tq} = info;
        muban_info.innerHTML = `
        <span>IP:${ip}</span>
        <span>地址：${loc}</span>
        <span>风力：${fl}</span>
        <span>最高气温：${high}</span>
        <span>最低气温：${low}</span>
        <span>tip：${tip}</span>
        <span>天气：${tq}</span>
        `;
    }
   
}
xhp.send();


// 外部播放器
const music_address2 = document.querySelector('.music_address2');


// 音乐
// 音乐盒子背景图片
// 获取盒子
const music_list = document.querySelector(".music_list");
// let music_src = 'https://autumnfish.cn/search?keywords=';
// 搜索  事件委托
const search_box = document.querySelector('.search_box');
search_box.addEventListener('click',function(e){
    const value = search_box.querySelector("#value").value;
    if (e.target.tagName == 'BUTTON') {
        if(value.trim() != ''){
            const musics = new XMLHttpRequest();
            let music_src = `https://autumnfish.cn/search?keywords=${value}`;
            xhp.open('get',music_src);
            xhp.onreadystatechange = function(){
                if(xhp.readyState == 4 && xhp.status == 200){
                    const res = JSON.parse(xhp.responseText);
                    const {code,result:{songs}} = res;
                    let lis = '';
                    songs.forEach(item => {
                        lis += `
                        <li class="m_box">
                            <a href="javascript:;" comment-id="${item.id}"  song-id="${item.id}" class="song_bt" herf="javascript">
                                <img src="./images/bj.jpg" alt="">
                                <h2>歌名:${item.album.name}</h2>
                                <h3>演唱:${item.artists[0].name}</h3>
                            </a>
                         </li>
                        `;
                    });
                    console.log(music_list.innerHTML);
                    music_list.innerHTML = lis;
                }
            }
            xhp.send();
        }else{
            alert("请输入关键字")
        }
    }
})




// 获取窗口
const player = document.querySelector(".player");
// audio
const music_address = document.querySelector(".music_address");
// 播放音乐


// 获取评论的id
let comment_id;
// 获取A标签song-id
let m_id;

let song_src = 'https://autumnfish.cn/song/url?id=';
music_list.addEventListener('click',function(e){
    player.style.display = 'block';
    m_id = e.target.parentNode.getAttribute("song-id");
    comment_id =  e.target.parentNode.getAttribute("comment-id");
    const req = new XMLHttpRequest();
    req.open('get',song_src + m_id);
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            const reqJson = JSON.parse(req.responseText)
            const{data:[{url}]} = reqJson;
            music_address.src = url;
            music_address2.src = url;
            music_address2.pause();
        }
    }
    req.send();    
})



// 获取歌名标签和图片
const song_name = document.querySelector('.song_name');
const pic_img = document.querySelector(".pic_box").children[0];
const actor_name = document.querySelector('.actor_name');
// 获取歌曲信息
let info_mu = 'https://autumnfish.cn/song/detail?ids=';
music_address.addEventListener('play',function(){
    actor_name.innerHTML = '';
    const m_info = new XMLHttpRequest();
    m_info.open("get",info_mu + m_id);
    m_info.onreadystatechange = function(){
        if(m_info.readyState == 4 & m_info.status == 200){
            const resbody = JSON.parse( m_info.responseText);
            const {songs:[{al:{picUrl,name:s_name},ar:[{name:ac_name1}]}]} = resbody;
            song_name.innerHTML = `歌名：${s_name}`;
            actor_name.innerHTML = `演唱：${ac_name1}`;
            pic_img.src = picUrl;
            pic_img.parentElement.style.animationPlayState = "running";
        }
    }
    m_info.send();
})



// 获取HOT COmment
const comment = document.querySelector(".comment_box");
let comment_str = '';
// 评论盒子
const comment_box = document.querySelector(".comment_box");
// 监听audio的状态
music_address.addEventListener('play',function(){
    comment_str = '';
    const req = new XMLHttpRequest();
    req.open('get',`https://autumnfish.cn/comment/music?id=${comment_id}&limit=1`);
    req.onreadystatechange = function(){
        if(req.readyState == 4 & req.status == 200){
            const res = JSON.parse(req.responseText);
            const {hotComments}= res;
            hotComments.forEach((item)=>{
                comment_str += `
                    <li>
                         <i class="uLogo"><img src="${item.user.avatarUrl}" alt=""></i>
                         <p class="box">
                             <span class="uname">${item.user.nickname}</span>
                             <span class="ucomment">${item.content}</span>
                             <span class="timeStr">${item.timeStr}</span>
                        </p>
                    </li>
                `;
            });
           
            // 将遍历好的组件插入到盒子里
            comment_box.innerHTML = comment_str;
        }
    }
    req.send();
})










// 默认歌曲
let src_m;
let c_t;
const default_song = new Vue({
    el:'.music_list',
    data:{
        default_src:[
            {s_src:'./song/把回忆拼装好给你.mp3',p_src:'./song/把回忆拼装好给你.jpg',s_name:'把回忆拼装好给你',a_name:'芬芬&Zyboy忠宇'},
            {s_src:'./song/末闻花名.mp3',p_src:'./song/末闻花名.jpg',s_name:'末闻花名',a_name:'周深'},
            {s_src:'./song/狂恋你.mp3',p_src:'./song/狂恋你.png',s_name:'狂恋你',a_name:'沈以诚'},
            {s_src:'./song/失眠飞行.mp3',p_src:'./song/失眠飞行.png',s_name:'失眠飞行',a_name:'沈以诚'},
            {s_src:'./song/告白.mp3',p_src:'./song/告白.jpg',s_name:'告白',a_name:'沈以诚'},
            {s_src:'./song/处处吻.mp3',p_src:'./song/处处吻.png',s_name:'处处吻',a_name:'徐书远'},
            {s_src:'./song/忽然之间.mp3',p_src:'./song/忽然之间.png',s_name:'忽然之间',a_name:'阿虾'},
            {s_src:'./song/雨.mp3',p_src:'./song/雨.jpg',s_name:'雨',a_name:'杜宣大'},
            {s_src:'./song/盛夏的果实.mp3',p_src:'./song/盛夏的果实.jpg',s_name:'盛夏的果实',a_name:'阿虾'},
        ],
        
    },
    methods:{
        logTarget:function(e){
            music_address2.src = "";
            player.style.display = 'block';
            pic_img.src =  e.target.parentElement.querySelector('img').src;
            music_address.src = e.target.parentElement.lastElementChild.getAttribute('src');
            pic_img.parentElement.style.animationPlayState = "running";
            const sn =  e.target.parentElement.querySelector('h2').innerText;
            const an = e.target.parentElement.querySelector('h3').innerText;
            song_name.innerText =  sn + '\n' + '\n' + an;
            src_m =  e.target.parentElement.lastElementChild.getAttribute('src');
        }
    }
});




// 关闭窗口 并且转换播放器
// 
const close_win = document.querySelector(".close_win");
close_win.addEventListener("click",function(){
    player.style.display = "none";
    music_address.pause();
    music_address2.src = src_m;//2
    music_address2.currentTime = music_address.currentTime;
    music_address2.play();
    console.log(1);
})
