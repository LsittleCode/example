window.addEventListener("DOMContentLoaded",function(){

    // 显示当前时间
    const timer = this.document.querySelector(".timer");
    function showTime(){
        const time = new Date();
        timer.innerHTML = `
        <span>${time.getFullYear()}年</span>
        <span>${(time.getMonth()+1) < 10 ? '0' + (time.getMonth()+1) : (time.getMonth()+1)}月</span>
        <span>${(time.getDay()) < 10 ? '0' + time.getDay(): time.getDay()}日</span>
        <span>${(time.getHours()) < 10 ? '0' + time.getHours() : time.getHours()}时</span>
        <span>${(time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes())}分</span>
        <span>${(time.getSeconds()) < 10 ? '0' + time.getSeconds() : time.getSeconds()}秒</span>
        `;
    }
    setInterval(showTime,1000)



    // 距离今年结束模块
    const end_time = document.querySelector('.end_time');
    // 获取time标签
    const p_timer = end_time.querySelector("p");
    function endTimer(){
        const nowTimer = new Date().getTime();
        const etime =  Date.parse(new Date("2024/1/1 00:00:00")) - nowTimer;

        let t = parseInt(etime / 1000 / 60 / 60 / 24);
        let s = parseInt(etime / 1000 / 60 / 60 % 24);
        let f = parseInt(etime / 1000 / 60 % 60);
        let sec = parseInt(etime / 1000  % 60);
        p_timer.innerHTML =  `
            <span>${t < 10 ? '0' + t: t}天</span>
            <span>${s < 10 ? '0' + s: s}时</span>
            <span>${f < 10 ? '0' + f: f}分</span>
            <span>${sec < 10 ? '0' + sec: sec}秒</span>
        `;
    }
    setInterval(endTimer,1000);
})